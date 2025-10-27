import React from 'react';
import '../css/Student_style.css';
import { Link } from "react-router-dom";

export default function StudentCertificate() {
  return (
    <div className="container active" id="student-certificate">
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
            <h1>Chứng chỉ hiện có</h1>
          </div>

          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã CC</th>
                  <th>Loại</th>
                  <th>Ngày Cấp</th>
                  <th>Hình ảnh chứng chỉ</th>
                  <th>Tải về</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CC001</td>
                  <td>English Level B2</td>
                  <td>2025-06-15</td>
                  <td><img src="../images/certificate1.jpg" alt="Certificate Image" width={100} /></td>
                  <td><a href="../files/certificate1.pdf" download className="download-btn">Download</a></td>
                </tr>
                <tr>
                  <td>CC002</td>
                  <td>Business Communication</td>
                  <td>2025-05-22</td>
                  <td><img src="../images/certificate2.jpg" alt="Certificate Image" width={100} /></td>
                  <td><a href="../files/certificate2.pdf" download className="download-btn">Download</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}