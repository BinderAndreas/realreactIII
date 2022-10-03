import React, { useState } from 'react'

function Header() {

  const [username, setUsername]= useState('John Doe')
  const [imageUrl,setImageUrl]=useState('https://media.gq-magazine.co.uk/photos/6242e7bdb63bdfb22a904e73/3:4/w_810,h_1080,c_limit/290322_JohnCena_hp.jpg')

  const changeUser=()=>{
    setUsername('Jane Doe')
    setImageUrl('https://upload.wikimedia.org/wikipedia/commons/3/34/Brock_Lesnar_in_March_2015.jpg')
  }

  return (
    <div className="header-container">
      <div className="header-profile">
        <p>{username}</p>
        <img className="profile-img" src={imageUrl} alt="user"/>
      </div>
      <button onClick={changeUser}>Change User</button>
    </div>
    
  )
}

export default Header