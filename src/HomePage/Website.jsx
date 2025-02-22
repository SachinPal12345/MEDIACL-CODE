import React, { useEffect, useState } from "react";
import "./Website.css";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import SliderRequiter from "./SliderRequiter";
import About from "../HomePage/About";
import Facilities from "../HomePage/Facilities";
import sacn from "../images/scan.jpeg";
// import Our from '../HomePage/Our';

import Socialmedia from "./Socialmedia";

// import logoo from "../images/logoo.png"
import Counter from "./Counter";
import Imp from "../images/IMG_00011_page-0001.jpg";
// import Whatsapplogo from '../images/whatsapp.png'
import Off from "../images/office_Order_page-0001.jpg";
import Not from "../images/IMG_page-0001.jpg";
import ex from "../images/Notice_Copy_page-0001.jpg";
import Nav from "./Nav";
import Footerpage from "./Footerpage";
import New from "./New";
import Gallery from "./Gallery";
import Campus from "../Navbarr/Campus";
import Why from "./Why";
import Testimonial from "./Testimonial";
import Imggallery from "./Imggallery";
import Announcement from "./Annoucement";

const Website = () => {
  // Global variables
  let element;

  // Detect onclick event
  useEffect(() => {
    if (window.matchMedia("(max-width: 920px)").matches === false) {
      $(".ham").on("click", function () {
        $(".side_menu").css("right", "0px");
        $(".overlay").css("opacity", "1");
        $(".overlay").css("z-index", "99");
      });

      $(".close").on("click", function () {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-500px");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      });

      $(".overlay").on("click", function () {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-500px");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      });
    } else {
      $(".ham").on("click", function () {
        $(".side_menu").css("right", "0px");
        $(".overlay").css("opacity", "1");
        $(".overlay").css("z-index", "9");
      });

      $(".close").on("click", function () {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-120%");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      });

      $(".overlay").on("click", function () {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-120%");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      });
    }
  }, []);

  // Scroller Nav
  window.onscroll = function () {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      $("nav").addClass("fixed_nav");
    } else {
      $("nav").removeClass("fixed_nav");
    }
  };

  // Detect ESC Key Pressed
  document.onkeydown = function (evt) {
    evt = evt || window.event;
    let isEscape = false;
    if ("key" in evt) {
      isEscape = evt.key === "Escape" || evt.key === "Esc";
    } else {
      isEscape = evt.keyCode === 27;
    }
    if (isEscape) {
      if ($(".overlay").css("opacity") === "1") {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-120%");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      }
    }
  };

  // Dropdown
  $(".dropdown").click(function () {
    if ($(this).children("aside").is(":hidden")) {
      $(this).children("aside").show("slow");
      $(this).children("a").css("color", "var(--white)");
    } else {
      $(this).children("aside").hide("slow");
      $(this).children("a").css("color", "var(--lite)");
    }
  });

  // Global variables
  let slidestoshow, arrowmark;
  if (window.matchMedia("(max-width: 920px)").matches === false) {
    slidestoshow = 4;
    arrowmark = true;
  } else {
    slidestoshow = 1;
    arrowmark = false;
  }

  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <style>
        {`
    /* === HEADING STYLE #1 === */
.one h1 {
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 5px;
}
.one h1:before {
  width: 28px;
  height: 5px;
  display: block;
  content: "";
  position: absolute;
  bottom: 3px;
  left: 50%;
  margin-left: -14px;
  background-color: #b80000;

  }
.one h1:after {
  width: 100px;
  height: 1px;
  display: block;
  content: "";
  position: relative;
  margin-top: 25px;
  left: 50%;
  margin-left: -50px;
  background-color: #b80000;
}


h1 {
  position: relative;
  padding: 0;
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 40px;
  color: #080808;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}

h1 span {
  display: block;
  font-size: 0.5em;
  line-height: 1.3;
}
h1 em {
  font-style: normal;
  font-weight: 600;
}

`}
      </style>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      {/*GOOGLE FONTS*/}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;400;500;600;700;800;900&family=Mukta:wght@200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      {/*PLUGIN*/}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"
      />
      <Nav />
<Announcement/>
      {/*HEADER*/}
      <header className="custom-header">
        <article>
          <h1
            className="title big"
            style={{ color: "white", fontSize: "40px", marginLeft: "25px" }}
          >
            Welcome to <br />
            <em>Sri Satya Sai</em> University of Technology & Medical Science
          </h1>
          <p style={{ marginLeft: "25px" }}>
            SSSUTMS: Sri Satya Sai Group of Institutions attracts a large number
            of students from faraway places & States, due to the quality of
            education at an affordable cost, without any hidden fees policy. In
            its history of fourteen years, various Institutions under the
            umbrella of Sri Satya Sai Group of Institutions were the only
            Institutes in Sehore & nearby six districts offering Technical
            education at affordable fees to worthy & needy students belonging to
            more than six thousand villages, 34 Tehsils.
          </p>
        </article>
      </header>
      {/*MAIN*/}
      <main>
        <div>
          <About />
        </div>
        <br />
        <br />
        <br />

        {/* ////////////////////////////////////////////////notification./////////////////////////////////////// */}

        <div>
          <Socialmedia />
        </div>

        <div>
          <Testimonial />
        </div>

        <div>
          <div className="one">
            <h1>Salient Features</h1>
            <br></br>
          </div>
          <New />
        </div>
        <br />
        <div>
          <div className="one">
            <h1>CAMPUS sNAPSHOT</h1>
            <br></br>
          </div>
          <Facilities />
        </div>
        <br />
        <br />
        <div>
          <Counter />
        </div>
        <div>
          <Why />
        </div>
        <br />
        <div>
          <Gallery />
        </div>
        <div>
          <Imggallery />
        </div>
        <>
          <div id="myModal" className="modal" onClick={closeModal}>
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <div className="modal-body">
                {modalImage && <img src={modalImage} alt="Enlarged Image" />}
              </div>
            </div>
          </div>
        </>
      </main>
      <br />
      <br />
      <div className="one">
        <h1>Our Recruiters</h1>
      </div>
      <div style={{ marginTop: "50px" }}>
        <SliderRequiter />
      </div>
      {/*FOOTER*/}

      <Footerpage />

      {/*ADDITIONAL*/}
      <div className="overlay" />
      <div className="cursor" />
    </>
  );
};

export default Website;
