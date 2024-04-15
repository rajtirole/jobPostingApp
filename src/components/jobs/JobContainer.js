import React from 'react'
import style from './JobContainer.module.css'
import image1 from '../../assets/Rectangle 3.png'
import image2 from '../../assets/Rectangle 2.png'
import image3 from '../../assets/Rectangle 4.png'
import { useNavigate } from 'react-router-dom'
import {FRONTEND_URL,Backend_URL} from '../../constant'
import axios from 'axios'
const JobContainer = ({isSignedIn=false,response,setresponse}) => {
    const navigate =useNavigate()
    console.log(response?.user?.name);

  return (
       <> 
   <div className={style.container}>
       <div className={style.box1}>Jobfinder</div>
   {/* <img src={image1}></img>
       <img src={image3}></img> 
       <img src={image2}></img> */}
       <div className={style.box2}>
          {isSignedIn?(<>
           <button onClick={()=>{
 ;(async()=>{
    try {
      
      let options = {
        method: "GET",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        url:`${Backend_URL}/user/logout`,
        
            withCredentials: true,
      };
     
     const response=await axios(options)
     if(response?.data?.success){
      console.log('kfljsdlkjf');
      navigate(`/login`)
     }
     console.log(response);
    } catch (error) {
      console.log(error);
    }
  })()
           }}>Logout</button>
           <h2>Hello! {response?.user?.name}</h2>
           <img src={image2}></img>
          </>): (<><button className={style.login} onClick={()=>{
            navigate('/login')
          }}>login</button>
           <button className={style.register}  onClick={()=>{
            navigate('/register')
          }}>Register</button></>)}
       </div>
   </div></>
  )
}

export default JobContainer