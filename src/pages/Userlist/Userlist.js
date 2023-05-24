import React, { useState } from "react";

import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { userRows } from "../../data";
import "./Userlist.css";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

export default function Userlist() {
  const [userDatas, setUserDatas] = useState(userRows);

  const DeletUserAlert = (userid) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setUserDatas(userDatas.filter((user) => user.id !== userid));

        swal("USER DELETED", {
          icon: "success",
        });
      } else {
        swal("USER DATA IS SAFE!");
      }
    });
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
              <img
                src={params.row.avatar}
                className="userListImg"
                alt="avatar"
              />
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
            <Link to={`user/${params.row.id}`}>
              <ModeEditIcon />
            </Link>

            <Button onClick={() => DeletUserAlert(params.row.id)}>
              <DeleteOutlineIcon />
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={userDatas}
        columns={columns}
        disableSelectionOnClick
        pageSize={10}
      />
    </div>
  );
}
