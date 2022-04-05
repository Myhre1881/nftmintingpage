import React from 'react'

const roadmap=[
  {
    num:"1",
    name:"Lorem ipsum dolor sit amet"
    

    
  },
  {
    num:"2",
    name:"Lorem ipsum dolor sit amet"
    

    
  },
  {
    num:"3",
    name:"Lorem ipsum dolor sit amet"
    

    
  },
  {
    num:"4",
    name:"Lorem ipsum dolor sit amet"
    

    
  },
  {
    num:"5",
    name:"Lorem ipsum dolor sit amet"
    

    
  },
  {
    num:"6",
    name:"Lorem ipsum dolor sit amet"
    

    
  },
]

export default function RoadMap() {
 
  const items= roadmap.map(i=> <div id='' className=' avsnitt text-cyan-400 grid items-center grid-flow-col justify-center my-5 '>
  <div className='  w-32 h-full'> 
    <div className=' border-8 text-center  text-5xl leading-tight rounded-[50%] border-green-400 rouned w-20 h-20' > {i.num}  </div>
    </div> 
    <div className=' w-[52rem]  h-64 text-3xl'> 
    <h1 className=' text-5xl'>Title Here</h1>
    <p>Lorem ipsum dolor sit amet. Vel illum incidunt ea accusamus optio et consequatur corrupti a eligendi expedita qui delectus maxime.
    Lorem ipsum dolor sit amet. Vel illum incidunt ea accusamus optio et consequatur corrupti a eligendi expedita qui delectus maxime.
    Lorem ipsum dolor sit amet. Vel illum incidunt ea accusamus optio et consequatur corrupti a eligendi expedita qui delectus maxime.
    </p>
    
    </div>
    </div> )

  return (
    <div className=' '>
      <div className='text-center'><h1 id="roadmap" className=' wo text-9xl text-cyan-400'>RoadMap</h1></div>
      <div className=' wo grid items-center grid-flow-row justify-center  '>
  {items}
      
      
      </div>
      
      </div>
  )
}
