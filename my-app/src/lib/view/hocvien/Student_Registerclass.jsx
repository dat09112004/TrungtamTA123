import React from 'react';
import '../css/Student_style.css';
import { Link } from "react-router-dom";

export default function StudentRegisterClass() {
  return (
    <div className="container active" id="register-class">
      <div className="dashboard">
        <nav className="sidebar">
          <div className="sidebar-logo">
            <h2>👨‍🎓 Học viên</h2>
          </div>
          <ul className="student-menu">
            <li><Link to="/student/dashboard">🏠 Trang chủ</Link></li>
            <li><Link to="/student/register-class">📅 Đăng ký lớp học</Link></li>
            <li><Link to="/student/school-schedule">📘 Lịch học</Link></li>
            <li><Link to="/student/score">📊 Điểm số</Link></li>
            <li><Link to="/student/fee">💰 Học phí</Link></li>
            <li><Link to="/student/noti">📢 Thông báo</Link></li>
            <li><Link to="/student/course-materials">📚 Tài liệu</Link></li>
            <li><Link to="/student/attendance-information">🕒 Điểm danh</Link></li>
            <li><Link to="/student/homework">📝 Bài tập</Link></li>
            <li><Link to="/student/certificate">🎓 Chứng chỉ</Link></li>
            <li><Link to="/student/setting">⚙️ Cài đặt</Link></li>
            <li><Link to="/">🚪 Đăng xuất</Link></li>
          </ul>
        </nav>

        <main className="main-content">
          <div className="header">
            <h1>Đăng ký lớp học</h1>
          </div>

          <div className="filters">
            <input type="text" className="filter-input" placeholder="🔍 Tìm kiếm lớp học..." />
          </div>

          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã lớp</th>
                  <th>Tên lớp học</th>
                  <th>Giảng viên</th>
                  <th>Lịch học</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>EN001</td>
                  <td>Tiếng Anh Giao Tiếp Cơ Bản</td>
                  <td>Nguyễn Văn A</td>
                  <td>Thứ 2, 4, 6 - 18h00</td>
                  <td><button className="register-btn">Đăng ký</button></td>
                </tr>
                <tr>
                  <td>EN002</td>
                  <td>Ngữ Pháp Tiếng Anh Nâng Cao</td>
                  <td>Trần Thị B</td>
                  <td>Thứ 3, 5, 7 - 19h00</td>
                  <td><button className="register-btn">Đăng ký</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}