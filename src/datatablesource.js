export const userColumns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'Name', headerName: 'Name', width: 100 },
  { field: 'email', headerName: 'Email', width: 300 },
  
];
  
  export const productColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'Child_ID', headerName: 'Child ID', width: 100 },
    { field: 'Date_of_Birth', headerName: 'Date_of_Birth', width: 150 },
    { field: 'Gender', headerName: 'Gender', width: 150 },
    
  ];

  export const donorColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'cid', headerName: 'CID', width: 150 },
    { field: 'age', headerName: 'Age', width: 150 },
    { field: 'number', headerName: 'Phone No', width: 150 },
    { field: 'reason', headerName: 'Reason', width: 500 },
    { field: 'selectedValue', headerName: 'Gender', width: 150 },
    { field: 'date', headerName: 'Child Date', width: 150 },

  ];

  export const donorImgCols = [
    {field: 'CID', headerName: 'CID', width:200},
        { 
      field: 'Image', 
      headerName: 'Image', 
      width: 300, 
      renderCell: (params)=>{
          return (
            <div className="cellWithImg">
              <img src={params.row.img} alt="" className="cellImg" />
              {params.row.username}
            </div>
    )
  }}
  ];

  export const adopterColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'child', headerName: 'Child ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'cid', headerName: 'CID', width: 150 },
    { field: 'age', headerName: 'Age', width: 150 },
    { field: 'number', headerName: 'Phone No', width: 150 },
    { field: 'reason', headerName: 'Reason', width: 500 },

  ];

  export const adopterImgCols = [
    {field: 'CID', headerName: 'CID', width:200},
        { 
      field: 'Image', 
      headerName: 'Image', 
      width: 300, 
      renderCell: (params)=>{
          return (
            <div className="cellWithImg">
              <img src={params.row.img} alt="" className="cellImg" />
              {params.row.username}
            </div>
    )
  }},
  { field: 'Child_ID', headerName: 'Child_ID', width: 100 },
  ];

  export const trackColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'Child_ID', headerName: 'Child_ID', width: 100 },
    { field: 'message1', headerName: 'Approve', width: 150 },
    { field: 'message2', headerName: 'Reject', width: 150 },
    
  ];