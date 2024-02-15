import React from 'react'

const Dashboard = ({submittedData}) => {

      const showResults=()=>{
   return  submittedData.map((data, index)=>(
   <div key={index} className='border border-white bg-dark bg-gradient p-4 m-4 w-50'>
   <div className='border border-bottom-white py-2 px-5'><span>dropdown: </span>{data.dropdown}</div>
   <div className='border border-bottom-white py-2 px-5'><span>rating1: </span>{data.rating1}</div>
  <div className='border border-bottom-white py-2 px-5'> <span>rating2: </span>{data.rating2}</div>
   <div className='border border-bottom-white py-2 px-5'><span>rating3: </span>{data.rating3}</div>
   <div className='border border-bottom-white py-2 px-5' ><span>email: </span>{data.email}</div>
   <div className='border border-bottom-white py-2 px-5'><span>yesNo: </span>{data.yesNo}</div>
   <div className='border border-bottom-white py-2 px-5'><span>textArea:  </span>{data.textArea}</div>
   <div className='border border-bottom-white py-2 px-5'><span>checkbox:  </span>{data.checkbox}</div>
   </div>))
   
  }
    return (
    
      showResults()
      
  )
}

export default Dashboard
