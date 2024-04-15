import React, { useEffect, useState } from 'react'
import style from './JobSearch.module.css'
import searchImage from '../../assets/Vector (6).png'
import image3 from '../../assets/Group 12.png'
import image4 from '../../assets/Group 1.png'
import image5 from '../../assets/Vector (7).png'
import image6 from '../../assets/emojione-v1_flag-for-india.png'
import {FRONTEND_URL,Backend_URL} from '../../constant'
import axios from 'axios'
import { json, useNavigate } from 'react-router-dom'
const JobSearch = ({isSignedIn=false,response,setresponse}) => {
  console.log(response);
  const [select,setselect]=useState([])
  const options=['angular','html','css','react','node','python']
  const [data,setdata]=useState(['fasd','fas','fasd','afddljf'])
  const [skills,setskills]=useState(['angular','html','css','react','node','python'])
  const navigate=useNavigate()
  // useEffect(
  //   ()=>{
  //     ;(async()=>{
  //       try {
  //         let options = {
  //           method: "GET",
  //           headers: { "content-type": "application/x-www-form-urlencoded" },
  //           url:`${Backend_URL}/job/getJobsAll`
  //         };
  //        const data=await axios(options)
  //        if(data?.data?.success){
  //         setresponse({...response,jobs:data?.data?.data})
  //       }
  //       console.log('fasdfasf',response);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     })()
  //   },[] 
  // )
  return (
    <div className={style.container}>
      <div className={style.searchbox}>
        <div className={style.search}>
          <img src={searchImage}></img>
         <input type='search' onChange={(e)=>{
        (async()=>{
          console.log('fjsdlk');
         
            try {
              let options = {
                method: "GET",
                headers: { "content-type": "application/json" },
                url:`${Backend_URL}/job/getJobSearch`,
                params:{
                  data:e.target.value
                },
              };
             const data=await axios(options)
             if(data?.data?.success){
               setresponse({...response,jobs:data?.data?.data})
               console.log(response);
            }
            console.log('fasdfasf',data.data.data);
            } catch (error) {
              console.log(error);
            }
          
        })()
         }}></input>
        </div>
      <div className={style.skillsbox}>

      <div className={style.box3}>
          
          <select onChange={(e)=>{
           if(!select.includes(e.target.value)){
            setselect([...select,e.target.value])
            console.log(e.target.value);}
          }}>
            <option hidden selected >Skills</option>
            {options.map((ele)=>{
              return (<option value={ele}>{ele}</option>)
            })}
          </select>
        </div>
        <div className={style.skill}>
        {select.map((ele)=>{
              return (<div onClick={(e)=>{
                setselect(select.filter((e)=>{
                  return e!=ele
                }))
                console.log(select);
              }}>
                <div >{ele}</div>
               <div>
               <img src={image3} />
               </div>
              </div>)
            })}
        </div>
        {isSignedIn&&(<>
        <button onClick={()=>{
          navigate('/RegisterJobPage')
        }}>Add Job</button>
        </>)}
        <div className={style.skills}>
          <button className={style.box1} onClick={()=>{
            // console.log(response.jobs);
            ;(async()=>{
              try {
                let options = {
                  method: "GET",
                  headers: { "content-type": "application/x-www-form-urlencoded" },
                  url:`${Backend_URL}/job/getJobsAll`,
                  params:{
                    skills:select.toString()
                  },
                };
               const data=await axios(options)
               if(data?.data?.success){
                 setresponse({...response,jobs:data?.data?.data})
                 console.log(response);
              }
              console.log('fasdfasf',data.data.data);
              } catch (error) {
                console.log(error);
              }
            })()
        
          }}>Apply Filter</button>
          <button className={style.box2}>Clear</button>
        </div>
      </div>
       
      </div>
    
      <div className={style.jobs}>
            {response?.jobs?.map((ele)=>{
              return (
                <div className={style.job}>
                <div className={style.leftSideContainer}>
                  <div>
                    <img src={searchImage}></img>
                  </div>
                  <div className={style.box5}>
                    <h2>{ele.title}</h2>
                    <div className={style.box7}>
                      <div>
                        <img src={image4}></img>
                        <h3>{ele.duration}</h3>
                      </div>
                      <div>
                      <img src={image5}></img>
                        <h3>{ele.salary}</h3>
                      </div>
                      <div>
                        <img src={image6}></img>
                        <h3>{ele.location}</h3>
                      </div>
                    </div>
                    <div className={style.box8}>
                      <div>{ele.locationType}</div>
                      <div>{'fulltime'}</div>
                    </div>
                  </div>
                </div>
  
                <div className={style.rightSideContainer}>
                  <div className={style.box9}>
                    {ele?.skills?.map((ele)=>{
                      return (<div>
                        {ele}
                      </div>)
                    })}

                  </div>
                  <div>
                  {/* {isSignedIn&&<button>Edit job</button>} */}
                    <button onClick={()=>{
                      ;(async()=>{
                        try {
                          let options = {
                            method: "GET",
                            headers: { "content-type": "application/x-www-form-urlencoded" },
                            url:`${Backend_URL}/job/getJob/${ele._id}`,
                            withCredentials: true
                            
                          };
                         const data=await axios(options)
                         console.log(data.data.success);
                         if(data?.data?.success){
                           setresponse((prev)=>{
                            return {...prev,jobidd:data?.data?.data}
                           })
                           console.log(response?.jobidd);
                           console.log(data);
                           localStorage.setItem('jobsearch',JSON.stringify(data?.data?.data))
                          console.log(JSON.parse(localStorage.getItem('jobsearch')));
                           navigate('/jobpage')
                        }
                        } catch (error) {
                          console.log(error);
                        }
                      })()
                    }}>View details</button>
                  </div>
                </div>
              </div>
              )
            })}
      </div>
    </div>
  )
}

export default JobSearch