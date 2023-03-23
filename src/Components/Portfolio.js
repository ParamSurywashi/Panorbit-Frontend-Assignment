import React, { useState } from 'react'
import { useLocation , useNavigate} from 'react-router-dom';
import "../Styles/Portfolio.css";
import { Avatar } from '@mui/material';
import GoogleMapReact from 'google-map-react';
import CommingSoon from './CommingSoon';

function Portfolio() {
  const navigate = useNavigate();
    const location = useLocation();
    let from = location.state;
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
    function handleClickdrawer(data){
      setCheckCom(false);
       setProfileData(data);
    }
    function handleClickPost(userData){
       setCheckCom(true);
    }
    function handleClickGallary(userData){
      setCheckCom(true);
         
    }
    function handleClickTodo(userData){
      setCheckCom(true);
         
    }
  return (
    <div className='portfolio'>
        <div className='drawer'>
            <div onClick={()=>handleClickdrawer(from)}>Profile</div>
            <div onClick={()=>handleClickPost(from)} >Posts</div>
            <div onClick={()=>handleClickGallary(from)} >Gallary</div>
            <div onClick={()=>handleClickTodo(from)}>ToDO</div>
        </div>
        <div id='mainDrawerRight'>
             <div className='profileHeader'>
                <h1>Profile</h1>
                <div className='profileAvatar'>
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
        
    </div>
  )
}

export default Portfolio