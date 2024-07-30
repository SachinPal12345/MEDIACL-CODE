
import React from 'react'

const Counter = () => {
  return (
    <>
    <style>
      {
        `
            // .testimonial {
        //   width: 80%;
        //   margin: auto;
        //   padding-top: 100px;
        //   text-align: center;
        //   // margin-top:30px;
        //   margin-bottom:50px
        // }

        // .testimonial h1{
        //   margin-bottom:50px
        // }


        // .testimonial-col {
        //   flex-basis: 100%;
        //   margin-bottom: 5%;
        //   background-color: #fff3f3;
        //   padding: 25px;
        //   cursor: pointer;
        // }

        // .testimonial-col img {
        //   height: 40px;
        //   border-radius: 50%;
        // }

        // .testimonial-col h3 {
        //   margin-top: 15px;
        // }

        // .cta {
        //   margin: 100px auto;
        //   width: 80%;
        //   background-image: url("https://i.postimg.cc/C5sDfzJ1/banner2.jpg");
        //   background-position: center;
        //   background-size: cover;
        //   border-radius: 10px;
        //   text-align: center;
        //   padding: 100px 0;
        // }

        // .cta:hover {
        //   background-image: linear-gradient(
        //       to bottom,
        //       rgba(0, 0, 0, 0.1),
        //       rgba(0, 0, 0, 0.1)
        //     ),
        //     url("https://i.postimg.cc/C5sDfzJ1/banner2.jpg");
        // }

        // .cta h1 {
        //   color: #fff;
        //   margin-bottom: 40px;
        //   padding: 0;
        // }


        /* Define fadeInUp animation */
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }
          100% {
            opacity: 1;
            transform: translateY(0%);
          }
        }

        .fadeInUp-animation {
          animation: fadeInUp 1.5s ease forwards; /* Apply fadeInUp animation */
        }



        * Define fadeInLeft animation */
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Define fadeInRight animation */
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .fadeInLeft-animation {
          animation: fadeInLeft 1s ease forwards;
        }

        .fadeInRight-animation {
          animation: fadeInRight 1s ease forwards;
        }
        @media (min-width: 768px) {
          .row {
            display: flex;
            justify-content: space-between;
          }

          .facilities-col {
            flex-basis: 30%;
          }

          .testimonial-col {
            flex-basis: 48%;
          }
        }

        @media (max-width: 767px) {
          .facilities-col h3 {
            text-align: center;
          }
        }`
      }
    </style>
      <section className="testimonial fadeInUp-animation wrapper tab-container effectTab-header " style={{marginTop:'-40px'}}

      >
      
     
        <div className="row">
          <div className="testimonial-col">
            <div>
              <p>
                I think everything is organised in a way that motivates and supports students to become the best version of themselves. The course content is engaging, the teaching standards are outstanding and every module has allowed me to develop useful skills.
              </p>
              <h3>Akash Sharma</h3>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
          </div>
          <div className="testimonial-col">

            <div>
              <p>
                I would say that I’m using my course to find the career that would best suit my skills. As I already enjoy my course my hope is that it will lead me to a career that can allow me to apply everything that I have learnt from my course and hopefully enjoy it just as much.
              </p>
              <h3>Sumit kumar singh</h3>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half-o" />
            </div>
          </div>
        </div>
      </section></> 
  )
}

export default Counter