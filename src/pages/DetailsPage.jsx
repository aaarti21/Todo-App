import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { myCotext } from '../context/DataFetching';

function DetailsPage() {
    const param=useParams();
    const {data}=useContext(myCotext);
    const filterData=data.filter((item)=>item.id==param.id)
    console.log(filterData)
  return (
    <h1 style={{color:"black", textAlign:"center", marginTop:"50px;"}}>
      {filterData[0].inputtext}
    </h1>
  )
}

export default DetailsPage
