import React, { useEffect, useState } from 'react'

const About = () => {
  
  let arr1=["salam","Rehim"]
  let arr2=[...arr1]
  arr2.push("muellim")
  console.log(arr1);
  console.log(arr2);

  const [page,setPage]=useState(1)
  const [datas,setDatas]=useState(["Nigar","Nazile"]) 

  useEffect(()=>{
    if (page!=1) {
      setDatas(["Rehim","Xalid","Behruz"])
    }
  },[page])

  useEffect(()=>{
    if(datas.length>2){
      alert("deyishdi")
    }
  },[datas])


  return (
    <main>
      {
        datas.map((x,i)=>(
          <p key={i}>{x}</p>
        ))
      }
      <button onClick={(e)=>{
        setPage(Number(e.target.value))
      }}>2</button>
    </main>
  )
}

export default About