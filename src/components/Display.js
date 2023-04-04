import React ,{useState}from 'react'
//import "./Dispaly.css"
export default function Display(props) {
  
  const [data,setData]=useState("");
  const getData=async()=>{
     let dataArray;
     const Otheraddress = document.querySelector(".address").value;
     
     if(Otheraddress){
       dataArray=await props.contract.Display(Otheraddress);
       console.log(dataArray);
     }else{
      dataArray = await props.contract.display(props.account);
     }

     const isEmpty = Object.keys(dataArray).length===0;
     
     if(!isEmpty){
      const str = dataArray.toString();
     // console.log(str);
      const str_array=str.split(",");
     //console.log(str_array);
     for (var i = 0; i < str_array.length; i++) {  
         let link= `https://gateway.pinata.cloud/ipfs/${str_array[i].substring(6)}`;
         console.log(link);
        }
    
     }
     else{
      alert("No files");
     }
  
  
    };


  return (
    <div>
      
      <input type="text" placeholder='Enter Address' className="address"></input>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}
