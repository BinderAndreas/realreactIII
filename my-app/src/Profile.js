import React,{useState} from 'react'

function Profile({image,quote,changeTitle,title}) {

    const [myTitle,setMyTitle]=useState(title)

    const changeMyTitle=()=>{
        setMyTitle('new Title')
    }

  return (
    <div className="profile-container">
        <h1></h1>
        <img src={image} alt="profile"/>
        <p>{quote}</p>
        <button onClick={changeTitle}>Change Parent's title</button>
        <button onClick={changeMyTitle}>Change own title</button>
    </div>
  )
}

export default Profile