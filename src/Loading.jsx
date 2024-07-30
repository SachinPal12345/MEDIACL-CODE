import React from "react";

function Loading() {
  return (
    <>
      <style>
        {`
        .loading-page-container,
.loading-page-container > * {
  box-sizing: border-box;
}

.loading-page-container {
  opacity: 0.95;
  position: absolute;
  top: 80%;
  left: 50%;
  margin-left: -100px;
  margin-top: 100px;
}

.loading-page-container .progress {
  position: relative;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  border: 6px solid #182d4d;
  box-shadow: 0 0 20px #1e384c;
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
}

.loading-page-container .progress .inner {
  position: absolute;
  overflow: hidden;
  z-index: 2;
  border-radius: 50%;
  margin-left: -4px;
  margin-top: -1px;
  width: 196.5px;
  height: 196.5px;
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
}

.loading-page-container .progress .inner .water {
  opacity: 0.55;
  position: absolute;
  z-index: 1;
  width: 200%;
  height: 200%;
  left: -50%;
  border-radius: 40%;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-name: spin;
  animation-name: spin;
  top: 55%;
  background: #32bafa;
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
  -webkit-animation-duration: 10s;
  animation-duration: 10s;
  box-shadow: 0 0 20px #152a4a;
}

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

        `}
      </style>
      {/* <div className="loading-page-container">
        <div className="progress">
          <div className="inner">
            <svg
              xmlns="https://upload.wikimedia.org/wikipedia/commons/9/94/SSSUTMS_Logo.png"
              version={1.0}
              width="144.000000pt"
              height="143.000000pt"
              viewBox="0 0 144.000000 143.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,143.000000) scale(0.100000,-0.100000)"
                fill="#182D4D"
                stroke="none"
              >
                <path d="M0 1075 l0 -355 23 0 c36 1 101 35 129 68 14 17 43 74 63 127 49 125 70 155 127 179 99 41 173 -9 226 -154 62 -164 90 -200 160 -200 61 0 89 42 136 201 30 102 62 142 126 159 50 14 92 8 137 -20 40 -24 56 -48 105 -162 49 -115 79 -155 132 -179 82 -37 76 -63 76 336 l0 355 -720 0 -720 0 0 -355z" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/94/SSSUTMS_Logo.png"
                  alt=""
                />
              </g>
            </svg>
            <div className="water" />
          </div>
        </div>
      </div> */}

      <div className="loading-page-container">
        <div className="progress">
          <div className="inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              width="144.000000pt"
              height="143.000000pt"
              viewBox="0 0 144.000000 143.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,143.000000) scale(0.100000,-0.100000)"
                fill="#182D4D"
                stroke="none"
              >
                {/* Blank circle */}
                <circle
                  cx="72"
                  cy="71.5"
                  r="63"
                  stroke="#182D4D"
                  strokeWidth="6"
                  fill="transparent"
                />
                {/* Image inside the circle */}
                <image
                  xlinkHref="https://upload.wikimedia.org/wikipedia/commons/9/94/SSSUTMS_Logo.png"
                  x="9"
                  y="8"
                  width="120"
                  height="120"
                />
              </g>
            </svg>
            <div className="water" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Loading;
