import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import {useState,useEffect} from "react";
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload";
//import Display from "./components/Display";
//import Modal from "./components/Modal";
import './App.css';
import Display from "./components/Display";
function App() {
  document.body.style.background="#042743";
   const [account,setAccount]=useState("");
   const [contract,setContract]=useState(null);
   const [provider,setProvider]=useState(null);
  // const [modalOpen,setModalOpen]=useState(false);

   useEffect(()=>{
      
    //only use for read info from block chain//
      const provider =new ethers.providers.Web3Provider(window.ethereum);
       
      const loadProvider=async()=>{
       if(provider){
       
        // when we change account ,new account will display without reload//
        // this script is provided by metamask //
        window.ethereum.on("chainChanged",()=>{
          window.location.reload();
        });

        window.ethereum.on("accountsChanged",()=>{
          window.location.reload();
        });











         await provider.send("eth_requestAccounts",[]);
         const signer =provider.getSigner();
         const address =await signer.getAddress();
         setAccount(address);
         
         let contractAddress ="0x5FbDB2315678afecb367f032d93F642f64180aa3";
         const contract = new ethers.Contract(
          contractAddress,Upload.abi,signer
         )

         console.log(contract);
         setContract(contract);
         setProvider(provider);

       }else{
          console.error("Metamask is not installed");   

       }



      };

      provider && loadProvider()

   },[]);
  return (
    <>
    <div className="App" >
  
     <h1 style={{color:"white"}}>Decentralised Storage</h1>
     <div className="bg"></div>
     <div className="bg bg2"></div>
     <div className="bg bg3"></div>
     <p style={{color:"white"}}>Account : {account?account:"Not Connected"}</p>
     <FileUpload account={account} provider={provider} contract={contract}></FileUpload>
     <Display contract={contract} account={account}></Display>
    </div>
    </>
  );
}

export default App;
