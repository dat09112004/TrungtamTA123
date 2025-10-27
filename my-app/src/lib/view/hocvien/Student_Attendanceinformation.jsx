import React from 'react';
import '../css/Student_style.css';
import { Link } from "react-router-dom";

export default function StudentAttendanceInformation() {
  return (
    <div className="container active" id="attendance-information">
      <div className="dashboard">
        
        {/* Sidebar */}
        <nav className="sidebar">
          <div className="sidebar-logo">
            <h2>👨‍🎓 Học viên</h2>
          </div>
          <ul className="sidebar-menu">
            <li><Link to="/hocvien/Student_Dashboard">🏠 Trang chủ</Link></li>
            <li><Link to="/hocvien/Student_Registerclass">📅 Đăng ký lớp học</Link></li>
            <li><Link to="/hocvien/Student_Schoolscheduelue">📘 Lịch học</Link></li>
            <li><Link to="/hocvien/Student_Score">📊 Điểm số</Link></li>
            <li><Link to="/hocvien/Student_Fee">💰 Học phí</Link></li>
            <li><Link to="/hocvien/Student_Noti">📢 Thông báo</Link></li>
            <li><Link to="/hocvien/Student_Coursematerials">📚 Tài liệu</Link></li>
            <li><Link to="/hocvien/Student_Attendanceinformation" className="active">🕒 Điểm danh</Link></li>
            <li><Link to="/hocvien/Student_Homework">📝 Bài tập</Link></li>
            <li><Link to="/hocvien/Student_Certificate">🎓 Chứng chỉ</Link></li>
            <li><Link to="/hocvien/Student_Setting">⚙️ Cài đặt</Link></li>
            <li><Link to="/">🚪 Đăng xuất</Link></li>
          </ul>
        </nav>

        {/* Main content */}
        <main className="main-content">
          <div className="header">
            <h1>Thông tin điểm danh</h1>
            <div className="user-info">
              <div className="avatar">HV</div>
              <span>Xin chào, Học viên</span>
            </div>
          </div>

          {/* Bảng điểm danh */}
          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã lớp học phần</th>
                  <th>Tên môn học/học phần</th>
                  <th>Số tiết nghỉ có phép</th>
                  <th>Số tiết nghỉ không phép</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>EN001</td>
                  <td>Tiếng Anh giao tiếp cơ bản</td>
                  <td><span className="status-badge status-active">0</span></td>
                  <td><span className="status-badge status-inactive">2</span></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>EN002</td>
                  <td>Tiếng Anh giao tiếp nâng cao</td>
                  <td><span className="status-badge status-active">1</span></td>
                  <td><span className="status-badge status-inactive">4</span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>EN003</td>
                  <td>Phát âm & Ngữ điệu</td>
                  <td><span className="status-badge status-active">0</span></td>
                  <td><span className="status-badge status-active">0</span></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>EN004</td>
                  <td>Kỹ năng nghe - nói</td>
                  <td><span className="status-badge status-active">0</span></td>
                  <td><span className="status-badge status-inactive">1</span></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>EN005</td>
                  <td>Kỹ năng đọc - viết</td>
                  <td><span className="status-badge status-active">0</span></td>
                  <td><span className="status-badge status-active">0</span></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3" style={{ fontWeight: "bold", textAlign: "right" }}>TỔNG:</td>
                  <td><span className="status-badge status-active">1</span></td>
                  <td><span className="status-badge status-inactive">7</span></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
