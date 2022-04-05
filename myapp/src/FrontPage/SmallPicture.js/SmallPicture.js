import { useState } from "react";
import SmallBLeft from "./SmallBLeft";
import SmallBRight from "./SmallBRight";
import SmallPic from "./SmallPic";
import  url from './images/1.png';
import  url1 from './images/2.png';
import  url2 from './images/13.png';
import  url3 from './images/14.png';
import  url4 from './images/22.png';
import  url5 from './images/76.png';
import  url6 from './images/86.png';
import  url7 from './images/93.png';
import  url8 from './images/95.png';
import SmallPictureMiddle from "./SmallPictureMiddle";


const picPic=[
    {
        Pic:0,
        img:url
    },
    {
        Pic:1,
        img:url1
    },
    {
        Pic:2,
        img:url2
    },
    {
        Pic:3,
        img:url3
    },
    {
        Pic:4,
        img:url4
    },
    {
        Pic:5,
        img:url5
    },
    {
        Pic:6,
        img:url6
    },
    {
        Pic:7,
        img:url7
    },
    {
        Pic:8,
        img:url8
    },
    
]


export default function SmallPicture(props){
    const[dis,setDis]=useState(0)
    
    const handleL=()=>{
        
        if(dis===0){
            setDis(picPic.length-3)
        }else{
            setDis(dis-1)
        }

    }
    const handleR=()=>{
        
        if(dis===picPic.length-3){
            setDis(0)
        }else{
            setDis(dis+1)
        }
        console.log(dis)
    }
    const items=[
        <SmallPic alt="NFTDog" src={picPic[0+dis].img}/>,
        <SmallPictureMiddle src={picPic[1+dis].img}/>,
        <SmallPic alt="NFTDog" src={picPic[2+dis].img}/>
        ,
       

    ]
    return(
       
        <div className=" my-32">
            
            
    <div className=" my-16 h-44 flex flex-row justify-between ">
        
        <SmallBLeft lClick={handleL} count={dis}/>
        {items}
        <SmallBRight rClick={handleR} count={dis}/>
        
    </div>
    </div>

    )

}

