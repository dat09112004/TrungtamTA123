import React from 'react';
import '../css/Student_style.css';
import { Link } from "react-router-dom";

export default function StudentScore() {
  return (
    <div className="container active" id="student-score">
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
            <h1>Bảng điểm</h1>
          </div>

          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã lớp học phần</th>
                  <th>Tên môn học</th>
                  <th>Điểm chuyên cần</th>
                  <th>Điểm giữa kỳ</th>
                  <th>Điểm cuối kỳ</th>
                  <th>Điểm trung bình</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>EN001</td>
                  <td>Tiếng Anh giao tiếp cơ bản</td>
                  <td>9</td>
                  <td>8</td>
                  <td>8.5</td>
                  <td>8.5</td>
                </tr>
                <tr>
                  <td>EN002</td>
                  <td>Ngữ pháp nâng cao</td>
                  <td>10</td>
                  <td>9</td>
                  <td>9.5</td>
                  <td>9.5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}