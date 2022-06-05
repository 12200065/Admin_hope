import './Datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { productColumns} from '../../datatablesource';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, doc, deleteDoc, onSnapshot  } from "firebase/firestore";
import {db} from "../../firebase";

const Producttable = () => {
  const [data, setData] = useState([]);

  useEffect(()=> {
  //   const fetchData = async () => {
  //     let list = []
  //     try{
  //       const querySnapshot = await getDocs(collection(db, "users"));
  //       querySnapshot.forEach((doc) => {
  //         // doc.data() is never undefined for query doc snapshots
  //         list.push({id: doc.id, ...doc.data()})
  //     });
  //     setData(list)
  //     console.log(list)
  //     }catch(err){
  //       console.log(err)
  //     } 
  //   };
  //   fetchData()
  // },[]);
  //console.log(data)
     // LISTEN (REALTIME)
     const unsub = onSnapshot(
      collection(db, "Child"),
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
      await deleteDoc(doc(db, "Child", id));
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
            {/* <Link to='/products/test' style={{ textDecoration: "none" }}>
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
            <Link 
              to='/products/new' 
              className='link'
            >
            Add New Child
            </Link>
          </div>
            <DataGrid
              rows={data}
              columns={productColumns.concat(actionColumn)}
              pageSize={9}
              rowsPerPageOptions={[9]}
              checkboxSelection
            />
        </div>
      )
    }

    export default Producttable