import React, { useState } from "react";
// import add1 from "../../../images/Adddd.png";
// import edit1 from "../../../images/edit1.png";
// import delete1 from "../../../images/trash.png";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import {Box,Card,TextField,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TablePagination,TableRow,CardContent,createTheme,ThemeProvider,} from "@mui/material";
import AdminDashboard from "./AdminDashboard";
import { Button } from "react-bootstrap";
// import Addfees from "./Addfees";
// import Updatefees from "./Updatefees";

const theme = createTheme({
  typography: {
    fontWeightBold: 700,
  },
});

const FeeUpdate = () => {
  const [show, setShow] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  // Static data for the table
  const staticRows = [
    {
      role_id: 1,
      menuName: "Menu 1",
      name: "Name 1",
      fees: 2300,
      createdOn: "2024-07-01",
    },
    {
      role_id: 2,
      menuName: "Menu 2",
      name: "Name 2",
      fees: 3455,
      createdOn: "2024-07-02",
    },
    {
      role_id: 3,
      menuName: "Menu 3",
      name: "Name 3",
      fees: 3877,
      createdOn: "2024-07-03",
    },
    {
      role_id: 4,
      menuName: "Menu 4",
      name: "Name 4",
      fees: 4348,
      createdOn: "2024-07-04",
    },
    {
      role_id: 5,
      menuName: "Menu 5",
      name: "Name 5",
      fees: 5567,
      createdOn: "2024-07-05",
    },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <style>
        {`
    /*Imp Note dont copy the css of body this is scss but you can use any scss to css converter to get the same result, ofcourse if you using css and Thanks for checking out this PEN. If you have any question, please feel free to contact me via email(immad.hamid@gmail.com) For more pen visit codepen.io/immad-hamid */

 .subscribe_now h4 {
   font-size: 14px;
   line-height: 20px;
   letter-spacing: 2px;
   text-transform: uppercase;
   color: #34495e;
   font-weight: 800;
   text-align: center;
}
 .subscribe_now p {
   font-size: 14px;
   line-height: 20px;
   letter-spacing: 2px;
   color: #34495e;
   text-align: center;
}
 .subscribe_form {
   max-width: 470px;
   width: 100%;
   margin: 0 auto;
   box-shadow: 0px 2px 5px 0px rgba(10, 6, 20, 0.24);
}
 .subscribe_form:focus {
   outline: none;
}
 .subscribe_form .form-control {
   border: none;
}
 .subscribe_form .form-control:focus {
   box-shadow: none;
}
 .subscribe_form input {
   height: 44px;
}
 .subscribe_form button {
   border: none;
   height: 44px;
   background-color: #0ed085;
   color: #fff;
   margin: -1px;
   border-radius: 0;
   width: 135px;
   text-transform: uppercase;
   position: relative;
   transition: all ease 0.3s;
   -webkit-transition: all ease 0.3s;
   -moz-transition: all ease 0.3s;
   -o-transition: all ease 0.3s;
   -ms-transition: all ease 0.3s;
}
 .subscribe_form button:hover, .subscribe_form button:focus, .subscribe_form button:active, .subscribe_form button:visited {
   color: #fff;
   background-color: rgba(14, 208, 133, 0.77);
   outline: none;
   transition: all ease 0.3s;
   -webkit-transition: all ease 0.3s;
   -moz-transition: all ease 0.3s;
   -o-transition: all ease 0.3s;
   -ms-transition: all ease 0.3s;
}
 .subscribe_form button:hover:before, .subscribe_form button:focus:before, .subscribe_form button:active:before, .subscribe_form button:visited:before {
   background-color: rgba(14, 208, 133, 0.77);
   transition: all ease 0.3s;
   -webkit-transition: all ease 0.3s;
   -moz-transition: all ease 0.3s;
   -o-transition: all ease 0.3s;
   -ms-transition: all ease 0.3s;
}
 .subscribe_form button:before {
   content: '';
   position: absolute;
   top: 100%;
   left: 0;
   height: 1px;
   background-color: #0ed085;
   width: 100%;
   transition: all ease 0.3s;
   -webkit-transition: all ease 0.3s;
   -moz-transition: all ease 0.3s;
   -o-transition: all ease 0.3s;
   -ms-transition: all ease 0.3s;
}
 .subscribe_form .input-group-btn:last-child > .btn, .subscribe_form .input-group-btn:last-child > .btn-group {
   z-index: 2;
   margin-left: 0px;
}
 
    `}
      </style>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      ></Box>

      <AdminDashboard />

      <ThemeProvider theme={theme}>
        <Box sx={{ width: "90%", marginLeft: "100px" }}>
          <Card sx={{ minWidth: 900, p: 4, marginTop: "70px" }}>
            <div id="subscription_area">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="subscribe_now">
                      <form className="subscribe_form">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            placeholder=""
                          />
                          <span className="input-group-btn">
                            <button className="btn btn-default" type="button">
                              subscribe
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ textAlign: "left" }}>
              <TextField
                id="outlined-basic"
                label="Search here......"
                variant="outlined"
                style={{
                  width: "250px",
                  height: "10px",
                  marginLeft: "20px",
                }}
              />
            </div>
          
            <br></br>
            <Button
              onClick={handleShow}
              variant="primary"
              style={{ marginLeft: "85%" }}
            >
              Add Fees
            </Button>{" "}
            {/* ==============================Add_Fees (Model=============================) */}
            <Modal
              show={show}
              onHide={handleClose}
              style={{ marginTop: "40px" }}
            >
              <Modal.Header closeButton>
                <Modal.Title>Add_Fees</Modal.Title>
              </Modal.Header>
              <Modal.Body>{/* <Addfees /> */}</Modal.Body>
              {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
            </Modal>
            <CardContent>
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer
                  sx={{ maxHeight: 440 }}
                  style={{ BoxShadow: "60px" }}
                >
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          align="left"
                          style={{ backgroundColor: "#264653" }}
                        >
                          <h1
                            style={{
                              fontSize: "20px",
                              fontWeight: "bolder",
                              color: "white",
                              fontFamily: "-moz-initial",
                            }}
                          >
                            Course Type
                          </h1>
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{ backgroundColor: "#264653" }}
                        >
                          <h1
                            style={{
                              fontSize: "20px",
                              fontWeight: "bolder",
                              color: "white",
                              fontFamily: "-moz-initial",
                            }}
                          >
                            Course Name
                          </h1>
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{ backgroundColor: "#264653" }}
                        >
                          <h1
                            style={{
                              fontSize: "20px",
                              fontWeight: "bolder",
                              color: "white",
                              fontFamily: "-moz-initial",
                            }}
                          >
                            Branch
                          </h1>
                        </TableCell>

                        <TableCell
                          align="left"
                          style={{ backgroundColor: "#264653" }}
                        >
                          <h1
                            style={{
                              fontSize: "20px",
                              fontWeight: "bolder",
                              color: "white",
                              fontFamily: "-moz-initial",
                            }}
                          >
                            Fees
                          </h1>
                        </TableCell>

                        <TableCell
                          align="left"
                          style={{ backgroundColor: "#264653" }}
                        >
                          <h1
                            style={{
                              fontSize: "20px",
                              fontWeight: "bolder",
                              color: "white",
                              fontFamily: "-moz-initial",
                            }}
                          >
                            Action
                          </h1>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {staticRows
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.role_id}
                          >
                            <TableCell align="left">{row.menuName}</TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.createdOn}</TableCell>
                            <TableCell align="left">{row.fees}</TableCell>
                            <TableCell>
                              <div style={{ display: "flex", gap: "10px" }}>
                                <img
                                  onClick={() => navigate("/Updatefees")}
                                  src={""}
                                  alt="edit"
                                  style={{ width: "30px" }}
                                />

                                <img
                                  onClick={() => {
                                    if (
                                      window.confirm(
                                        "Are you sure to Delete Data"
                                      )
                                    ) {
                                      // Add your deletion logic here
                                    }
                                  }}
                                  src={""}
                                  alt="delete"
                                  style={{ width: "30px" }}
                                />
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[2, 25, 100]}
                  component="div"
                  count={staticRows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </CardContent>
          </Card>
          <br></br>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default FeeUpdate;
