import './App.css';


import Navbar from './Navbar/Navbar';
import MintButton from './FrontPage/MintButton';
import Discription from './FrontPage/Discription';
import Artist from './FrontPage/Artist';
import RoadMap from './FrontPage/RoadMap';
import Faq from './FrontPage/Faq';
import Discord from './FrontPage/Discord';
import Footer from './FrontPage/Footer';


//const contractAddress= "0xeadcba2aa7eAd47DB55988eBf80Fe7d01a45c056"
//const abi= contract.abi
function App() {
 

  return (
    <div className=' bg-gradient-to-r from-indigo-600 to-cyan-600  h-full '>
      <title>YES</title>
      <Navbar/>
     <div className='grid  gap-y-32'>
      <MintButton/>
      <Discription/>
      <Artist/>
      <RoadMap/>
      <Faq/>
      <Discord/>
      <Footer/>
      </div>
      
     
      
    </div>
  )
}


export default App;
/*<h1>Scrappy Sqsuirrels Tutorial</h1>
      <div>
        <div>Current count</div>
      {currentAccount ? mintNftButton() : connectWalletButton()}
   
      </div>
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
        const provider= new ethers.providers.Web3Provider(ethereum);
        const signer=provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);
        let a= await  nftContract.maxSupply()
        console.log(a.toNumber())
        return a.toNumber()
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
      <button onClick={connectWalletHandler} className='cta-button connect-wallet-button'>
        Connect Wallet
      </button>
    )
  }

  const mintNftButton = () => {
    return (
      <button onClick={mintNftHandler} className=' bg-blue-800'>
        Mint NFT
      </button>
    )
  }

  useEffect(() => {
    checkWalletIsConnected();
    nftCount();
  }, [])
      */