import React, { useState } from "react";
import Website from "./Website";
import b from "../images/sssutms.jpg";
import add from "../images/admission.png";
import { Link } from "react-router-dom";
function MainPage() {
  const [isPopupVisible, setPopupVisible] = useState(true);

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <style>
        {`


.addclass{
// margin-top:20px;
height:300px;
width:400px}
          .popup-container {
            position: fixed;
            top: 20px;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }

          .popup-content {
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            position: relative;
            width: 80%;
            max-width: 450px;
            text-align: center;
          }

          .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 20px;
            cursor: pointer;
          }

          img {
            max-width: 100%;
            object-fit: cover;
          }
       
 .d-flex {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .main-content {
            padding: 20px;
          }
        `}
      </style>
      <div>
        {isPopupVisible && (
          <div className="popup-container">
            <div className="popup-content">
              <span className="close-btn" onClick={handleClosePopup}>
                &times;
              </span>

              <div className="nav-bar d-flex">
                <a href="tel:0098 765 432" className="contact-number d-flex">
                  <span>
                    <img src={b} className="image" alt="Logo" />
                  </span>
                  <span
                    className="spann"
                    style={{ color: "#C80036", fontWeight: 700 }}
                  >
                    SRI SATYA SAI UNIVERSITY OF TECHNOLOGY & MEDICAL SCIENCES
                  </span>
                </a>
              </div>
              <img className="addclass" src={add}></img>
              <Link to="/admission/enquiry">
              <button
                type="button"
                // className="btn btn-danger"
                style={{
                  color: "white",
                  display: "flex",
                  backgroundColor: "#FFB200",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "8px",
                  height: "45px",
                  width: "150px",
                  marginTop: "10px",
                }}
              >
                <b style={{ margin: "0" }}>Apply Now</b>
              </button>
              </Link>
            </div>
          </div>
        )}
        <div>
          <Website />
        </div>
      </div>
    </>
  );
}

export default MainPage;
