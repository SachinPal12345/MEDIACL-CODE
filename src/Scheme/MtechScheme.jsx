



import React from "react";


import { Link } from "react-router-dom";


function MtechScheme() {
  return (
    <>

      <style>
        {`
          .ddd {
            margin: 10px auto; /* Center the table */
            padding: 30px;
            overflow-x: auto; /* Allow horizontal scrolling on small screens */
            counter-reset: examples approaches;
            background-color: Gainsboro;
            color: #333;
            font-size: 93.75%;
            line-height: 1.5;
            max-width: 1680px;
          }

          table {
            width: 70%; /* Make the table fill the container */
            border-collapse: collapse; /* Remove default spacing between table cells */
          }

          th, td {
            padding: .5em;
            border: 1px solid #999;
          }

          @media screen and (max-width: 768px) {
            /* Apply responsive styles for screens smaller than 768px */
            .ddd {
              overflow-x: auto;
            }

            table {
              max-width: 100%; /* Allow horizontal scrolling on small screens */
            }
          }
          h2 {
            text-align: center;
            background-color:#14adad;
            // Width : 100%;
            // margin-left:10px;
            border-radius: 25px;
            font-size: 30px; /* Default font size */
            margin: 0; /* Remove default margin */
           
          }
          @media screen and (max-width: 600px) {
            h2 {
                font-size: 18px; /* Adjust font size for smaller screens */
            }
        }
        @media screen and (max-width: 768px) {
          table {
            width: 100%;
          }
          table thead {
            display: none;
          }
          table, table tbody, table tr, table td {
            display: block;
            width: 100%;
          }
          table tr {
            margin-bottom: 15px;
            display: block;
            border: 1px solid #ccc;
          }
          table td {
            text-align: left;
            padding: 10px;
          }
        }
        `}
      </style>
 
      <div className="ddd" style={{ color: "black" }}>
        <h2>M.Tech. </h2>
        <br />
        <h4 style={{ textAlign: "center", textDecoration: "underline" }}>
          <b>Scheme for M.Tech.</b>
        </h4>{" "}
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>S.No</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>First Semester Scheme</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>Second Semester Scheme</b>
                </h6>
              </th>
              <th  scope="colgroup">
                <h6>
                  <b>
                    {" "}
                    Third Semester Scheme
                  </b>
                </h6>
              </th>
              <th  scope="colgroup">
                <h6>
                  <b>
                    {" "}
                    Forth Semester Scheme
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">  1  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SC_MCSE_I.pdf">Computer Science and Engineering </Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCHMCSE_II.pdf">Computer Science and Engineering</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/CS_III.pdf">Computer Science and Engineering</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/%20CSE_Sche.pdf">Computer Science and Engineering</Link></th>
              </tr>

              <tr>
              <th scope="row"> 2  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SC_MCTA_I.pdf">Computer Technology and Application </Link> </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCHMCTA_II.pdf">Computer Technology and Application</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/CTA_III.pdf">Computer Technology and Application</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/CTA%20_Scheme.pdf">Computer Technology and Application</Link></th>
              </tr>

              <tr>
              <th scope="row"> 3  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SC_MTDC_I.pdf">Digital Communication</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SC_MTDC_II.pdf">Digital Communication</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/DC_III.pdf">Digital Communication</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/DC.pdf">Digital Communication</Link></th>
              </tr>

              <tr>
              <th scope="row"> 4  </th>
              <th scope="row"> <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SC_MEPS_I.pdf">Electrical Power System</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SC_MTEPS_II.pdf">Electrical Power System</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/EPS_III.pdf">Electrical Power System</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/EPS.pdf">Electrical Power System</Link></th>
            
              </tr>

              <tr>
              <th scope="row"> 5  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SC_MTID_I.pdf">Industrial Design</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SC_MTID_II.pdf">Industrial Design</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/ID_III.pdf">Industrial Design</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/ID.pdf">Industrial Design</Link></th>
              </tr>

              <tr>
              <th scope="row"> 6  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SC_MCIT_I.pdf">Information Technology</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCHMIT_II.pdf">Information Technology</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/MIT_III.pdf">Information Technology</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/pe1.pdf">Information Technology</Link></th>
              </tr>
              
              <tr>
              <th scope="row"> 7  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SC_MTPE_I.pdf">Power Electronics</Link> </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SC_MTPE_II.pdf">Power Electronics</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/PE_III.pdf">Power Electronics</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/PE.pdf">Power Electronics</Link></th>
              </tr>

              <tr>
              <th scope="row"> 8  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SC_MTSE_I.pdf">Software Engineering</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCHMSE_II.pdf">Software Engineering</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SE_III.pdf">Software Engineering</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SE.pdf">Software Engineering</Link></th>
              </tr>

              <tr>
              <th scope="row"> 9  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SC_MTSD_I.pdf">Structural Design </Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SC_MTSD_II.pdf">Structural Design</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SD_III.pdf">Structural Design</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/CESD.pdf">Structural Design</Link></th>
           
              </tr>

              <tr>
              <th scope="row"> 10  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SC_MTH_I.pdf">Thermal Engineering</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SC_MTH_II.pdf">Thermal Engineering</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/TH_III.pdf">Thermal Engineering</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/METH.pdf">Thermal Engineering</Link></th>
              </tr>

              <tr>
              <th scope="row"> 11  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SC_MTVD_I.pdf">VLSI Design</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SC_MTVLSI_II.pdf">VLSI Design</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/VL_III.pdf">VLSI Design</Link></th>
              <th scope="row"><Link to = " https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/VLSI.pdf">VLSI Design</Link></th>
             
              </tr>
         
          </tbody>
        </table>{" "}
        <br />
        <br />
        
      </div>


    </>
  );
}

export default MtechScheme;

