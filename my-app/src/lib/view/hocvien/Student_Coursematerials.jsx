import React from 'react';
import '../css/Student_style.css';
import { Link } from "react-router-dom";

export default function StudentCourseMaterials() {
  return (
    <div className="container active" id="course-materials">
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
            <h1>Tài liệu môn học</h1>
          </div>

          <div className="filters">
            <input type="text" className="filter-input" placeholder="🔍 Tìm kiếm theo tên môn học..." />
          </div>

          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Tên môn học</th>
                  <th>Giáo trình</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
