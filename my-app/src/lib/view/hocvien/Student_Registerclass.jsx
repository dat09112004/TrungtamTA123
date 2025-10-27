import React, { useState } from 'react';
import '../css/Student_style.css';
import { Link, useNavigate } from "react-router-dom";

export default function StudentRegisterClass() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const navigate = useNavigate();

  // 🧩 Dữ liệu mẫu (đã thêm ngày bắt đầu và kết thúc)
  const classList = [
    { 
      code: "EN001", 
      name: "Tiếng Anh Giao Tiếp Cơ Bản", 
      teacher: "Nguyễn Văn A", 
      schedule: "Thứ 2, 4, 6", 
      startDate: "2025-11-01",
      endDate: "2026-01-15",
      startTime: "18:00", 
      endTime: "20:00",
      room: "P101" 
    },
    { 
      code: "EN002", 
      name: "Ngữ Pháp Tiếng Anh Nâng Cao", 
      teacher: "Trần Thị B", 
      schedule: "Thứ 3, 5, 7", 
      startDate: "2025-11-05",
      endDate: "2026-01-25",
      startTime: "19:00", 
      endTime: "21:00",
      room: "P203" 
    },
  ];

  const handleRegister = (classItem) => {
    setSelectedClass(classItem);
    setShowPopup(true);
  };

  const confirmRegister = () => {
    setShowPopup(false);
    alert(`✅ Bạn đã đăng ký lớp ${selectedClass.name} thành công!`);
    navigate("/hocvien/Student_Fee"); // Chuyển sang trang học phí
  };

  return (
    <div className="container active" id="register-class">
      <div className="dashboard">
        {/* Sidebar */}
        <nav className="sidebar">
          <div className="sidebar-logo">
            <h2>👨‍🎓 Học viên</h2>
          </div>
          <ul className="sidebar-menu">
            <li><Link to="/hocvien/Student_Dashboard">🏠 Trang chủ</Link></li>
            <li><Link to="/hocvien/Student_Registerclass" className="active">📅 Đăng ký lớp học</Link></li>
            <li><Link to="/hocvien/Student_Schoolscheduelue">📘 Lịch học</Link></li>
            <li><Link to="/hocvien/Student_Score">📊 Điểm số</Link></li>
            <li><Link to="/hocvien/Student_Fee">💰 Học phí</Link></li>
            <li><Link to="/hocvien/Student_Noti">📢 Thông báo</Link></li>
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
            <h1>📘 Đăng ký lớp học</h1>
          </div>

          {/* Thanh tìm kiếm */}
          <div className="filters">
            <input
              type="text"
              className="filter-input"
              placeholder="🔍 Tìm kiếm lớp học..."
            />
          </div>

          {/* Bảng lớp học */}
          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã lớp</th>
                  <th>Tên lớp học</th>
                  <th>Giảng viên</th>
                  <th>Lịch học</th>
                  <th>Phòng học</th>
                  <th>Ngày bắt đầu</th>
                  <th>Ngày kết thúc</th>
                  <th>Giờ học</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {classList.map((item, index) => (
                  <tr key={index}>
                    <td>{item.code}</td>
                    <td>{item.name}</td>
                    <td>{item.teacher}</td>
                    <td>{item.schedule}</td>
                    <td>{item.room}</td>
                    <td>{item.startDate}</td>
                    <td>{item.endDate}</td>
                    <td>{item.startTime} - {item.endTime}</td>
                    <td>
                      <button
                        className="register-btn"
                        onClick={() => handleRegister(item)}
                      >
                        Đăng ký
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Popup xác nhận */}
          {showPopup && selectedClass && (
            <div className="popup-overlay">
              <div className="popup-content">
                <h2>📚 Xác nhận đăng ký lớp</h2>
                <p><strong>Mã lớp:</strong> {selectedClass.code}</p>
                <p><strong>Tên lớp:</strong> {selectedClass.name}</p>
                <p><strong>Giảng viên:</strong> {selectedClass.teacher}</p>
                <p><strong>Lịch học:</strong> {selectedClass.schedule}</p>
                <p><strong>Phòng học:</strong> {selectedClass.room}</p>
                <p><strong>Ngày bắt đầu:</strong> {selectedClass.startDate}</p>
                <p><strong>Ngày kết thúc:</strong> {selectedClass.endDate}</p>
                <p><strong>Giờ học:</strong> {selectedClass.startTime} - {selectedClass.endTime}</p>

                <div className="popup-buttons">
                  <button className="confirm-btn" onClick={confirmRegister}>
                    Xác nhận
                  </button>
                  <button
                    className="cancel-btn"
                    onClick={() => setShowPopup(false)}
                  >
                    Hủy
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
