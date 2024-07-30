import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import AdminDashboard from "./AdminDashboard";

const AddCourseForm = () => {
  const [formData, setFormData] = useState({
    session: "",
    courseType: "",
    courseName: "",
    branches: [{ branchName: "", enabled: true }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBranchChange = (e, index) => {
    const { name, value } = e.target;
    const updatedBranches = [...formData.branches];
    updatedBranches[index][name] = value;
    setFormData({
      ...formData,
      branches: updatedBranches,
    });
  };

  const addBranch = () => {
    setFormData({
      ...formData,
      branches: [...formData.branches, { branchName: "", enabled: true }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
      "https://sssutms.ac.in/apitest/v1/E-pravesh/addCourse",
        formData
      );
      console.log("Course added/updated successfully:", response.data);
    } catch (error) {
      console.error("Error adding/updating course:", error);
    }
  };

  return (
    <>
      <AdminDashboard />
      <Container
        className="shadow p-3 bg-body rounded"
        style={{ marginTop: "80px", marginLeft: "11%" }}
      >
        <h3
          style={{
            fontWeight: "inherit",
            backgroundImage: "linear-gradient(to right, #004e92, #990033)",
            borderRadius: "10px",
            color: "whitesmoke",
            padding: "5px",
          }}
        >
          Add Student Course
        </h3>
        <Form style={{ marginTop: "3%" }} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="session">
              <Form.Label>Admission Session</Form.Label>
              <Form.Control
                type="text"
                name="session"
                value={formData.session}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="courseType">
              <Form.Label>Course Type</Form.Label>
              <Form.Control
                type="text"
                name="courseType"
                value={formData.courseType}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="courseName">
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                type="text"
                name="courseName"
                value={formData.courseName}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          {formData.branches.map((branch, index) => (
            <Row className="mb-3" key={index}>
              <Form.Group as={Col} controlId={`branchName-${index}`}>
                <Form.Label>Branch Name</Form.Label>
                <Form.Control
                  type="text"
                  name="branchName"
                  value={branch.branchName}
                  onChange={(e) => handleBranchChange(e, index)}
                />
              </Form.Group>
            </Row>
          ))}
          <Button variant="secondary" onClick={addBranch}>
            Add Branch
          </Button>
          <Button
            variant="primary"
            type="submit"
            style={{ marginLeft: "10px" }}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AddCourseForm;
