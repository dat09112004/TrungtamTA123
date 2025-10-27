import React from 'react';
import '../css/Teacher_style.css';
import { Link } from "react-router-dom";

export default function TeacherDashboard() {
  const showScreen = (screenName) => {
    console.log(`Chuyển sang màn hình: ${screenName}`);
  };

  const showClassInfo = (classId) => {
    console.log(`Xem thông tin lớp: ${classId}`);
  };

  return (
    <div className="container active" id="teacher-schedule">
      <div className="dashboard">
        <nav className="sidebar">
          <div className="sidebar-logo">
            <h2>👨‍🏫 Giảng Viên</h2>
          </div>
            <ul className="sidebar-menu">
              <li><Link to="/giangvien/Teacher_Dashboard"><span className="icon">🏠</span>Dashboard</Link></li>
              <li><Link to="/giangvien/Teacher_Schedule"><span className="icon">📅</span>Lịch dạy</Link></li>
              <li><Link to="/giangvien/Teacher_Track_Learning"><span className="icon">👥</span>Theo dõi</Link></li>
              <li><Link to="/giangvien/Teacher_Class_Infor"><span className="icon">📋</span>Thông tin lớp học</Link></li>
              <li><Link to="/giangvien/Teacher_Periods"><span className="icon">⏰</span>Số tiết dạy</Link></li>
              <li><Link to="/giangvien/Teacher_Textbooks"><span className="icon">📘</span>Giáo trình</Link></li>
              <li><Link to="/giangvien/Teacher_Debt"><span className="icon">💰</span>Công nợ cá nhân</Link></li>
              <li><Link to="/giangvien/Teacher_Homework"><span className="icon">📝</span>Giao bài tập</Link></li>
              <li><Link to="/giangvien/Teacher_Certificate"><span className="icon">🎓</span>Chứng chỉ</Link></li>
              <li><Link to="/giangvien/Teacher_Setting"><span className="icon">⚙️</span>Cài đặt</Link></li>
              <li><Link to="/"><span className="icon">🚪</span>Đăng xuất</Link></li>
            </ul>
        </nav>

        <main className="main-content">
          <div className="header">
            <h1>Lịch dạy của tôi</h1>
            <div className="user-info">
              <span>Xin chào, Thầy Nguyễn Văn A</span>
              <div className="avatar">A</div>
            </div>
          </div>

          <div className="calendar-header">
            <h2>Tuần 16/09 - 22/09/2025</h2>
            <div className="calendar-nav">
              <button className="nav-btn">← Trước</button>
              <button className="nav-btn active">Tuần</button>
              <button className="nav-btn">Tháng</button>
              <button className="nav-btn">Sau →</button>
            </div>
          </div>

          <div className="calendar-grid">
            <div className="calendar-days">
              <div className="day-header">Thứ 2</div>
              <div className="day-header">Thứ 3</div>
              <div className="day-header">Thứ 4</div>
              <div className="day-header">Thứ 5</div>
              <div className="day-header">Thứ 6</div>
              <div className="day-header">Thứ 7</div>
              <div className="day-header">Chủ nhật</div>
            </div>

            <div className="calendar-body">
              <div className="calendar-day">
                <div className="day-number">16</div>
                <div className="class-event" onClick={() => showClassInfo('T101')}>
                  08:00 - Toán 10<br />Phòng A1
                </div>
                <div className="class-event" onClick={() => showClassInfo('T102')}>
                  14:00 - Toán 11<br />Phòng A2
                </div>
              </div>

              <div className="calendar-day">
                <div className="day-number">17</div>
                <div className="class-event" onClick={() => showClassInfo('T103')}>
                  09:00 - Toán 12<br />Phòng B1
                </div>
              </div>

              <div className="calendar-day">
                <div className="day-number">18</div>
                <div className="class-event" onClick={() => showClassInfo('T101')}>
                  08:00 - Toán 10<br />Phòng A1
                </div>
                <div className="class-event" onClick={() => showClassInfo('T104')}>
                  16:00 - Toán ôn thi<br />Phòng C1
                </div>
              </div>

              <div className="calendar-day">
                <div className="day-number">19</div>
                <div className="class-event" onClick={() => showClassInfo('T102')}>
                  14:00 - Toán 11<br />Phòng A2
                </div>
              </div>

              <div className="calendar-day">
                <div className="day-number">20</div>
                <div className="class-event" onClick={() => showClassInfo('T101')}>
                  08:00 - Toán 10<br />Phòng A1
                </div>
              </div>

              <div className="calendar-day"><div className="day-number">21</div></div>
              <div className="calendar-day"><div className="day-number">22</div></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}