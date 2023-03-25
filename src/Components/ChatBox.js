import React, { useState } from 'react';
import "../Styles/ChatBox.css";
import { Avatar } from '@mui/material';
import { ImCross } from "react-icons/im";
import { GoPrimitiveDot } from "react-icons/go";
import { BsChatLeft } from "react-icons/bs";
import { IoIosArrowDropright, IoIosArrowUp , IoIosArrowForward} from "react-icons/io";
function ChatBox(props) {
  const [inputTxt, setInputTxt] = useState("");

  const addNewChat = ()=>{
    if(inputTxt !==""){
      const oldChat = document.getElementsByClassName("chatsBoxs")[0];
     const newDiv= document.createElement("div");
      newDiv.setAttribute("class","rightChat");
      newDiv.innerHTML= inputTxt;
      oldChat.append(newDiv);
      oldChat.scrollTop = oldChat.scrollHeight;

      if(inputTxt.startsWith("Hello")){
        setTimeout(()=>{
          const oldChat = document.getElementsByClassName("chatsBoxs")[0];
          const newDiv= document.createElement("div");
          newDiv.setAttribute("class","leftChat");
          newDiv.innerHTML= `Hiii How I can help you`;
          oldChat.append(newDiv);
          oldChat.scrollTop = oldChat.scrollHeight;
        },2500)
      }
      setInputTxt("");
      

    }
      
  }

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
          <input type={"text"} value={inputTxt} onChange={(e)=>setInputTxt(e.target.value)} />
          <IoIosArrowForward  id='submitArrow' onClick={addNewChat}/>
         </div>
         </div>
   </>
  )
}

export default ChatBox