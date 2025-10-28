import React, { useState } from 'react';
import styles from "../css/Student_style.module.css";
import { Link } from "react-router-dom";

export default function StudentSchoolSchedule() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  // 🧩 Dữ liệu mẫu
  const scheduleData = {
    "2025-10-27": {
      morning: [{ code: "EN001", subject: "Tiếng Anh giao tiếp cơ bản", time: "08:00 - 10:00" }],
      afternoon: [{ code: "EN002", subject: "Ngữ pháp nâng cao", time: "14:00 - 16:00" }],
      evening: [{ code: "EN003", subject: "Phát âm & Ngữ điệu", time: "18:00 - 20:00" }],
    },
    "2025-10-28": {
      morning: [{ code: "EN004", subject: "Kỹ năng nghe - nói", time: "09:00 - 11:00" }],
      afternoon: [],
      evening: [{ code: "EN005", subject: "Kỹ năng đọc - viết", time: "18:00 - 20:00" }],
    },
    "2025-10-29": {
      morning: [],
      afternoon: [{ code: "EN006", subject: "Thực hành giao tiếp", time: "14:00 - 16:00" }],
      evening: [],
    },
  };

  const currentSchedule = scheduleData[selectedDate] || {
    morning: [],
    afternoon: [],
    evening: [],
  };

  // 🔄 Hàm chuyển ngày
  const changeDate = (days) => {
    const current = new Date(selectedDate);
    current.setDate(current.getDate() + days);
    const newDate = current.toISOString().split("T")[0];
    setSelectedDate(newDate);
  };

  return (
    <div className="container active" id="school-schedule">
      <div className="dashboard">

        {/* Sidebar */}
        <nav className="sidebar">
          <div className="sidebar-logo">
            <h2>👨‍🎓 Học viên</h2>
          </div>
          <ul className="sidebar-menu">
            <li><Link to="/hocvien/Student_Dashboard">🏠 Trang chủ</Link></li>
            <li><Link to="/hocvien/Student_Registerclass">📅 Đăng ký lớp học</Link></li>
            <li><Link to="/hocvien/Student_Schoolscheduelue" className="active">📘 Lịch học</Link></li>
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
            <h1>📅 Thời khóa biểu theo ngày</h1>
          </div>

          {/* Bộ chọn ngày + nút chuyển */}
          <div className="filter-bar" style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={() => changeDate(-1)}
              style={{
                padding: "6px 12px",
                background: "#2196F3",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              ◀ Trước
            </button>

            <input
              id="datePicker"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              style={{
                padding: "6px 10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "14px",
              }}
            />

            <button
              onClick={() => changeDate(1)}
              style={{
                padding: "6px 12px",
                background: "#2196F3",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Sau ▶
            </button>
          </div>

          {/* Bảng thời khóa biểu */}
          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Ca học</th>
                  <th>Mã lớp học phần</th>
                  <th>Tên môn học</th>
                  <th>Thời gian</th>
                </tr>
              </thead>
              <tbody>
                {/* Ca sáng */}
                {currentSchedule.morning.length > 0 ? (
                  currentSchedule.morning.map((lesson, index) => (
                    <tr key={`morning-${index}`}>
                      {index === 0 && <td rowSpan={currentSchedule.morning.length}>🌅 Sáng</td>}
                      <td>{lesson.code}</td>
                      <td>{lesson.subject}</td>
                      <td>{lesson.time}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>🌅 Sáng</td>
                    <td colSpan="3" style={{ color: "#888" }}>Không có lớp</td>
                  </tr>
                )}

                {/* Ca chiều */}
                {currentSchedule.afternoon.length > 0 ? (
                  currentSchedule.afternoon.map((lesson, index) => (
                    <tr key={`afternoon-${index}`}>
                      {index === 0 && <td rowSpan={currentSchedule.afternoon.length}>🌞 Chiều</td>}
                      <td>{lesson.code}</td>
                      <td>{lesson.subject}</td>
                      <td>{lesson.time}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>🌞 Chiều</td>
                    <td colSpan="3" style={{ color: "#888" }}>Không có lớp</td>
                  </tr>
                )}

                {/* Ca tối */}
                {currentSchedule.evening.length > 0 ? (
                  currentSchedule.evening.map((lesson, index) => (
                    <tr key={`evening-${index}`}>
                      {index === 0 && <td rowSpan={currentSchedule.evening.length}>🌙 Tối</td>}
                      <td>{lesson.code}</td>
                      <td>{lesson.subject}</td>
                      <td>{lesson.time}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>🌙 Tối</td>
                    <td colSpan="3" style={{ color: "#888" }}>Không có lớp</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
