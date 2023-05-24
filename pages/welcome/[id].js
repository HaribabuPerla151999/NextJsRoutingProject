import React,{useEffect,useState} from 'react'
import  {useRouter}  from 'next/router'

function IdPage() {
    const router=useRouter()
    const [response,setResponse]=useState({})

    useEffect(()=>{
        if(router.query.id && router.query.id>0 && router.query.id <=10){
          handleButton()
        }

    },[router.query.id])
    const handleButton=()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${router.query.id}`)
        .then((res)=>res.json())
        .then((data)=>setResponse(data))
    }
  
 console.log("res123",response)
  return (
    <>
    {/* <button onClick={handleButton}> Please click the butoon for {router.query.id} Details</button> */}
    { Object.values(response)?.length>0 ?
     <ul >
        <li>{response?.id}</li>
        <li>{response?.username}</li>
        <li>{response?.website}</li>
     </ul>
     :
     <p>Please pass correct Id</p>
   }
    </>
  )
}

export default IdPage