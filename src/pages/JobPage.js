import React from 'react'
import JobContainer from '../components/jobs/JobContainer'
import JobContainers from '../components/jobs/JobContainers'

const JobPage = ({isSignedIn,response,setresponse}) => {
  return (
    <><JobContainer isSignedIn={isSignedIn} response={response} setresponse={setresponse}></JobContainer>
    <JobContainers isSignedIn={isSignedIn} response={response} setresponse={setresponse}></JobContainers>
    </>
    
  )
}

export default JobPage