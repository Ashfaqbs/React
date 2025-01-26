import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {


  const gitdata = useLoaderData()

  //   const [gitdata,setData]= useState([])
  //   useEffect(() => {
  // fetch('https://api.github.com/users/Ashfaqbs').then(data => data.json()).then((datajson)=> setData(datajson))
  //   }, [])

  // console.log(gitdata)
  return (<>
    <p>Name : {gitdata?.name}</p>

    <div className='text-center m-4 text-white bg-gray-600 p-4 text-3xl '>Github followers: {gitdata.followers}    </div>
    {gitdata.avatar_url && <img src={gitdata.avatar_url} alt="gitimage" className='w-50 h-15' />}
    


    //simple condition rendering
    <br />
    <strong>{gitdata.bio}</strong>

  </>
  )
}

export default Github

export const githubInfoLoader = async () => {
  console.log('calling API');
  const response = await fetch('https://api.github.com/users/Ashfaqbs')
  return response.json();
}