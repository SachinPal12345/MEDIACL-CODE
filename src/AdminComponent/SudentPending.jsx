import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { StyledTableCell, StyledTableRow } from "../AdminComponent/Style.jsx"
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import axios from "axios";
import Sidebar from "./HodDashboard";
import DatePicker from "react-datepicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import swal from "sweetalert";
import { CardContent } from "@mui/material";
import { Link } from "react-router-dom";

const theme = createTheme();

const Pending = () => {
  const [approvedStudents, setApprovedStudents] = useState([]);
  const [collegeAssignments, setCollegeAssignments] = useState({});

  const userData = JSON.parse(sessionStorage.getItem("AnkitHOD"));
  const [assignedCollege, setAssignedCollege] = useState();
  const hodId = userData?.user;

  const branch1 = userData.Branch;
  // console.log("Branch:", branch1);

  const AYURVEDIC = "AYURVEDIC MEDICINE AND SURGERY";

  const collegeOptions = {
    HOMEOPATHY: ["School of Homeopathy"],
    AYURVEDIC: ["School of Ayurveda and Siddha Studies"],
  };
  const branchFirstWord = branch1.split(' ')[0];
  // console.log(branchFirstWord, 'ding ding ding ')
  // console.log("College Options:", collegeOptions[branchFirstWord]);
  const handleCollegeChange = (studentId, collegeName) => {
    setCollegeAssignments((prevAssignments) => {

      setAssignedCollege(collegeName);
      return {
        ...prevAssignments, 
        [studentId]: collegeName,
      };
    });
  };

  const handleClick = async (studentId) => {
    try {
      const response = await axios.put(process.env.REACT_APP_APPROVE_STD, {
        hodId: hodId,
        studentId,
        assignedCollege,
      });

      swal({
        title: "Success",
        text: "Approved Successfully!",
        icon: "success",
        buttons: "OK",
      });

      const updatedResponse = await axios.get(
       process.env.REACT_APP_REG_REQ_STD + `${branch1}`
      );
      setApprovedStudents(updatedResponse.data.students);

      // Reset college assignments
      const initialAssignments = {};
      updatedResponse.data.students.forEach((student) => {
        initialAssignments[student._id] = null;
      });
      setCollegeAssignments(initialAssignments);
    } catch (error) {
      console.error(error);
    }
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleCancel = async (studentId) => {
    // console.log(studentId , 'student ki id ')
    try {
      const response = await axios.post(
      process.env.REACT_APP_REQ_CANCEL_STD,
        {
          studentId,
        }
      );
      console.log(response, "cancel api")
      swal({
        title: "Success",
        text: "Request Cancelled Successfully!",
        icon: "success",
        buttons: "OK",
      });

    } catch (error) {
      console.error(error);
    }
  };
  ////////////////////////////////////////////////////////////////////////////////

  const fetchApprovedStudents = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_REG_REQ_STD + `${branch1}`
      );

      setApprovedStudents(response.data.students);
      const initialAssignments = {};
      response.data.students.forEach((student) => {
        initialAssignments[student._id] = null;
      });
      setCollegeAssignments(initialAssignments);
    } catch (error) {
      console.error(error);
    }
  };
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    fetchApprovedStudents();
  }, []);

  ////////////////////datepicker/////////////////
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  return (
    <>

      <ThemeProvider theme={theme}>
        <Sidebar />
        <div
          className="shadow p-3  bg-body rounded"
          style={{


            backgroundColor: "#e8e5d5",
            width: "90%", 
            marginLeft: "60px",
            marginRight: "auto", 
            marginTop: "80px",
            textAlign: "center",
            maxWidth: "1200px", 
          }}



        >
          <h4 style={{ fontFamily: 'fantasy' }}> PENDING STUDENT </h4>
          <CardContent>
            <Paper sx={{ width: "100%", overflow: 'auto' }}>
              <TableContainer sx={{ maxHeight: "440px", }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        align="left"
                        style={{
                          backgroundColor: '#023047', color: 'white', position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5>
                          <b>S.No.</b>
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          backgroundColor: '#023047', color: 'white', position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5>
                          <b>Session</b>
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          backgroundColor: '#023047', color: 'white', minWidth: '200px', position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >

                        <h5>
                          <b>Student Name</b>
                        </h5>
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          backgroundColor: '#023047', color: 'white', position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5>
                          <b> Email</b>
                        </h5>
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          backgroundColor: '#023047', color: 'white', position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5>
                          <b>DOB</b>
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          backgroundColor: '#023047', color: 'white', position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5>
                          <b>Father's Name</b>
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          backgroundColor: '#023047', color: 'white', minWidth: '150px', position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5>
                          <b>Mother's Name</b>
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          backgroundColor: '#023047', color: 'white', minWidth: '130px', position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5>
                          <b>Contact</b>
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          backgroundColor: '#023047', color: 'white', minWidth: '130px', position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5>
                          <b>Nationality</b>
                        </h5>
                      </TableCell>

                      {/* <TableCell
                        align="left"
                        style={{
                          backgroundColor: '#023047', color: 'white', minWidth: '130px', position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5>
                          <b>Qualification</b>
                        </h5>
                      </TableCell> */}
                      <TableCell
                        align="left"
                        style={{
                          backgroundColor: '#023047', color: 'white', minWidth: '150px', position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5>
                          <b>Qualification %</b>
                        </h5>
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          backgroundColor: '#023047', color: 'white', minWidth: '130px', position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5>
                          <b>Course Type</b>
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          backgroundColor: '#023047', color: 'white', minWidth: '200px', position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5>
                          <b>Course Name</b>
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          backgroundColor: '#023047', color: 'white', minWidth: '200px', position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5>
                          <b>Course Branch</b>
                        </h5>
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          backgroundColor: '#023047', color: 'white', minWidth: '250px', position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5>
                          <b>Assign College</b>
                        </h5>
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          backgroundColor: '#023047', color: 'white', minWidth: '200px', position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5>
                          <b>Check Marksheet</b>
                        </h5>
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          backgroundColor: '#023047', color: 'white', position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5>
                          <b>Edit</b>
                        </h5>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {approvedStudents.map((student, index) => (
                      <TableRow key={index}>
                        <TableCell align="left">{index + 1}</TableCell>
                        <TableCell align="left">2023</TableCell>
                        <TableCell align="left" style={{ color: '#6a040f', fontWeight: 'bold' }}>{student.name}</TableCell>
                        <TableCell align="left">{student.email}</TableCell>
                        <TableCell align="left">
                          <DatePicker
                            selected={selectedDate || new Date(student.dob)}
                           readOnly
                            dateFormat="dd/MM/yyyy"
                            className="text-center"
                          />
                        </TableCell>
                        <TableCell align="left">{student.fathersname}</TableCell>
                        <TableCell align="left">{student.mothersname}</TableCell>
                        <TableCell align="left">{student.mobile}</TableCell>
                        <TableCell align="left">{student.domicile}</TableCell>
                        <TableCell align="center">
                          {student.qualification}
                        </TableCell>
                        {/* <TableCell align="center">
                          {`${student.qualificationPercentage}%`}
                        </TableCell> */}

                        <TableCell align="center">{student.courseType}</TableCell>
                        <TableCell align="left">{student.courseName}</TableCell>
                        <TableCell align="left">{student.courseBranch}</TableCell>
                        <TableCell align="center">
                          <Form.Select
                            style={{ height: "40px", width: "45vh" }}
                            value={collegeAssignments[student._id] || ""}
                            onChange={(e) =>
                              handleCollegeChange(student._id, e.target.value)
                            }
                          >
                            <option value="">Select College</option>
                            {collegeOptions[branchFirstWord]?.map((college, index) => (
                              <option key={index} value={college}>
                                {college}
                              </option>
                            ))}
                          </Form.Select>
                        </TableCell>
                        <TableCell align="center">
                          {student && student.Documents?.marksheet12th && (
                            <Link
                             to={student.Documents.marksheet12th}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: 'blue' }}
                            >
                              View Marksheet
                            </Link>
                          )}
                        </TableCell>

                        <TableCell align="left" style={{ display: "flex", gap: '10px', marginTop: '20px' }}>
                          <Button
                            variant="success"
                            style={{ height: '40px', padding: '10px' }}
                            onClick={() => handleClick(student._id)}
                          >
                            Approve
                          </Button>
                          <Button variant="danger" style={{ height: '40px', padding: '10px' }} onClick={() => handleCancel(student._id)}> Cancel</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <TablePagination
                rowsPerPageOptions={[25, 50, 100]}
                component="div"
                count={approvedStudents.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </CardContent>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Pending;