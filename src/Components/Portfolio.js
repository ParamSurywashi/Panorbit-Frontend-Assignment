import React, { useState } from 'react'
import { useLocation , useNavigate} from 'react-router-dom';
import "../Styles/Portfolio.css";
import { Avatar } from '@mui/material';
import GoogleMapReact from 'google-map-react';
import CommingSoon from './CommingSoon';
import { Link } from "react-router-dom";
import { IoIosArrowDropright} from "react-icons/io";

// import TomtomMap from './TomtomMap';
import ChatBox from './ChatBox';

function Portfolio() {
  const navigate = useNavigate();
    const location = useLocation();
    let from = location.state.userDetails;
    console.log(location.state.nextUserData)
    const nextUserData = location.state.nextUserData;
    const userListData = location.state.userList;

    const [profileData, setProfileData]=useState(from);
    const [checkCom, setCheckCom] = useState(false);
    const [clickChatbox, setClickChatbox] = useState(false);


    const [currentChatUser, setCurrentChatUser] = useState({
      name : "Guest",
      profilepic : ""
    });

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
      document.getElementsByClassName("chatsFullDiv")[0].style.display="none";
     }else{
      setClickChatbox(true);
     }
     
    }
    function handleClickChats(usrData){
       document.getElementsByClassName("chatsFullDiv")[0].style.display="block";
       console.log(usrData);
       setCurrentChatUser({
         name : usrData.name,
         profilepic : usrData.profilepicture
       });
    }

    const handleCrossChatBox = () =>{
      document.getElementsByClassName("chatsFullDiv")[0].style.display="none";
      
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
            {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBEbh0EtbP3zNHieTX0SlD7MggBX-CnL70" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        
      >
      </GoogleMapReact> */}
           <iframe
              src={"https://maps.google.com/maps/embed?q="+parseFloat(profileData.address.geo.lat)+","+parseFloat(profileData.address.geo.lng)+"&hl=es&z=14&maptype=satellite&amp;output=embed?enablejsapi=1"}
              width="520"
              height="390"
              id='iframeBox'
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          
      <h3> <span className='latLongTxt'>Lat : </span>{parseFloat(profileData.address.geo.lat)}  <span className='latLongTxt'>Lng : </span>{parseFloat(profileData.address.geo.lng)} </h3>
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
       <ChatBox 
        handleChatBoxClick={handleChatBoxClick}
        clickChatbox = {clickChatbox}  
        userListData = {userListData} 
        currentChatUser={currentChatUser}
        handleClickChats={handleClickChats}
        handleCrossChatBox={handleCrossChatBox}
        />
    </div>
    
  )
}

export default Portfolio