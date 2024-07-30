import React, { useRef } from "react";
import speaker from "../images/megaphone.png";

const Announcement = () => {
  const marqueeRef = useRef(null);

  return (
    <>
      <style>
        {`
      .announcediv{
      height:30x;
      weight:100%;
      // padding:10px;
      background-color:#EEF7FF;
      display:flex
      }

      .marq{
      height:40px;
      display:flex;
      width:260px;
       background-color:#4D869C
       }


           marquee a{
        margin-top:20px;
        direction:scroll;
      color:red;
        gap:20px

        }

        .marquee {
        margin-top:10px;
      
        }

        .speaker{
        height:30px;
        width:30px;
        margin-left:10px;
        margin-top:5px;
       filter: invert(1) brightness(1000%);
        }


        .te{
        color:white;
        margin-top:7px;
        margin-left:10px
        }


        @media screen and (max-width: 400px) {




         .announcediv{
      height:30px;
      weight:100%;
      // padding:10px;
      background-color:#EEF7FF;
      display:flex
      }




                 marquee a{
        margin-top:5px;
        direction:scroll;
      color:red;
        gap:20px

        }

        .marquee {
        margin-top:2px;
      
        }

        .speaker{
        height:20px;
        width:20x;
        margin-left:10px;
        margin-top:5px;
       filter: invert(1) brightness(1000%);
        }


        .te{
        display:none
        }


        .marq{
        
         height:40px;
      display:flex;
      width:300px;
       background-color:#4D869C }
       
       
       
       
       
       }
      `}
      </style>
      <div className="announcediv">
        <div className="marq">
          <img className="speaker" src={speaker}></img>
          <span className="te">Announcements</span>
        </div>
        <div className="marquee">
          <marquee
            ref={marqueeRef}
            onMouseOver={() => marqueeRef.current.stop()}
            onMouseOut={() => marqueeRef.current.start()}
          >
            <a
              href="/admission/enquiry"
              target="_blank"
            >
              Admission Open 2024-2025 |
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Expert_Lect_Yoga_18022022_0318.jpeg"
              target="_blank"
            >
              EXPERT LECTURE ON YOGA IN DAILY ROUTINE |
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://www.sssutms.co.in/cms/Website/Examination/Results"
              target="_blank"
            >
              EXAMINATION RESULTS DECLARED |
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://sssutms.co.in/cms/Website/Examination/ExamSchedule"
              target="_blank"
            >
              Time Table Examination May-June- 2024 |
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.sssutms.ac.in" target="_blank">
              
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </marquee>
        </div>
      </div>
    </>
  );
};

export default Announcement;
