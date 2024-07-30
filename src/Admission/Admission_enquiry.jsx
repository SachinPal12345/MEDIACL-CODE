import React, { useState, useEffect } from "react";
import bg from "../../src/Main_Admin/images/b.png";
import b from "../images/sssutms.jpg";
import scientist from "../images/scientist.png";
import ra from "../images/radiograph.png";
import yoga from "../images/yoga.png";
import fop4 from "../images/fop4.png";
import ed from "../images/education.png";
import pe from "../images/pe.png";
import com from "../images/com.png";
import hm from "../images/hm.png";
import ar from "../images/ar.png";
import folder from "../images/folder.png";
import ec from "../images/EC.png";
import SKETCH from "../images/sketch.png";
import inn from "../images/INN.png";
import art from "../images/art.png";
import useFetch from "../CUSTOM_HOOK/Usefetch";
import { State, City } from "country-state-city";
import hum from "../images/vitamin.png";
import { Form, Button } from "react-bootstrap";
import blood from "../images/blood.png";
import fop3 from "../images/fop3.png";
import ee from "../images/ee.png";
import me from "../images/me.png";
import dc from "../images/dc.png";
import law from "../images/law.png";
import se from "../images/se.png";
import axios from "axios";

import swal from "sweetalert";
import { Link } from "react-router-dom";

const Admission_Enquiry = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [courseData, setCourseData] = useState({});
  const [courseType, setCourseType] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseBranch, setCourseBranch] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    country: "IN",
    state: "",
    city: "",
    mobile: "",
    courseType: "",
    courseName: "",
    courseBranch: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});

  const session = new Date().getFullYear();
  const { data, loading, error } = useFetch(
    process.env.REACT_APP_STD_COURSE + `${session}`
  );

  useEffect(() => {
    if (data) {
      const formattedData = {};

      data.forEach((course) => {
        if (!formattedData[course.courseType]) {
          formattedData[course.courseType] = {
            courses: [],
            branches: {},
          };
        }

        course.courseNames.forEach((courseName) => {
          formattedData[course.courseType].courses.push(courseName.courseName);
          formattedData[course.courseType].branches[courseName.courseName] =
            courseName.branches.map((branch) => branch.branchName);
        });
      });

      setCourseData(formattedData);
    }
  }, [data]);

  useEffect(() => {
    const getAllStates = async () => {
      try {
        const statesData = await State.getStatesOfCountry("IN");
        setStates(statesData);
      } catch (err) {
        // Handle error if necessary
      }
    };

    getAllStates();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setErrors({
      ...errors,
      [name]: undefined,
      // or null if your validation check requires a falsy value
    });

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "state") {
      setCities([]);
      try {
        const stateCities = City.getCitiesOfState("IN", value);
        setCities(stateCities);
      } catch (err) {
        // Handle error if necessary
      }
    }
  };

  const handleTypeChange = (e) => {
    setCourseType(e.target.value);
    setCourseName("");
    setCourseBranch("");
  };

  const handleCourseTypeChange = (e) => {
    setCourseType(e.target.value);
    setFormData({ ...formData, courseType: e.target.value });
    setErrors({
      ...errors,
      courseType: undefined, // Clear error when course is selected
    });
  };

  const handleCourseChange = (e) => {
    setCourseName(e.target.value);
    console.log(e.target.value);
    setFormData({ ...formData, courseName: e.target.value });
    setErrors({
      ...errors,
      course: undefined, // Clear error when course is selected
    });
  };

  const handleBranchChange = (e) => {
    setCourseBranch(e.target.value);
    setFormData({ ...formData, courseBranch: e.target.value });
    setErrors({
      ...errors,
      specialization: undefined, // Clear error when specialization is selected
    });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.fullname) newErrors.fullname = "Full Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) {
      newErrors.city = "City is required";
    } else {
      newErrors = "";
    }
    if (!courseType) newErrors.courseType = "Course Type is required";
    if (!courseName) newErrors.course = "Course is required";
    if (!courseBranch) newErrors.specialization = "Specialization is required";

    // Existing validations...
    if (!formData.mobile) {
      newErrors.mobile = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Invalid phone number (must be 10 digits)";
    }
    // Existing validations...

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  console.log(formData, courseType, courseName, courseBranch, "/kl;.;lpkk;l");
  // formData={
  //   courseType,
  //   courseName,
  //   courseBranch
  // }
  const handleSubmit = async (e) => {
    //console.log("Ye click hua ")
    e.preventDefault();
  

    try {
      if (validate()) {
        const response = await axios.post(
          "https://sssutms.ac.in/apitest/v1/admission-enquiry",
          formData
        );
        console.log("success:", response.data);

        setFormData({
          fullname: "",
          email: "",
          country: "IN",
          state: "",
          city: "",
          mobile: "",
          courseType: "",
          courseName: "",
          courseBranch: "",
          terms: false,
        });

        if (response.data.status === 200) {
          swal({
            title: `Thank You for Enquiry!!`,

            content: {
              element: "p",
              attributes: {
                innerHTML:  "We will contact you soon regarding your admission to the university.",
                style: "color: #05668d; font-size: 18px;",
              },
            },
            icon: "success",
            buttons: "OK",
          });
        }
      } 
    } catch (error) {
      console.error("Error submitting form:", error);
      // Optionally set error state here
    }
  };

  return (
    <>
      <body class="color-vars">
        <div className="bg-img ">
          <header className="header-section">
            <div className="container">
              <div className="nav-bar d-flex">
                <Link to="/" className="contact-number d-flex">
                  <span>
                    <img src={b} className="image" alt="Logo" />
                  </span>
                  <span className="spann" style={{ color: "white" }}>
                    SRI SATYA SAI UNIVERSITY OF TECHNOLOGY & MEDICAL SCIENCES
                  </span>
                </Link>

                <div>
                    <Link to="#" className="toggle-btn" />
                  <div className="nav-right">
                    <div className="call-content">
                      <span className="call-title">Admission Enquiry</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="hero-section">
            <div className="container">
              <div className="hero-wrapper d-flex">
                <div className="content-rgt">
                  <h2 className="hero-heading">ADMISSION Open 2024 - 25</h2>

                  <div className="call-wrapper">
                    <div className="call-content">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#fff"
                          width={32}
                          height={32}
                          viewBox="0 0 32 32"
                          style={{ fill: "#fff" }}
                        >
                          <path d="M 19 0 L 19 2 C 25.065 2 30 6.935 30 13 L 32 13 C 32 5.832 26.168 0 19 0 z M 8.6503906 3.0058594 C 8.1255067 3.0058594 7.6010996 3.1771036 7.1738281 3.5214844 L 7.125 3.5605469 L 3.9804688 6.8046875 L 4.046875 6.7421875 C 3.0062406 7.6384134 2.7194504 9.0541178 3.1660156 10.244141 C 4.0086833 12.674074 6.1568506 17.372953 10.394531 21.605469 C 14.641274 25.857394 19.389499 27.91343 21.738281 28.830078 L 21.761719 28.837891 L 21.785156 28.845703 C 22.999558 29.252758 24.311449 28.962441 25.251953 28.158203 L 25.28125 28.132812 L 28.40625 25.007812 C 29.235762 24.178301 29.235762 22.724043 28.40625 21.894531 L 24.308594 17.792969 C 23.476725 16.9611 22.023275 16.9611 21.191406 17.792969 L 19.207031 19.777344 C 18.496637 19.438281 16.74879 18.558644 15.087891 16.974609 C 13.448585 15.411343 12.61169 13.604382 12.308594 12.90625 L 14.308594 10.90625 C 15.186189 10.028655 15.236115 8.5219515 14.224609 7.7167969 L 14.316406 7.8007812 L 10.173828 3.5605469 L 10.126953 3.5214844 C 9.6996708 3.1771284 9.1752746 3.0058594 8.6503906 3.0058594 z M 19 4 L 19 6 C 22.859 6 26 9.14 26 13 L 28 13 C 28 8.038 23.963 4 19 4 z M 8.6523438 5 C 8.7236064 4.9998777 8.7939074 5.026734 8.8632812 5.0800781 L 12.929688 9.2441406 L 12.978516 9.2832031 C 12.967016 9.2740531 13.016941 9.3697821 12.894531 9.4921875 L 9.9375 12.449219 L 10.166016 13.052734 C 10.166016 13.052734 11.294663 16.121404 13.707031 18.421875 C 16.079259 20.684317 19.003906 21.919922 19.003906 21.919922 L 19.626953 22.185547 L 22.605469 19.207031 C 22.7736 19.0389 22.7264 19.0389 22.894531 19.207031 L 26.992188 23.308594 C 27.162675 23.479082 27.162676 23.423262 26.992188 23.59375 L 23.945312 26.640625 C 23.481361 27.034971 23.00205 27.13833 22.425781 26.947266 C 20.163651 26.062686 15.739269 24.126878 11.808594 20.191406 C 7.8506547 16.238292 5.7997308 11.746595 5.046875 9.5703125 L 5.0429688 9.5585938 L 5.0371094 9.5449219 C 4.8856915 9.1444833 4.9963719 8.5637134 5.3515625 8.2578125 L 5.3847656 8.2285156 L 8.4394531 5.0800781 C 8.508857 5.0272234 8.5810811 5.0001223 8.6523438 5 z M 19 8 L 19 10 C 20.654 10 22 11.346 22 13 L 24 13 C 24 10.243 21.757 8 19 8 z" />
                        </svg>
                      </span>
                        <Link to="tel:7300 135 672">
                        <span className="call-title" style={{ color: "white" }}>
                          Call Us- 9425308462
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="hero-form">
                  <div className="title-wrapper d-flex">
                    <h3 className="form-title" style={{ color: "white" }}>
                      Enquiry Now{" "}
                    </h3>
                    <div className="ribbin"></div>
                  </div>
                  <p className="form-text" style={{ color: "white" }}>
                    Fill out the enquiry form , will call you back ASAP!
                  </p>
                  <div className="form-callback">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="form-item">
                        <Form.Control
                          className="f-field"
                          type="text"
                          name="fullname"
                          value={formData.fullname}
                          onChange={handleInputChange}
                          placeholder="Full Name*"
                          isInvalid={!!errors.fullname}
                        />
                        {errors.fullname && (
                          <Form.Control.Feedback
                            type="invalid"
                            className="error-message"
                          >
                            {errors.fullname}
                          </Form.Control.Feedback>
                        )}

                        <Form.Control
                          style={{ marginLeft: "5px" }}
                          className="f-field"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email*"
                          isInvalid={!!errors.email}
                        />

                        <div className="error-message">{errors.email}</div>
                      </Form.Group>

                      <Form.Group className="form-item">
                        <Form.Control
                          as="select"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="f-field"
                          isInvalid={!!errors.state}
                        >
                          <option value="">State</option>
                          {states.map((state) => (
                            <option key={state.isoCode} value={state.isoCode}>
                              {state.name}
                            </option>
                          ))}
                        </Form.Control>
                        {errors.state && (
                          <Form.Control.Feedback
                            type="invalid"
                            className="error-message"
                          >
                            {errors.state}
                          </Form.Control.Feedback>
                        )}

                        <Form.Control
                          as="select"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="f-field"
                          style={{ marginLeft: "5px" }}
                          isInvalid={!!errors.city}
                        >
                          <option value="">City*</option>
                          {cities.map((city) => (
                            <option key={city.name} value={city.name}>
                              {city.name}
                            </option>
                          ))}
                        </Form.Control>
                        {errors.district && (
                          <Form.Control.Feedback
                            type="invalid"
                            className="error-message"
                          >
                            {errors.district}
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>

                      <Form.Group className="form-item">
                        <Form.Control
                          as="select"
                          value={formData.courseType}
                          onChange={handleCourseTypeChange}
                          className="f-field"
                          isInvalid={!!errors.courseType}
                        >
                          <option value="" disabled>
                            Course Type *
                          </option>
                          {Object.keys(courseData).map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </Form.Control>
                        {errors.courseType && (
                          <Form.Control.Feedback
                            type="invalid"
                            className="error-message"
                          >
                            {errors.courseType}
                          </Form.Control.Feedback>
                        )}

                        <Form.Control
                          as="select"
                          value={formData.courseName}
                          onChange={handleCourseChange}
                          className="f-field"
                          style={{ marginLeft: "5px" }}
                          isInvalid={!!errors.course}
                        >
                          <option value="" disabled>
                            Courses *
                          </option>
                          {courseType &&
                            courseData[courseType].courses.map((course) => (
                              <option key={course} value={course}>
                                {course}
                              </option>
                            ))}
                        </Form.Control>
                        {errors.course && (
                          <Form.Control.Feedback
                            type="invalid"
                            className="error-message"
                          >
                            {errors.course}
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>

                      <Form.Group className="form-item">
                        <Form.Control
                          as="select"
                          value={formData.courseBranch}
                          onChange={handleBranchChange}
                          className="f-field"
                          isInvalid={!!errors.specialization}
                        >
                          <option value="">Specialization *</option>
                          {courseName &&
                            courseData[courseType].branches[courseName].map(
                              (branch) => (
                                <option key={branch} value={branch}>
                                  {branch}
                                </option>
                              )
                            )}
                        </Form.Control>
                        {errors.specialization && (
                          <Form.Control.Feedback
                            type="invalid"
                            className="error-message"
                          >
                            {errors.specialization}
                          </Form.Control.Feedback>
                        )}
                        <Form.Control
                          className="f-field"
                          type="tel"
                          name="mobile"
                          style={{ marginLeft: "5px" }}
                          value={formData.mobile}
                          onChange={handleInputChange}
                          placeholder="Phone Number*"
                          isInvalid={!!errors.mobile}
                        />
                        {errors.mobile && (
                          <Form.Control.Feedback
                            type="invalid"
                            className="error-message"
                          >
                            {errors.mobile}
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>

                      <div className="form-item">
                        <textarea
                          name="message"
                          rows={30}
                          placeholder=" Any other information..."
                        />
                      </div>
                      {/* <Form.Group>
                      <Form.Check
                        type="checkbox"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleInputChange}
                        label="I agree to Terms and Conditions."
                        isInvalid={!!errors.terms}
                        feedback={errors.terms}
                        feedbackType="invalid"
                        className="checkbox-label"
                        style={{ color: 'white' }}
                      />
                    </Form.Group> */}

                      <div className="submit-btn d-flex">
                        <Button type="submit" className="btn">
                          Submit
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
      <main>
        <style>
          {`
    :root {
  --primary-text: #f5b41c;
  --secondary-text: #163f58;
  --white-text-white: #fff;
  --gray-text: #464646;
  --light-white: #c8c8c8;
}

//  .color-vars {
//     --primary-text: #f5b41c;
//     --secondary-text: #163f58;
//     --white-text- white: #fff;
//     --gray-text: #464646;
//     --light-white: #c8c8c8;

//     /* Define other variables referencing root variables */
//     --primary-color: var(--primary-text);
//     --secondary-color: var(--secondary-text);
//     --white-color: var(--white-text-white);
//     --gray-color: var(--gray-text);
//     --light-color: var(--light-white);
//   }

@font-face {
  font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('../font/Poppins/Poppins-Regular.woff2') format('woff2'),
        url('../font/Poppins/Poppins-Regular.woff') format('woff');
}
*/
.image{
 height: 50px;
  width: 50px;
   border-radius: 10px
   }



// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// body {
//   font-family: "Raleway", sans-serif;
//   font-size: 16px;
// }

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  display: inline-block;
}

img {
  max-width: 100%;
  object-fit: cover;
}

.text-center {
  text-align: center;
}




.d-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}



.position-relative {
  position: relative;
}

.container {
  width: 100%;
  /* max-width: 1140px; */
  max-width: 1166px;
  margin-left: auto;
  margin-right: auto;
  padding-inline: 15px;
}

.section-heading {
  font-size: 30px;
  letter-spacing: 0px;
  line-height: 35px;
  text-transform: uppercase;
  color: var(--secondary-text);
  font-weight: 800;
  font-family: "Roboto";
  text-align: center;
  margin-bottom: 64px;
}






.bg-img {
  background-image: linear-gradient(45deg, #0215209e, #163f5894),
  url(${bg});
  width: 100%;
  /* height: 100vh; */
  height: 830px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 10;
}

.bg-img::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 230px;
  z-index: -10;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='1' d='M0,192L1440,64L1440,320L0,320Z' /%3E%3C/svg%3E");
  background-size: cover;
  background-repeat: no-repeat;
}

/* header start*/
.header-section {
  background-color: rgb(89 89 89 / 50%);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
}

.nav-bar {
  padding: 10px 0;
  margin-left:-50px
}

.brand-logo {
  height: 7px;
  width: 100%;
}

.nav-right {
  position: relative;
  width: 200px;
  margin-left:180px
}
 
.toggle-btn {
  display: none;
}

.contact-number {
  font-size: 20px;
  color: var(--white-text-white);
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  text-align: center;
}

.contact-number.d-flex {
  gap: 20px;
}

.contact-number .tell-icon {
  width: 32px;
}

.call-content {
  height: 60px;
  width: 458px;
  padding-left: 25px;
  background-color: var(--primary-text);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  right: 0;
  transform: translateX(-17%);
}

.nav-right .call-content::before {
  content: "";
  position: absolute;
  left: -13%;
  top: -2px;
  border-bottom: 62px solid var(--primary-text);
  border-left: 62px solid transparent;
}

.call-title {
  font-size: 20px;
  color: var(--white-text-white);
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  text-align: center;

}

/* header end */

/* hero section start */
.hero-section {
  padding-top: 206px;
  padding-bottom: 36px;
}

.hero-heading {
  font-size: 56px;
  letter-spacing: -2px;
  line-height: 70px;
  text-transform: uppercase;
  color: orange;
  font-weight: 800;
  font-family: "Roboto";
  max-width: 500px;
  margin-bottom: 46px;
}

.hero-wrapper .content-rgt {
  width: 627px;
  // margin-top:200px;
}

.hero-wrapper.d-flex {
  align-items: baseline;
}

.content-rgt .card-wrapper {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 30px;
   
  margin-bottom: 62px;
}




.hero-form {
  width: 469px;
  background-color: var(--secondary-text);
  border: 4px solid var(--white-text-white);
  border-radius: 5px;
  padding-inline: 34px;
  padding-bottom: 20px;
  padding-top: 34px;
  height:600px
}

.hero-form .form-title {
  font-size: 30px;
  letter-spacing: 0px;
  line-height: 35px;
  text-transform: uppercase;
  color: var(--white-text-white);
  font-weight: 800;
  font-family: "Roboto";
  margin-bottom: 20px;
}

.ribbin {
  position: relative;
  width: 159px;
}

.form-label-ribbin {
  position: absolute;
  transform: translateY(-60px);
  z-index: 10;
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 27px;
  color: var(--secondary-text);
  font-weight: bold;
  font-family: "Raleway", sans-serif;
  text-align: center;
}


.form-label-ribbin::before {
  content: "";
  position: absolute;
  top: -28px;
  right: 0;
  z-index: -10;
  width: 150px;
  height: 103px;
  background-image: url(../images/label-ribbin.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.hero-form .form-text {
  width: 381px;
  font-size: 15px;
  letter-spacing: 0px;
  line-height: 27px;
  color: var(--white-text-white);
   font-family: "Raleway", sans-serif;
}

.form-callback {
  margin-top: 22px;
}

.form-item {
  margin-bottom: 14px;

  display:flex;
  justify:content:space-between
}

.form-item .f-field,
.form-item textarea {
 width: 200px;
  height: 44px;
  border-radius: 2px;
  padding: 10px;
  justify-content:space-between;
  background-color: var(--white-text-white);
  border: 1px solid var(--light-white);
  font-size: 15px;
  letter-spacing: 0px;
  line-height: 27px;
  color: var(--gray-text);
  font-family: "Raleway", sans-serif;
}

.form-item textarea {
  width: 100%;
  height: 104px;
}

.submit-btn.d-flex {
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}

.submit-btn .btn {
  width: 159px;
  height: 46px;
  padding: 9px 49px;
  background-color: var(--primary-text);
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 27px;
  color: var(--white-text-white);
  font-weight: 500;
  font-family: "Poppins";
  text-align: center;
  border: 1px solid var(--primary-text);
  transition: 0.3s;
  cursor: pointer;
  margin-top:20px
}

.submit-btn .btn:hover {
  border: 1px solid var(--white-text-white);
  background-color: var(--white-text-white);
  color: var(--primary-text);
}

.submit-btn .checkbox-label {
  font-size: 15px;
  letter-spacing: 0px;
  line-height: 27px;
  color: var(--white-text-white);
  font-family: "Poppins";
  text-align: center;
}

.submit-btn .checkbox-label span,
.f-items .copyright-l a {
  text-decoration: underline;
  cursor: pointer;
  color: white;
}



/* media query */
@media screen and (max-width: 786px) {
  .bg-img {
    height: 1040px;
  }
}

.call-wrapper .call-content {
  transform: translateX(-42%);
  justify-content: flex-end;
  gap: 20px;
  padding-right: 16px;
    margin-top:500px;
}






.content-rgt
{
margin-left:-30px;
font-size:15px;
margin-top:-200px}




h6{
font-size:13px;
font-weight: 700;
      font-family: 'Nunito', sans-serif;}

 .contain {
  display: grid;
  margin-top:10px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
 padding:30px

}


.text {
  display: flex;
  flex-direction: row; /* Flex direction set to column */
  align-items: center; /* Align items horizontally in the center */
  padding: 15px;
  gap: 10px; /* Adjust spacing between items */
}


.custom-img {
  width: 40px; /* Adjust the size as needed */
  height: 40px; /* Adjust the size as needed */

}


.custom-imgs {
  width: 40px; /* Adjust the size as needed */
  height: 40px; /* Adjust the size as needed */
  // filter: brightness(0) invert(1); /* Change image color to white */
}


.text h6 {
  margin: 0; /* Remove default margin */
}

// ////////////////////////////////////////////////////////////////////////////////////////////////////

h1 {
  position: relative;
  padding: 0;
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 40px;
  color:#973131;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}

h1 span {
  display: block;
  font-size: 0.5em;
  line-height: 1.3;
  color:#973131;
}
h1 em {
  font-style: normal;
  font-weight: 800px;  color:#973131;
}
  

.three{
margin-left:500px;
// margin-top:20px;
}

.three h1 {
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 0;
  line-height: 1.5em;
  padding-bottom: 15px;
  position: relative;
    color:#E4003A;
}
.three h1:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 5px;
  width: 65px;
  background-color: #973131;;
}
.three h1:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 2px;
  height: 1px;
  width: 95%;
  max-width: 355px;
  background-color: #333;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 50px;
  width:190px;
  margin-left:-170px
}

.errors{
  margin-top:-10px;
  margin-left:-20px
  }
@media screen and (max-width: 400px) {


.form-item .f-field,
.form-item textarea {
 width: 160px;
  height: 44px;
  border-radius: 2px;
  padding: 10px;
  justify-content:space-between;
  background-color: var(--white-text-white);
  border: 1px solid var(--light-white);
  font-size: 15px;
  letter-spacing: 0px;
  line-height: 27px;
  color: var(--gray-text);
  font-family: "Raleway", sans-serif;
}



.bg-img {
  background-image: linear-gradient(45deg, #0215209e, #163f5894),
  url(${bg});
  width: 100%;
  /* height: 100vh; */
  height: 830px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 10;
}

.nav-bar{
margin-top:-50px;
}
.call-content
{
margin-left:-500px;
margin-top:140px;
width:250px;
height:50px

}


.three{
font-size:15px;
}
.call-title{
font-size:15px;
margin-left:50px
}


.hero-heading {
  font-size: 15px;
  letter-spacing: -2px;
  line-height: 70px;
  text-transform: uppercase;
  color: orange;
  font-weight: 800;
  font-family: "Roboto";
  max-width: 380px;
  // margin-bottom: 46px;
}



.hero-form {
  width: 380px;
   height:700px
  background-color: var(--secondary-text);
  border: 4px solid var(--white-text-white);
  border-radius: 5px;
  padding-inline: 34px;
  padding-bottom: 20px;
  padding-top: 20px;
  margin-left:-610px
}
.header-section {
  background-color: rgb(89 89 89 / 50%);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 10%;
}

.contact-number {
width:20px;
margin-top:-10px;
margin-left:30px

}
span{
font-size:13px}


.spann{
margin-left:-10px;
width:320px}

.form-text{
width:90px;
font-size:10px}


  .three h1 {
    font-size: 25px; /* Adjust as needed for smaller screens */
  }

  .three{
  margin-top:120px;
  width:280px;
  margin-left:70px}
}
.image{
margin-left:10px;
height:40px;
width:40px;}







.form-item {
  margin-bottom: 14px;
margin-left:-20px;
  display:flex;
  justify:content:space-between
}



.form-item textarea {
  width: 100%;
  height: 104px;
}
       }
`}
        </style>
        {/* our services section*/}
        <div class="three">
          <h1>COURSES OFFERED</h1>
        </div>
        <style>
          {`
    
.art{
background-color:orange}

    .container {
      display: flex;
      width:100%;
      font-family: 'Open Sans', sans-serif;
    }
    .tabs {
      flex: 1;
      background-color: #023047;
      color: white;
      display: flex;

      flex-direction: column;
      padding: 10px;
    }
    .tabs button {
      background: none;
      border: none;
      color: white;
      padding: 10px;
      text-align: left;
      cursor: pointer;
      font-size: 16px;
      transition: color 0.3s;
    }


    .text{
    display:flex;
    }



.custom-img {
  width: 40px; /* Adjust the size as needed */
  height: 40px; /* Adjust the size as needed */
  // fill: red; /* Change the color to red */


  // transition: all 0.3s ease; /* Add transition for smooth effect */
}


    

    .tabs button.active {
      font-weight: bold;
      color: black;
    }
    .content {
      flex: 3;
      padding: 20px;
    }
    .grid {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .grid article {
      // background: #f7f7f7;
      border: 1px solid #ddd;
      border-radius: 4px;
      flex: 1 1 calc(33.333% - 10px);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      transition: transform 0.3s;
    }
    .grid article:hover {
      transform: scale(1.05);
      color:#023047
    }
    .grid .text {
      text-align: center;
    }
    .grid img {
      max-width: 100px;
      height: auto;
      margin-bottom: 10px;
    }
    h4, h5, h6 {
      margin: 0;
      padding: 0;
    }


    
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






@media (max-width: 400px) {


    
  `}
        </style>
        <div className="container" style={{ marginTop: "30px" }}>
          <div className="tabs">
            <h5
              style={{
                fontWeight: 700,
                color: "white",
                marginLeft: "50px",
                marginTop: "30px",
                fontFamily: "'Open Sans', Sans-serif",
              }}
            >
              Program Levels
            </h5>
            <hr />
            <button
              style={{ color: activeTab === "tab1" ? "orange" : "white" }}
              onClick={() => setActiveTab("tab1")}
              className={activeTab === "tab1" ? "active" : ""}
            >
              UG Programs
            </button>
            <hr />
            <button
              style={{ color: activeTab === "tab2" ? "orange" : "white" }}
              onClick={() => setActiveTab("tab2")}
              className={activeTab === "tab2" ? "active" : ""}
            >
              PG Programs
            </button>
            <hr />
            <button
              style={{ color: activeTab === "tab3" ? "orange" : "white" }}
              onClick={() => setActiveTab("tab3")}
              className={activeTab === "tab3" ? "active" : ""}
            >
              Diploma
            </button>
          </div>
          <div className="content">
            {activeTab === "tab1" && (
              <>
                <br></br>
                <div className="grid">
                  <article>
                    <div className="text">
                      <img
                        className="custom-img"
                        src={SKETCH}
                        alt=" Engineering"
                      />
                      <h6> Bachelor of Design</h6>
                    </div>
                  </article>
                  <article className="art">
                    <div className="text">
                      <img
                        className="custom-imgs"
                        src={law}
                        alt=" Engineering"
                      />
                      <h6> Bachelor of Law</h6>
                    </div>
                  </article>
                  <article>
                    <div className="text">
                      <img
                        className="custom-img"
                        src={folder}
                        alt="education"
                      />
                      <h6> Bachelor of Buisness Administration </h6>
                    </div>
                  </article>{" "}
                  <article>
                    <div className="text">
                      <img className="custom-img" src={hm} alt="education" />
                      <h6> Bachelor of Hospital Management & Catering</h6>
                    </div>
                  </article>
                  <article className="art">
                    <div className="text">
                      <img className="custom-imgs" src={pe} alt="education" />
                      <h6 className="headd"> Bachelor of Physical Education</h6>
                    </div>
                  </article>
                  <article>
                    <div className="text">
                      <img className="custom-img" src={art} alt="education" />
                      <h6> Bachelor of Arts</h6>
                    </div>
                  </article>
                  <article>
                    <div className="text">
                      <img className="custom-img" src={ed} alt="education" />
                      <h6> Bachelor of Education</h6>
                    </div>
                  </article>
                  <article className="art">
                    <div className="text">
                      <img className="custom-imgs" src={inn} alt="education" />
                      <h6> Bachelor of Sciences </h6>
                    </div>
                  </article>
                  <article>
                    <div className="text">
                      <img className="custom-img" src={ar} alt="education" />
                      <h6> Bachelor of Engineering & Architecture</h6>
                    </div>
                  </article>
                  <article>
                    <div className="text">
                      <img className="custom-img" src={fop4} alt=" pharmacy" />
                      <h6> Bachelor of Pharmacy</h6>
                    </div>
                  </article>
                  <article className="art">
                    <div className="text">
                      <img className="custom-imgs" src={com} alt="education" />
                      <h6> Bachelor of Commerce</h6>
                    </div>
                  </article>
                  <article>
                    <div className="text">
                      <img className="custom-img" src={ec} alt="education" />
                      <h6> Bachelor of Computer Application & IT </h6>
                    </div>
                  </article>
                </div>
              </>
            )}
            {activeTab === "tab2" && (
              <>
                <br></br>
                <div className="grid">
                  <article>
                    <div className="text">
                      <img
                        className="custom-img"
                        src={dc}
                        alt="Digital Communication"
                      />
                      <h6>Master Of Technology</h6>
                    </div>
                  </article>

                  <article className="art">
                    <div className="text">
                      <img
                        className="custom-img"
                        src={folder}
                        alt="Digital Communication"
                      />
                      <h6>Master Of Buisness Administration</h6>
                    </div>
                  </article>

                  <article>
                    <div className="text">
                      <img
                        className="custom-img"
                        src={se}
                        alt="Digital Communication"
                      />
                      <h6>Master Of Computer Application</h6>
                    </div>
                  </article>
                  <article>
                    <div className="text">
                      <img
                        className="custom-img"
                        src={inn}
                        alt="Digital Communication"
                      />
                      <h6>Master Of Science</h6>
                    </div>
                  </article>

                  <article className="art">
                    <div className="text">
                      <img
                        className="custom-img"
                        src={fop4}
                        alt="Digital Communication"
                      />
                      <h6>Master Of Pharma </h6>
                    </div>
                  </article>

                  <article>
                    <div className="text">
                      <img
                        className="custom-img"
                        src={folder}
                        alt="Digital Communication"
                      />
                      <h6>Master Of Physiotherapy (MPT)</h6>
                    </div>
                  </article>

                  <article>
                    <div className="text">
                      <img
                        className="custom-img"
                        src={fop4}
                        alt="Digital Communication"
                      />
                      <h6>Master Of Medical Laboratory Technology (MMLT) </h6>
                    </div>
                  </article>
                </div>
              </>
            )}
            {activeTab === "tab3" && (
              <>
                <br></br>
                <div className="grid">
                  <article>
                    <div className="text">
                      <img
                        className="custom-img"
                        src={fop3}
                        alt="Computer Science and Engineering"
                      />
                      <h6>Diploma Pharmacy</h6>
                    </div>
                  </article>
                  <article className="art">
                    <div className="text">
                      <img
                        className="custom-img"
                        src={blood}
                        alt="Electrical Engineering"
                      />
                      <h6>Diploma Blood Transfusion</h6>
                    </div>
                  </article>
                  <article>
                    <div className="text">
                      <img
                        className="custom-img"
                        src={me}
                        alt="Mechanical Engineering"
                      />
                      <h6>Diploma Dialysis Technician</h6>
                    </div>
                  </article>
                  <article>
                    <div className="text">
                      <img
                        className="custom-img"
                        src={fop4}
                        alt="Computer Science and Engineering"
                      />
                      <h6>Diploma Pharmacy ( AYURVEDA)</h6>
                    </div>
                  </article>{" "}
                  <article className="art">
                    <div className="text">
                      <img
                        className="custom-img"
                        src={hum}
                        alt="Electronic & Communication Engineering"
                      />
                      <h6>Diploma Human Nutrition</h6>
                    </div>
                  </article>
                  <article>
                    <div className="text">
                      <img
                        className="custom-img"
                        src={scientist}
                        alt="Electrical and Electronics Engineering"
                      />
                      <h6>Diploma Medical Lab Technician</h6>
                    </div>
                  </article>
                  <article>
                    <div className="text">
                      <img
                        className="custom-img"
                        src={ra}
                        alt="Electrical and Electronics Engineering"
                      />
                      <h6>Diploma X-Ray Radiographer Technician</h6>
                    </div>
                  </article>
                  <article className="art">
                    <div className="text">
                      <img
                        className="custom-img"
                        src={ee}
                        alt="Electrical and Electronics Engineering"
                      />
                      <h6>Diploma Engineering (Lateral )</h6>
                    </div>
                  </article>
                  <article>
                    <div className="text">
                      <img
                        className="custom-img"
                        src={scientist}
                        alt="Electrical and Electronics Engineering"
                      />
                      <h6>Diploma Paramedical Opthalmic Assistent</h6>
                    </div>
                  </article>
                  <article>
                    <div className="text">
                      <img
                        className="custom-img"
                        src={fop4}
                        alt="Electrical and Electronics Engineering"
                      />
                      <h6>Diploma Pharmacy (Homeopathy)</h6>
                    </div>
                  </article>
                  <article className="art">
                    <div className="text">
                      <img
                        className="custom-img"
                        src={inn}
                        alt="Electrical and Electronics Engineering"
                      />
                      <h6>Diploma Engineering</h6>
                    </div>
                  </article>
                  <article>
                    <div className="text">
                      <img
                        className="custom-img"
                        src={yoga}
                        alt="Electrical and Electronics Engineering"
                      />
                      <h6>Diploma Yoga</h6>
                    </div>
                  </article>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Admission_Enquiry;
