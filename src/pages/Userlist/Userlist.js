import React, { useState } from "react";

import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { userRows } from "../../data";
import "./Userlist.css";
import ModeEditIcon from '@mui/icons-material/ModeEdit';


import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';





export default function Userlist() {
  const [edit, setEdit] = useState(false);
  const OpenEdit = () => setEdit(true);
  const closeEdit = () => setEdit(false);



  const [userdelet, setuserdelet] = useState(false);
  const openDelet = () => setuserdelet(true);
  const closeDelet = () => setuserdelet(false);


  const [userDatas] = useState(userRows);

 



  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };



  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/" className="link">
            <div className="userListUser">
              <img src={params.row.avatar} className="userListImg" alt="avatar"/>
              {params.row.username}
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={OpenEdit}><ModeEditIcon/></Button>

            <Button onClick={openDelet}><DeleteOutlineIcon/></Button>
            
              
              
            
          </>
        );
      },
    },
  ];

  return (
    <div className='userList'>
      <DataGrid
        rows={userDatas}
        columns={columns}
        disableSelectionOnClick
        pageSize={10}
      />


<Modal
        open={edit}
        onClose={closeEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            EDIT USER 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            EDIT FORM 
            <Button onClick={closeEdit} >close</Button>
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={userdelet}
        onClose={closeDelet}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            DELET USER 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            DELET FORM  
            <Button onClick={closeDelet} >close</Button>
          </Typography>
        </Box>
      </Modal>

    </div>
  );


}



