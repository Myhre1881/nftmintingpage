


export default function SmallPictureMiddle(props){ 
    return(
        <div className=" shadow-2xl transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110  duration-300  shadow-black grid items-center h-full w-[20%]   rounded-xl ">
             <input type="image" className=" h-full w-full m-0 rounded-xl " alt="NFTDog" src={props.src}/>

        </div>
    )
}