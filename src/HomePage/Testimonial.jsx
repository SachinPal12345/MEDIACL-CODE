import React from 'react';
import news1 from '../images/media.jpg'
import News2 from '../images/news2.jpg'
import News3 from '../images/news3.jpg'
import Kuch from '../images/Kuch.png'
import news from '../images/newspaper.jpg'
import main from '../images/maingate.jpg'
import geo from '../images/geo.JPG'

import newss from '../images/newspapermedia.jpg'

const Testimonial = () => {
  return (
    <>
    <style>
      {
        `


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
        body {
   margin: 0;
}
/*NAV TOP*/
//  .nav__top {
//   background: #f1f1f1;
//   padding: 0 16px;
//    height:300px;
//   display: flex;
//   justify-content: space-between;
// }

//     .nav__top {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color:#2f3e46;
//     padding: 20px; /* Adjust as needed */
// }


.nav__top {
    display: flex;
    margin-top:30px;
    justify-content: center;
    align-items: center;
    background-color: #2f3e46;
    padding: 20px; /* Adjust padding as needed */
    filter: brightness(70%) contrast(110%); /* Example filter */
    height: 300px; /* Adjust height as needed */
}

.content-container {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1200px; /* Adjust to limit max width of the container */
}

.parallax-image {
    width: 500px; /* Fixed width for the image */
    height: 280px; /* Fixed height for the image */
   margin-left:-60px;
}

.text-div {
    flex: 1; /* Take up the remaining space */
    margin-left: 20px; /* Space between the image and text */
    font-size: 1.2em; /* Adjust as needed */
    color: white; /* Text color */
text-align:justify;
    font-family: 'Arial', sans-serif; /* Font family */
    line-height: 1.8em; /* Adjust line height as needed */
}



 .title {
   padding: 40px 0;
}
 .title__h1 {
   text-align: center;
   font-size: 40px;
   font-family: sans-serif;
   font-weight: 600;
   margin: 0 0 8px;
}
 .title__h1 span {
   font-family: serif;
   font-style: italic;
}
 .title__sub {
   text-align: center;
   font-size: 12px;
   font-family: sans-serif;
   margin: 0;
}
/*NAV PAGE*/
 .nav__page {
   border-top: 1px solid #f1f1f1;
   border-bottom: 1px solid #f1f1f1;
   max-width: 960px;
   margin: 0 auto;
   position: relative;
   display: flex;
   justify-content: space-between;
}
/*GRIDS*/
 .grid {
   max-width: 83%;
   margin: auto;
   padding: 32px 16px;
}
 .grid__col__title {
   color: #780000;
   font-family: sans-serif;
   margin: 0 0 8px;
}
 .grid__col-2 {
   border-bottom: 1px solid #f1f1f1;
   margin: 0 0 24px;
   padding: 0 0 16px;
   display: grid;
   grid-template-columns: 60% calc(40% - 16px);
   grid-gap: 16px;
}
 .grid__col-3 {
   margin: 15px 0;
   display: grid;

   grid-template-columns: repeat(3, calc(33.33% - 11px));
   grid-gap: 16px;
}
/*GRID ITEMS*/
 .grid__item-lg {
   border-right: 1px solid #f1f1f1;
   padding: 0 20px 0 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}
 .grid__item-lg .grid__item__img {
   width: 100%;
   height: 322px;
}
 .grid__item-lg .grid__item__title {
   font-size: 20px;
   line-height: 1.3;
   width: 70%;
}
 .grid__item-md .grid__item__img {
   width: 100%;
   height: 168px;
}
 .grid__item-sm {
   border-top: 1px solid #f1f1f1;
   border-bottom: 1px solid #f1f1f1;
   margin: 0 0 8px;
   display: grid;
   grid-template-columns: calc(80% - 16px) 20%;
   grid-gap: 16px;
}
 .grid__item-sm:nth-of-type(odd) {
   border-bottom: none;
}
 .grid__item-sm div {
   display: flex;
   flex-direction: column;
   justify-content: center;
}
 .grid__item-sm .grid__item__category {
   font-size: 10px;
}
 .grid__item-sm .grid__item__author {
   font-size: 11px;
}
 .grid__item-sm .grid__item__img {
   width: 100%;
   height: 48px;
}
/*...Grid item contents...*/
 .grid__item__img {
   background: #ccc;
   object-fit: cover;
}
 .grid__item__category {
   color: #545454;
   font-size: 11px;
   font-family: sans-serif;
   text-transform: uppercase;
   margin: 16px 0 0;
}
 .grid__item__title {
   color: #003049;
   line-height: 1.3;
   margin: 16px 0;
   font-size:15px;
}
 .grid__item__author {
   color: #7e8b98;
   font-size: 12px;
   font-family: sans-serif;
   margin: 0 0 16px;
}
/*FORMS*/
 .form {
   border: none;
   display: block;
}
 .form__title {
   font-size: 16px;
   font-family: sans-serif;
   color: #545454;
   margin: 16px 0;
}
 .form__fields {
   display: grid !important;
   grid-template-columns: 75% 25%;
}
 .form__input {
   border: 1px solid #f1f1f1;
   width: calc(100% - 4px);
   height: 24px;
   text-indent: 4px;
}
 .form__submit {
   background: #545454;
   color: #fff;
   border: none;
   padding: 6px 16px;
   cursor: pointer;
}
 



/*RESPONSIVE*/
 @media screen and (max-width: 740px) {
  /*..Nav..*/
  /*..Grid..*/
  /*..Grid Items..*/
  /*..Form..*/
   .nav__page {
     box-sizing: border-box;
     padding: 0 16px;
     width: 100%;
     overflow-x: scroll;
  }
   .nav__page__link:last-of-type {
     padding: 0 16px 0 0;
  }
   .grid__col-2, .grid__col-3 {
     grid-template-columns: 1fr;
  }
   .grid__item-lg {
     border: none;
     padding: 0;
  }
   .grid__item-lg .grid__item__title {
     width: 100%;
  }
   .grid__item-md {
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
  }
   .grid__item-md .grid__item__img {
     height: 232px;
  }
   .grid__item-sm {
     grid-template-columns: calc(75% - 16px) 25%;
     padding: 16px 0;
  }
   .grid__item-sm .grid__item__img {
     height: 88px;
  }
   .form {
     padding: 8px 0;
  }
   .form__submit {
     padding: 6px 0;
  }
}
/* Scrollbar style for Chrome */
/*..Track..*/
 ::-webkit-scrollbar {
   width: 4px;
   height: 4px;
}
 ::-webkit-scrollbar-track {
   background: transparent;
}
/*..Thumb..*/
 ::-webkit-scrollbar-thumb {
   background: #545454;
   border-radius: 8px;
   width: 16px;
}
 ::-webkit-scrollbar:vertical {
   display: none;
   background: transparent;
}

@media screen and (max-width: 740px) {
.nav__top{
height:600px;}
  .content-container {
    flex-direction: column; /* Side-by-side layout for larger screens */
    align-items: flex-start; /* Align items to the start */
    text-align: justify; /* Align text to the left */
  }

  .parallax-image {
    width: auto; /* Default image width */
    max-width: 350px; /* Remove max-width constraint */
  }

  .text-div {
    margin-top: 0; /* Remove top margin */
    margin-left: 0px; /* Add space between image and text */
  }
}
 `
      }
    </style>
    <main>
  <nav className="nav__top">
    <div className="content-container">
        <img src={main} className="parallax-image" alt="Parallax Image" />
        <div className="text-div">
            "SSSUTMS stands as a pillar of excellence, where the fusion of knowledge and innovation propels us towards a brighter tomorrow. Here, we nurture visionary leaders and trailblazers who are equipped to transform the world."
        </div>
    </div>
</nav>


  <br></br>

     <div className="one">
  <h1>Newsletter</h1>

</div>
    <article className="grid">
      <section className="grid__col-2">
        <div className="grid__item-lg">
          <img
            src="https://images.unsplash.com/photo-1496902526517-c0f2cb8fdb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            className="grid__item__img"
          />
          {/* <p className="grid__item__category">Managing People</p> */}
          <h4 className="grid__item__title">
         "Workshop on SQL Using Oracle"
          </h4>
          <p className="grid__item__author">By Gaurav Saxena</p>
        </div>
        <div>
          <h3 className="grid__col__title">Spotlight</h3>
          <div className="grid__item-sm">
            <div>
              {/* <p className="grid__item__category">Employee Feedback</p> */}
              <h4 className="grid__item__title">
              Webinar for Blood Donation Awareness
              </h4>
              <p className="grid__item__author">On 8 JULY 2023</p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                className="grid__item__img"
              />
            </div>
          </div>
          {/*-*/}
          <div className="grid__item-sm">
            <div>
              {/* <p className="grid__item__category">Performance Reviews</p> */}
              <h4 className="grid__item__title" style={{textTransform:'uppercase'}}>
             life Sciences Sector Skills development Council
              </h4>
              <p className="grid__item__author">On 16 Sep 2023</p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1564424555153-04228f0aa7ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                className="grid__item__img"
              />
            </div>
          </div>
          {/*-*/}
          {/* <div className="grid__item- form">
            <h4 className="form__title">AICTE-ISTE SPONSORED INDUCTION AND REFRESHER PROGRAM</h4>
            <div className="form__fields">
              <input
                type="email"
                className="form__input"
                placeholder="Email address"
              />
              <input
                type="submit"
                defaultValue="Sign up"
                className="form__submit"
              />
              <div></div>
            </div>
          </div> */}

<div className="grid__item-sm">
            <div>
              {/* <p className="grid__item__category">Performance Reviews</p> */}
              <h4 className="grid__item__title" style={{textTransform:'uppercase'}}>
              AICTE-ISTE SPONSORED INDUCTION AND REFRESHER PROGRAM
              </h4>
              <p className="grid__item__author">On 25 Nov 2023</p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1564424555153-04228f0aa7ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                className="grid__item__img"
              />
            </div>
          </div>
        </div>
      </section>
      <h3 className="grid__col__title">Press & Media</h3>
      <section className="grid__col-3">
        <div className="grid__item-md">
        <a href={news}>
          <img
            src={news1}

            className="grid__item__img"
          /></a>
          <p className="grid__item__category">Plantation of a tree in the name of mother with a pledge</p>
          <h4 className="grid__item__title">
          A tree plantation program was organized in the University by the Management Department of SSSUTMS.
          </h4>
          {/* <p className="grid__item__author">By Annette Cardwell</p> */}
        </div>
        {/*-*/}
        <div className="grid__item-md">
      
         <a href={newss}>
          <img
            src={geo}
            className="grid__item__img"
          /></a>
          <p className="grid__item__category">Participants were honored at the closing ceremony of National Science Day in Satyasai College.</p>
          <h4 className="grid__item__title">
          On the occasion of National Science Day, a four-day science festival was organized at Shri Satya Sai University.
          </h4>
          {/* <p className="grid__item__author">By Jennifer Romolini</p> */}
        </div>
        {/*-*/}
        <div className="grid__item-md">
          <a href='https://sssutms.co.in/cms/Areas/Website/Files/PressMedia/Conference-2019_11012022_045409.jpg'>
          <img
            src={News3}
            className="grid__item__img"
          /></a>
          <p className="grid__item__category">Immense career potential in pharmacovigilance field</p>
          <h4 className="grid__item__title">
          Dr. Anish Sheikh, co-founder of the Department of Physics, Vikram University, Ujjain, participated as the chief guest in the seminar. .
          </h4>
          {/* <p className="grid__item__author">By Deanna deBara</p> */}
        </div>
        {/*-*/}
      </section>
    </article>
  </main>
</>  
  )
}

export default Testimonial