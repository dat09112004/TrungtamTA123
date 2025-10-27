import React from 'react';
import '../css/Student_style.css';
import { Link } from "react-router-dom";

export default function StudentAttendanceInformation() {
  return (
    <div className="container active" id="attendance-information">
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
            <h1>Thông tin điểm danh</h1>
          </div>

          <table>
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
                <td>0</td>
                <td>2</td>
              </tr>
              <tr>
                <td>2</td>
                <td>EN002</td>
                <td>Tiếng Anh giao tiếp nâng cao</td>
                <td>1</td>
                <td className="highlight-red">4</td>
              </tr>
              <tr>
                <td>3</td>
                <td>EN003</td>
                <td>Phát âm & Ngữ điệu</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>4</td>
                <td>EN004</td>
                <td>Kỹ năng nghe - nói</td>
                <td>0</td>
                <td>1</td>
              </tr>
              <tr>
                <td>5</td>
                <td>EN005</td>
                <td>Kỹ năng đọc - viết</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">TỔNG:</td>
                <td>1</td>
                <td className="highlight-red">7</td>
              </tr>
            </tfoot>
          </table>
        </main>
      </div>
    </div>
  );
}