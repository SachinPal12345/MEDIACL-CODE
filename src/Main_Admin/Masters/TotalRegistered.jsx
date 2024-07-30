import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TableCell, Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import SearchIcon from "@mui/icons-material/Search";
import { CircularProgress } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import CardContent from "@mui/material/CardContent";
import DatePicker from "react-datepicker"
import * as XLSX from "xlsx";

import AdminDashboard from "./Admin_Dashboard/AdminDashboard";
import { Button } from "@mui/material";

const theme = createTheme({
  typography: {
    fontWeightBold: 700,
  },
});

function TotalRegistered() {
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [studentdata, setStudentData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(process.env.REACT_APP_STD_TOTAL_LIST);
        const data = await response.json();
        console.log(data, "response data");
        setStudentData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filterData = (filteredData) => {
    if (!Array.isArray(filteredData)) return [];
    return filteredData.filter((student) => {
      const studentType = student.StudentType || "Normal";
      return (
        student.randomId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        studentType.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  };

  const getSortedAndSlicedData = () => {
    const filteredData = filterData(studentdata);


    const sortedData = [...filteredData].sort((a, b) => {
      if (sortBy === "name") {
        return sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }

      return 0;
    });

    const startIndex = page * rowsPerPage;
    return sortedData.slice(startIndex, startIndex + rowsPerPage);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = (column) => {
    if (column === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const ExportToExcel = () => {
    if (Array.isArray(studentdata)) {
      const Excel = studentdata.map((student) => ({
        Random_Id: student.randomId,
        Random_Password: student.randomPassword,
        Admitted_Date: student.createdAt,
        Name: student.name,
        Fathers_Name: student.fathersname,
        Mothers_Name: student.mothersname,
        Email: student.email,
        Mobile: student.mobile,
        Course_Type: student.courseType,
        Course: student.courseName,
        Branch: student.courseBranch,
        StudentType: student.StudentType || "Normal",
      }));

      const worksheet = XLSX.utils.json_to_sheet(Excel);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Enrolled Student");
      XLSX.writeFile(workbook, "Student_Data.xlsx");
    } else {
      console.error("Student data is not an array. Cannot export to Excel.");
    }
  };
const [selectedDate,setSelectedDate] = useState(null)
const handleDateChange=(date)=>{
  setSelectedDate(date)
}

  console.log(studentdata, "studentdataaa");

  return (
    <>
      <ThemeProvider theme={theme}>
        <AdminDashboard />
        <Box
          sx={{
            width: "90%",
            height: "50%",
            marginLeft: "100px",
            marginTop: "80px",
          }}
        >
          {loading ? (
            <CircularProgress
              color="success"
              style={{ marginTop: "80px", marginLeft: "50%" }}
            />
          ) : (
            <CardContent>
              <Paper sx={{ width: "100%", overflow: "auto" }}>
                <Button
                  style={{ float: "right", marginRight: "10px" }}
                  variant="outlined"
                  onClick={ExportToExcel}
                >
                  Export to Excel
                </Button>
                <Box sx={{ p: 2 }}>
                  <SearchIcon sx={{ mr: 1 }} />
                  <input
                    type="text"
                    placeholder="Search  by ID or Name"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </Box>
                <TableContainer sx={{ maxHeight: "400px" }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          align="left"
                          style={{ backgroundColor: "#004e92" }}
                        >
                          <h1
                            style={{
                              fontSize: "18px",
                              fontWeight: "bolder",
                              color: "white",
                              fontFamily: "-moz-initial",
                            }}
                          >
                            S.No.
                          </h1>
                        </TableCell>

                        <TableCell
                          align="left"
                          style={{ backgroundColor: "#004e92" }}
                        >
                          <h1
                            style={{
                              fontSize: "18px",
                              fontWeight: "bolder",
                              color: "white",
                              fontFamily: "-moz-initial",
                            }}
                          >
                            Registration ID
                          </h1>
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{ backgroundColor: "#004e92" }}
                        >
                          <h1
                            style={{
                              fontSize: "18px",
                              fontWeight: "bolder",
                              color: "white",
                              fontFamily: "-moz-initial",
                            }}
                          >
                            Registration Password
                          </h1>
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{ backgroundColor: "#004e92" }}
                        >
                          <h1
                            style={{
                              fontSize: "18px",
                              fontWeight: "bolder",
                              color: "white",
                              fontFamily: "-moz-initial",
                            }}
                          >
                            Registered Date
                          </h1>
                        </TableCell>

                        <TableCell
                          align="left"
                          style={{
                            backgroundColor: "#004e92",
                            minWidth: "150px",
                          }}
                        >
                          <h1
                            style={{
                              fontSize: "18px",
                              fontWeight: "bolder",
                              color: "white",
                              fontFamily: "-moz-initial",
                            }}
                            onClick={() => handleSort("name")}
                          >
                            Candidate Name
                            {sortBy === "name" && (
                              <span>{sortOrder === "asc" ? " ↑" : " ↓"}</span>
                            )}
                          </h1>
                        </TableCell>

                        <TableCell
                          align="left"
                          style={{
                            backgroundColor: "#004e92",
                            minWidth: "150px",
                          }}
                        >
                          <h1
                            style={{
                              fontSize: "18px",
                              fontWeight: "bolder",
                              color: "white",
                              fontFamily: "-moz-initial",
                            }}
                          >
                            Father's Name
                          </h1>
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{
                            backgroundColor: "#004e92",
                            minWidth: "150px",
                          }}
                        >
                          <h1
                            style={{
                              fontSize: "18px",
                              fontWeight: "bolder",
                              color: "white",
                              fontFamily: "-moz-initial",
                            }}
                          >
                            Mother's Name
                          </h1>
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{ backgroundColor: "#004e92" }}
                        >
                          <h1
                            style={{
                              fontSize: "18px",
                              fontWeight: "bolder",
                              color: "white",
                              fontFamily: "-moz-initial",
                            }}
                          >
                            Email
                          </h1>
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{ backgroundColor: "#004e92" }}
                        >
                          <h1
                            style={{
                              fontSize: "18px",
                              fontWeight: "bolder",
                              color: "white",
                              fontFamily: "-moz-initial",
                            }}
                          >
                            Mobile No
                          </h1>
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{ backgroundColor: "#004e92" }}
                        >
                          <h1
                            style={{
                              fontSize: "18px",
                              fontWeight: "bolder",
                              color: "white",
                              fontFamily: "-moz-initial",
                            }}
                          >
                            Course Type
                          </h1>
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{ backgroundColor: "#004e92" }}
                        >
                          <h1
                            style={{
                              fontSize: "18px",
                              fontWeight: "bolder",
                              color: "white",
                              fontFamily: "-moz-initial",
                            }}
                          >
                            Course Name
                          </h1>
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{ backgroundColor: "#004e92" }}
                        >
                          <h1
                            style={{
                              fontSize: "18px",
                              fontWeight: "bolder",
                              color: "white",
                              fontFamily: "-moz-initial",
                            }}
                          >
                            Course Branch
                          </h1>
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{
                            backgroundColor: "#004e92",
                            minWidth: "150px",
                          }}
                        >
                          <h1
                            style={{
                              fontSize: "18px",
                              fontWeight: "bolder",
                              color: "white",
                              fontFamily: "-moz-initial",
                            }}
                          >
                            Student Type
                          </h1>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {getSortedAndSlicedData().map((student, index) => (
                        <TableRow key={student.randomId}>
                          <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
                          <TableCell>{student.randomId}</TableCell>
                          <TableCell>{student.randomPassword}</TableCell>
                          <TableCell>
                            {student.createdAt}</TableCell>
                          <TableCell>{student.name}</TableCell>
                          <TableCell>{student.fathersname}</TableCell>
                          <TableCell>{student.mothersname}</TableCell>
                          <TableCell>{student.email}</TableCell>
                          <TableCell>{student.mobile}</TableCell>
                          <TableCell>{student.courseType}</TableCell>
                          <TableCell>{student.courseName}</TableCell>
                          <TableCell>{student.courseBranch}</TableCell>
                          <TableCell>{student.StudentType || "Normal"}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={studentdata.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </CardContent>
          )}
        </Box>
      </ThemeProvider>
    </>
  );
}

export default TotalRegistered;

