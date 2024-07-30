import React, { useState } from "react";
import { FormControl } from "@mui/material";
import { Button, Row, Col, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import AdminDashboard from "./AdminDashboard";
import CourseChangeaccording from "./CourseChangeaccording";




const  CourseChanges = () => {
    const [admissionSession, setSession] = useState(''); 
    const [courseType, setCourseType] = useState('');
    const [courseName, setCourse] = useState(''); 
    const [courseBranch, setBranch] = useState('');
    const [assignedCollege, setCollege] = useState('');
    const [showTable, setShowTable] = useState(false)

    const handleSearch = () => {
      setShowTable(true)
    }
  console.log(showTable,"showtableeeee")
    return (
        <>
            <AdminDashboard />
            <style>
                {`
        .shadow-box {
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          border-radius: 10px;
          padding: 10px;
          margin-top: 20px;
          margin-right:600px;
        }

        .header {
          height: 40px;
          background: linear-gradient(#004e92, #990033);
          border-radius: 10px;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          font-family: italic;
        }

        .scroll-container {
          overflow-y: auto;
          margin-top: 10px;
        }

        .login-input {
          width: 97%;
          border: none;
          border-bottom: 2px solid rgba(0, 0, 0, 0.2);
          background: transparent;
          font-size: 0.9rem;
          font-family: 'Roboto', sans-serif;
          font-weight: 500;
          transition: border-bottom 0.2s;
        }

        .login-input:focus {
          outline: none;
          border-bottom: 2px solid #344e41;
        }

        @media (max-width: 768px) {
          .shadow-box {
            padding: 10px;
            margin-top: 10px;
          }

          .header {
            font-size: 16px;
            height: 40px;
          }

          .login-input {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 576px) {
          .shadow-box {
            margin: 10px;
            margin-Left:76px;
          }

          .container-fluid {
            width: 100%;
            padding-right: 0;
            padding-left: 0;
          }
        }
        @media (min-width: 992px) {
  .custom-laptop-style {
     margin-left:5%;
  }
}

      `}
            </style>

            <Container fluid style={{ paddingTop: '60px' ,width:"95%",marginLeft:"11px"}}>
                <Row>
                    <Col xs={12} sm={10} md={10} lg={9} xl={8}
                        className="custom-laptop-style">
                        <div className="shadow-box">
                            <div className="header">Course Chages</div>
                            <div className="scroll-container" style={{ height: "270px" }}>
                                <form style={{ padding: "20px" }}>
                                    <Row>
                                        <FormControl>
                                            <label>
                                                <h1
                                                    style={{
                                                        color: "#264653",
                                                        fontSize: "16px",
                                                        fontWeight: "bold",
                                                        fontFamily: "sans-serif",
                                                    }}
                                                >
                                                    Course Type *
                                                </h1>
                                            </label>
                                            <select
                                                className="login-input"
                                                required={true}
                                                onChange={(e) => setSession(e.target.value)}
                                                autoFocus={true}

                                            >

                                                <option value="option1"> Select</option>
                                                <option value="2023">UG</option>
                                                <option value="2024">PG</option>
                                            </select>
                                        </FormControl>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <FormControl>
                                            <label>
                                                <h1
                                                    style={{
                                                        color: "#264653",
                                                        fontSize: "16px",
                                                        fontWeight: "bold",
                                                        fontFamily: "sans-serif",
                                                    }}
                                                >
                                                    Course Name *
                                                </h1>
                                            </label>
                                            <select
                                                className="login-input"
                                                required={true}
                                                onChange={(e) => setCourseType(e.target.value)}
                                                autoFocus={true}
                                            >

                                                <option value="option1"> Select</option>
                                                <option value="UG">UG</option>

                                            </select>
                                        </FormControl>
                                    </Row>

                                    <br></br>
                                    <Row>
                                        <FormControl>
                                            <label>
                                                <h1
                                                    style={{
                                                        color: "#264653",
                                                        fontSize: "16px",
                                                        fontWeight: "bold",
                                                        fontFamily: "sans-serif",
                                                    }}
                                                >
                                                    Course Session *
                                                </h1>
                                            </label>
                                            <select
                                                className="login-input"
                                                required={true}
                                                onChange={(e) => setCourse(e.target.value)}
                                                autoFocus={true}
                                            >
                                                {/* Add your dropdown options here */}
                                                <option value="option1"> Select</option>
                                                <option value="BACHELOR OF AYURVEDIC MEDICINE AND SURGERY">BAMS</option>
                                                <option value="BACHELOR OF HOMEOPATHY MEDICINE AND SURGERY">BHMS</option>
                                            </select>
                                        </FormControl>
                                    </Row>
                                 
                                    {/* <Row>
                                        <FormControl>
                                            <label>
                                                <h1
                                                    style={{
                                                        color: "#264653",
                                                        fontSize: "18px",
                                                        fontWeight: "bold",
                                                        fontFamily: "sans-serif",
                                                    }}
                                                >
                                                    Branch *
                                                </h1>
                                            </label>
                                            <select
                                                className="login-input"
                                                required={true}
                                                onChange={(e) => setBranch(e.target.value)}
                                                autoFocus={true}
                                            >
                                             
                                                <option value="option1"> Select</option>
                                                {courseName === "BACHELOR OF AYURVEDIC MEDICINE AND SURGERY" && <option value="AYURVEDIC MEDICINE AND SURGERY">AYURVEDIC MEDICINE AND SURGERY</option>}
                                                {courseName === "BACHELOR OF HOMEOPATHY MEDICINE AND SURGERY" && <option value="HOMEOPATHY">HOMEOPATHY</option>}
                                            </select>
                                        </FormControl>
                                    </Row> */}



                                    
                                    {/* <Row>
                                        <FormControl>
                                            <label>
                                                <h1
                                                    style={{
                                                        color: "#264653",
                                                        fontSize: "18px",
                                                        fontWeight: "bold",
                                                        fontFamily: "sans-serif",
                                                    }}
                                                >
                                                    College *
                                                </h1>
                                            </label>
                                            <select
                                                className="login-input"
                                                required={true}
                                                onChange={(e) => setCollege(e.target.value)}
                                                autoFocus={true}
                                            >
                                                <option value="option1"> Select</option>
                                                {courseName === "BACHELOR OF AYURVEDIC MEDICINE AND SURGERY" && <option value="School of Ayurveda and Siddha Studies">School of Ayurveda and Siddha Studies</option>}
                                                {courseName === "BACHELOR OF HOMEOPATHY MEDICINE AND SURGERY" && <option value="School of Homoeopathy">School of
                                                    Homoeopathy</option>}
                                            </select>
                                        </FormControl>
                                    </Row> */}
                                   



                                    <br></br>
                                   
                                        <Button
                                            style={{
                                                marginLeft: "30px",
                                                backgroundColor: "#004e92",
                                                width: "80px",
                                                height: "30px",
                                                padding: "3px",
                                             }}
                                            onClick={handleSearch}
                                        >
                                            Search
                                        </Button>
                                  
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div style={{ width: '88%' }}> 
          {showTable && (
            <div>
              <CourseChangeaccording />
            </div>
          )}
        </div>
        </>
    )
}

export default  CourseChanges 

