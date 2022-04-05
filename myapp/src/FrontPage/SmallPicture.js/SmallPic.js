



export default function SmallPic(props){
    return(
        <div className=" shadow-2xl shadow-black grid items-center h-full w-1/5  transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110  rounded-xl ">
             <input alt="NFT" type="image" className=" h-full w-full m-0 rounded-xl " src={props.src}/>

        </div>
    )
}