import React, { useState } from 'react'
import { useLocation , useNavigate} from 'react-router-dom';
import "../Styles/Portfolio.css";
import { Avatar } from '@mui/material';
import GoogleMapReact from 'google-map-react';
import CommingSoon from './CommingSoon';
import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";

function Portfolio() {
  const navigate = useNavigate();
    const location = useLocation();
    let from = location.state.userDetails;
    console.log(location.state.nextUserData)
    const nextUserData = location.state.nextUserData;
    const [profileData, setProfileData]=useState(from);
    const [checkCom, setCheckCom] = useState(false);
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
  
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
    console.log(document.getElementById("profile"))
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
        <AnyReactComponent
          lat={parseInt(profileData.address.geo.lat)}
          lng={parseInt(profileData.address.geo.lng)}
          text="Map Google"
        />
      </GoogleMapReact>
 
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
        
    </div>
    
  )
}

export default Portfolio