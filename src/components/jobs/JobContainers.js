import React, { useEffect, useState } from "react";
import image1 from '../..//assets/ph_money-fill.png'
import image2 from '../..//assets/uis_calender.png'
import style from "./JobContainers.module.css";
const JobContainers = ({isSignedIn,response,setresponse}) => {
  const [skills, setskills] = useState(["fasd", "fas", "fasd", "afddljf"]);
  const data=JSON.parse(localStorage.getItem('jobsearch'))
// const [data,setdata]=useState(response.jobidd)

//   useEffect(()=>{
//     ;(async()=>{
//       try {
//         let options = {
//           method: "GET",
//           headers: { "content-type": "application/x-www-form-urlencoded" },
//           url:`${Backend_URL}/job/getJob/${ele._id}`,
//           withCredentials: true
          
//         };
//        const data=await axios(options)
//        console.log(data.data.success);
//        if(data?.data?.success){
//          setresponse((prev)=>{
//           return {...prev,jobidd:data.data.data}
//          })
//          console.log(response);
//         //  localStorage.setItem('jobsearch',JSON.stringify(response.jobid))
//         // console.log(JSON.parse(localStorage.getItem('jobsearch')));
//          navigate('/jobpage')
//       }
//       } catch (error) {
//         console.log(error);
//       }
//     })()
//   },[])
console.log(data);
  return (
    <>
      <div className={style.container}>
        <div className={style.box1}>
          {
          data?.companyName
          }
        </div>
        <div className={style.box2}>
          <div className={style.box3}>
            <div className={style.box4}>
              {data?.createAt}
            </div>
            <div className={style.box5}>
                <div>
                    <h1>{data?.title}</h1>
                </div>
                {/* {isLoggedIn&&(<div>
                    <button>Edit job</button>
                </div>)} */}
            </div>
            <div className={style.box6}>
            {data?.location}
            </div>
            <div className={style.box7}>
              <div>
                <div>
                <img src={image1}></img>
                <h3>{"stipend"}</h3>
                </div>
                <div>
                    {data?.salary}
                </div>
              </div>
              <div>
               <div>
               <img src={image2}></img>
                <h3>{"duration"}</h3>
               </div>
               <div>
                {data?.duration}
               </div>
              </div>
              
            </div>
          </div>
          <div className={style.box8}>
            <div>
              <h2>About company</h2>
              <p>
               {data?.aboutcompany||''}
              </p>
            </div>
            <div>
              <h2>About the job/internship</h2>
              <p>
                {data?.description}</p>
            </div>
            <div >
              <h2>Skill(s) required</h2>
             <div className={style.box9}>
             {data?.skills.map((e) => {
                return (
                  <>
                    <div className={style.box10}>{e}</div>
                  </>
                );
              })||''}
             </div>
            </div>
            <div>
              <h2>Additional Information</h2>
              <p>
               {data?.about||''}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobContainers;
