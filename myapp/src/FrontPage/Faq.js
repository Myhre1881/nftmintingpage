import React from 'react'
import url from "./SmallPicture.js/images/preview3.gif"
import url1 from "./SmallPicture.js/images/preview1.gif"


const faq=[
  {
    Question:"WHAT IS AN NFT?",
    Answer:"This is a demo website. NFTs are mintable and viewable on Opeansea. This is deployed on the RinkebyTestnNetwork"
    
    
  },
  {
    Question:"HOW CAN I BUY A CYBERDOGZ NFT?",
    Answer:"This is a demo website. NFTs are mintable and viewable on Opeansea. This is deployed on the RinkebyTestnNetwork"
    

    
  },
  {
    Question:"WHAT DOES “MINT” MEAN?",
    Answer:"This is a demo website. NFTs are mintable and viewable on Opeansea. This is deployed on the RinkebyTestnNetwork"
    

    
  },
  {
    Question:"HOW MUCH DOES IT COST BUY ONE OF THE CYBERDOGZ",
    Answer:"This is a demo website. NFTs are mintable and viewable on Opeansea. This is deployed on the RinkebyTestnNetwork"
    

    
  },
  {
    Question:"WHY DID YOU CHOOSE CYBERDOGZ?",
    Answer:"This is a demo website. NFTs are mintable and viewable on Opeansea. This is deployed on the RinkebyTestnNetwork"
    

    
  },
  
]

export default function Faq() {


  const items= faq.map(i=> <div className=' avsnitt grid items-center grid-flow-col  justify-center my-5 '>
 
    <div className=' w-[52rem] text-cyan-400  text-3xl'> 
    <h1 className=' text-5xl border-b-4 border-purple-600  '>{i.Question}</h1>
    <p> {i.Answer}</p>
    
    </div>
    </div> )

  return (
    <div className='  '>
    <div className='   h-auto w-full flex flex-row justify-evenly
    
     '>

<img src={url} alt="NFTDog" className="h-96   border-8 w-96 border-cyan-400 shadow-2xl shadow-black  rounded-full"/>
<h1 id="faq" className=' wo self-center    text-cyan-400  text-9xl'>FAQ</h1>
<img src={url1} alt="NFTDog" className="h-96  border-8 w-96 border-cyan-400 rounded-full shadow-2xl shadow-black"/>



      </div>

      <div id="" className=' avsnitt  '>
        {items}
         </div>
      </div>
  )
}
