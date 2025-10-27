import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import tất cả giao diện Admin
import Admin_Dashboard from "./lib/view/admin/Admin_Dashboard";
import Admin_Class_Management from "./lib/view/admin/Admin_Class_Management";
import Admin_Certificate_Management from "./lib/view/admin/Admin_Certificate_Management";
import Admin_Student_Management from "./lib/view/admin/Admin_Student_Management";
import Admin_Steacher_Management from "./lib/view/admin/Admin_Steacher_Management";
import Admin_Subject_Management from "./lib/view/admin/Admin_Subject_Management";
import Admin_Room_Management from "./lib/view/admin/Admin_Room_Management";
import Admin_finance from "./lib/view/admin/Admin_finance";
import Admin_Notice_Management from "./lib/view/admin/Admin_Notice_Management";
import Admin_Setting from "./lib/view/admin/Admin_Setting";
import TeacherDashboard from "./lib/view/giangvien/Teacher_Dashboard";
// giao dien giang vien
import Teacher_Dashboard from "./lib/view/giangvien/Teacher_Dashboard";
import Teacher_Schedule from "./lib/view/giangvien/Teacher_Schedule";
import Teacher_Track_Learning from "./lib/view/giangvien/Teacher_Track_Learning";
import Teacher_Class_Infor from "./lib/view/giangvien/Teacher_Class_Infor";
import Teacher_Periods from "./lib/view/giangvien/Teacher_Periods";
import Teacher_Textbooks from "./lib/view/giangvien/Teacher_Textbooks";
import Teacher_Debt from "./lib/view/giangvien/Teacher_Debt";
import Teacher_Homework from "./lib/view/giangvien/Teacher_Homework";
import Teacher_Certificate from "./lib/view/giangvien/Teacher_Certificate";
import Teacher_Setting from "./lib/view/giangvien/Teacher_Setting";
import Teacher_Roll_Call from "./lib/view/giangvien/Teacher_Roll_Call";
import Teacher_Score from "./lib/view/giangvien/Teacher_Score";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Các route của Admin 
        <Route path="/admin/Admin_Dashboard" element={<Admin_Dashboard />} />
        <Route path="/admin/Admin_Class_Management" element={<Admin_Class_Management />} />
        <Route path="/admin/Admin_Certificate_Management" element={<Admin_Certificate_Management />} />
        <Route path="/admin/Admin_Student_Management" element={<Admin_Student_Management />} />
        <Route path="/admin/Admin_Steacher_Management" element={<Admin_Steacher_Management />} />
        <Route path="/admin/Admin_Subject_Management" element={<Admin_Subject_Management />} />
        <Route path="/admin/Admin_Room_Management" element={<Admin_Room_Management />} />
        <Route path="/admin/Admin_finance" element={<Admin_finance />} />
        <Route path="/admin/Admin_Notice_Management" element={<Admin_Notice_Management />} />
        <Route path="/admin/Admin_Setting" element={<Admin_Setting />} />*/}

        {/* Các route của giangvien */}
        <Route path="/giangvien/Teacher_Dashboard" element={<Teacher_Dashboard />} />
        <Route path="/giangvien/Teacher_Schedule" element={<Teacher_Schedule />} />
        <Route path="/giangvien/Teacher_Track_Learning" element={<Teacher_Track_Learning />} />
        <Route path="/giangvien/Teacher_Class_Infor" element={<Teacher_Class_Infor />} />
        <Route path="/giangvien/Teacher_Periods" element={<Teacher_Periods />} />
        <Route path="/giangvien/Teacher_Textbooks" element={<Teacher_Textbooks />} />
        <Route path="/giangvien/Teacher_Debt" element={<Teacher_Debt />} />
        <Route path="/giangvien/Teacher_Homework" element={<Teacher_Homework />} />
        <Route path="/giangvien/Teacher_Certificate" element={<Teacher_Certificate />} />
        <Route path="/giangvien/Teacher_Setting" element={<Teacher_Setting />} />
        <Route path="/giangvien/Teacher_Roll_Call" element={<Teacher_Roll_Call />} />
        <Route path="/giangvien/Teacher_Score" element={<Teacher_Score />} />

        {/* Mặc định mở Dashboard */}
        <Route path="*" element={<Teacher_Dashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
