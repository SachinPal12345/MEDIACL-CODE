


import React from 'react'
 
 const Socialmedia = () => {
   return (
    <>
    <style>
      {
        `
//         body {
//   background-image: url(https://picsum.photos/3000/2000?image=1050);
//   background-size: cover;
//   background-position: center;
//   color: white;
//   font-family: tahoma;
//   height: 100vh;
// }


    

.social {
  position: fixed;
  top: 30%;

  
  z-index: 1000; /* Ensure this is higher than other elements */
}


.social ul {
  list-style-type: none;
  padding: 0;
  transform: translatex(-270px);
}

.social ul li {
  display: block;
  margin: 5px;
  background-color: #01204E;
  width: 300px;
  text-align: right;
  padding: 7px;
  margin-left:10px;
  border-radius: 0 30px 30px 0;
  transition: all 1s;
}

.social ul li:hover {
  transform: translatex(110px);
}

.social ul li.twitter:hover {
  background-color: #808836;
}

.social ul li.facebook:hover {
  background-color: #3b5999;
}

.social ul li.google-plus:hover {
  background-color: #543310;
}

.social ul li.instagram:hover {
  background-color: #e4405f;
}


.social ul li.youtube:hover {
  background-color: #FF7D29;
}
.social ul li a {
  color: white;
  text-decoration: none;
}

.social ul li i {
  text-align: center;
  margin-left: 20px;
  color: black;
  background-color: white;
  padding: 5px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 20px;
  transform: rotate(0deg);
}

.social ul li:hover i {
  transform: rotate(360deg);
  transition: all 1s;
}`
      }
    </style>
   
    <nav className="social">
  <ul>
    <li className="twitter">
    <a href="https://twitter.com/login" >
        Twitter
        <i className="fa fa-twitter" aria-hidden="true" />
      </a>
    </li>
    <li className="facebook">
    <a href="https://www.facebook.com/www.sssutms.co.in">
        Facebook
        <i className="fa fa-facebook" aria-hidden="true" />
      </a>
    </li>
    <li className="google-plus">
      <a href="https://aboutme.google.com/u/0/?referer=gplus">
        Google
        <i className="fa fa-google-plus" aria-hidden="true" />
      </a>
    </li>
    <li className="instagram">
    <a href="https://www.instagram.com/p/CW79qNsqynM/" >
        Instagram
        <i className="fa fa-instagram" aria-hidden="true" />
      </a>
    </li>







    <li className="youtube">
    <a href="https://www.youtube.com/@SriSatyaSaiUniversity_" >
     YouTube
     <i class="fa fa-youtube-play" aria-hidden="true"></i>
      </a>
    </li>
  </ul>
</nav>
</>
   )
 }
 
 export default Socialmedia