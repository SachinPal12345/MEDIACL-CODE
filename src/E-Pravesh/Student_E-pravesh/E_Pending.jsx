import React, { useState, useEffect, useRef } from "react";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import axios from "axios";
import Sidebar from "../../AdminComponent/HodDashboard";
import DatePicker from "react-datepicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import swal from "sweetalert";
import { CardContent } from "@mui/material";

const theme = createTheme();

// const E_Pending = () => {
//   const [approvedStudents, setApprovedStudents] = useState([]);
//   const [collegeAssignments, setCollegeAssignments] = useState({});
//   const [colleges, setColleges] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState("");

//   const userData = JSON.parse(sessionStorage.getItem("AnkitHOD"));
//   const [assignedCollege, setAssignedCollege] = useState();
//   const hodId = userData?.user;
//   const branch1 = userData?.Branch || "";

//   console.log(approvedStudents, "approved");
//   console.log(userData, "userDataa");
//   console.log(branch1, "branch1");

//   const handleClick = async (studentId) => {
//     try {
//       const response = await axios.put("https://sssutms.ac.in/api/approve", {
//         hodId: hodId,
//         studentId,
//         assignedCollege,
//       });

//       swal({
//         title: "Success",
//         text: "Approved Successfully!",
//         icon: "success",
//         buttons: "OK",
//       });
//       if (Array.isArray(response.data.students)) {
//         setApprovedStudents(response.data.students);

//         const initialAssignments = {};
//         response.data.students.forEach((student) => {
//           initialAssignments[student._id] = null;
//         });
//         setCollegeAssignments(initialAssignments);
//       } else {
//         setApprovedStudents([]);
//       }
//     } catch (error) {
//       console.error(error);
//       setApprovedStudents([]);
//     }
//   };

//   const handleCancel = async (studentId) => {
//     try {
//       const response = await axios.post(process.env.REACT_APP_REQ_CANCEL_STD, {
//         studentId,
//       });
//       console.log(response, "cancel api");
//       swal({
//         title: "Success",
//         text: "Request Cancelled Successfully!",
//         icon: "success",
//         buttons: "OK",
//       });

//       setApprovedStudents((prevStudents) =>
//         prevStudents.filter((student) => student._id !== studentId)
//       );
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const fetchApprovedStudents = async () => {
//     try {
//       const response = await axios.get(
//         `https://sssutms.ac.in/apitest/admin/v1/epravesh/pending?branch=${branch1}`
//       );

//       if (Array.isArray(response.data.students)) {
//         setApprovedStudents(response.data.students);

//         const initialAssignments = {};
//         response.data.students.forEach((student) => {
//           initialAssignments[student._id] = null;
//         });
//         setCollegeAssignments(initialAssignments);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const fetchColleges = async (courseName) => {
//     try {
//       const response = await axios.get(
//         `https://sssutms.ac.in/apitest/v1/hod/colleges/course?courseName=${courseName}`,
//       );
//       setColleges(response.data);
//       console.log(response, "course k response");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   console.log(colleges, "ye college hrr");

//   const handleChangeCourse = (event) => {
//     setSelectedCourse(event.target.value);
//     // fetchColleges(event.target.value);
//     setAssignedCollege(event.target.value)
//   };

//   console.log(assignedCollege , "assigned College")

//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(2);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   useEffect(() => {
//     fetchApprovedStudents()
//     if (approvedStudents.length > 0) {
//       console.log("chal raha")
//       const courseName = approvedStudents[0]?.courseName;
//       fetchColleges(courseName);
//     }
//   }, []);
const E_Pending = () => {
  const [approvedStudents, setApprovedStudents] = useState([]);
  const [collegeAssignments, setCollegeAssignments] = useState({});
  const [colleges, setColleges] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState({}); // State for selected courses

  const [assignedCollege, setAssignedCollege] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);

  const userData = JSON.parse(sessionStorage.getItem("AnkitHOD"));
  const hodId = userData?.user;
  const branch1 = userData?.Branch || "";
  const initialFetchDone = useRef(false); // useRef to track initial fetch

  console.log(approvedStudents, "approved");
  console.log(userData, "userDataa");
  console.log(branch1, "branch1");

  const handleClick = async (studentId) => {
    try {
      const response = await axios.put("https://sssutms.ac.in/api/approve", {
        hodId: hodId,
        studentId,
        assignedCollege: selectedCourses[studentId],
      });

      swal({
        title: "Success",
        text: "Approved Successfully!",
        icon: "success",
        buttons: "OK",
      });
      if (Array.isArray(response.data.students)) {
        setApprovedStudents(response.data.students);

        const initialAssignments = {};
        response.data.students.forEach((student) => {
          initialAssignments[student._id] = null;
        });
        setCollegeAssignments(initialAssignments);
      } else {
        setApprovedStudents([]);
      }
    } catch (error) {
      console.error(error);
      setApprovedStudents([]);
    }
  };

  const handleCancel = async (studentId) => {
    try {
      const response = await axios.post(process.env.REACT_APP_REQ_CANCEL_STD, {
        studentId,
      });
      console.log(response, "cancel api");
      swal({
        title: "Success",
        text: "Request Cancelled Successfully!",
        icon: "success",
        buttons: "OK",
      });

      setApprovedStudents((prevStudents) =>
        prevStudents.filter((student) => student._id !== studentId)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const fetchApprovedStudents = async () => {
    try {
      const response = await axios.get(
        `https://sssutms.ac.in/apitest/admin/v1/epravesh/pending?branch=${branch1}`
      );

      if (Array.isArray(response.data.students)) {
        setApprovedStudents(response.data.students);

        const initialAssignments = {};
        response.data.students.forEach((student) => {
          initialAssignments[student._id] = null;
        });
        setCollegeAssignments(initialAssignments);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchColleges = async (courseName) => {
    try {
      const response = await axios.get(
        `https://sssutms.ac.in/apitest/v1/hod/colleges/course?courseName=${courseName}`
      );
      setColleges(response.data);
      console.log(response, "course k response");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeCourse = (studentId, event) => {
    setSelectedCourses({
      ...selectedCourses,
      [studentId]: event.target.value,
    });
  };

  console.log(colleges, "ye college hrr");
  console.log(assignedCollege, "assigned College");

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

  useEffect(() => {
    if (approvedStudents.length > 0 && !initialFetchDone.current) {
      initialFetchDone.current = true;
      const courseName = approvedStudents[0]?.courseName;
      fetchColleges(courseName);
    }
  }, [approvedStudents]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Sidebar />

        <style>
          {`
        .conttable{

            background-color: #e8e5d5;
            width: 90%;
            margin-left: 120px;
            margin-right: auto;
            margin-top: 80px;
            text-align: center;
            max-width: 1200px;

        }



        @media screen and (max-width: 500px){
          .custom-card-content{
            width: 100%; /* Adjust the percentage as needed */
            max-width: 1200px; /* Set a maximum width */
            margin: 0 auto; /* Center align */
          }


          h4{
            margin-top:90px;
          }
        }

    `}
        </style>

        <div className=" conttable shadow p-3 bg-body rounded">
          <h4 style={{ fontFamily: "fantasy" }}>PENDING STUDENT</h4>
          <CardContent>
            <Paper sx={{ width: "100%", overflowX: "auto" }}>
              <TableContainer sx={{ maxHeight: "440px", overflowX: "auto" }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        align="left"
                        style={{
                          backgroundColor: "#023047",
                          color: "white",
                          position: "sticky",
                          top: 0,
                          left: 0,
                          zIndex: 2,
                        }}
                      >
                        <h5
                          style={{
                            fontFamily: "montserrat",
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          S.No.
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          backgroundColor: "#023047",
                          color: "white",
                          position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5
                          style={{
                            fontFamily: "montserrat",
                            minWidth: "80px",
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          Session
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          backgroundColor: "#023047",
                          color: "white",
                          minWidth: "200px",
                          position: "sticky",
                          top: 0,
                          zIndex: 2,
                          left: "60px",
                        }}
                      >
                        <h5
                          style={{
                            fontFamily: "montserrat",
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          Student Name
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          backgroundColor: "#023047",
                          color: "white",
                          minWidth: "200px",
                          position: "sticky",
                          top: 0,
                          zIndex: 2,
                          left: "60px",
                        }}
                      >
                        <h5
                          style={{
                            fontFamily: "montserrat",
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          Admission Type
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          backgroundColor: "#023047",
                          color: "white",
                          position: "sticky",
                          top: 0,
                          zIndex: 2,
                          left: "220px",
                        }}
                      >
                        <h5
                          style={{
                            fontFamily: "montserrat",
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          Email
                        </h5>
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          backgroundColor: "#023047",
                          color: "white",
                          position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5
                          style={{
                            fontFamily: "montserrat",
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          DOB
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          backgroundColor: "#023047",
                          color: "white",
                          position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5
                          style={{
                            fontFamily: "montserrat",
                            fontSize: "20px",
                            minWidth: "150px",
                            fontWeight: "bold",
                          }}
                        >
                          Father's Name
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          backgroundColor: "#023047",
                          color: "white",
                          minWidth: "150px",
                          position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5
                          style={{
                            fontFamily: "montserrat",
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          Mother's Name
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          backgroundColor: "#023047",
                          color: "white",
                          minWidth: "130px",
                          position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5
                          style={{
                            fontFamily: "montserrat",
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          Contact
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          backgroundColor: "#023047",
                          color: "white",
                          minWidth: "130px",
                          position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5
                          style={{
                            fontFamily: "montserrat",
                            minWidth: "100px",
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          Nationality
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          backgroundColor: "#023047",
                          color: "white",
                          minWidth: "150px",
                          position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5
                          style={{
                            fontFamily: "montserrat",
                            fontSize: "20px",
                            minWidth: "150px",
                            fontWeight: "bold",
                          }}
                        >
                          Qualification
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          backgroundColor: "#023047",
                          color: "white",
                          minWidth: "150px",
                          position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5
                          style={{
                            fontFamily: "montserrat",
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          Qualification %
                        </h5>
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          backgroundColor: "#023047",
                          color: "white",
                          minWidth: "130px",
                          position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5
                          style={{
                            fontFamily: "montserrat",
                            fontSize: "20px",
                            minWidth: "150px",
                            fontWeight: "bold",
                          }}
                        >
                          Course Type
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          backgroundColor: "#023047",
                          color: "white",
                          minWidth: "250px",
                          position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5
                          style={{
                            fontFamily: "montserrat",
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          Course Name
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          backgroundColor: "#023047",
                          color: "white",
                          minWidth: "250px",
                          position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5
                          style={{
                            fontFamily: "montserrat",
                            fontSize: "20px",
                            minWidth: "250px",
                            fontWeight: "bold",
                          }}
                        >
                          Course Branch
                        </h5>
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          backgroundColor: "#023047",
                          color: "white",
                          minWidth: "250px",
                          position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5
                          style={{
                            fontFamily: "montserrat",
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          Assign College
                        </h5>
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          backgroundColor: "#023047",
                          color: "white",
                          minWidth: "200px",
                          position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5
                          style={{
                            fontFamily: "montserrat",
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          Check Marksheet
                        </h5>
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          backgroundColor: "#023047",
                          color: "white",
                          position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <h5
                          style={{
                            fontFamily: "montserrat",
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          Edit
                        </h5>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Array.isArray(approvedStudents) &&
                      approvedStudents.map((student, index) => (
                        <TableRow key={index}>
                          <TableCell
                            align="left"
                            style={{
                              position: "sticky",
                              left: 0,
                              color: "red",
                              fontWeight: "bold",
                              backgroundColor: "#fff",
                              zIndex: 1,
                            }}
                          >
                            {index + 1}
                          </TableCell>
                          <TableCell align="left">
                            {student.admissionSession}
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{
                              color: "#6a040f",
                              fontWeight: "bold",
                              fontFamily: "'Open Sans', sans-serif",
                              top: "0",
                              left: "60px",
                              zIndex: "1",
                              position: "sticky",
                            }}
                          >
                            {student.name}
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{
                              color: "#6a040f",
                              fontWeight: "bold",
                              fontFamily: "'Open Sans', sans-serif",
                              top: "0",
                              left: "60px",
                              zIndex: "1",
                              position: "sticky",
                            }}
                          >
                            {student.StudentType}
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{
                              fontWeight: "bold",
                              color: "purple",
                              fontFamily: "'Open Sans', sans-serif",
                              position: "sticky",
                              left: "200px",
                              zIndex: "1",
                              top: "0",
                            }}
                          >
                            {student.email}
                          </TableCell>
                          <TableCell align="left">
                            <DatePicker
                              selected={new Date(student.dob)}
                              readOnly
                              dateFormat="dd/MM/yyyy"
                              className="text-center"
                            />
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{
                              fontFamily: "'Open Sans', sans-serif",
                              fontWeight: "bold",
                            }}
                          >
                            {student.fathersname}
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{
                              fontFamily: "'Open Sans', sans-serif",
                              fontWeight: "bold",
                            }}
                          >
                            {student.mothersname}
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{
                              fontFamily: "'Open Sans', sans-serif",
                              fontWeight: "bold",
                            }}
                          >
                            {student.mobile}
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ fontFamily: "'Open Sans', sans-serif" }}
                          >
                            {student.domicile}
                          </TableCell>
                          <TableCell align="center">
                            {student.qualification}
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{
                              fontFamily: "'Open Sans', sans-serif",
                              fontWeight: "bold",
                            }}
                          >
                            {`${student.LastPercentage}%`}
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ fontFamily: "'Open Sans', sans-serif" }}
                          >
                            {student.courseType}
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{
                              color: "#344e41",
                              fontWeight: "bold",
                              fontFamily: "'Open Sans', sans-serif",
                            }}
                          >
                            {student.courseName}
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{
                              fontFamily: "'Open Sans', sans-serif",
                              fontWeight: "bold",
                            }}
                          >
                            {student.courseBranch}
                          </TableCell>
                          <TableCell align="center">
                            <Form.Select
                              style={{ height: "40px", width: "45vh" }}
                              value={selectedCourses[student._id] || ""}
                              onChange={(event) =>
                                handleChangeCourse(student._id, event)
                              }
                            >
                              <option value="">Select College</option>
                              {colleges.map((college) => (
                                <option key={college._id} value={college.name}>
                                  {college.name}
                                </option>
                              ))}
                            </Form.Select>
                          </TableCell>

                          <TableCell align="center">
                            {student && student.Documents && (
                              <>
                                {student.Documents.marksheet12th ? (
                                  <a
                                    href={student.Documents.marksheet12th}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "blue" }}
                                  >
                                    View 12th Marksheet
                                  </a>
                                ) : student.Documents
                                    .undergraduateCertificate ? (
                                  <a
                                    href={
                                      student.Documents.undergraduateCertificate
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "blue" }}
                                  >
                                    View undergraduate Marksheet
                                  </a>
                                ) : (
                                  "No Marksheet Available"
                                )}
                              </>
                            )}
                          </TableCell>

                          <TableCell
                            align="left"
                            style={{
                              display: "flex",
                              gap: "10px",
                              marginTop: "20px",
                            }}
                          >
                            <Button
                              variant="success"
                              style={{ height: "40px", padding: "10px" }}
                              onClick={() => handleClick(student._id)}
                            >
                              Approve
                            </Button>
                            <Button
                              variant="danger"
                              style={{ height: "40px", padding: "10px" }}
                              onClick={() => handleCancel(student._id)}
                            >
                              Cancel
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <TablePagination
                rowsPerPageOptions={[25, 50, 100]}
                component="div"
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

export default E_Pending;
