import React from 'react'
import contract from "../contracts/NftCyberDogsTest.json"
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';




const contractAddress= "0xeadcba2aa7eAd47DB55988eBf80Fe7d01a45c056"
const abi= contract.abi

export default function MintButton() {

  const [currentAccount, setCurrentAccount] = useState(null);
  //const [currentCount, setCurrentCount]=useState()

  const checkWalletIsConnected = async () => {
    const {ethereum}=window;

    if(!ethereum){
      console.log("installe metamask");
      return;
    }else{
      console.log("Wallet exists nice")
    }
    const accounts= await ethereum.request({method:"eth_accounts"});

    if(accounts.length!==0){
      const account=accounts[0];
      console.log("found an account", account);
      setCurrentAccount(account);
    }else{
      console.log("No account found")
    }
   }

  const connectWalletHandler = async () => {
    const {ethereum}= window;

    if(!ethereum){
      alert("please install bro")
    }

    try {
      const accounts= await ethereum.request({method:"eth_requestAccounts"});
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    }catch(err){
      console.log(err)
    }

   }
      const nftCount= async()=>{
        try{
        const {ethereum}=window;
        if(ethereum)
        {const provider= new ethers.providers.Web3Provider(ethereum);
        const signer=provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);
        let a= await  nftContract.maxSupply()
       
        console.log(a.toNumber())}
      
      }catch(err){
        console.log(err)
      }
      }

  const mintNftHandler =async () => {
    try{
      const {ethereum}=window;

      if (ethereum){
        const provider= new ethers.providers.Web3Provider(ethereum);
        const signer=provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);
        console.log("initizialize payment");
        let nftTxn= await nftContract.mint(1, {value:ethers.utils.parseEther("0.002")})
        console.log("mining");
        await nftTxn.wait();

        console.log("mined")
      } else{
        console.log("ethereum object does not exists")
      }
    } catch (err){
      console.log(err)
    }
   }

  const connectWalletButton = () => {
    return (
      <button onClick={connectWalletHandler} id="" className=' nei text-6xl bg-transparent border-4 text-cyan-400 transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 hover:  backdrop-hue-rotate-30 hover:backdrop-hue-rotate-90  duration-300  md:h-20 h-16 w-72  rounded-full  '>
        Connect 
      </button>
    )
  }

  const mintNftButton = () => {
    return (
    
      <button id='mint' onClick={mintNftHandler} className=' nei text-6xl bg-transparent border-4 text-cyan-400 transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 hover:  backdrop-hue-rotate-30 hover:backdrop-hue-rotate-90  duration-300 md:w-96   md:h-20 h-16 w-72 rounded-full  '>MINT</button>
    )
  }

  useEffect(() => {
    checkWalletIsConnected();
    nftCount();
  }, [])

  
  return (
  
      <div className='grid '>
      <div id=" " className=' hello w-auto h-auto bg-red-500 text-center opacity-50 mix-blend-soft-light border-8 shadow-2xl shadow-purple-700   ' >
      
      </div>
      <div id=" " className='grid wo   justify-center  top-1/3  w-screen absolute text-9xl   bg-cyan-400 text-transparent bg-clip-text'>
      <h1>CYBERDOGZ
      </h1>
      <div className=' grid  h-28 justify-center'>
      {currentAccount ? mintNftButton() : connectWalletButton()}
      
      </div>
      
     
      </div>
      <div id="" className=' wo  grid justify-center  text-7xl text-cyan-400'>
      <h1 className=' '>The Cutest PETZ of the Metaverse!</h1>
      </div>
      
      <div>
        
      </div>
 
     
      
 
     
     
      
      
     
      </div>
  
      
  //
      
    
    
  )
}
