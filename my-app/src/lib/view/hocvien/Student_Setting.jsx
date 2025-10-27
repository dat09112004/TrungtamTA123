import React from 'react';
import '../css/Student_style.css';
import { Link } from "react-router-dom";

export default function StudentSetting() {
  return (
    <div className="container active" id="student-setting">
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
            <h1>Cài đặt tài khoản</h1>
          </div>

          <div className="settings-container">
            <form className="settings-form">
              <div className="form-group">
                <label>Họ và tên:</label>
                <input type="text" placeholder="Nhập họ và tên" defaultValue="Nguyễn Văn A" />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" placeholder="example@email.com" defaultValue="student@email.com" />
              </div>
              <div className="form-group">
                <label>Số điện thoại:</label>
                <input type="tel" placeholder="0123456789" defaultValue="0909123456" />
              </div>
              <div className="form-group">
                <label>Mật khẩu mới:</label>
                <input type="password" placeholder="••••••••" />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn-save">Lưu thay đổi</button>
                <button type="reset" className="btn-cancel">Hủy</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
