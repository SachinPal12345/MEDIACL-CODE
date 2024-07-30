import React, { useEffect } from "react";
import Signup from "././components/Register&Login/Signup";
import Signin from "././components/Register&Login/Signin";
import { Routes, Route, Navigate, Router } from "react-router-dom";
import Course from "././components/Register&Login/Course";
import Erp from "./components/Register&Login/Erp";
import Registration from "./AdminComponent/HodMainDetails";
import Registrationn from "./AdminComponent/StudentMainDetails";
// import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

/*--------------------STUDENT Routes----------------------------------------------*/
import StudentDashboardHome from "./components/Register&Login/StudentDashboardHome";
import StudentMainDetails from "./AdminComponent/StudentMainDetails";
import StudentHome from "./components/Register&Login/StdentHome";
import StudentDashboard from "./AdminComponent/StudentDashboard";
import StudentWaiting from "./components/Register&Login/StudentWaiting";
import StudentVerify from "./AdminComponent/StudentVerify";
import EnrollementForm from "./AdminComponent/EnrollementForm";
import OnlyHeader from "./AdminComponent/OnlyHeader";
import Success from "./AdminComponent/Payment/Success";
import Failure from "./AdminComponent/Payment/Failure";
import PaymentPage from "./AdminComponent/Payment/PaymentPage";
import StudentAllDetail from "./components/Register&Login/StudentAllDetail";

/*-------------------- Website Main Page Routes----------------------------------------------*/
import MainPage from "./HomePage/MainPage";

/*--------------------HOD Routes----------------------------------------------*/
import HodDashboard from "./AdminComponent/HodDashboard";
import HodMainDetails from "./AdminComponent/HodMainDetails";
import HodSignUp from "./AdminComponent/HodSignup";
import HodSignin from "./AdminComponent/HodSignin";
import Dashboard from "./AdminComponent/HodMainDas";
import Pending from "./AdminComponent/SudentPending";
import VerifyDetailed from "./AdminComponent/VerifyDetailed";

/*--------------------Admin Routes----------------------------------------------*/
import AdminLogin from "./Main_Admin/Masters/Registered_Login/Admin_login";
import AdminDashboard from "./Main_Admin/Masters/Admin_Dashboard/AdminDashboard";
import EnrollementG from "./Main_Admin/Masters/EnrollmentG";
import Branchmapping from "./Main_Admin/Masters/Branchmapping";
import Centermaster from "./Main_Admin/Masters/Centermaster";
import SpecializationMaster from "./Main_Admin/Masters/SpecializationMaster";
import SpecializationSubjectMapping from "./Main_Admin/Masters/SpecializationSubjectMapping";
import SpecializationTypeMaster from "./Main_Admin/Masters/SpecializationTypeMaster";
import SubjectHeaderInsert from "./Main_Admin/Masters/SubjectHeaderInsert";
import UploadSubjectMasterFromExcelData from "./Main_Admin/Masters/UploadSubjectMasterFromExcelData";
import CreateCollege from "./Main_Admin/Masters/CreateCollege";
import AdmissionSessionMaster from "./Main_Admin/Masters/AdmissionSessionMaster";
import FacultyMaster from "./Main_Admin/Masters/FacultyMaster";
import DepartmentMaster from "./Main_Admin/Masters/DepartmentMaster";
import CourseType from "./Main_Admin/Masters/CourseType";
import CourseMaster from "./Main_Admin/Masters/CourseMaster";
import BranchMaster from "./Main_Admin/Masters/BranchMaster";
import SubBranchMaster from "./Main_Admin/Masters/SubBranchMaster";
import CourseGroupMaster from "./Main_Admin/Masters/CourseGroupMaster";
import AdmissionOpen from "./Main_Admin/Masters/AdmissionOpen";
import ReservationMaster from "./Main_Admin/Masters/ReservationMaster";
import CreateCounsellingRound from "./Main_Admin/Masters/CreateCounsellingRound";
import LastExamSubjectGroup from "./Main_Admin/Masters/LastExamSubjectGroup";
import GradePointMaster from "./Main_Admin/Masters/GradePointMaster";
import SubjectMasterExcelDownload from "./Main_Admin/Masters/SubjectMasterExcelDownload";
import SubjectMasterPaperWise from "./Main_Admin/Masters/SubjectMasterPaperWise";
import SubGroupMaster from "./Main_Admin/Masters/SubGroupMaster";
import TransferSubject from "./Main_Admin/Masters/TransferSubject";
import TransferSubjectGroup from "./Main_Admin/Masters/TransferSubjectGroup";
import ProgramScheduling from "./Main_Admin/Masters/ProgramScheduling";
import ErpDashboard from "./Main_Admin/Masters/ErpDashboard";
import Search from "./Main_Admin/Masters/Search";
import Edetails from "./HomePage/Edetails.jsx";
import EnrolledStudentlist from "./Main_Admin/Masters/EnrolledStudent_list";
import EnrollementStudentSearch from "./Main_Admin/Masters/EnrolledStudent_search";
import StudentRegistrationList from "./Main_Admin/Masters/StudentRegistrationList";
import Admin_Pending from "./Main_Admin/Masters/Admin_Pending.jsx";
import TotalFeePaid from "./Main_Admin/Masters/TotalFeePaid";
import TotalRegistered from "./Main_Admin/Masters/TotalRegistered";
import TotalEnrolled from "./AdminComponent/TotalEnrolled";
import TotalSession from "./AdminComponent/TotalSession";
import TotalRegisStdtHod from "./AdminComponent/HodRegistStdt";
import TotalEnrolledAdmin from "./Main_Admin/Masters/AdminTotalEnrollStdt";
import AdminStdtSearch from "./Main_Admin/Masters/AdminStdtSearch";
import AdminUpdtStdt_Detail from "./Main_Admin/Masters/AdminUpdtStdt_Detail";
import AdminUpdateAllDetail from "./Main_Admin/Masters/AdminUpdateAllDetail";
import AdminUpdate_Documents from "./Main_Admin/Masters/AdminUpdate_Documents";
import AdminDocumentSearch from "./Main_Admin/Masters/AdminDocumentSearch";

import VisionMission from "./Navbarr/AboutUs/VisionMission.jsx";
import CoreValues from "./Navbarr/CoreValues";
import BestPractices from "./Navbarr/AboutUs/BestPractices.jsx";
import EntranceExamAlert from "./Navbarr/Examination/EntranceExamAlert";
import ExamNotifications from "./Navbarr/Examination/ExamNotifications";
import Result from "./Navbarr/Examination/Result";
import ExamSchedule from "./Navbarr/Examination/ExamSchedule";
import Interface from "./Navbarr/Examination/Interface";
import PhdPage from "./Navbarr/Academic/PhdPage";
import AcademicCalendar from "./Navbarr/Academic/AcademicCalendar";
import Scholarship from "./Navbarr/Academic/Scholarship";
import ConstituentUnits from "./Navbarr/Academic/ConstituentUnits";
import HEIHandbook from "./Navbarr/Academic/HEIHandbook";
import MandatoryDisclosures from "./Navbarr/Academic/StudyMaterial.jsx";
import Director from "./Navbarr/Research/Director";
import RDCell from "./Navbarr/Research/RDCell";
import ConsultancyServices from "./Navbarr/Research/ConsultancyServices";
import TotalFeePaidHod from "./Main_Admin/Masters/TotalFeePaidHod";
import AdminPenSearch from "./Main_Admin/Masters/AdminPenSearch.jsx";
import AdminVeriStdSearch from "./Main_Admin/AdminVerified_Std_Search.jsx";

import SearchPen from "./Main_Admin/Masters/SearchPen.jsx";
import SearchVer from "./Main_Admin/Masters/SearchVer.jsx";
import Admissionstatus from "./Main_Admin/Masters/Admissionstatus.jsx";
import Adminser from "./Main_Admin/Masters/Adminser.jsx";
import ManualEnrol_G from "./Main_Admin/Masters/ManualEnrol_G.jsx";
import Paym from "./Main_Admin/Masters/Admin_Dashboard/Paym.jsx";
import Paymen from "./Main_Admin/Masters/Admin_Dashboard/Paymen.jsx";
import TermsConditions from "./HomePage/Footer/TermsConditions.jsx";
import PrivacyPolicy from "./HomePage/Footer/PrivacyPolicy.jsx";
import RefoundCancellation from "./HomePage/Footer/RefoundCancellation.jsx";
import Admission_Slip from "./Main_Admin/Masters/Admission_Slip.jsx";
import Admission_Slip_Search from "./Main_Admin/Masters/Admission_Slip_Search.jsx";
import { useNavigate } from "react-router-dom";

import Grievance from "./HomePage/Gravience.jsx";
import Bonafied_Certificate from "./Main_Admin/Masters/Bonafied_Certificate.jsx";
import Bonafied_Search from "./Main_Admin/Masters/Bonafied_Certificate_Search.jsx";
import EntranceForm from "./ERP/Student_Erp/EntranceForm.jsx";
import Entrance_Payment from "./ERP/Student_Erp/Entrance_Payment.jsx";
import Entrance_Success from "./ERP/Student_Erp/Entrance_Success.jsx";
import Entrance_Slip from "./Main_Admin/Masters/Admin_Dashboard/Admin_Entrance/Entrance_Slip.jsx";
import E_Pravesh_Course from "./E-Pravesh/Student_E-pravesh/E-Courses.jsx";
import E_RegistrationForm from "./E-Pravesh/Student_E-pravesh/E-RegistrationForm.jsx";
import E_Payment from "./E-Pravesh/Student_E-pravesh/E-Payment.jsx";
import E_Success from "./E-Pravesh/Student_E-pravesh/E-Success.jsx";

import BESchema from "../src/Scheme/BESchema.jsx";
import PharmacySchema from "../src/Scheme/PharmacySchema.jsx";
import MtechScheme from "../src/Scheme/MtechScheme.jsx";
import BHMCTSchemee from "../src/Scheme/BHMCTScheme.jsx";
import MBAScheme from "../src/Scheme/MBAScheme.jsx";
import MCAScheme from "../src/Scheme/MCAScheme.jsx";
import EducationScheme from "../src/Scheme/EducationScheme.jsx";
import PhysicalEducationScheme from "../src/Scheme/PhysicalEducationScheme.jsx";
import BScHonsAg from "../src/Scheme/BScHonsAg.jsx";
import BHMSScheme from "../src/Scheme/BHMSScheme.jsx";
import UTDScheme from "../src/Scheme/UTDScheme.jsx";
import ParamedicalScheme from "../src/Scheme/ParamedicalScheme.jsx";
import PolytechniEngineering from "../src/Scheme/PolytechniEngineering.jsx";
import BLibIScScheme from "../src/Scheme/BLibIScScheme.jsx";
import BachelorofLawsScheme from "../src/Scheme/BachelorofLawsScheme.jsx";
import BScHMCSScheme from "../src/Scheme/BScHMCSScheme.jsx";
import Contact from "../src/HomePage/Footer/Contact.jsx";
import Approval from "../src/Navbarr/Approval.jsx";
import NotFound from "./Notfound/NotFound.jsx";
import National from "../src/Events/National.jsx";
import Lok from "../src/Events/Lok.jsx";
import Bams from "../src/Events/Bams.jsx";
import Bhms from "../src/Events/Bhms.jsx";
import RD from "../src/Events/RD.jsx";
import Eng from "../src/Events/Eng.jsx";
import Cs from "../src/Events/Cs.jsx";
import Uni from "../src/Events/Uni.jsx";
import Wday from "../src/Events/Wday.jsx";
// import PHD from "./HomePage/PHD.jsx";
import Entrance_Inst from "./ERP/Student_Erp/Entrance_Inst.jsx";
import Online_Form from "./ERP/Student_Erp/Online_Form.jsx";
import Leadership from "./Navbarr/AboutUs/Leadership.jsx";
import PressMedia from "./Navbarr/AboutUs/PressMedia.jsx";
import CollaborationMou from "./Navbarr/Research/MOU.jsx";
import DoctoralProgramsPhD from "./Navbarr/Research/Doc_phd.jsx";
import Researchpromotionpolicy from "./Navbarr/Research/Resarch_Promo_Policy.jsx";
import HistoryMilestone from "./Navbarr/AboutUs/History_Milestone.jsx";
import Comm_cell from "./Navbarr/AboutUs/Commite&Cell/Commite&cell.jsx";

import GrievanceRedressal from "./Navbarr/AboutUs/Commite&Cell/GrievanceRedressal.jsx";
import Campus from "./Navbarr/Campus.jsx";
import AdminClgSearch from "./Main_Admin/Masters/Admin_Clg_Search.jsx";
import AdminUpdate_Clg_Name_Branch from "./Main_Admin/Masters/Admin_Dashboard/AdminUpdate_Clg_Name_Branch.jsx";
import PassView_Search from "./Main_Admin/Masters/PassView_Search.jsx";
import Placement from "./Navbarr/Placement.jsx";
import Student_Rst_Pass from "./components/Register&Login/Student_Rst_Pass.jsx";
import EntrPr_Dev_cell from "./Navbarr/AboutUs/Commite&Cell/EntrPr_Dev_cell.jsx";
import Internal_Complaint from "./Navbarr/AboutUs/Commite&Cell/Internal_Complaint.jsx";
import Scst from "./Navbarr/AboutUs/Commite&Cell/Sc-St.jsx";
import Inter_High_Edu_cell from "./Navbarr/AboutUs/Commite&Cell/Inter_High_Edu_cell.jsx";
import Proctorial_Board from "./Navbarr/AboutUs/Commite&Cell/Proctorial_Board.jsx";
import E_Pending from "./E-Pravesh/Student_E-pravesh/E_Pending.jsx";
import E_Waiting from "./AdminComponent/Payment/E-Pravesh_Waiting.jsx";
// /////////////////////NAVBAR // SCHOOL & dEPT////////////////////////////////////////////////////////////////////
import EnggTechno from "./Navbarr/School&Dept/EnggTechno.jsx";
import Pharmacy from "./Navbarr/School&Dept/Pharmacy.jsx";
import E_approve from "./E-Pravesh/Student_E-pravesh/E_approve.jsx";
import Edu from "./Navbarr/School&Dept/Edu.jsx";
import Design from "./Navbarr/School&Dept/Design.jsx";
import Off from "./HomePage/Off.js";
import Human_Lang from "./Navbarr/School&Dept/Human_Lang.jsx";
import StudyMaterial from "./Navbarr/Academic/StudyMaterial.jsx";
import AdminAddCourse from "./Main_Admin/Masters/Admin_Dashboard/AdminAddCourse.jsx";
import AdminUpdt_Del_Course from "./Main_Admin/Masters/Admin_Dashboard/AdminUpdt_Del_Course.jsx";
import FeeUpdate from "./Main_Admin/Masters/Admin_Dashboard/Admin_Updt_fee.jsx";
import Admission_Enquiry from "./Admission/Admission_enquiry.jsx";
import BEsyllabus from "./HomePage/Syllabus/BEsyllabus.jsx";
import MBAsyllabus from "./HomePage/Syllabus/MBAsyllabus.jsx";
import MCAsyllabus from "./HomePage/Syllabus/MCAsyllabus.jsx";
import Mtechsyllabus from "./HomePage/Syllabus/Mtechsyllabus.jsx";
import UTDsyllabus from "./HomePage/Syllabus/UTDsyllabus.jsx";
import CourseChanges from "./Main_Admin/Masters/Admin_Dashboard/CourseChanges.jsx";
import BHMSsyllabus from "./HomePage/Syllabus/BHMSsyllabus.jsx";
import Educationsyllabus from "./HomePage/Syllabus/Educationsyllabus.jsx";
import Pharmacysyllabus from "./HomePage/Syllabus/Pharmacysyllabus.jsx";
import BHMCTsyllabus from "./HomePage/Syllabus/BHMCTsyllabus.jsx";
import BLibsyllabus from "./HomePage/Syllabus/B.Libsyllabus.jsx";
import BSCHMCSsyllabus from "./HomePage/Syllabus/BSCHMCSsyllabus.jsx";
import BScHonsAGsyllabus from "./HomePage/Syllabus/B.Sc.(Hons.) AGsyllabus.jsx";
import Paramedicalsyllabus from "./HomePage/Syllabus/Paramedicalsyllabus.jsx";
import PhysicalEducationsyllabus from "./HomePage/Syllabus/PhysicalEducationsyllabus.jsx";
import Bacheloroflawsyllabus from "./HomePage/Syllabus/Bacheloroflawsyllabus.jsx";
import PolytechnicEngineeringsyllabus from "./HomePage/Syllabus/PolytechnicEngineeringsyllabus.jsx";
import DEPARTMENTOFANATOMY from "./HomePage/MEDICAL SCIENCES/DEPARTMENTOFANATOMY.jsx";
import DEPARTMENOFPHYSIOLOGY from "./HomePage/MEDICAL SCIENCES/DEPARTMENOFPHYSIOLOGY.jsx";
import DEPARTMENTOFBIOCHEMISTRY from "./HomePage/MEDICAL SCIENCES/DEPARTMENTOFBIOCHEMISTRY.jsx";
import DEPARTMENTOFPHARMACOLOGY from "./HomePage/MEDICAL SCIENCES/DEPARTMENTOFPHARMACOLOGY.jsx";
import DEPARTMENTOFPATHOLOGY from "./HomePage/MEDICAL SCIENCES/DEPARTMENTOFPATHOLOGY.jsx";
import DEPARTMENTOFMICROBIOLOGY from "./HomePage/MEDICAL SCIENCES/DEPARTMENTOFMICROBIOLOGY.jsx";

function App() {
  // const location = useLocation();
  const navigate = useNavigate();
  function isAuthenticated() {
    const userData = JSON.parse(sessionStorage.getItem("AnkitHOD"));
    const hodData = JSON.parse(sessionStorage.getItem("currentUser"));
    const AdminData = JSON.parse(sessionStorage.getItem("Admin"));
    if (userData || hodData || AdminData) {
      return true;
    }
    return false;
    // const accessToken = document.cookie.split(";").find((cookie) => cookie.trim().startsWith("access-token="));
    // return accessToken ? true : false;
  }
  function PrivateRoute({ element, ...rest }) {
    if (isAuthenticated()) {
      return element;
    } else {
      return (
        <Navigate
          to={`/erp
      
      
      `}
        />
      );
    }
  }
  // useEffect(() => {
    // console.log("Location changed:", location.pathname);
  // }, [location]);
  // useEffect(() => {
  //   const logoutTimer = setTimeout(() => {
  //     sessionStorage.clear();
  //     navigate('/erp');
  //   }, 20 * 60 * 1000);
  //   return () => clearTimeout(logoutTimer);
  // }, []);

  return (
    <>

      <Routes>

 {/* {==================== Medical Scinces =========================} */}

 <Route path="/DEPARTMENT-OF-ANATOMY" element={<DEPARTMENTOFANATOMY />} />
 <Route path="/DEPARTMENT-OF-PHYSILOGY" element={<DEPARTMENOFPHYSIOLOGY />} />
 <Route path="/DEPARTMENT-OF-BIOCHEMISTRY" element={<DEPARTMENTOFBIOCHEMISTRY />} />
 <Route path="/DEPARTMENT-OF-PHARMACOLOGY" element={<DEPARTMENTOFPHARMACOLOGY />} />
 <Route path="/DEPARTMENT-OF-PATHOLOGY" element={<DEPARTMENTOFPATHOLOGY />} />
 <Route path="/DEPARTMENT-OF-MICROBIOLOGY" element={<DEPARTMENTOFMICROBIOLOGY/>} />
 






        {/* {==================== Admission =========================} */}

        <Route path="/admission/enquiry" element={<Admission_Enquiry />} />

        {/* {==================== Schema =========================} */}

        <Route path="/B.E-Scheme" element={<BESchema />} />
        <Route path="/Pharmacy-scheme" element={<PharmacySchema />} />
        <Route path="/M.Tech-Scheme" element={<MtechScheme />} />
        <Route path="/BHMCT-Scheme" element={<BHMCTSchemee />} />
        <Route path="/MBA-Scheme" element={<MBAScheme />} />
        <Route path="/MCA-Scheme" element={<MCAScheme />} />
        <Route path="/Education-Scheme" element={<EducationScheme />} />
        <Route
          path="/PhysicalEducation-Scheme"
          element={<PhysicalEducationScheme />}
        />
        <Route path="/BscHonsAg-Scheme" element={<BScHonsAg />} />
        <Route path="/BHMS-Scheme" element={<BHMSScheme />} />
        <Route path="/UTD-Scheme" element={<UTDScheme />} />
        <Route path="/Paramedical-Scheme" element={<ParamedicalScheme />} />
        <Route
          path="/POLYTECHNIC(ENGINEERING)-Scheme"
          element={<PolytechniEngineering />}
        />
        <Route path="/BLIBISC-Scheme" element={<BLibIScScheme />} />
        <Route
          path="/BachelorofLaws-Scheme"
          element={<BachelorofLawsScheme />}
        />
        <Route path="/BSCHMCS-Scheme" element={<BScHMCSScheme />} />

        <Route path="/campus" element={<Campus />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms & conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/Refund & Cancellation"
          element={<RefoundCancellation />}
        />

   {/* {============================  Syllabus  ===========================} */}

   <Route path="/B.E-Syllabus" element={<BEsyllabus />} />
        <Route path="/MBA-syllabus" element={<MBAsyllabus />} />
        <Route path="/MCA-syllabus" element={<MCAsyllabus />} />
        <Route path="/MTECH-syllabus" element={<Mtechsyllabus />} />
        <Route path="/UTD-syllabus" element={<UTDsyllabus />} />
        <Route path="/BHMS-syllabus" element={<BHMSsyllabus />} />
        <Route path="/Education-syllabus" element={<Educationsyllabus />} />
        <Route
          path="/Pharmacy-syllabus"
          element={<Pharmacysyllabus />}
        />
        <Route path="/BHMCT-syllabus" element={<BHMCTsyllabus />} />
        <Route path="/BLibISc -syllabus" element={<BLibsyllabus />} />
        <Route path="/BScHMCS-syllabus" element={<BSCHMCSsyllabus/>} />
        <Route path="/BScHonsAG-syllabus" element={<BScHonsAGsyllabus />} />
        <Route
          path="/POLYTECHNIC(ENGINEERING)-Scheme"
          element={<PolytechniEngineering />}
        />
        <Route path="/BLIBISC-Scheme" element={<BLibIScScheme />} />
        <Route
          path="/Paramedical-syllabus"
          element={<Paramedicalsyllabus />}
        />
        <Route path="/PhysicalEducation-syllabus" element={<PhysicalEducationsyllabus />} />

        <Route path="/Bacheloroflaws-syllabus" element={<Bacheloroflawsyllabus />} />
        <Route path="/PolytechnicEngineerin-syllabus" element={<PolytechnicEngineeringsyllabus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms & conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/Refund & Cancellation"
          element={<RefoundCancellation />}
        />

        {/*------------------------Student Routes-----------------------------------------*/}
        <Route path="/erp/studentregister" element={<Signup />} />
        <Route path="/erp/studentlogin" element={<Signin />} />
        <Route
          path="/studentlogin/selectCourse"
          element={<PrivateRoute element={<Course />} />}
        />
        <Route path="/studentalldetail" element={<StudentAllDetail />} />
        <Route
          path="/onlyheader"
          element={<PrivateRoute element={<OnlyHeader />} />}
        />
        <Route
          path="/erp/studentDashboard"
          element={<PrivateRoute element={<StudentDashboard />} />}
        />
        <Route
          path="/student/reset/password"
          element={<PrivateRoute element={<Student_Rst_Pass />} />}
        />

        <Route path="/studentWaiting" element={<StudentWaiting />} />
        <Route path="/studentDetail" element={<StudentMainDetails />} />
        <Route path="/studentHome" element={<StudentHome />} />
        <Route
          path="/student/Enrollement/Form"
          element={<PrivateRoute element={<EnrollementForm />} />}
        />
        <Route path="/studentpending" element={<Pending />} />
        <Route path="/studentverify" element={<StudentVerify />} />
        <Route
          path="/student/dashboard/home"
          element={<StudentDashboardHome />}
        />
        <Route path="/studentUpdateDetail" element={<Registrationn />} />
        <Route
          path="/PaymentPage"
          element={<PrivateRoute element={<PaymentPage />} />}
        />
        <Route path="/epravesh/waiting" element={<E_Waiting />} />

        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
        <Route
          path="/verifyDetailed"
          element={<PrivateRoute element={<VerifyDetailed />} />}
        />

        <Route path="/" element={<MainPage />} />
        <Route path="/erp" element={<Erp />} />

        <Route path="/off" element={<Off />} />
        <Route path="/eventss" element={<Edetails />} />

        <Route path="/women" element={<Wday />} />
        <Route path="/national" element={<National />} />
        <Route path="/lok" element={<Lok />} />
        <Route path="/bams" element={<Bams />} />
        <Route path="/bhms" element={<Bhms />} />
        <Route path="/r&d" element={<RD />} />
        <Route path="/eng" element={<Eng />} />
        <Route path="/cs" element={<Cs />} />
        <Route path="/uni" element={<Uni />} />

        {/*------------------------Student Entrance form Routes-----------------------------------------*/}
        <Route path="/entrance/form" element={<EntranceForm />}></Route>
        <Route path="/entrance/payment" element={<Entrance_Payment />}></Route>
        <Route
          path="/entrance/payment_success"
          element={<Entrance_Success />}
        ></Route>
        <Route path="/entrance/slip" element={<Entrance_Slip />}></Route>

        <Route path="/entrance/form/start" element={<Entrance_Inst />}></Route>
        <Route path="/entrance/online/form" element={<Online_Form />}></Route>

        {/*------------------------Student E-Pravesh Routes-----------------------------------------*/}
        <Route
          path="/Epravesh/Student/Register"
          element={<E_Pravesh_Course />}
        ></Route>
        <Route
          path="/Epravesh/Student/RegisterForm"
          element={<E_RegistrationForm />}
        ></Route>
        <Route path="/Epravesh/Student/payment" element={<E_Payment />}></Route>
        <Route path="/Epravesh/Success" element={<E_Success />}></Route>
        <Route path="/Epravesh/pending/student" element={<E_Pending />}></Route>
        <Route
          path="/Epravesh/verified/student"
          element={<E_approve />}
        ></Route>

        {/*--------------------------------Hod Routes--------------------------------------------------*/}

        <Route path="/erp/hodlogin" element={<HodSignin />} />
        <Route path="/erp/hodregister" element={<HodSignUp />} />

        <Route path="/totalenrolled" element={<TotalEnrolled />} />
        <Route
          path="/total/student/Registered"
          element={<TotalRegisStdtHod />}
        />
        <Route path="/total/student/branch" element={<TotalSession />} />
        <Route path="/total/student/feepaid" element={<TotalFeePaidHod />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Registration" element={<Registration />} />
        <Route
          path="/studentverifieddetailed/:id"
          element={<PrivateRoute element={<VerifyDetailed />} />}
        />
        <Route
          path="/hodDashboard"
          element={<PrivateRoute element={<HodDashboard />} />}
        />
        <Route
          path="/hodDetail"
          element={<PrivateRoute element={<HodMainDetails />} />}
        />

        {/*------------------------Admin Routes-----------------------------------------*/}

        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route
          path="/admindashboard"
          element={<PrivateRoute element={<AdminDashboard />} />}
        />
        <Route
          path="/admin/erpdasboard"
          element={<PrivateRoute element={<ErpDashboard />} />}
        />
        <Route
          path="/student/totalfeepaid"
          element={<PrivateRoute element={<TotalFeePaid />} />}
        />
        <Route
          path="/student/totalenrolled"
          element={<PrivateRoute element={<TotalEnrolledAdmin />} />}
        />
        <Route
          path="/student/totalregistered"
          element={<PrivateRoute element={<TotalRegistered />} />}
        />
        <Route
          path="/registered/studentlist"
          element={<PrivateRoute element={<StudentRegistrationList />} />}
        />

        <Route
          path="/erpdashboard/student/updatedetails"
          element={<PrivateRoute element={<AdminUpdtStdt_Detail />} />}
        />
        <Route
          path="/erpdashboard/student/updatealldetails/:id"
          element={<PrivateRoute element={<AdminUpdateAllDetail />} />}
        />
        <Route
          path="/erpdashboard/student/search"
          element={<PrivateRoute element={<AdminStdtSearch />} />}
        />

        {/*//////////////////////PassViewSearch/////////////////////////////////////*/}

        <Route
          path="/erpdashboard/student/Pass-search"
          element={<PrivateRoute element={<PassView_Search />} />}
        />

        <Route
          path="/erpdashboard/pending/student/search"
          element={<PrivateRoute element={<AdminPenSearch />} />}
        />
        <Route
          path="/search/:admissionSession/:courseType/:courseName/:courseBranch"
          element={<PrivateRoute element={<SearchPen />} />}
        />
        <Route
          path="/searchver/:admissionSession/:courseType/:courseName/:courseBranch"
          element={<PrivateRoute element={<SearchVer />} />}
        />
        <Route
          path="/sea/:admissionSession/:courseType/:courseName/:courseBranch"
          element={<PrivateRoute element={<Adminser />} />}
        />
        <Route
          path="/student/status"
          element={<PrivateRoute element={<Admissionstatus />} />}
        />
        <Route
          path="/erpdashboard/verified/student/search"
          element={<PrivateRoute element={<AdminVeriStdSearch />} />}
        />
         <Route
          path="/admin/CourseChanges"
          element={<PrivateRoute element={<CourseChanges />} />}
        />
     

        <Route
          path="/erpdashboard/student/document/search"
          element={<PrivateRoute element={<AdminDocumentSearch />} />}
        />
        <Route
          path="/erpdashboard/student/updatedocuments/:id"
          element={<PrivateRoute element={<AdminUpdate_Documents />} />}
        />

        <Route
          path="/erpdahboard/student/addcourse"
          element={<PrivateRoute element={<AdminAddCourse />} />}
        />
        <Route
          path="/erpdashboard/student/updt/delete/course"
          element={<PrivateRoute element={<AdminUpdt_Del_Course />} />}
        ></Route>

        <Route
          path="/erpdashboard/student/update/fee"
          element={<PrivateRoute element={<FeeUpdate />} />}
        ></Route>
        {/* <Route path="" element={<PrivateRoute element={""}/>}></Route> */}

        {/*jhbdhjbdhjbjhb*/}
        <Route
          path="/erpdashboard/student/updateclg&branch"
          element={<PrivateRoute element={<AdminClgSearch />} />}
        />
        <Route
          path="/erpdashboard/student/updateClgBranch/:id"
          element={<PrivateRoute element={<AdminUpdate_Clg_Name_Branch />} />}
        />
        {/*jhbdhjbdhjbjhb*/}

        <Route
          path="/admin/search/student-pending/list"
          element={<PrivateRoute element={<Admin_Pending />} />}
        />

        <Route
          path="/enrollment"
          element={<PrivateRoute element={<EnrollementG />} />}
        />
        <Route
          path="/manual/enrollment/generation"
          element={<ManualEnrol_G />}
        />

        <Route
          path="/admin/erpdashboard/admissionslip/search"
          element={<PrivateRoute element={<Admission_Slip_Search />} />}
        />
        <Route
          path="/admissionslip/:session/:courseType/:course/:branch/:college"
          element={<PrivateRoute element={<Admission_Slip />} />}
        />

        <Route
          path="/admin/erpdashboard/Bonafied/certificate"
          element={<Bonafied_Search />}
        />

        <Route
          path="/search-result/:session/:courseType/:course/:branch/:college"
          element={<PrivateRoute element={<Search />} />}
        />
        <Route
          path="/enrolled/student/list/:session/:courseType/:course/:branch/:college"
          element={<PrivateRoute element={<EnrolledStudentlist />} />}
        />
        <Route
          path="/enrolled/student/search-result"
          element={<PrivateRoute element={<EnrollementStudentSearch />} />}
        />
        <Route path="/brancmapping-session" element={<Branchmapping />} />
        <Route path="/center-master" element={<Centermaster />} />
        <Route
          path="/specialization-master"
          element={<SpecializationMaster />}
        />
        <Route
          path="/specialization-subject-mapping"
          element={<SpecializationSubjectMapping />}
        />
        <Route
          path="/sprcialization-type-master"
          element={<SpecializationTypeMaster />}
        />    
        <Route
          path="/subject-header-insert"
          element={<SubjectHeaderInsert />}
        />
        <Route
          path="/upload-subject-master-from-excel-data"
          element={<UploadSubjectMasterFromExcelData />}
        />
        <Route path="/create-collage" element={<CreateCollege />} />

        <Route path="/grievance" element={<Grievance />} />
        <Route
          path="/admission-session-update"
          element={<AdmissionSessionMaster />}
        />
        <Route path="/faculty-master" element={<FacultyMaster />} />
        <Route path="/department-master" element={<DepartmentMaster />} />
        <Route path="/course-type" element={<CourseType />} />
        <Route path="/course-master" element={<CourseMaster />} />
        <Route path="/branch-master" element={<BranchMaster />} />
        <Route path="/sub-branch-master" element={<SubBranchMaster />} />
        <Route path="/course-group-master" element={<CourseGroupMaster />} />
        <Route path="/admission-open" element={<AdmissionOpen />} />
        <Route path="/reservation-master" element={<ReservationMaster />} />
        <Route
          path="/create-counselling-round"
          element={<CreateCounsellingRound />}
        />
        <Route
          path="/last-exam-sunject-group"
          element={<LastExamSubjectGroup />}
        />
        <Route path="/grade-point-master" element={<GradePointMaster />} />
        <Route
          path="/subject-master-excel-download"
          element={<SubjectMasterExcelDownload />}
        />
        <Route
          path="/subject-master-paper-wise"
          element={<SubjectMasterPaperWise />}
        />
        <Route path="/subject-group-master" element={<SubGroupMaster />} />
        <Route path="/transfer-subject" element={<TransferSubject />} />
        <Route
          path="/transfer-subject-group"
          element={<TransferSubjectGroup />}
        />
        <Route path="/program-scheduling" element={<ProgramScheduling />} />

        <Route path="/paym" element={<PrivateRoute element={<Paym />} />} />
        <Route path="/paymen" element={<PrivateRoute element={<Paymen />} />} />

        {/* ======================================================= */}

        {/* /////////////////////////*About Us/////////////////////////////////////////////*/}
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/leadership" element={<Leadership />}></Route>
        <Route path="/press-media" element={<PressMedia />}></Route>
        <Route path="/best-practices" element={<BestPractices />}></Route>
        <Route
          path="/History_Milestones"
          element={<HistoryMilestone />}
        ></Route>
        {/* /////////////////////////////commmiittee cell /////////////////////////////// */}
        <Route
          path="/committe&cell/entrepreneurship/cell"
          element={<EntrPr_Dev_cell />}
        ></Route>
        <Route
          path="/committe&cell/internal/complaint"
          element={<Internal_Complaint />}
        ></Route>
        <Route path="/committe&cell/sc-st" element={<Scst />}></Route>
        <Route
          path="/committe&cell/International/higher/education"
          element={<Inter_High_Edu_cell />}
        ></Route>
        <Route
          path="/grievanceredressal"
          element={<GrievanceRedressal />}
        ></Route>
        <Route path="/committe&cell" element={<Comm_cell />}></Route>
        <Route
          path="/committe&cell/proctorial/board"
          element={<Proctorial_Board />}
        ></Route>

        <Route path="/approval" element={<Approval />}></Route>
        <Route path="/core-approvalsvalues" element={<CoreValues />} />

        {/* /////////////////////NAVBAR // SCHOOL & dEPT//////////////////////////////////////////////////////////////////// */}

        <Route path="/enggtechno" element={<EnggTechno />} />
        <Route path="/pharma" element={<Pharmacy />} />

        {/* ======================== Examination =============================== */}
        <Route path="/entrance-exam-alert" element={<EntranceExamAlert />} />
        <Route path="/exam-notifications" element={<ExamNotifications />} />
        <Route path="/exam-schedule" element={<ExamSchedule />} />
        <Route path="/interface" element={<Interface />} />
        <Route path="/result" element={<Result />} />

        {/* ========================= Academic  =========================================== */}

        <Route path="/phd-page" element={<PhdPage />} />
        <Route path="/academic-calender" element={<AcademicCalendar />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/constituent-units" element={<ConstituentUnits />} />
        <Route path="/Hei-handbook" element={<HEIHandbook />} />
        <Route path="/constituent-units" element={<ConstituentUnits />} />
        <Route path="/constituent-units" element={<ConstituentUnits />} />
        <Route path="/studymaterial" element={<StudyMaterial />} />

        {/* ========================= Research ============================================ */}

        <Route path="/mou-collaboration" element={<CollaborationMou />} />
        <Route path="/director(R&D)" element={<Director />} />
        <Route path="/R&D-cell" element={<RDCell />} />
        <Route path="/consultancy-services" element={<ConsultancyServices />} />
        <Route path="/doctoral-phd" element={<DoctoralProgramsPhD />} />
        <Route
          path="/resarch-promotion-policy"
          element={<Researchpromotionpolicy />}
        />
        <Route path="*" element={<NotFound />} />

        {/*=========================================================================*/}

        <Route path="/edu" element={<Edu />} />
        <Route path="/humanities&language" element={<Human_Lang />} />
        <Route path="/design" element={<Design />} />
      </Routes>

    </>
  );
}

export default App;
