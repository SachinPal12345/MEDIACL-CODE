import React, { useState } from "react";
import Button from "react-bootstrap/Button";
// import { useContext } from "react";
import { Container, Form, Spinner } from "react-bootstrap";
import axios from "axios";
import { useForm } from "react-hook-form";
import {
  Box,
  Stack,
  FormControl,
  FormLabel,
  Select,
  Input,
} from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import OnlyHeader from "../../AdminComponent/OnlyHeader";
import { useNavigate, useLocation } from "react-router-dom";
import swal from "sweetalert";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { CandidateInfoContext } from "./Context";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const E_RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      qualification: "",
    },
  });
  const location = useLocation();
  const { courseType, courseName, courseBranch, email } = location.state;

  console.log(courseName);
  const lastPassed = {
    UG: ["12th"],
    PG: ["UG"],
    Diploma: ["10th", "12th"],
  };
  const courseToSubjects = {
    "BACHELOR OF ENGINEERING": ["PCM"],
    "BACHELOR OF DESIGN": ["PCM", "PCB", "Arts", "Agriculture", "Commerce"],
    "BACHELOR OF PHARMACY": ["PCM", "PCB"],
    "BACHELOR OF EDUCATION": ["PCM", "PCB", "Arts", "Agriculture", "Commerce"],
    "BSC(Nursing)": ["PCB"],
    "BACHELOR OF HOTEL MANAGEMENT AND CATERING": [
      "PCM",
      "PCB",
      "Arts",
      "Agriculture",
      "Commerce",
    ],
    "BACHELOR OF PHYSICAL EDUCATION(B. P. Ed.)": [
      "PCM",
      "PCB",
      "Arts",
      "Agriculture",
      "Commerce",
    ],
    "BACHELOR OF ARTS BACHELOR OF EDUCATION (B. A. B. Ed.)": [
      "PCM",
      "PCB",
      "Arts",
      "Agriculture",
      "Commerce",
    ],
    "BACHELOR OF ARCHITECTURE": ["PCM"],
    "BACHELOR OF SCIENCE": ["PCM", "PCB", "Arts", "Agriculture", "Commerce"],
    "BACHELOR OF BUSINESS ADMINISTRATION": [
      "PCM",
      "PCB",
      "Arts",
      "Agriculture",
      "Commerce",
      "All Subject"
    ],
    "BACHELOR OF ARTS": ["PCM", "PCB", "Arts", "Agriculture", "Commerce"],
    "BACHELOR OF COMMERCE": ["PCM", "PCB", "Arts", "Agriculture", "Commerce"],
    "BACHELOR OF COMPUTER APPLICATION": ["PCM", "PCB", "Commerce"],
    "BACHELOR OF ENGINEERING(Lateral)": ["PCB"],
    "BACHELOR OF AYURVEDIC MEDICINE AND SURGERY": ["PCB"],
    "BACHELOR OF HOMEOPATHIC MEDICINE AND SURGERY": ["PCB"],
    "BACHELOR OF LAWS": ["PCM", "PCB", "Arts", "Agriculture", "Commerce"],
    "BACHELOR OF LIBRARY SCIENCE": [
      "PCM",
      "PCB",
      "Arts",
      "Agriculture",
      "Commerce",
    ],
    "BACHELOR OF PHYSICAL EDUCATION AND SPORTS(BPES)": [
      "PCM",
      "PCB",
      "Arts",
      "Agriculture",
      "Commerce",
    ],
    "BACHELOR OF PHARMACY(lateral)": [
      "PCM",
      "PCB",
      "Arts",
      "Agriculture",
      "Commerce",
    ],
    "B.SC(Hons) AGRICULTURE": ["PCM", "PCB"],
    "BACHELOR OF PHSIOTHERAPY": ["PCB"],

    "MASTER OF TECHNOLOGY": ["BE", "B.TECH"],
    "MASTER OF PHARMACY": ["B.PHARMA"],
    "MASTER OF PHYSIOTHERAPHY (ORTHOPAEDIC)": ["B.PHARMA"],
    "MASTER OF MEDICAL LAB TECHNOLOGY(MMLT)": ["BMLT"],
    "MASTER OF COMPUTER APPLICATION": ["PCM", "PCB", "BSC", "B.COM", "BCA"],
    "MASTER OF BUSINESS ADMINISTRATION(MBA)": [
      "All Subject"
    ],
    "MASTER OF PHARMACY": ["B.PHARMA"],
    "MASTER OF SCIENCE": [
      "BSc(Hons)",
      "BSc(Hons)Maths",
      "BSc(Hons)CS",
      "BSc(Hons)IT",
      "BSc(Hons)PHYSICS",
      "BSc(Hons)CHEMISTRY",
      "BSc(Hons)BIOLOGY",
    ],
    "MASTER OF ARTS": ["UG"],
    "MASTER OF COMMERCE": ["BCOM"],

    "DIPLOMA PHARMACY": ["PCM", "PCB"],
    "DIPLOMA BLOOD TRANSFUSION": ["PCB"],
    "DIPLOMA DIALYSIS TECHNICIAN": ["PCB"],
    "DIPLOMA PHARMACY (AYURVED)": ["PCB"],
    "DIPLOMA HUMAN NUTRITION": ["PCB"],
    "DIPLOMA MEDICAL LAB AND TECHNICIAN": ["PCB"],
    "DIPLOMA X-RAY RADIOGRAPHER TECHNICIAN": ["PCB"],
    "DIPLOMA YOGA": ["PCB"],
    "DIPLOMA ENGINEERING": ["10th"],
    "DIPLOMA PHARMACY (HOMEOPATHY)": ["PCB"],
    "DIPLOMA PARAMEDICAL OPTHALMIC ASSISTENT": ["PCB"],
    "DIPLOMA ENGINEERING  (Lateral)": ["PCM"],
  };

  // const { candidateInfo, setCandidateInfo } = useContext(CandidateInfoContext);
  const navigate = useNavigate();

  const [marksheet12th , setMarksheet12th] = useState()
  const [marksheetUG , setMarksheetUG] = useState()
  const onSubmit = async () => {
    const currentDate = new Date();
    const userEnteredDOB = new Date(watch("dob"));

    if (userEnteredDOB > currentDate) {
      swal("Error", "Please enter a valid date of birth", "error");
      return;
    }

    const formData = {
      name: watch("name"),
      fathersname: watch("fathersname"),
      mothersname: watch("mothersname"),
      gender: watch("gender"),
      email: watch("email"),
      mobile: watch("mobile"),
      AbcId: watch("AbcId"),
      category: watch("category"),
      dob: watch("dob"),
      lastExamType: watch("lastExamType"),
      passingYear: watch("passingYear"),
      qualification: selectedQualification,
      nationality: watch("nationality"),
      domicile: watch("domicile"),
      lastPassedSubject: watch("lastPassedSubject"),
      ObtainedMarks: obtainMarks,
      LastPercentage: percentage,
      courseType: courseType,
      courseBranch: courseBranch,
      courseName: courseName,
      marksheet12th: marksheet12th,
      undergraduateCertificate:marksheetUG
    };

    console.log(formData, "data");

    try {
      const percentage = (
        (parseFloat(obtainMarks) / parseFloat(totalMarks)) *
        100
      ).toFixed(2);
      formData.LastPercentage = percentage;

      const response = await axios.post(
        "https://sssutms.ac.in//apitest/v2/e-pravesh/register",
        formData
      );

      console.log(formData, "formdataaaa");
      const id = response.data.User._id;
      const name = response.data.User.name;
      const randomId = response.data.User.randomId;
      const randomPassword = response.data.User.randomPassword;
      console.log(response.data);

      if (response.data.status === 200) {
        swal({
          title: `Congratulations ${name}`,

          content: {
            element: "p",
            attributes: {
              innerHTML: `Your Registration Number is <strong>${randomId}</strong> and Password has been sent on your email.`,
              style: "color: #05668d; font-size: 18px;",
            },
          },
          icon: "success",
          buttons: "OK",
        }).then(() => {
          navigate("/epravesh/waiting", {
            state: {
              courseType,
              courseName,
              courseBranch,
              id: response.data.User._id,
              name: response.data.User.name,
            },
          });
        });
      }
    } catch (error) {
      swal("Error", "Try Again!!!", "error");
    }
  };
  /////////////////////////////////
  const [FileUrl, setFileUrl] = useState("");
  const [setUploading, IsSetUploading] = useState(false);

  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

  // //////////////////////////////////////////////////////PERCENTAGE LOGIC////////////////////////
  const [obtainMarks, setObtainMarks] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [percentage, setPercentage] = useState("");
  const [selectedQualification, setSelectedQualification] = useState("");

  const handleObtainMarksChange = (event) => {
    const obtainMarksValue = event.target.value;
    setObtainMarks(obtainMarksValue);
    setValue("obtainMarks", obtainMarksValue); // Update the form value
    calculatePercentage(obtainMarksValue, totalMarks);
  };

  const handleTotalMarksChange = (event) => {
    const totalMarksValue = event.target.value;
    setTotalMarks(totalMarksValue);
    setValue("totalMarks", totalMarksValue); // Update the form value
    calculatePercentage(obtainMarks, totalMarksValue);
  };

  const calculatePercentage = (obtainMarks, totalMarks) => {
    if (!isNaN(obtainMarks) && !isNaN(totalMarks) && totalMarks !== "0") {
      const percentageValue = (
        (parseFloat(obtainMarks) / parseFloat(totalMarks)) *
        100
      ).toFixed(2);
      setPercentage(percentageValue);
    } else {
      setPercentage("");
    }
  };
  const handleSelect = (e) => {
    setSelectedQualification(e.target.value);
  };
  /////////////////////////////////////////
  const currentYear = new Date().getFullYear();
  // const previousYear = currentYear - 1;
  const Options = [];
  for (let i = 0; i <= 15; i++) {
    Options.push(currentYear - i);
  }
  //////////////////////DOB validation///////////////////////////
  const validateDOB = (dob) => {
    const currentDate = new Date();
    const userDOB = new Date(dob);
    let age = currentDate.getFullYear() - userDOB.getFullYear();
    const monthDifference = currentDate.getMonth() - userDOB.getMonth();
    const dayDifference = currentDate.getDate() - userDOB.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }

    return age >= 18 || "You must be at least 18 years old";
  };
  /////////////////////marksheet///////////////////////
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    console.log(file, "file");

    if (!file) return;

    try {
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

      if (!allowedTypes.includes(file.type)) {
        swal({
          icon: "error",
          title: "Error",
          text: "Uploaded file is not a valid image. Only JPG, PNG and JPEG files are allowed",
        });
        return;
      }

      const formData4 = new FormData();
      formData4.append("file", file);
      formData4.append("upload_preset", "upload");

      IsSetUploading(true);

      const cloudinaryResponse = await fetch(
        `https://api.cloudinary.com/v1_1/dszawxz7y/image/upload`,
        {
          method: "POST",
          body: formData4,
        }
      );

      const cloudinaryData = await cloudinaryResponse.json();
      const fileUrl = cloudinaryData.secure_url;

      setFileUrl(fileUrl);
      if(courseType==="UG"){
           setMarksheet12th(fileUrl)
      }else{
        setMarksheetUG(fileUrl)
      }
      console.log(fileUrl, "file ka urlllll");
    } catch (error) {
      console.error("Error uploading file to Cloudinary:", error);
    } finally {
      IsSetUploading(false);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme} />
      <OnlyHeader />
      <Container
        className="container-overflow shadow p-3 mb-3 bg-body rounded"
        style={{ maxWidth: "90%", margin: "80px auto" }}
        ms
      >
        <Box
          marginBottom={"20px"}
          backgroundColor={"#264653"}
          p={4}
          h={50}
          color="white"
          mt={1}
          borderRadius="md"
          shadow="md"
          textAlign="center"
        >
          {courseName} {`(${courseBranch})`}
        </Box>

        <Box>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction={["column", "row"]} spacing={4} mt={10}>
              <FormControl flex="1">
                <FormLabel style={{ fontFamily: "sans-serif" }}>
                  Candidate Name
                </FormLabel>

                <Input
                  type="text"
                  size="md"
                  minWidth="280px"
                  {...register("name", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z ]+$/i,
                  })}
                  autoComplete="off"
                />
                {errors?.name?.type === "required" && (
                  <p style={{ color: "red" }}>Name is required</p>
                )}
                {errors?.name?.type === "maxLength" && (
                  <p style={{ color: "red" }}>
                    name cannot exceed 30 characters
                  </p>
                )}
                {errors?.name?.type === "pattern" && (
                  <p style={{ color: "red" }}>Alphabetical characters only</p>
                )}
              </FormControl>

              <FormControl flex="1">
                <FormLabel style={{ fontFamily: "sans-serif" }}>
                  Father's Name
                </FormLabel>
                <Input
                  size="md"
                  minWidth="280px"
                  {...register("fathersname", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z ]+$/i,
                  })}
                  autoComplete="off"
                />
                {errors?.fathersname?.type === "required" && (
                  <p style={{ color: "red" }}>Father's name is required</p>
                )}
                {errors?.fathersname?.type === "maxLength" && (
                  <p style={{ color: "red" }}>
                    name cannot exceed 30 characters
                  </p>
                )}
                {errors?.fathersname?.type === "pattern" && (
                  <p style={{ color: "red" }}>Alphabetical characters only</p>
                )}
              </FormControl>

              <FormControl flex="1">
                <FormLabel style={{ fontFamily: "sans-serif" }}>
                  Mother's Name
                </FormLabel>
                <Input
                  size="md"
                  minWidth="280px"
                  {...register("mothersname", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z ]+$/i,
                  })}
                  autoComplete="off"
                />
                {errors?.mothersname?.type === "required" && (
                  <p style={{ color: "red" }}>Mother's name is required</p>
                )}
                {errors?.mothersname?.type === "maxLength" && (
                  <p style={{ color: "red" }}>
                    name cannot exceed 30 characters
                  </p>
                )}
                {errors?.mothersname?.type === "pattern" && (
                  <p style={{ color: "red" }}>Alphabetical characters only</p>
                )}
              </FormControl>
            </Stack>
            <Stack direction={["column", "row"]} spacing={4} mt={4}>
              <FormControl flex="1">
                <FormLabel style={{ fontFamily: "sans-serif" }}>
                  Gender
                </FormLabel>

                <Select {...register("gender", { required: true })}>
                  <option value="">Select Gender</option>

                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </Select>

                {errors.gender && (
                  <p style={{ color: "red" }}>Please select your gender</p>
                )}
              </FormControl>

              <FormControl flex="1">
                <FormLabel style={{ fontFamily: "sans-serif" }}>
                  Email
                </FormLabel>

                <Input
                  size="md"
                  minWidth="280px"
                  defaultValue={email}
                  readOnly
                  {...register("email", {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />

                {errors.email && (
                  <p style={{ color: "red" }} role="alert">
                    {errors.email.message}
                  </p>
                )}
              </FormControl>

              <FormControl flex="1">
                <FormLabel style={{ fontFamily: "sans-serif" }}>
                  Mobile
                </FormLabel>

                <Input
                  size="md"
                  minWidth="280px"
                  {...register("mobile", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Mobile number should contain only digits",
                    },
                    minLength: {
                      value: 10,
                      message:
                        "Mobile number should be at least 10 digits long",
                    },
                    maxLength: {
                      value: 10,
                      message: "Mobile number should not exceed 10 digits",
                    },
                  })}
                  autoComplete="off"
                />
                {errors.mobile && (
                  <p style={{ color: "red" }}>{errors.mobile.message}</p>
                )}
              </FormControl>
            </Stack>
            <Stack direction={["column", "row"]} spacing={4} mt={4}>
              <FormControl flex="1">
                <FormLabel style={{ fontFamily: "sans-serif" }}>
                  Abc ID{" "}
                  <a
                    href="https://www.digilocker.gov.in/"
                    target="_blank"
                    style={{ fontWeight: "bold", backgroundColor: "yellow" }}
                  >
                    Make your ABC id (click here)
                  </a>
                </FormLabel>
                <Input
                  size="md"
                  minWidth="200px"
                  {...register("AbcId", {
                    required: "ABC ID is required",
                    minLength: {
                      value: 12,
                      message: "ABC ID must be at least 12 characters",
                    },
                    maxLength: {
                      value: 12,
                      message: "ABC ID must not exceed 12 characters",
                    },
                  })}
                  autoComplete="off"
                />
                {errors.AbcId && (
                  <p style={{ color: "red" }}>{errors.AbcId.message}</p>
                )}
              </FormControl>
              <FormControl flex="1">
                <FormLabel style={{ fontFamily: "sans-serif" }}>
                  Category
                </FormLabel>

                <Select
                  size="md"
                  minWidth="280px"
                  {...register("category", {
                    required: "Category is required",
                  })}
                  aria-invalid={errors.category ? "true" : "false"}
                >
                  <option value="">Select Category</option>
                  <option value="gen">General</option>
                  <option value="obc">OBC</option>
                  <option value="sc">SC</option>
                  <option value="st">ST</option>
                </Select>

                {errors.category && (
                  <p style={{ color: "red" }}>{errors.category.message}</p>
                )}
              </FormControl>

              <FormControl flex="1">
                <FormLabel style={{ fontFamily: "sans-serif" }}>DOB</FormLabel>
                <Input
                  type="date"
                  size="md"
                  minWidth="280px"
                  {...register("dob", {
                    required: true,
                    validate: validateDOB,
                  })}
                />
                {errors?.dob?.type === "required" && (
                  <p style={{ color: "red" }}>DOB is required</p>
                )}
                {errors?.dob?.type === "validate" && (
                  <p style={{ color: "red" }}>{errors.dob.message}</p>
                )}
              </FormControl>

              {/* <FormControl flex="1">
                <FormLabel style={{ fontFamily: "sans-serif" }}>
                  Date Of Birth
                </FormLabel>
                <Input
                  type="date"
                  size="md"
                  minWidth="280px"
                  {...register("dob", {
                    required: "DOB is required",
                    validate: (value) => {
                      const dob = new Date(value);
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      if (dob >= today) {
                        return "Date of birth cannot be today or in the future.";
                      }
                      return true;
                    },
                  })}
                />
                {errors.dob && (
                  <p style={{ color: "red" }}>{errors.dob.message}</p>
                )}
              </FormControl> */}
            </Stack>
            <Stack direction={["column", "row"]} spacing={4} mt={4}>
              <FormControl flex="1">
                <FormLabel style={{ fontFamily: "sans-serif" }}>
                  Last Exam Pass/Appear Time
                  <span style={{ color: "black" }}> * </span>
                </FormLabel>
                <Select
                  size="md"
                  minWidth="280px"
                  {...register("lastExamType", {
                    required: "Last Exam Pass/Appear Time is required",
                  })}
                >
                  <option value="">Select </option>
                  <option value="private">Private</option>
                  <option value="regular">Regular</option>
                </Select>
                {errors.lastExamType && (
                  <p style={{ color: "red" }}>{errors.lastExamType.message}</p>
                )}
              </FormControl>

              <FormControl flex="1">
                <FormLabel style={{ fontFamily: "sans-serif" }}>
                  Qualification
                </FormLabel>
                <Select
                  value={selectedQualification}
                  onChange={handleSelect}
                  // {...register("qualification", {
                  //   required: "Qualification is required",
                  // })}
                >
                  {/* <option value="">Select</option>
                  <option value="10th" disabled>
                    10th
                  </option>
                  <option value="UG">UG</option>
                  <option value="12th">12th</option> */}

                  <option value="">Select</option>
                  {lastPassed[courseType]?.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </Select>
                {errors.qualification && (
                  <p style={{ color: "red" }}>{errors.qualification.message}</p>
                )}
              </FormControl>

              <FormControl flex="1">
                <FormLabel style={{ fontFamily: "sans-serif" }}>
                  Passing Year
                </FormLabel>
                <Select
                  {...register("passingYear", {
                    required: "Passing Year is required",
                  })}
                >
                  <option value="">Select</option>
                  {Options.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </Select>
                {errors.passingYear && (
                  <p style={{ color: "red" }}>{errors.passingYear.message}</p>
                )}
              </FormControl>
            </Stack>
            {/*dhdwbdwj*/}
            {selectedQualification === "10th" && (
              <>
                <Stack direction={["column", "row"]} spacing={4} mt={4}>
                  <FormControl flex="1">
                    <FormLabel
                      style={{ fontFamily: "sans-serif", fontSize: "13px" }}
                    >
                      Qualifying Exam Percentage
                    </FormLabel>
                    <Stack direction={["column", "row"]} spacing={1} mt={1}>
                      <FormControl flex="1">
                        <FormLabel style={{ fontFamily: "sans-serif" }}>
                          Obtain Marks
                        </FormLabel>
                        <Input
                          size="md"
                          minWidth="80px"
                          type="number"
                          value={obtainMarks}
                          onChange={handleObtainMarksChange}
                          {...register("obtainMarks", {
                            required: "Obtained Marks is required",
                            min: {
                              value: 0,
                              message: "Obtained Marks cannot be negative",
                            },
                            validate: (value) =>
                              parseFloat(value) <= parseFloat(totalMarks) ||
                              "Obtained Marks cannot exceed Total Marks",
                          })}
                        />
                        {errors.obtainMarks && (
                          <p style={{ color: "red" }}>
                            {errors.obtainMarks.message}
                          </p>
                        )}
                      </FormControl>

                      <FormControl flex="1">
                        <FormLabel style={{ fontFamily: "sans-serif" }}>
                          Total Marks
                        </FormLabel>
                        <Input
                          size="md"
                          minWidth="80px"
                          type="number"
                          value={totalMarks}
                          onChange={handleTotalMarksChange}
                          {...register("totalMarks", {
                            required: "Total Marks is required",
                            min: {
                              value: 1,
                              message: "Total Marks must be greater than 0",
                            },
                          })}
                        />
                        {errors.totalMarks && (
                          <p style={{ color: "red" }}>
                            {errors.totalMarks.message}
                          </p>
                        )}
                      </FormControl>

                      <FormControl flex="1">
                        <FormLabel
                          style={{ fontFamily: "sans-serif", fontSize: "15px" }}
                        >
                          Percentage
                        </FormLabel>
                        <Input
                          size="md"
                          minWidth="80px"
                          value={percentage}
                          readOnly
                        />
                      </FormControl>
                    </Stack>

                    {errors.ObtainedMarks && (
                      <p style={{ color: "red" }}>
                        {errors.ObtainedMarks.message}
                      </p>
                    )}
                  </FormControl>
                </Stack>
                <Stack direction={["column", "row"]} spacing={4} mt={4}>
                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: "sans-serif" }}>
                      Nationality
                    </FormLabel>
                    <Select
                      {...register("nationality", {
                        required: "Nationality is required",
                      })}
                    >
                      <option value="">Select Nationality</option>
                      <option value="indian">Indian</option>
                    </Select>
                    {errors.nationality && (
                      <p style={{ color: "red" }}>
                        {errors.nationality.message}
                      </p>
                    )}
                  </FormControl>

                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: "sans-serif" }}>
                      Domicile
                    </FormLabel>
                    <Select
                      {...register("domicile", {
                        required: "Domicile is required",
                      })}
                    >
                      <option value="">Select Domicile</option>
                      <option value="All India">All India</option>
                      <option value="MP">Madhya Pradesh</option>
                    </Select>
                    {errors.domicile && (
                      <p style={{ color: "red" }}>{errors.domicile.message}</p>
                    )}
                  </FormControl>
                </Stack>
              </>
            )}
            {selectedQualification === "12th" && (
              <>
                <Stack direction={["column", "row"]} spacing={4} mt={4}>
                  {/* <FormControl flex="1">
                    <FormLabel style={{ fontFamily: "sans-serif" }}>
                      Last Passed Exam Subject

                    </FormLabel>
                    <Select
                      // {...register("lastPassedSubject", {
                      //   required: "Last Passed Exam Subject is required",
                      // })}
                      {...register("lastPassedSubject", {
                        required: "last Passed Subject is required",
                      })}
                    >
                      <option value="">Select Subject</option>
                      <option value="PCM">PCM</option>
                      <option value="PCB">PCB</option>
                      <option value="PCB">Commerce</option>
                      <option value="PCB">Agriculture </option>
                      <option value="PCB">Art</option>


                    </Select>
                    {errors.lastPassedSubject && (
                      <p style={{ color: "red" }}>
                        {errors.lastPassedSubject.message}
                      </p>
                    )}
                  </FormControl> */}

                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: "sans-serif" }}>
                      Last Passed Exam Subject
                    </FormLabel>
                    <Select
                      {...register("lastPassedSubject", {
                        required: `Last Passed Subject is required`,
                      })}
                    >
                      <option value="">Select Subject</option>
                      {courseToSubjects[courseName]?.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </Select>

                    {/* Display error message if lastPassedSubject is not selected */}
                    {errors.lastPassedSubject && (
                      <p style={{ color: "red" }}>
                        {errors.lastPassedSubject.message}
                      </p>
                    )}
                  </FormControl>

                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: "sans-serif" }}>
                      Obtain Marks
                    </FormLabel>
                    <Input
                      size="md"
                      minWidth="200px"
                      type="number"
                      value={obtainMarks}
                      onChange={handleObtainMarksChange}
                      // {...register("obtainMarks", {
                      //   required: "Obtained Marks is required",
                      //   min: {
                      //     value: 0,
                      //     message: "Obtained Marks cannot be negative",
                      //   },
                      //   validate: (value) =>
                      //     parseFloat(value) <= parseFloat(totalMarks) ||
                      //     "Obtained Marks cannot exceed Total Marks",
                      // })}
                    />
                    {errors.obtainMarks && (
                      <p style={{ color: "red" }}>
                        {errors.obtainMarks.message}
                      </p>
                    )}{" "}
                  </FormControl>

                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: "sans-serif" }}>
                      Total Marks
                    </FormLabel>
                    <Input
                      size="md"
                      minWidth="200px"
                      type="number"
                      value={totalMarks}
                      onChange={handleTotalMarksChange}
                      // {...register("totalMarks", {
                      //   required: "Total Marks is required",
                      //   min: {
                      //     value: 1,
                      //     message: "Total Marks must be greater than 0",
                      //   },
                      // })}
                    />
                    {errors.totalMarks && (
                      <p style={{ color: "red" }}>
                        {errors.totalMarks.message}
                      </p>
                    )}{" "}
                  </FormControl>

                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: "sans-serif" }}>
                      Percentage
                    </FormLabel>
                    <Input
                      size="md"
                      minWidth="200px"
                      value={percentage}
                      readOnly
                    />
                  </FormControl>
                </Stack>
                <Stack direction={["column", "row"]} spacing={4} mt={4}>
                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: "sans-serif" }}>
                      Nationality
                    </FormLabel>
                    <Select
                      {...register("nationality", {
                        required: "Nationality is required",
                      })}
                    >
                      <option value="">Select Nationality</option>
                      <option value="indian">Indian</option>
                    </Select>
                    {errors.nationality && (
                      <p style={{ color: "red" }}>
                        {errors.nationality.message}
                      </p>
                    )}
                  </FormControl>

                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: "sans-serif" }}>
                      Domicile
                    </FormLabel>
                    <Select
                      {...register("domicile", {
                        required: "Domicile is required",
                      })}
                    >
                      <option value="">Select Domicile</option>
                      <option value="MP">Madhya Pradesh</option>
                      <option value="AllIndia">All India</option>
                    </Select>
                    {errors.domicile && (
                      <p style={{ color: "red" }}>{errors.domicile.message}</p>
                    )}
                  </FormControl>
                  {/* <FormControl flex="1">
                    <FormLabel style={{ fontFamily: "sans-serif" }}>
                      12th Marksheet
                    </FormLabel>
                    <Input
                      type="file"
                      size="md"
                      minWidth="280px"
                      autoComplete="off"
                      onChange={handleFileChange}
                    />
                    {setUploading ? <Progress size="xs" isIndeterminate /> : ""}
                  </FormControl> */}
                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: "sans-serif" }}>
                      12th Marksheet
                    </FormLabel>
                    <Input
                      type="file"
                      size="md"
                      minWidth="280px"
                      autoComplete="off"
                      {...register("marksheet12th", {
                        required: "12th Marksheet is required",
                        validate: {
                          validFile: (fileList) =>
                            fileList.length > 0 || "File is required",
                          fileType: (fileList) =>
                            (fileList.length > 0 &&
                              allowedTypes.includes(fileList[0].type)) ||
                            "Only JPG, PNG, and JPEG files are allowed",
                        },
                      })}
                      onChange={handleFileChange}
                    />
                    {setUploading ? <Progress size="xs" isIndeterminate /> : ""}
                    {errors.marksheet12th && (
                      <p style={{ color: "red" }}>
                        {errors.marksheet12th.message}
                      </p>
                    )}
                  </FormControl>
                </Stack>
              </>
            )}{" "}
             {selectedQualification === "UG" && (
              <>
                <Stack direction={["column", "row"]} spacing={4} mt={4}>
                  {/* <FormControl flex="1">
                    <FormLabel style={{ fontFamily: "sans-serif" }}>
                      Last Passed Exam Subject

                    </FormLabel>
                    <Select
                      // {...register("lastPassedSubject", {
                      //   required: "Last Passed Exam Subject is required",
                      // })}
                      {...register("lastPassedSubject", {
                        required: "last Passed Subject is required",
                      })}
                    >
                      <option value="">Select Subject</option>
                      <option value="PCM">PCM</option>
                      <option value="PCB">PCB</option>
                      <option value="PCB">Commerce</option>
                      <option value="PCB">Agriculture </option>
                      <option value="PCB">Art</option>


                    </Select>
                    {errors.lastPassedSubject && (
                      <p style={{ color: "red" }}>
                        {errors.lastPassedSubject.message}
                      </p>
                    )}
                  </FormControl> */}

                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: "sans-serif" }}>
                      Last Passed Exam Subject
                    </FormLabel>
                    <Select
                      {...register("lastPassedSubject", {
                        required: `Last Passed Subject is required`,
                      })}
                    >
                      <option value="">Select Subject</option>
                      {courseToSubjects[courseName]?.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </Select>

                    {/* Display error message if lastPassedSubject is not selected */}
                    {errors.lastPassedSubject && (
                      <p style={{ color: "red" }}>
                        {errors.lastPassedSubject.message}
                      </p>
                    )}
                  </FormControl>

                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: "sans-serif" }}>
                      Obtain Marks
                    </FormLabel>
                    <Input
                      size="md"
                      minWidth="200px"
                      type="number"
                      value={obtainMarks}
                      onChange={handleObtainMarksChange}
                      // {...register("obtainMarks", {
                      //   required: "Obtained Marks is required",
                      //   min: {
                      //     value: 0,
                      //     message: "Obtained Marks cannot be negative",
                      //   },
                      //   validate: (value) =>
                      //     parseFloat(value) <= parseFloat(totalMarks) ||
                      //     "Obtained Marks cannot exceed Total Marks",
                      // })}
                    />
                    {errors.obtainMarks && (
                      <p style={{ color: "red" }}>
                        {errors.obtainMarks.message}
                      </p>
                    )}{" "}
                  </FormControl>

                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: "sans-serif" }}>
                      Total Marks
                    </FormLabel>
                    <Input
                      size="md"
                      minWidth="200px"
                      type="number"
                      value={totalMarks}
                      onChange={handleTotalMarksChange}
                      // {...register("totalMarks", {
                      //   required: "Total Marks is required",
                      //   min: {
                      //     value: 1,
                      //     message: "Total Marks must be greater than 0",
                      //   },
                      // })}
                    />
                    {errors.totalMarks && (
                      <p style={{ color: "red" }}>
                        {errors.totalMarks.message}
                      </p>
                    )}{" "}
                  </FormControl>

                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: "sans-serif" }}>
                      Percentage
                    </FormLabel>
                    <Input
                      size="md"
                      minWidth="200px"
                      value={percentage}
                      readOnly
                    />
                  </FormControl>
                </Stack>
                <Stack direction={["column", "row"]} spacing={4} mt={4}>
                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: "sans-serif" }}>
                      Nationality
                    </FormLabel>
                    <Select
                      {...register("nationality", {
                        required: "Nationality is required",
                      })}
                    >
                      <option value="">Select Nationality</option>
                      <option value="indian">Indian</option>
                    </Select>
                    {errors.nationality && (
                      <p style={{ color: "red" }}>
                        {errors.nationality.message}
                      </p>
                    )}
                  </FormControl>

                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: "sans-serif" }}>
                      Domicile
                    </FormLabel>
                    <Select
                      {...register("domicile", {
                        required: "Domicile is required",
                      })}
                    >
                      <option value="">Select Domicile</option>
                      <option value="AllIndia">All India</option>
                      <option value="MP">Madhya Pradesh</option>

                    </Select>
                    {errors.domicile && (
                      <p style={{ color: "red" }}>{errors.domicile.message}</p>
                    )}
                  </FormControl>
                  {/* <FormControl flex="1">
                    <FormLabel style={{ fontFamily: "sans-serif" }}>
                      12th Marksheet
                    </FormLabel>
                    <Input
                      type="file"
                      size="md"
                      minWidth="280px"
                      autoComplete="off"
                      onChange={handleFileChange}
                    />
                    {setUploading ? <Progress size="xs" isIndeterminate /> : ""}
                  </FormControl> */}
                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: "sans-serif" }}>
                      UG Marksheet
                    </FormLabel>
                    <Input
                      type="file"
                      size="md"
                      minWidth="280px"
                      autoComplete="off"
                      {...register("undergraduateCertificate", {
                        required: "UG Marksheet is required",
                        validate: {
                          validFile: (fileList) =>
                            fileList.length > 0 || "File is required",
                          fileType: (fileList) =>
                            (fileList.length > 0 &&
                              allowedTypes.includes(fileList[0].type)) ||
                            "Only JPG, PNG, and JPEG files are allowed",
                        },
                      })}
                      onChange={handleFileChange}
                    />
                    {setUploading ? <Progress size="xs" isIndeterminate /> : ""}
                    {errors.undergraduateCertificate && (
                      <p style={{ color: "red" }}>
                        {errors.undergraduateCertificate.message}
                      </p>
                    )}
                  </FormControl>
                </Stack>
              </>
            )}
            <Button
              type="submit"
              style={{ backgroundColor: "#598392", marginTop: "10px" }}
              disabled={setUploading}
            >
              Register Now
            </Button>{" "}
            <Button
              type="button"
              style={{
                backgroundColor: "#dad7cd",
                color: "black",
                marginTop: "10px",
              }}
              onClick={() => reset()}
            >
              Cancel
            </Button>
          </Form>
        </Box>
      </Container>
    </>
  );
};
export default E_RegistrationForm;
