import React, { useState, useEffect } from "react";
import OnlyHeader from "../OnlyHeader";
import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
// import { CandidateInfoContext } from "../../E-Pravesh/Student_E-pravesh/Context.jsx";
// import { useContext } from 'react';
import bg from "../../images/waiting.jpg";
function E_Waiting() {
  // const { candidateInfo } = useContext(CandidateInfoContext);

  return (
    <>
      <style>
        {`
      
    .main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 20px;
    }

    .card {
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 20px;
      width: 90%;
      max-width: 800px;
      margin: 20px auto;
    }
      
     .main-div{
         display:flex;
         align-items:center;
         justify-content:space-between;
    }

    button:hover {
      opacity: 0.8;
    }

    .center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
      .first-div p{
      
         font-size:16px;
         font-weight:400;
      }

        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-top: 4px solid #11acf3;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
      </style>

      <OnlyHeader />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="card">
          <div className="main-div">
            <div className="first-div">
              <h3 style={{ marginBottom: "30px" }}>Congratulations Candidate,</h3>

              {/* <p>Course Type: {courseType}</p>
          <p>Course Name: {courseName}</p>
          <p>Course Branch: {courseBranch}</p> */}

              <p>
                Your details have been Submitted Successfully. Your Admision is Provisional and it will be Confirm subject to submission of your Anuual Fee and Verification of Document at Departement from Originals.
              </p>
              <p style={{color:"black"}}>
             <b>
             Admission Cell <br/>
             SSSUTMS</b> 
              </p>
             
             
            </div>
            {/* <div>
             <img src={bg}  width={200} height={200} />
          </div> */}
          </div>
          <form>
            <Link to="/erp/studentlogin">
              <div className="col-12 center">
                <Button
                  style={{
                    margin: "30px auto",
                    display: "block",
                    width: "20%",
                    backgroundImage:
                      "linear-gradient(96deg, #ff5f6d 0%, #ffc371 100%)",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "14px !important",
                  }}
                  type="submit"
                >
                  Log Out
                </Button>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default E_Waiting;
