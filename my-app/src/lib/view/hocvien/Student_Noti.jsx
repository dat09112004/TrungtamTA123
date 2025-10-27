import React from 'react';
import '../css/Student_style.css';
import { Link } from "react-router-dom";

export default function StudentNoti() {
  return (
    <div className="container active" id="student-noti">
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
            <h1>Thông báo từ trung tâm</h1>
          </div>

          <div className="notifications">
            <div className="noti-card">
              <h3>📢 Thông báo lịch thi cuối kỳ</h3>
              <p><strong>Ngày:</strong> 15/10/2025</p>
              <p><strong>Nội dung:</strong> Các lớp học sẽ thi vào ngày 20-22/10/2025. Vui lòng xem chi tiết tại trang Lịch học.</p>
            </div>

            <div className="noti-card">
              <h3>📚 Phát hành tài liệu học mới</h3>
              <p><strong>Ngày:</strong> 10/10/2025</p>
              <p><strong>Nội dung:</strong> Giáo trình tiếng Anh B1 mới đã được cập nhật. Sinh viên có thể tải tại mục Tài liệu môn học.</p>
            </div>

            <div className="noti-card">
              <h3>🎉 Hoạt động ngoại khóa tháng 11</h3>
              <p><strong>Ngày:</strong> 05/10/2025</p>
              <p><strong>Nội dung:</strong> Trung tâm tổ chức cuộc thi Hùng biện tiếng Anh. Đăng ký tại Văn phòng hoặc qua link thông báo.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}