import React, { useState } from 'react'
import { useLocation , useNavigate} from 'react-router-dom';
import "../Styles/Portfolio.css";
import { Avatar } from '@mui/material';
import GoogleMapReact from 'google-map-react';
import CommingSoon from './CommingSoon';
import { Link } from "react-router-dom";
import { IoIosArrowDropright, IoIosArrowUp } from "react-icons/io";
import { GoPrimitiveDot } from "react-icons/go";
import { BsChatLeft } from "react-icons/bs";
import TomtomMap from './TomtomMap';

function Portfolio() {
  const navigate = useNavigate();
    const location = useLocation();
    let from = location.state.userDetails;
    console.log(location.state.nextUserData)
    const nextUserData = location.state.nextUserData;
    const userListData = location.state.userList;

    const [profileData, setProfileData]=useState(from);
    const [checkCom, setCheckCom] = useState(false);
    const [clickChatbox, setClickChatbox] = useState(true);

    const defaultProps = {
      center: {
        lat: parseFloat(profileData.address.geo.lat),
        lng: parseFloat(profileData.address.geo.lng)
 
      },
      zoom: 14
    };
   
    const  handleClickdrawer = (data) =>{
      setCheckCom(false);
       setProfileData(from);
       document.getElementById("profile").style.display="block";
       document.getElementById("posts").style.display="none";
       document.getElementById("gallary").style.display="none";
       document.getElementById("todo").style.display="none";
   
      }
    const handleClickPost = (userData) =>{
       setCheckCom(true);
       document.getElementById("posts").style.display="block";
       document.getElementById("profile").style.display="none";
       document.getElementById("gallary").style.display="none";
       document.getElementById("todo").style.display="none";
    }
    const handleClickGallary= (userData) =>{
      setCheckCom(true);
      document.getElementById("gallary").style.display="block";
      document.getElementById("posts").style.display="none";
      document.getElementById("profile").style.display="none";
      document.getElementById("todo").style.display="none";
    }
    const handleClickTodo= (userData) =>{
      setCheckCom(true);
      document.getElementById("todo").style.display="block";
      document.getElementById("gallary").style.display="none";
      document.getElementById("posts").style.display="none";
      document.getElementById("profile").style.display="none";
  
    }

    function handleClickOnAvatar(userData){
          if(document.getElementById("popupPoster").style.display==="none"){
          document.getElementById("popupPoster").style.display="block";
         }else{
          document.getElementById("popupPoster").style.display="none";
         }
    }
    function handleClickCard(userData){
     
      const nextData = nextUserData.filter((usrList)=>{
        return usrList.id>userData.id;
      })
      navigate("/portfolio", {state : { userDetails :  userData, nextUserData : nextData}});
      setProfileData(userData);
      //navigate("/portfolio",{state : userData});
         
    }

    const handleChatBoxClick = () =>{
     if(clickChatbox){
      setClickChatbox(false);
     }else{
      setClickChatbox(true);
     }
     
    }

  return (
    <div className='portfolio'>
        <div className='drawer'>
            <div className='buttonsIcon'  onClick={handleClickdrawer}>Profile <span id="profile" className='iconArrow'><IoIosArrowDropright/></span></div>
            <div className='buttonsIcon'  onClick={handleClickPost} >Posts <span id="posts" className='iconArrow'><IoIosArrowDropright/></span></div>
            <div className='buttonsIcon' onClick={handleClickGallary} >Gallary <span id="gallary" className='iconArrow'><IoIosArrowDropright/></span></div>
            <div className='buttonsIcon'  onClick={handleClickTodo}>ToDO <span id="todo" className='iconArrow'><IoIosArrowDropright/></span></div>
        </div>
        <div id='mainDrawerRight'>
             <div className='profileHeader'>
                <h1>Profile</h1>
                <div className='profileAvatar'onClick={()=>handleClickOnAvatar(profileData)}>
                  <Avatar alt={profileData.name} src={profileData.profilepicture} />
                  <h2>{profileData.name}</h2>
                </div>
             </div>

             <div className='userFullDiv'>
             {(!checkCom) ? (
            <>
                <div className='companyBio'>
                <div className='userNameProfile'>
                <Avatar id='avatarBigPic' alt={profileData.name} src={profileData.profilepicture} />
                  <h2 id='textName'>{profileData.name}</h2>
                  <h2> <span className='textProfile'>Username : </span> {profileData.username} </h2>
                  <h2> <span className='textProfile'>Email Id : </span> {profileData.email} </h2>
                  <h2> <span className='textProfile'>Phone : </span> {profileData.phone} </h2>
                  <h2> <span className='textProfile'>Website : </span> {profileData.website} </h2>
                </div>
                <div className='userNameProfile'>
                <h2 id='textName'>Company</h2>
                  <h2> <span className='textProfile'>Name : </span> {profileData.company.name} </h2>
                  <h2> <span className='textProfile'>Catch Phrase : </span> {profileData.company.catchPhrase} </h2>
                  <h2> <span className='textProfile'>BS : </span> {profileData.company.bs} </h2>
                 </div>
             </div>
             <div className='addressBox'>
                 <h1 className='textProfile'>Address : </h1>
                 <h2> <span className='textProfile'>Street : </span> {profileData.address.street} </h2>
                  <h2> <span className='textProfile'>Suite : </span> {profileData.address.suite} </h2>
                  <h2> <span className='textProfile'>City : </span> {profileData.address.city} </h2>
                  <h2> <span className='textProfile'>Zip Code : </span> {profileData.address.zipcode} </h2>
            <div className='mapDivBox'>
            <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBEbh0EtbP3zNHieTX0SlD7MggBX-CnL70" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        
      >
      </GoogleMapReact>
                  {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14560.279778734082!2d75.07546517926681!3d24.169279650151147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3965d349e3c3e1c7%3A0x318b1c821662ce10!2z4KSs4KWL4KSw4KSW4KWH4KWc4KWALCDgpK7gpKfgpY3gpK8g4KSq4KWN4KSw4KSm4KWH4KS2IDQ1ODY2NA!5e0!3m2!1shi!2sin!4v1679681732777!5m2!1shi!2sin"
              width="520"
              height="390"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            /> */}
          
      <h3>Lat : {parseFloat(profileData.address.geo.lat)}  Lng : {parseFloat(profileData.address.geo.lng)} </h3>
           {/* <TomtomMap /> */}
            </div>
             </div>
             </>
              ) : (<CommingSoon />) }
             </div>
             
            
        </div>
        <div id='popupPoster'>
          <Avatar id='avatarPic' alt={profileData.name} src={profileData.profilepicture} />
          <h2 >{profileData.name}</h2>
          <h2 >{profileData.email}</h2>
          <div id={nextUserData[0].id}  className='nextUsr'  onClick={()=> handleClickCard(nextUserData[0])} >
              <Avatar alt={nextUserData[0].name} src={nextUserData[0].profilepicture} />
               <h3>{nextUserData[0].name}</h3>  
           </div>
           <div id={nextUserData[1].id} className='nextUsr'  onClick={()=> handleClickCard(nextUserData[1])} >
              <Avatar alt={nextUserData[1].name} src={nextUserData[1].profilepicture} />
               <h3>{nextUserData[1].name}</h3>  
           </div>
           <Link to="/" id='signOutButton'>Sign Out</Link>
        </div>
        <div className='chatBoxDiv' onClick={handleChatBoxClick}>
         { (!clickChatbox) ? ( 
           <div id='chatBtn'>
           <BsChatLeft className='iconChats'/>
           <h3>Chats</h3>
           <IoIosArrowUp className='iconChats' id='uperArraows'/>
         </div>
         ) : (
          <>
           <div id='chatBtnOn'>
           <BsChatLeft className='iconChats'/>
           <h3>Chats</h3>
           <IoIosArrowUp className='iconChats' id='uperArraows'/>
         </div>
         <div className='chatList'>
          {
            userListData.map((usr)=>{
              return (
                <>
                  <div id={usr.id} key={usr.id} className='usr'  onClick={()=> handleClickCard(usr)} >
                  <Avatar alt={usr.name} src={usr.profilepicture} />
                  <h3>{usr.name}</h3>  
                  <GoPrimitiveDot id='dotInChatBox' />
                  </div>
                </>
              )
            })
          }
         </div>
          </>
         ) }
              
        </div>
    </div>
    
  )
}

export default Portfolio