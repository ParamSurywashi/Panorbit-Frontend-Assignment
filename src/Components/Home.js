import React, { useEffect, useState } from 'react'
import '../Styles/Home.css'
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
    const [userList, setUserList] = useState([]);

    function FetchUser(){
        return fetch("https://panorbit.in/api/users.json").then(res=>res.json())
        .then(data=>{
            setUserList(data.users);
        })
    }

    useEffect(()=>{
        FetchUser();
    })

  function handleClickCard(userData){
    navigate("/portfolio",{state : userData});
       
  }
 
  return (
    <div className='container'>
      
        <div className='cardUser'>
           <h1>Select an account</h1>
           <div>{
            userList.map((user)=>{
             return (
                 <div id={user.id} key={user.id} className='usr'  onClick={()=> handleClickCard(user)} >
                  <Avatar alt={user.name} src={user.profilepicture} />
                  <h3>{user.name}</h3>  
                  </div>
             )
            })
           }
           </div>
        </div>
    </div>
  )
}

export default Home