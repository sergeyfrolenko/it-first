import React from 'react'
import * as axios from 'axios'

import s from './Users.module.css'
import userAva from '../../assets/images/userAva.png';

class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=3&page=${this.props.currentPage}`)
      .then((res) => {
        this.props.setUsers(res.data.items)
      })
  }

  handlerPagination(event) {
    this.props.setCurrentPage(event.target.value)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=3&page=${event.target.value}`)
      .then((res) => {
        this.props.setUsers(res.data.items)
      })
  }
  async handlerPaginationArrow(event) {
    await this.props.handlerPaginationArrow(event.target.value)
    await axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=3&page=${this.props.currentPage}`)
      .then((res) => {
        this.props.setUsers(res.data.items)
      })
  }
  getPagination() {
    let result = []
    result.push(
      <li key="lt"><button onClick={this.handlerPaginationArrow.bind(this)} value="lt">&lt;</button></li>
    )
    for (let i = 1; i <= 3; i++) {
      result.push(
        <li key={i}>
          <button
            onClick={this.handlerPagination.bind(this)}
            className={i === this.props.currentPage ? s.current : ""}
            value={i}
          >
            {i}
          </button>
        </li>
      )
    }
    result.push(
      <li key="gt"><button onClick={this.handlerPaginationArrow.bind(this)} value="gt">&gt;</button></li>
    )
    return (
      result
    )
  }

  getUsers = () => {
    return (
      this.props.users.map((el) => {
        return (
          <li key={el.id} className={s.listItem}>
            <div className={s.wrapper}>
              <div className="leftSection">
                <div className={s.ava}>
                  <img
                    src={el.photos.small === null ? userAva : el.photos.small} alt="avatar"
                  />
                </div>
                <div className="btnFollow">
                  <button onClick={() => { this.props.changeFollow(el.id) }}>
                    {el.followed ? 'Unfollow' : 'Follow'}
                  </button>
                </div>
              </div>

              <div className="centerSection">
                <h3>{el.name}</h3>
                <p>{el.status}</p>
              </div>

              <div className="rightSection">
                {/* <ul>
                  <li>{el.location.city}</li>
                  <li>{el.location.country}</li>
                </ul> */}
              </div>
            </div>
          </li>
        )
      })
    )
  }
  render() {
    return (
      <div className={s.users}>
        <h1>Users</h1>
        <ul className={`${s.pagination} ${s.current}`}>
          {this.getPagination()}
        </ul>
        <ul>
          {this.getUsers()}
        </ul>
      </div>
    )
  }
}

export default Users;