
import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { CircularProgress, Container, ThemeProvider, createTheme } from '@mui/material';
import { Button} from "react-bootstrap";
import Box from '@mui/material/Box';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const theme = createTheme();
function CourseChangeaccording() {
  return (
    <>
     <ThemeProvider theme={theme}>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');

        .container {
          max-width: 600px;
          width: 100%;
          background: #ffffff;
          border-radius: 0.5rem;
          box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1),
                      0px 5px 12px -2px rgba(0, 0, 0, 0.1),
                      0px 18px 36px -6px rgba(0, 0, 0, 0.1);
          // overflow: hidden;
          margin: 10px;
        }

        .container .title {
          padding: 1px;
          background: #edede9;
        }

        .container .title p {
          font-size: 20px;
          font-weight: 500;
          position: relative;
        }

        .container .title p::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 80px;
          height: 3px;
          background: linear-gradient(to right, #F37A65, #D64141);
        }

        .user_details {
          display: flex;
          flex-direction: column;
          padding: 10px;
        }

        .user_details .input_box {
          width: 70%;
          margin-bottom: 12px;
        }

        .input_box label {
          font-weight: 500;
          margin-bottom: 5px;
          display: block;
        }

        .input_box label::after {
          content: " *";
          color: red;
        }

        .input_box input {
          width: 70%;
          height: 30px;
          border: none;
          outline: none;
          border-radius: 5px;
          font-size: 16px;
          padding-left: 15px;
          box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
          background-color: #f6f8fa;
          font-family: 'Poppins', sans-serif;
          transition: all 120ms ease-out 0s;
        }

        .input_box input:focus,
        .input_box input:valid {
          box-shadow: 0px 0px 0px 2px #AC8ECE;
        }

        .reg_btn {
          padding: 25px;
          margin: 15px 0;
        }

        .reg_btn input {
          height: 37px;
          width: 28%;
          border: none;
          font-size: 18px;
          font-weight: 500;
          cursor: pointer;
        //   background: linear-gradient(to right, #F37A65, #D64141);
           background: #004e92;
          border-radius: 5px;
          color: #ffffff;
          letter-spacing: 1px;
          text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);  
        
        }

        .reg_btn input:hover {
          background:#004e92;
        }

        @media screen and (max-width: 584px) {
          .user_details {
            max-height: 340px;
            overflow-y: scroll;
          }

          .user_details::-webkit-scrollbar {
            width: 0;
          }

          .user_details .input_box {
            width: 100%;
          }

          .gender .category {
            width: 100%;
          }
        }

    
        `}
      </style>
      
      <div className="container" style={{ marginTop: "-29%", marginLeft: "40%" }}>
      <div className="title">
    <p>Update Courses</p>
  </div>
        <form action="#">
          <div className="user_details">
            <div style={{display:"flex"}}>
            <div className="input_box">
              <label htmlFor="name"><b>Course Type</b></label>
              <input type="text" id="name" placeholder="Course Type" required />
         
            </div>
           <Box sx={{ display: 'flex', gap: '10%', alignItems: 'center' }}>
        <Checkbox {...label} defaultChecked color="success" sx={{ transform: 'scale(1.1)' }} />
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            transform: 'scale(1.1)',
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
        />
      </Box>
      </div>
            <div style={{display:"flex"}}>
            <div className="input_box" style={{marginTop:"3px"}}>
              <label htmlFor="username"><b>Course Name</b></label>
              <input type="text" id="username" placeholder="Course Name" required />
            </div>
            <Box sx={{ display: 'flex', gap: '10%', alignItems: 'center' }}>
        <Checkbox {...label} defaultChecked color="success" sx={{ transform: 'scale(1.1)' }} />
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            transform: 'scale(1.1)',
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
        />
      </Box>
      </div>
      <div style={{display:"flex"}}>
            <div className="input_box " style={{marginTop:"3px"}}>
              <label htmlFor="text"><b>Course Session</b></label>
              <input type="text" id="email" placeholder="Course Session" required />
            </div>
            <Box sx={{ display: 'flex', gap: '10%', alignItems: 'center' }}>
        <Checkbox {...label} defaultChecked color="success" sx={{ transform: 'scale(1.1)' }} />
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            transform: 'scale(1.1)',
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
        />
      </Box>
      </div>
          </div>
          <div className="reg_btn"  style={{ marginTop: '-30px' }}>
  {/* <input
    type="Update Course"
    defaultValue="Update Course"
    style={{ textAlign: 'center', marginLeft:"35%" }}
  /> */}

<Button
                                            style={{
                                                marginLeft: "37%",
                                                backgroundColor: "#004e92",
                                                width: "130px",
                                                height: "35px",
                                                padding: "3px",
                                             }}
                                          
                                        >
                                            Update Course
                                        </Button>
</div>
        </form>
      </div>
      </ThemeProvider>
    </>
  );
}

export default CourseChangeaccording;
