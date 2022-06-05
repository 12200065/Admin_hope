import DriveFolderUpload from "@mui/icons-material/DriveFolderUpload"
import { useEffect, useState } from "react"
import Navbar from "../../../components/navbar/Navbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import {addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import { auth, db, storage } from "../../../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom"
import './adopter.scss'
export default function Adopter({inputs, title}) {

  const [data, setData] = useState({});
  const [file, setFile] = useState("");
  const [per, setPerc] = useState(null);
  const navigate = useNavigate();

  useEffect(() =>{ 
    const uploadFile = () => {
      const name = new Date().getTime() + file.name //to prevent from overwriting the same image
      console.log(name)  
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed', 
        (snapshot) => {
          const progress = 
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setPerc(progress)
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        }, 
        (error) => {
          console.log(error)
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev)=>({...prev, img:downloadURL}))
            // console.log('File available at', downloadURL);
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  console.log(data)

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({...data, [id]:value});
  };

  const handleAddDonor = async(e) =>{
    e.preventDefault();
    const dorRef = await addDoc(collection(db, "Adopter"),{
      ...data,
      Timestamp: serverTimestamp(),
    });
    navigate(-1)
    console.log("Document written with ID: ", dorRef.id);

};

  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            {/* <img 
              src={
                file  
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" 
              }
              alt="" 
            /> */}
          </div>
          <div className="right">
            <form onSubmit={handleAddDonor}>
            <div className="formInput">
            {/* <label htmlFor="file">
                 image: <DriveFolderUpload className="icon"/>
                 </label>
                <input 
                  type="file" 
                  id='file' 
                  onChange={e=>setFile(e.target.files[0])} 
                  style={{display: 'none'}}
                /> */}
            </div>

            {inputs.map((input) => (
              <div className="formInput" key={input.id}>
               <label>{input.label}</label>
               <input 
                id={input.id}
                type={input.type}  
                placeholder={input.placeholder} 
                onChange={handleInput}
                required
              />
           </div>
            ))}
             <button disabled={per !== null && per <100} type="submit" 
              onClick={() =>
              document.getElementById.value = ""
            }>
              Create
            </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
