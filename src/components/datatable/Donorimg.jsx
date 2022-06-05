import './Datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { donorImgCols } from '../../datatablesource';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, doc, deleteDoc, onSnapshot  } from "firebase/firestore";
import {db} from "../../firebase";

const Donorimg = () => {
  const [data, setData] = useState([]);

  useEffect(()=> {

     const unsub = onSnapshot(
      collection(db, "Donorimg"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const handleDelete = async (id) => {
    try{
      await deleteDoc(doc(db, "Donorimg", id));
      setData(data.filter((item)=> item.id !== id));
    } catch(err){
      console.log(err)
    }
  }
  const actionColumn = [
    { 
      field: "action", 
      headerName: "Delete", 
      width: 200, 
      renderCell:(params)=>{
        return (
          <div className="cellAction">
            {/* <Link to='/track/test' style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
            </Link> */}
            <div 
              onClick={()=> handleDelete(params.row.id)} 
              className="deleteButton"
              >
                Delete
            </div>
          </div>
        );
      },
    },
  ];
      return (
        <div className='datatable'>
          <div className="datatableTitle">
            {/* <Link 
              to='/track/newTrack' 
              className='link'
            >
            Add New Track
            </Link> */}
          </div>
            <DataGrid
              rows={data}
              columns={donorImgCols.concat(actionColumn)}
              pageSize={9}
              rowsPerPageOptions={[9]}
              checkboxSelection
            />
        </div>
      )
    }

    export default Donorimg
 