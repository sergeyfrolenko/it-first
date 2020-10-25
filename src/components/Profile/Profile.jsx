import React from 'react';

import profile from './Profile.module.css';

import Posts from './../Posts/Posts'

const Profile = (props) => {

  return (
    <main className={profile.main}>
      <div>
        <img src="https://atlasprirodirossii.ru/wp-content/uploads/2019/10/zapovednik.jpg" alt="a" />
      </div>
      <div className={profile.user}>
        <div className={profile.user__photo}>
          <img src="https://i.ucrazy.ru/files/i/2011.11.10/1320907567_252839-alecto.jpg" alt="b" />
        </div>
        <div className={profile.user__desc}></div>
      </div>
      <Posts state={props.state} addPost={props.addPost} updateAddPostValue={props.updateAddPostValue} />
    </main>
  )
}

export default Profile;