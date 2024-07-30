import React, { useState } from "react";
import AdminDashboard from "./AdminDashboard";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { StyledTableCell, StyledTableRow } from "../../../AdminComponent/Style";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import axios from "axios";
import swal from "sweetalert";
import Modal from "react-bootstrap/Modal";

const theme = createTheme();

function AdminUpdt_Del_Course() {
  const [show, setShow] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    admissionSession: "",
    courseName: "",
  });
  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "http://localhost:7786/apitest/v1/session-wise-courses",
        {
          params: {
            admissionSession: formData.admissionSession,
            courseName: formData.courseName,
          },
        }
      );
      const fetchedCourses = response.data.courses;
      if (fetchedCourses.length === 0) {
        // setMessage("Course not found");
        swal({
          icon: "error",
          title: "Oops!",
          text: `Course Not Found ${formData.admissionSession} `,
        });
      } else {
        setCourses(fetchedCourses);
        setMessage("");
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
      setMessage("An error occurred while fetching courses");
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Modal show={show} onHide={handleClose} style={{ marginTop: "40px" }}>
          <Modal.Header closeButton>
            <Modal.Title>Add field</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TableHead>
              <TableRow>
                <StyledTableCell
                  align="left"
                  style={{
                    backgroundColor: "#e6ecf0",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Admission Session
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    backgroundColor: "#e6ecf0",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Course Name
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{
                    backgroundColor: "#e6ecf0",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Edit
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map((course, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {course.admissionSession}
                  </StyledTableCell>
                  <StyledTableCell>
                    {course.courseNames.map((cn) => cn.courseName).join(", ")}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Button variant="warning" onClick={handleShow}>
                      Edit
                    </Button>
                    <Button variant="danger">Delete</Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Modal.Body>
        </Modal>
        <AdminDashboard />
        <Container
          className="shadow p-3 bg-body rounded"
          style={{ marginTop: "80px", marginLeft: "11%" }}
        >
          <h3
            style={{
              fontWeight: "inherit",
              backgroundImage: "linear-gradient(to right, #004e92, #990033)",
              borderRadius: "10px",
              color: "whitesmoke",
              padding: "5px",
            }}
          >
            Update & Delete Student Course
          </h3>
          <Form style={{ marginTop: "3%" }} onSubmit={handleSubmit}>
            <Row>
              <Form.Group as={Col} controlId="admissionSession">
                <Form.Label>Admission Session</Form.Label>
                <div>
                  <Form.Control
                    type="text"
                    name="admissionSession"
                    value={formData.admissionSession}
                    onChange={handleChange}
                    // autoComplete="off"
                  />
                </div>
              </Form.Group>
              <Form.Group as={Col} controlId="courseName">
                <Form.Label>Course Name</Form.Label>
                <div>
                  <Form.Control
                    type="text"
                    name="courseName"
                    value={formData.courseName}
                    onChange={handleChange}
                    // autoComplete="off"
                  />
                </div>
              </Form.Group>
              <Form.Group as={Col} controlId="searchButton">
                <Button
                  variant="primary"
                  type="submit"
                  style={{ marginLeft: "10px" }}
                >
                  Search
                </Button>
              </Form.Group>
            </Row>
          </Form>
        </Container>

        {message && (
          <Container
            className="shadow p-3 bg-body rounded"
            style={{
              marginTop: "3%",
              color: "red",
              width: "80%",
              backgroundColor: "#ffcccc",
            }}
          >
            {message}
          </Container>
        )}

        {courses.length > 0 && (
          <Form style={{ marginTop: "3%" }}>
            <Row>
              <Container
                className="shadow p-3 bg-body rounded"
                style={{
                  width: "80%",
                  backgroundColor: "#00cdac",
                  marginLeft: "12%",
                }}
              >
                <TableContainer component={Paper} sx={{ minWidth: 50 }}>
                  <Table sx={{ minWidth: 50 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell
                          align="left"
                          style={{
                            backgroundColor: "#e6ecf0",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          Admission Session
                        </StyledTableCell>
                        <StyledTableCell
                          style={{
                            backgroundColor: "#e6ecf0",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          Course Name
                        </StyledTableCell>
                        <StyledTableCell
                          align="left"
                          style={{
                            backgroundColor: "#e6ecf0",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          Edit
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {courses.map((course, index) => (
                        <StyledTableRow key={index}>
                          <StyledTableCell component="th" scope="row">
                            {course.admissionSession}
                          </StyledTableCell>
                          <StyledTableCell>
                            {course.courseNames
                              .map((cn) => cn.courseName)
                              .join(", ")}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            <Button variant="warning" onClick={handleShow}>
                              Edit
                            </Button>
                            <Button variant="danger">Delete</Button>
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Container>
            </Row>
          </Form>
        )}
      </ThemeProvider>
    </div>
  );
}

export default AdminUpdt_Del_Course;






