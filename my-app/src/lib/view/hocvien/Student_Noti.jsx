import React from 'react';
import styles from "../css/Student_style.module.css";
import { Link } from "react-router-dom";

export default function StudentNoti() {
  const centerNoti = [
    {
      id: 1,
      type: "exam",
      title: "Thông báo lịch thi cuối kỳ",
      date: "15/10/2025",
      content: "Các lớp học sẽ thi vào ngày 20–22/10/2025. Vui lòng xem chi tiết tại trang Lịch học."
    },
    {
      id: 2,
      type: "info",
      title: "Phát hành tài liệu học mới",
      date: "10/10/2025",
      content: "Giáo trình tiếng Anh B1 mới đã được cập nhật. Sinh viên có thể tải tại mục Tài liệu môn học."
    },
    {
      id: 3,
      type: "warning",
      title: "Hoạt động ngoại khóa tháng 11",
      date: "05/10/2025",
      content: "Trung tâm tổ chức cuộc thi Hùng biện tiếng Anh. Đăng ký tại Văn phòng hoặc qua link thông báo."
    }
  ];

  const personalNoti = [
    {
      id: 1,
      type: "fee",
      title: "Nhắc nhở học phí tháng 10",
      date: "01/10/2025",
      content: "Bạn còn 1 khoản học phí chưa thanh toán cho lớp EN002. Vui lòng hoàn thành trước ngày 10/10."
    },
    {
      id: 2,
      type: "info",
      title: "Điểm danh tuần này",
      date: "25/09/2025",
      content: "Bạn đã vắng 1 buổi học kỹ năng nghe – nói. Hãy xem lại mục Điểm danh để kiểm tra chi tiết."
    },
    {
      id: 3,
      type: "exam",
      title: "Kết quả thi giữa kỳ",
      date: "20/09/2025",
      content: "Bạn đạt 8.5 điểm môn Tiếng Anh giao tiếp cơ bản. Xin chúc mừng!"
    }
  ];

  return (
    <div className="container active" id="student-noti">
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
            <li><Link to="/hocvien/Student_Noti" className="active">📢 Thông báo</Link></li>
            <li><Link to="/hocvien/Student_Coursematerials">📚 Tài liệu</Link></li>
            <li><Link to="/hocvien/Student_Attendanceinformation">🕒 Điểm danh</Link></li>
            <li><Link to="/hocvien/Student_Homework">📝 Bài tập</Link></li>
            <li><Link to="/hocvien/Student_Certificate">🎓 Chứng chỉ</Link></li>
            <li><Link to="/hocvien/Student_Setting">⚙️ Cài đặt</Link></li>
            <li><Link to="/">🚪 Đăng xuất</Link></li>
          </ul>
        </nav>

        {/* Main content */}
        <main className="main-content">
          <div className="header">
            <h1>📢 Thông báo</h1>
            <div className="user-info">
              <div className="avatar">HV</div>
              <span>Xin chào, Học viên</span>
            </div>
          </div>

          {/* Hai cột thông báo */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px"
            }}
          >
            {/* Cột bên trái - Trung tâm */}
            <div className="notification-container">
              <h2 style={{ marginBottom: "15px", color: "#2d3748" }}>🏫 Thông báo từ Trung tâm</h2>
              {centerNoti.map((noti) => (
                <div key={noti.id} className={`notification ${noti.type}`}>
                  <div className="noti-header">
                    <h3>{noti.title}</h3>
                    <span className="date">{noti.date}</span>
                  </div>
                  <p>{noti.content}</p>
                </div>
              ))}
            </div>

            {/* Cột bên phải - Cá nhân */}
            <div className="notification-container">
              <h2 style={{ marginBottom: "15px", color: "#2d3748" }}>👤 Thông báo cá nhân</h2>
              {personalNoti.map((noti) => (
                <div key={noti.id} className={`notification ${noti.type}`}>
                  <div className="noti-header">
                    <h3>{noti.title}</h3>
                    <span className="date">{noti.date}</span>
                  </div>
                  <p>{noti.content}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
