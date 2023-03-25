import React from 'react';
import "../Styles/ChatBox.css";
import { Avatar } from '@mui/material';
import { ImCross } from "react-icons/im";
import { GoPrimitiveDot } from "react-icons/go";
import { BsChatLeft } from "react-icons/bs";
import { IoIosArrowDropright, IoIosArrowUp , IoIosArrowForward} from "react-icons/io";
function ChatBox(props) {
  return (
   <>
    <div className='chatBoxDiv'>
         { (!props.clickChatbox) ? ( 
           <div id='chatBtn'  onClick={props.handleChatBoxClick}>
           <BsChatLeft className='iconChats'/>
           <h3>Chats</h3>
           <IoIosArrowUp className='iconChats' id='uperArraows'/>
         </div>
         ) : (
          <>
           <div id='chatBtnOn'  onClick={props.handleChatBoxClick}>
           <BsChatLeft className='iconChats'/>
           <h3>Chats</h3>
           <IoIosArrowUp className='iconChats' id='uperArraows'/>
         </div>
         <div className='chatList'>
          {
            props.userListData.map((usr)=>{
              return (
                <>
                  <div id={usr.id} key={usr.id} className='usr'  onClick={()=> props.handleClickChats(usr)} >
                  <Avatar alt={usr.name} src={usr.profilepicture} />
                  <h3>{usr.name}</h3>  
                  <GoPrimitiveDot id='dotInChatBox' />
                  </div>
                </>
              )
            })
          }
         </div>
         <div>
        
         </div>
          </>
         ) }
              
        </div>
        <div className='chatsFullDiv'>
        <div id='chatBtnChats'>
           <Avatar alt={props.currentChatUser.name} src={props.currentChatUser.profilepic} />
           <h3>{props.currentChatUser.name}</h3>  
           <IoIosArrowUp className='iconChats' id='uperArraowsSeond' onClick={props.handleChatBoxClick}/>
           <ImCross onClick={props.handleCrossChatBox} />
         </div>
         <div className='chatsBoxs'>
            <div className='leftChat'>
              Hello... welcome to Chat Box
            </div>
            <div className='rightChat'>
              Hiii..
            </div>
            <div className='leftChat'>
              How are you..
            </div>
            <div className='rightChat'>
              Fine..
            </div>
         </div>
         <div className="inputChat">
          <input type={"text"}  />
          <IoIosArrowForward  id='submitArrow'/>
         </div>
         </div>
   </>
  )
}

export default ChatBox