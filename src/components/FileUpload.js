import React,{useState} from 'react'
import "./FileUpload.css"
import axios from "axios"
export default function FileUpload(props) {

    //props {contract,account,provider}
    const [file,setFile]=useState(null);
    const [fileName,setFileName]=useState("No file selected");



    const handleSubmit= async (e)=>{
        e.preventDefault();// stop from reloading//

        if(file){
            try{
               const formData=new FormData();
               formData.append("file",file);

             //pinata.cloud// for these information//
             
               const resFile=await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                data: formData,
                headers: {
                    pinata_api_key: `32c800dbc8c2929850a0`,
                    pinata_secret_api_key: `8a9016b8ddb128213371f10c8aa8e28151ab9926f9312ac95d2cde2985751252`,
                    "Content-Type": "multipart/form-data",
                },
               });
               const ImgHash= `ipfs://${resFile.data.IpfsHash}`;
               props.contract.add(props.account,ImgHash);
               alert("File uploaded successfully");
               setFile(null);
               setFileName("No file selected");


            }catch(e){
                alert("File not uploaded to Pinata");

            }


        }


    };


    const retrieveFile=(e)=>{

        const data=e.target. files[0]; //files array type file object
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(data);
        reader.onloadend=()=>{
            setFile(e.target.files[0]);
          

        }
        setFileName(e.target.files[0].name);
        e.preventDefault();




    };

    
    // for file upload i install axios library as npm install axios//
    // help in iteraction with penata
  return (
    <div className="top" > 
         <form className="form" onSubmit={handleSubmit} >
            
            <input style={{color:"white"}}
             disabled={!props.account}
             type="file"
             id="file-upload"
             name="data"
             onChange={retrieveFile} 
                 
            />          
            <span style={{color:"white"}} className="textArea">{fileName}</span>
             <button type="submit" className="upload" disabled={!file}>
                Upload File
             </button>
         </form>
    </div>
  )
}
