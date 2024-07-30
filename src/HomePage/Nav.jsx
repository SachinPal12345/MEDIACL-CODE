import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/sssutms.jpg";
import excell from "../images/NavIMG/Resarch/centerofexcell.pdf";
import NIRF_Eng from "../images/NRIF_Eng.pdf";
import NIRF_Agri from "../images/NRIF_Agri.pdf";
import NIRF_Phar from "../images/NIRF_Phar..pdf";
import PDF from "../PDF/PHD/PHD.pdf";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);

  const [isOpen12, setIsOpen12] = useState(false);
  const [isOpen13, setIsOpen13] = useState(false);
  const [isOpen14, setIsOpen14] = useState(false);
  const [isOpen15, setIsOpen15] = useState(false);
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleMouseEnter1 = () => {
    setIsOpen1(true);
  };

  const handleMouseLeave1 = () => {
    setIsOpen1(false);
  };
  const handleMouseEnter2 = () => {
    setIsOpen2(true);
  };

  const handleMouseLeave2 = () => {
    setIsOpen2(false);
  };
  const handleMouseEnter3 = () => {
    setIsOpen3(true);
  };

  const handleMouseLeave3 = () => {
    setIsOpen3(false);
  };
  const handleMouseEnter4 = () => {
    setIsOpen4(true);
  };

  const handleMouseLeave4 = () => {
    setIsOpen4(false);
  };
  const handleMouseEnter5 = () => {
    setIsOpen5(true);
  };

  const handleMouseLeave5 = () => {
    setIsOpen5(false);
  };

  const handleMouseEnter6 = () => {
    setIsOpen6(true);
  };

  const handleMouseLeave6 = () => {
    setIsOpen6(false);
  };

  const handleMouseEnter8 = () => {
    setIsOpen8(true);
  };

  const handleMouseLeave8 = () => {
    setIsOpen8(false);
  };

  const handleMouseEnter9 = () => {
    setIsOpen9(true);
  };

  const handleMouseLeave9 = () => {
    setIsOpen9(false);
  };
  const handleMouseEnter10 = () => {
    setIsOpen10(true);
  };

  const handleMouseLeave10 = () => {
    setIsOpen10(false);
  };

  const handleMouseEnter12 = () => {
    setIsOpen12(true);
  };

  const handleMouseLeave12 = () => {
    setIsOpen12(false);
  };

  const handleMouseEnter13 = () => {
    setIsOpen13(true);
  };

  const handleMouseLeave13 = () => {
    setIsOpen13(false);
  };
  const handleMouseEnter14 = () => {
    setIsOpen14(true);
  };

  const handleMouseLeave14 = () => {
    setIsOpen14(false);
  };

  const handleMouseEnter15 = () => {
    setIsOpen15(true);
  };

  const handleMouseLeave15 = () => {
    setIsOpen15(false);
  };
  return (
    <>
      <style>{`
      .navbar {
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
        background-color:#D2E0FB;
        position:sticky;
      }



a.dropdown-item p.pstyle {
 
  font-size: 14px;
  color: black;
  font-family: "Teko", sans-serif;
 
  margin-bottom:-10px;
 
  padding: 0;
 
}

.down
{  
   font-size: 20px;
   font-family: 'Open Sans', sans-serif;
    margin-top:-8px;
      margin-bottom:-10px;
      padding:0 ;
     }


      
a.dropdown-item p.pstyle1 {
 
  font-size: 14px;
  color: #C80036;
  font-family: "Teko", sans-serif;
 
  margin-bottom:-8px;
 font-weight:700px;
  padding: 0;
 
}

      // .navbar-brand{
      //   pading-right: 80px;
      // }
      .navbar .navbar-brand img {
        max-width: 100px;
      }
      .navbar .navbar-nav .nav-link {
        color: #000;
      }
      @media screen and (min-width: 1024px) {
        .navbar {
          letter-spacing: 0.1em;
        }
        .navbar .navbar-nav .nav-link {
          padding: 0.5em 1em;
        }
        .search-and-icons {
          width: 30%;
        }
        .search-and-icons form {
          flex: 1;
        }
      }
      @media screen and (min-width: 768px) {
        .navbar .navbar-brand img {
          max-width: 4em;
        }


      .navbar-toggler{
          backgound-color:oragne;
      }

        .navbar .navbar-collapse {
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-end;
        }
        .search-and-icons {
          display: flex;
          align-items: center;
        }
      }
      .search-and-icons form input {
        border-radius: 0;
        height: 2em;
        background: black
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='grey' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'/%3E%3C/svg%3E")
          no-repeat 95%;
      }
      .search-and-icons form input:focus {
        background: black;
        box-shadow: none;
      }
      .search-and-icons .user-icons div {
        padding-right: 1em;
      }
      .contact-info p,
      .contact-info a {
        font-size: 0.7em;
        padding-right: 2em;
        // color: grey;
      }
      
      .contact-info a {
        padding-right: 0;
      }

      . {
        font-size: 0.8rem; /* Adjust the size as needed */
        font-weight:700er;

      }

  @import url('https://fonts.googleapis.com/css2?family=Basic&family=Doppio+One&display=swap')

  
    `}</style>

      <nav
        className="navbar navbar-expand-md bg-body-tertiary sticky-top"
        style={{ width: "100%", backgroundColor: "#D2E0FB" }}
      >
        <div className="container-xl" style={{ width: "100%" }}>
          <a className="navbar-brand">
            <Link to="/">
              <img
                style={{ marginLeft: "-5px", height: "70px", width: "70px" }}
                src={logo}
                alt="Logo"
              />
            </Link>
          </a>
          <button
            style={{ backgroundColor: "#EEEEEE" }}
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i class="fa-solid fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="contact-info d-md-flex">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter} 
                  onMouseLeave={handleMouseLeave}
                >
                  <h1
                    style={{
                      fontSize: "12px",
                      textTransform: "uppercase",
                      fontFamily: "'Anton', sans-serif ",
                      fontWeight: 700,
                    }}
                  >
                    <a
                      className="nav-link dropdown-toggle"
                      style={{
                        textTransform: "upperCase",
                        fontFamily: "'Roboto',",
                        color: "#dd2d4a",
                        fontWeight: 800,
                        fontSize: "13px",
                      }}
                    >
                      {" "}
                      Academic{" "}
                    </a>
                  </h1>

                  <div
                    className={`dropdown-menu ${isOpen ? "show" : ""}`}
                    style={{ borderRadius: "10px" }}
                  >
                    <Link
                      className="dropdown-item"
                      to="/academic-calender"
                      style={{ marginTop: "-10px", width: "250px" }}
                    >
                      {" "}
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Academic Calendar
                      </p>
                    </Link>
                    <Link className="dropdown-item" to="/studymaterial">
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Study Materials
                      </p>
                    </Link>
                    <Link className="dropdown-item" to="/scholarship">
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Scholarship
                      </p>
                    </Link>
                    <Link
                      className="dropdown-item "
                      to="/approval"
                      
                    >
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Approvals
                      </p>
                    </Link>
                  </div>
                </li>
                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter10}
                  onMouseLeave={handleMouseLeave10}
                >
                  <h1
                    style={{
                      fontSize: "12px",
                      textTransform: "uppercase",
                      fontFamily: "'Anton', sans-serif ",
                      fontWeight: 700,
                    }}
                  >
                    <a
                      className="nav-link dropdown-toggle"
                      style={{
                        textTransform: "upperCase",
                        fontFamily: "'Roboto',",
                        color: "#dd2d4a",
                        fontWeight: 800,
                        fontSize: "13px",
                      }}
                    >
                      {" "}
                      RESEARCH{" "}
                    </a>
                  </h1>

                  <div
                    className={`dropdown-menu ${isOpen10 ? "show" : ""}`}
                    style={{ borderRadius: "10px" }}
                  >
                    <Link
                      className="dropdown-item "
                      to="/resarch-promotion-policy"
                      style={{ marginTop: "-8px" }}
                    >
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Research & Promotion Policy
                      </p>
                    </Link>
                    <Link className="dropdown-item " to="/doctoral-phd">
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Doctoral Programs PhD
                      </p>
                    </Link>
                    <Link
                      className="dropdown-item "
                      to={excell}
                      target="_blank"
                    >
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        {" "}
                        Centre Of Excellence
                      </p>
                    </Link>
                    <Link className="dropdown-item " to="/consultancy-services">
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Consultancy Services{" "}
                      </p>
                    </Link>
                    <Link className="dropdown-item " to="/mou-collaboration">
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        {" "}
                        MOU & Collaboration
                      </p>
                    </Link>
                    <a className="dropdown-item ">
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Centre For Development Of Entreprenurship
                      </p>
                    </a>
                  </div>
                </li>

                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave1}
                >
                  <h1
                    style={{
                      fontSize: "12px",
                      textTransform: "uppercase",
                      fontFamily: "'Anton', sans-serif ",
                      fontWeight: 700,
                    }}
                  >
                    <a
                      className="nav-link dropdown-toggle"
                      style={{
                        textTransform: "upperCase",
                        fontFamily: "'Roboto',",
                        color: "#dd2d4a",
                        fontWeight: 800,
                        fontSize: "13px",
                      }}
                    >
                      {" "}
                      Admissions{" "}
                    </a>
                  </h1>

                  <div
                    className={`dropdown-menu ${isOpen1 ? "show" : ""}`}
                    style={{ borderRadius: "10px" }}
                  >
                    <Link
                      className="dropdown-item"
                      to="#"
                      style={{ marginTop: "-10px", width: "250px" }}
                    >
                      {" "}
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Admission Registration
                      </p>
                    </Link>
                    <a className="dropdown-item">
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Admission Notice
                      </p>
                    </a>
                    <a className="dropdown-item">
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Fee Structure
                      </p>
                    </a>
                  </div>
                </li>


                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter5}
                  onMouseLeave={handleMouseLeave5}
                >
                  <h1
                    style={{
                      fontSize: "12px",
                      fontFamily: "'Anton', sans-serif ",
                      textTransform: "uppercase",
                      fontWeight: 800,
                    }}
                  >
                    {" "}
                    <a
                      className="nav-link dropdown-toggle"
                      style={{ color: "#dd2d4a", fontSize: "13px" }}
                    >
                      DOWNLOAD
                    </a>
                  </h1>

                  <ul
                    className={`dropdown-menu ${isOpen5 ? "show" : ""}`}
                    style={{ borderRadius: "10px" }}
                  >
                    <li
                      className="nav-item dropend"
                      onMouseEnter={handleMouseEnter13}
                      onMouseLeave={handleMouseLeave13}
                    >
                      <p
                        style={{
                          fontFamily: "'Open Sans',sans-serif",
                          fontSize: "20px",
                          color: "#C80036",
                          marginTop: "-10px",
                          marginLeft: "5px",
                        }}
                      >
                        {" "}
                        <a
                          className="nav-link dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                       <b> Scheme{" "}</b> 
                        </a>
                      </p>

                      <ul
                        className={`dropdown-menu ${isOpen13 ? "show" : ""}`}
                        style={{ marginLeft: "99%", marginTop: "-50px" }}
                      >
                        <li>
                          <Link to="/B.E-Scheme">
                            <a
                              className="dropdown-item"
                              style={{ fontSize: "inherit" }}
                            >
                              <p className="pstyle1">BE</p>
                            </a>
                          </Link>
                        </li>{" "}
                        <li>
                          <Link to="/MBA-Scheme">
                            <a
                              className="dropdown-item"
                              style={{ fontSize: "inherit" }}
                            >
                              <p className="pstyle1">MBA</p>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/MCA-Scheme">
                            <a
                              className="dropdown-item"
                              style={{ fontSize: "inherit" }}
                            >
                              <p className="pstyle1">MCA</p>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/M.Tech-Scheme">
                            <a
                              className="dropdown-item"
                              style={{ fontSize: "inherit" }}
                            >
                              <p className="pstyle1">MTech</p>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/BHMCT-Scheme">
                            <a
                              className="dropdown-item"
                              style={{ fontSize: "inherit" }}
                            >
                              <p className="pstyle1">BHMCT</p>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/BHMS-Scheme">
                            <a
                              className="dropdown-item"
                              style={{ fontSize: "inherit" }}
                            >
                              <p className="pstyle1">BHMS</p>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/UTD-Scheme">
                            <a
                              className="dropdown-item"
                              style={{ fontSize: "inherit" }}
                            >
                              <p className="pstyle1">UTD</p>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/Education-Scheme">
                            <a
                              className="dropdown-item"
                              style={{ fontSize: "inherit" }}
                            >
                              <p className="pstyle1">Education</p>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/Pharmacy-scheme">
                            <a
                              className="dropdown-item"
                              style={{ fontSize: "inherit" }}
                            >
                              <p className="pstyle1">Pharmacy</p>
                            </a>
                          </Link>
                        </li>{" "}
                        <li>
                          <Link to="/Paramedical-Scheme">
                            <a
                              className="dropdown-item"
                              style={{ fontSize: "inherit" }}
                            >
                              <p className="pstyle1">Paramedical</p>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/BLIBISC-Scheme">
                            <a
                              className="dropdown-item"
                              style={{ fontSize: "inherit" }}
                            >
                              <p className="pstyle1">B.Lib.I.Sc.</p>
                            </a>
                          </Link>
                        </li>{" "}
                        <li>
                          <Link to="/BSCHMCS-Scheme">
                            <a
                              className="dropdown-item"
                              style={{ fontSize: "inherit" }}
                            >
                              <p className="pstyle1">B.Sc. [HMCS]</p>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/BscHonsAg-Scheme">
                            <a
                              className="dropdown-item"
                              style={{ fontSize: "inherit" }}
                            >
                              <p className="pstyle1">B.Sc.(Hons.) (Ag)</p>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/PhysicalEducation-Scheme">
                            <a
                              className="dropdown-item"
                              style={{ fontSize: "inherit" }}
                            >
                              <p className="pstyle1">Physical Education</p>
                            </a>
                          </Link>
                        </li>{" "}
                        <li>
                          <Link to="/BachelorofLaws-Scheme">
                            <a
                              className="dropdown-item"
                              style={{ fontSize: "inherit" }}
                            >
                              <p className="pstyle1">
                                Bachelor of Laws (LL.B.).
                              </p>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/POLYTECHNIC(ENGINEERING)-Scheme">
                            <a
                              className="dropdown-item"
                              style={{ fontSize: "inherit" }}
                            >
                              <p className="pstyle1">
                                POLYTECHNIC (ENGINEERING)
                              </p>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    

                    <li
                      className="nav-item dropdown"
                      onMouseEnter={handleMouseEnter14}
                      onMouseLeave={handleMouseLeave14}
                    >
                      <p
                        style={{
                          fontFamily: "'Open Sans',sans-serif",
                          fontSize: "20px",
                          color: "#C80036",
                          marginTop: "-40px",
                          marginLeft: "5px",
                        }}
                      >
                        {" "}
                        <a
                          className="nav-link dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                       <b> Syllabus{" "}</b> 
                        </a>
                      </p>
                      <div
                        className={`dropdown-menu ${isOpen14 ? "show" : ""}`}
                        style={{ marginLeft: "99%", marginTop: "-47px" }}
                      >
                        <Link to="/B.E-Syllabus">
                          <a
                            className="dropdown-item"
                            style={{ fontSize: "inherit" }}
                          >
                            {" "}
                            <p className="pstyle1">B.E.</p>
                          </a>
                        </Link>
                        <Link to="/MBA-syllabus">
                          <a
                            className="dropdown-item"
                            style={{ fontSize: "inherit" }}
                          >
                            <p className="pstyle1">MBA</p>
                          </a>
                        </Link>
                        <Link to="/MCA-syllabus">
                          <a
                            className="dropdown-item"
                            style={{ fontSize: "inherit" }}
                          >
                            <p className="pstyle1">MCA</p>
                          </a>
                        </Link>
                        <Link to="/MTECH-syllabus">
                          <a
                            className="dropdown-item"
                            style={{ fontSize: "inherit" }}
                          >
                            <p className="pstyle1">M.Tech</p>
                          </a>
                        </Link>
                        <Link to="/UTD-syllabus">
                          <a
                            className="dropdown-item"
                            style={{ fontSize: "inherit" }}
                          >
                            <p className="pstyle1">UTD</p>
                          </a>
                        </Link>
                        <Link to="/BHMS-syllabus">
                          <a
                            className="dropdown-item"
                            style={{ fontSize: "inherit" }}
                          >
                            <p className="pstyle1">BHMS</p>
                          </a>
                        </Link>
                     

                        <Link to="/Education-syllabus">
                          <a
                            className="dropdown-item"
                            style={{ fontSize: "inherit" }}
                          >
                            <p className="pstyle1">Education</p>
                          </a>
                        </Link>
                        <Link to="/Pharmacy-syllabus">
                          <a
                            className="dropdown-item"
                            style={{ fontSize: "inherit" }}
                          >
                            <p className="pstyle1">Pharmacy</p>
                          </a>
                        </Link>
                        <Link to="/BHMCT-syllabus">
                          <a
                            className="dropdown-item"
                            style={{ fontSize: "inherit" }}
                          >
                            <p className="pstyle1">B.H.M.C.T.</p>
                          </a>
                        </Link>

                        <Link to="/BLibISc -syllabus">
                          <a
                            className="dropdown-item"
                            style={{ fontSize: "inherit" }}
                          >
                            <p className="pstyle1">B.Lib.I.Sc.</p>
                          </a>
                        </Link>

                        <Link to="/BScHMCS-syllabus">
                          <a
                            className="dropdown-item"
                            style={{ fontSize: "inherit" }}
                          >
                            <p className="pstyle1">B.Sc.[HMCS]</p>
                          </a>
                          <Link to="/BScHonsAG-syllabus">
                            <a
                              className="dropdown-item"
                              style={{ fontSize: "inherit" }}
                            >
                              <p className="pstyle1">B.Sc (Hons.)(AG)</p>
                            </a>
                          </Link>
                          <Link to="/Paramedical-syllabus">
                            <a
                              className="dropdown-item"
                              style={{ fontSize: "inherit" }}
                            >
                              <p className="pstyle1">Paramedical</p>
                            </a>
                          </Link>
                        </Link>
                        <Link to="/PhysicalEducation-syllabus">
                          <a
                            className="dropdown-item"
                            style={{ fontSize: "inherit" }}
                          >
                            <p className="pstyle1">Physical Education</p>
                          </a>
                        </Link>
                        <Link to="/Bacheloroflaws-syllabus">
                          <a
                            className="dropdown-item"
                            style={{ fontSize: "inherit" }}
                          >
                            <p className="pstyle1">Bachelor Of Laws (LL.B.)</p>
                          </a>
                        </Link>

                        <Link to="/PolytechnicEngineerin-syllabus">
                          <a
                            className="dropdown-item"
                            style={{ fontSize: "inherit" }}
                          >
                            <p className="pstyle1">Polytechnic (Engineering)</p>
                          </a>
                        </Link>
                      </div>
                    </li>


                    <li
  className="nav-item dropend"
  onMouseEnter={handleMouseEnter15}
  onMouseLeave={handleMouseLeave15}
>
  <p
    style={{
      fontFamily: "'Open Sans',sans-serif",
      fontSize: "20px",
      color: "#C80036",
      marginTop: "-40px",
      marginLeft: "5px",
    }}
  >
    {" "}
    <a
      className="nav-link dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <b> MEDICAL SCIENCES{" "}</b>  
    </a>
  </p>

  <ul
    className={`dropdown-menu ${isOpen15 ? "show" : ""}`}
    style={{ 
      marginLeft: "99%", 
      marginTop: "-50px", 
      maxHeight: "400px", // Adjust this height as needed
      overflowY: "auto" 
    }}
  >
    <li>
      <Link to="/DEPARTMENT-OF-ANATOMY">
        <a className="dropdown-item" style={{ fontSize: "inherit" }}>
          <p className="pstyle1">DEPARTMENT OF ANATOMY</p>
        </a>
      </Link>
    </li>
    <li>
      <Link to="/DEPARTMENT-OF-PHYSILOGY">
        <a className="dropdown-item" style={{ fontSize: "inherit" }}>
          <p className="pstyle1">DEPARTMENT OF PHYSIOLOGY</p>
        </a>
      </Link>
    </li>
    <li>
      <Link to="/DEPARTMENT-OF-BIOCHEMISTRY">
        <a className="dropdown-item" style={{ fontSize: "inherit" }}>
          <p className="pstyle1">DEPARTMENT OF BIOCHEMISTRY</p>
        </a>
      </Link>
    </li>
    <li>
      <Link to="/DEPARTMENT-OF-PHARMACOLOGY">
        <a className="dropdown-item" style={{ fontSize: "inherit" }}>
          <p className="pstyle1">DEPARTMENT OF PHARMACOLOGY</p>
        </a>
      </Link>
    </li>
    <li>
      <Link to="/DEPARTMENT-OF-PATHOLOGY">
        <a className="dropdown-item" style={{ fontSize: "inherit" }}>
          <p className="pstyle1">DEPARTMENT OF PATHOLOGY</p>
        </a>
      </Link>
    </li>
    <li>
      <Link to="/DEPARTMENT-OF-MICROBIOLOGY">
        <a className="dropdown-item" style={{ fontSize: "inherit" }}>
          <p className="pstyle1">DEPARTMENT OF MICROBIOLOGY</p>
        </a>
      </Link>
    </li>
    <li>
      <Link to="/UTD-Scheme">
        <a className="dropdown-item" style={{ fontSize: "inherit" }}>
          <p className="pstyle1">DEPARTMENT OF FORENSIC MEDICINE TOXICO</p>
        </a>
      </Link>
    </li>
    <li>
      <Link to="/Education-Scheme">
        <a className="dropdown-item" style={{ fontSize: "inherit" }}>
          <p className="pstyle1">DEPARTMENT OF COMMUNITY MEDICINE</p>
        </a>
      </Link>
    </li>
    <li>
      <Link to="/Pharmacy-scheme">
        <a className="dropdown-item" style={{ fontSize: "inherit" }}>
          <p className="pstyle1">DEPARTMENT OF GENERAL MEDICINE</p>
        </a>
      </Link>
    </li>
    <li>
      <Link to="/Paramedical-Scheme">
        <a className="dropdown-item" style={{ fontSize: "inherit" }}>
          <p className="pstyle1">DEPARTMENT OF PEDIATRICS</p>
        </a>
      </Link>
    </li>
    <li>
      <Link to="/BLIBISC-Scheme">
        <a className="dropdown-item" style={{ fontSize: "inherit" }}>
          <p className="pstyle1">DEPARTMENT OF DERMATOLOGY</p>
        </a>
      </Link>
    </li>
    <li>
      <Link to="/BSCHMCS-Scheme">
        <a className="dropdown-item" style={{ fontSize: "inherit" }}>
          <p className="pstyle1">DEPARTMENT OF PSYCHIATRY</p>
        </a>
      </Link>
    </li>
   
 
    <li>
      <Link to="/BachelorofLaws-Scheme">
        <a className="dropdown-item" style={{ fontSize: "inherit" }}>
          <p className="pstyle1">DEPARTMENT OF GENERAL SURGERY</p>
        </a>
      </Link>
    </li>
    <li>
      <Link to="/POLYTECHNIC(ENGINEERING)-Scheme">
        <a className="dropdown-item" style={{ fontSize: "inherit" }}>
          <p className="pstyle1">DEPARTMENT OF ORTHOPEDICS</p>
        </a>
      </Link>
    </li>
    <li>
      <Link to="/POLYTECHNIC(ENGINEERING)-Scheme">
        <a className="dropdown-item" style={{ fontSize: "inherit" }}>
          <p className="pstyle1">DEPARTMENT OF ENT</p>
        </a>
      </Link>
    </li>
    <li>
      <Link to="/POLYTECHNIC(ENGINEERING)-Scheme">
        <a className="dropdown-item" style={{ fontSize: "inherit" }}>
          <p className="pstyle1">DEPARTMENT OF OPHTHALMOLOGY</p>
        </a>
      </Link>
    </li>
    <li>
      <Link to="/POLYTECHNIC(ENGINEERING)-Scheme">
        <a className="dropdown-item" style={{ fontSize: "inherit" }}>
          <p className="pstyle1">DEPARTMENT OF OBS/GYNE</p>
        </a>
      </Link>
    </li>
    <li>
      <Link to="/POLYTECHNIC(ENGINEERING)-Scheme">
        <a className="dropdown-item" style={{ fontSize: "inherit" }}>
          <p className="pstyle1">DEPARTMENT OF ANAEASTHESIOLOGY</p>
        </a>
      </Link>
    </li>
    <li>
      <Link to="/POLYTECHNIC(ENGINEERING)-Scheme">
        <a className="dropdown-item" style={{ fontSize: "inherit" }}>
          <p className="pstyle1">DEPARTMENT OF RADIODOAGNOSIS</p>
        </a>
      </Link>
    </li>
    <li>
      <Link to="/POLYTECHNIC(ENGINEERING)-Scheme">
        <a className="dropdown-item" style={{ fontSize: "inherit" }}>
          <p className="pstyle1">DEPARTMENT OF DENTISTRY</p>
        </a>
      </Link>
    </li>
  </ul>
</li>


                    

                    {/* <Link
                      className="dropdown-item"
                      to={PDF}
                      target="_blank"
                      style={{
                        fontSize: "inherit",
                        marginTop: "-30px",
                        marginLeft: "-10px",
                      }}
                    >
                      {" "}
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Notification of Ph.D Award{" "}
                      </p>
                    </Link> */}
                  </ul>
                </li>




                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                >
                  <h1
                    style={{
                      fontSize: "12px",
                      fontFamily: "'Anton', sans-serif ",
                      textTransform: "uppercase",
                      fontWeight: 800,
                    }}
                  >
                    {" "}
                    <a
                      className="nav-link dropdown-toggle"
                      style={{ color: "#dd2d4a", fontSize: "13px" }}
                    >
                      Faculties & Department
                    </a>
                  </h1>

                  <div
                    className={`dropdown-menu ${isOpen2 ? "show" : ""}`}
                    style={{
                      width: "120%",
                      marginLeft: "-60px",
                      borderRadius: "10px",
                    }}
                  >
                    <Link className="dropdown-item" to="/enggtechno">
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        {" "}
                        Engineering & Technology{" "}
                      </p>
                    </Link>
                    <Link className="dropdown-item" to="/pharma">
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Pharmacy{" "}
                      </p>
                    </Link>
                    <Link className="dropdown-item" to="/edu">
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Education
                      </p>
                    </Link>
                    <Link className="dropdown-item">
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Management{" "}
                      </p>
                    </Link>
                    <Link className="dropdown-item" to="/design">
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Design{" "}
                      </p>
                    </Link>
                    <Link className="dropdown-item" to="/humanities&language">
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        {" "}
                        Humanities & Language
                      </p>{" "}
                    </Link>
                    <a className="dropdown-item">
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Computer Science & Application
                      </p>
                    </a>{" "}
                    <a className="dropdown-item">
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Commerce{" "}
                      </p>
                    </a>
                    <a className="dropdown-item">
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        {" "}
                        Science
                      </p>
                    </a>{" "}
                    <a className="dropdown-item">
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Ayurveda
                      </p>
                    </a>
                    <a className="dropdown-item">
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Law{" "}
                      </p>
                    </a>
                    <a className="dropdown-item">
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Homeopathy{" "}
                      </p>
                    </a>{" "}
                    <a className="dropdown-item">
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Paramedical{" "}
                      </p>
                    </a>
                    <a className="dropdown-item">
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Nursing
                      </p>
                    </a>
                  </div>
                </li>
               

                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter12}
                  onMouseLeave={handleMouseLeave12}
                >
                  <h1
                    style={{
                      fontSize: "12px",
                      fontFamily: "'Anton', sans-serif ",
                      textTransform: "uppercase",
                      fontWeight: 800,
                    }}
                  >
                    {" "}
                    <a
                      className="nav-link dropdown-toggle"
                      style={{ color: "#dd2d4a", fontSize: "13px" }}
                    >
                      NIRF
                    </a>
                  </h1>

                  <div
                    className={`dropdown-menu ${isOpen12 ? "show" : ""}`}
                    style={{ borderRadius: "10px" }}
                  >
                    <Link
                      className="dropdown-item"
                      to={NIRF_Eng}
                      target="_blank"
                      style={{ fontSize: "inherit", marginTop: "-8px" }}
                    >
                      {" "}
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Engineering{" "}
                      </p>
                    </Link>

                    <Link
                      className="dropdown-item"
                      to={NIRF_Agri}
                      target="_blank"
                      style={{ fontSize: "inherit" }}
                    >
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Agriculture{" "}
                      </p>
                    </Link>

                    <Link
                      className="dropdown-item"
                      to={NIRF_Phar}
                      target="_blank"
                      style={{ fontSize: "inherit" }}
                    >
                      <p
                        className="pstyle"
                        style={{ color: "#C80036", fontWeight: 700 }}
                      >
                        Pharmacy{" "}
                      </p>
                    </Link>
                  </div>
                </li>

                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter6}
                  onMouseLeave={handleMouseLeave6}
                >
                  <Link to="/eventss">
                    <h1
                      style={{
                        fontSize: "12px",
                        fontFamily: "'Anton', sans-serif ",
                        textTransform: "uppercase",
                        fontWeight: 800,
                      }}
                    >
                      <a
                        className="nav-link"
                        style={{ color: "#dd2d4a", fontSize: "13px" }}
                      >
                        event
                      </a>
                    </h1>
                  </Link>
                </li>

                <Link>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      style={{
                        color: "#4B0082",
                        animation: "blink 1s infinite",
                        fontSize: "inherit",
                        fontSize: "15px",
                      }}
                    >
                      <h1
                        style={{
                          fontSize: "13px",
                          fontFamily: "'Anton', sans-serif ",
                          color: "purple",
                          textTransform: "uppercase",
                          fontWeight: "700er",
                        }}
                        aria-disabled="true"
                      >
                        Entrance Exam
                      </h1>
                    </a>
                    <style>
                      {`
                              @keyframes blink {
                              0% { opacity: 1; }
                             50% { opacity: 0; }
                             100% { opacity: 1; }
                               }
                             `}
                    </style>
                  </li>
                </Link>
              </ul>
            </div>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link to="/">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">
                    <h1
                      style={{
                        fontSize: "13px",
                        fontFamily: "'Anton', sans-serif ",
                        textTransform: "uppercase",
                        fontWeight: 800,
                      }}
                    >
                      Home
                    </h1>
                  </a>
                </li>
              </Link>

              <li
                className="nav-item dropdown"
                onMouseEnter={handleMouseEnter8}
                onMouseLeave={handleMouseLeave8}
              >
                <h1
                  style={{
                    fontSize: "13px",
                    fontFamily: "'Anton', sans-serif ",
                    textTransform: "uppercase",
                    fontWeight: 800,
                  }}
                >
                  <a className="nav-link dropdown-toggle">About</a>
                </h1>

                <div
                  className={`dropdown-menu ${isOpen8 ? "show" : ""}`}
                  style={{ borderRadius: "10px" }}
                >
                  <Link
                    className="dropdown-item  "
                    to="/History_Milestones"
                    style={{ marginTop: "-8px" }}
                  >
                    <p
                      className="pstyle"
                      style={{ color: "#C80036", fontWeight: 700 }}
                    >
                      History & Milestones
                    </p>
                  </Link>
                  <Link className="dropdown-item  " to="/vision-mission">
                    <p
                      className="pstyle"
                      style={{ color: "#C80036", fontWeight: 700 }}
                    >
                      {" "}
                      Vision & Mission
                    </p>
                  </Link>

                  <Link className="dropdown-item " to="/leadership">
                    <p
                      className="pstyle"
                      style={{ color: "#C80036", fontWeight: 700 }}
                    >
                      Leadership
                    </p>
                  </Link>
                  <Link className="dropdown-item " to="/committe&cell">
                    <p
                      className="pstyle"
                      style={{ color: "#C80036", fontWeight: 700 }}
                    >
                      Committee & Cell
                    </p>
                  </Link>

                  <Link className="dropdown-item " to="/core-approvalsvalues">
                    <p
                      className="pstyle"
                      style={{ color: "#C80036", fontWeight: 700 }}
                    >
                      Core-Values
                    </p>
                  </Link>
                  <Link className="dropdown-item " to="/best-practices">
                    <p
                      className="pstyle"
                      style={{ color: "#C80036", fontWeight: 700 }}
                    >
                      {" "}
                      Best Practices
                    </p>
                  </Link>
                  <Link className="dropdown-item " to="/press-media">
                    <p
                      className="pstyle"
                      style={{ color: "#C80036", fontWeight: 700 }}
                    >
                      Press Media
                    </p>
                  </Link>
                </div>
              </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={handleMouseEnter9}
                onMouseLeave={handleMouseLeave9}
              >
                <h1
                  style={{
                    fontSize: "13px",
                    fontFamily: "'Anton', sans-serif ",
                    textTransform: "uppercase",
                    fontWeight: 800,
                  }}
                >
                  {" "}
                  <a className="nav-link dropdown-toggle">Examination</a>
                </h1>

                <div
                  className={`dropdown-menu ${isOpen9 ? "show" : ""}`}
                  style={{ borderRadius: "10px" }}
                >
                  <a className="dropdown-item " style={{ marginTop: "-8px" }}>
                    <p
                      className="pstyle"
                      style={{ color: "#C80036", fontWeight: 700 }}
                    >
                      Results{" "}
                    </p>
                  </a>
                  <a className="dropdown-item ">
                    <p
                      className="pstyle"
                      style={{ color: "#C80036", fontWeight: 700 }}
                    >
                      Apply for Exam
                    </p>
                  </a>
                  <Link className="dropdown-item " to="/exam-schedule">
                    <p
                      className="pstyle"
                      style={{ color: "#C80036", fontWeight: 700 }}
                    >
                      Exam Schedule
                    </p>
                  </Link>
                  <Link className="dropdown-item " to="/exam-notifications">
                    {" "}
                    <p
                      className="pstyle"
                      style={{ color: "#C80036", fontWeight: 700 }}
                    >
                      Exam Notification
                    </p>
                  </Link>

                  <a className="dropdown-item ">
                    {" "}
                    <p
                      className="pstyle"
                      style={{ color: "#C80036", fontWeight: 700 }}
                    >
                      Apply for Certificates
                    </p>
                  </a>
                </div>
              </li>
              <Link to="/placement">
                <li className="nav-item">
                  <a className="nav-link">
                    <h1
                      style={{
                        fontSize: "13px",
                        fontFamily: "'Anton', sans-serif ",
                        textTransform: "uppercase",
                        fontWeight: 800,
                      }}
                    >
                      Placement
                    </h1>
                  </a>
                </li>
              </Link>

              <li className="nav-item">
                <a className="nav-link">
                  <h1
                    style={{
                      fontSize: "13px",
                      fontFamily: "'Anton', sans-serif ",
                      textTransform: "uppercase",
                      fontWeight: 800,
                    }}
                  >
                    IQAC{" "}
                  </h1>
                </a>
              </li>
              <Link to="/contact">
                <li className="nav-item">
                  <a className="nav-link">
                    <h1
                      style={{
                        fontSize: "13px",
                        fontFamily: "'Anton', sans-serif ",
                        textTransform: "uppercase",
                        fontWeight: 800,
                      }}
                    >
                      Contact{" "}
                    </h1>
                  </a>
                </li>
              </Link>
              <li className="nav-item">
                <Link className="nav-link" to="/campus">
                  <h1
                    style={{
                      fontSize: "13px",
                      fontFamily: "'Anton', sans-serif ",

                      textTransform: "uppercase",
                      fontWeight: 800,
                    }}
                  >
                    {" "}
                    Campus
                  </h1>
                </Link>
              </li>
              <Link to="/Epravesh/Student/Register">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    style={{
                      color: "#4B0082",
                      fontSize: "15px",
                    }}
                  >
                    <h1
                      style={{
                        fontSize: "13px",
                        fontFamily: "'Anton', sans-serif ",

                        textTransform: "uppercase",
                        fontWeight: 800,
                      }}
                    >
                      {" "}
                      E-Pravesh{" "}
                    </h1>
                  </a>
                </li>
              </Link>

              <Link to="/erp">
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-danger"
                    style={{
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "8px",
                      height: "35px",
                      width: "60px",
                    }}
                  >
                    <b style={{ margin: "0" }}>ERP</b>
                  </button>
                </li>
              </Link>

              <Link to="/admission/enquiry">
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-danger"
                    style={{
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "8px",
                      height: "35px",
                      width: "120px",
                    }}
                  >
                    <b style={{ margin: "0" }}>ADMISSION</b>
                  </button>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
