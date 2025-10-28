import React, { useState } from 'react';
import "../css/Teacher_style.css";
import { Link } from "react-router-dom";

export default function TeacherDashboard() {
  const [startDate, setStartDate] = useState(new Date(2025, 8, 16)); // 16/09/2025
  const [showEditForm, setShowEditForm] = useState(false);
  const [editData, setEditData] = useState(null);

  const daysOfWeek = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"];

  // Dữ liệu lịch dạy mẫu
  const [schedule, setSchedule] = useState({
    "Thứ 2": [
      { id: 1, subject: "Toán 10", time: "08:00", room: "A1" },
      { id: 2, subject: "Toán 11", time: "14:00", room: "A2" }
    ],
    "Thứ 3": [
      { id: 3, subject: "Toán 12", time: "09:00", room: "B1" }
    ],
    "Thứ 4": [
      { id: 4, subject: "Ôn thi THPT", time: "16:00", room: "C1" }
    ],
    "Thứ 5": [],
    "Thứ 6": [],
    "Thứ 7": [],
    "Chủ nhật": []
  });

  const getWeekDays = (start) => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const weekDays = getWeekDays(startDate);

  // Chuyển tuần
  const prevWeek = () => setStartDate(new Date(startDate.setDate(startDate.getDate() - 7)));
  const nextWeek = () => setStartDate(new Date(startDate.setDate(startDate.getDate() + 7)));

  // Mở form chỉnh sửa khi nhấn vào buổi học
  const handleEditClass = (day, cls) => {
    setEditData({ ...cls, day });
    setShowEditForm(true);
  };

  // Xử lý thay đổi form
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  // Lưu thay đổi vào lịch
  const handleSave = () => {
    setSchedule(prev => {
      const dayClasses = prev[editData.day].map(c => c.id === editData.id ? editData : c);
      return { ...prev, [editData.day]: dayClasses };
    });
    setShowEditForm(false);
  };

  return (
    <div className="container active" id="teacher-schedule">
      <div className="dashboard">
        <nav className="sidebar">
          <div className="sidebar-logo"><h2>👨‍🏫 Giảng Viên</h2></div>
          <ul className="sidebar-menu">
            <li><Link to="/giangvien/Teacher_Dashboard"><span className="icon">🏠</span>Dashboard</Link></li>
            <li><Link to="/giangvien/Teacher_Schedule"><span className="icon">📅</span>Lịch dạy</Link></li>
            <li><Link to="/giangvien/Teacher_Track_Learning"><span className="icon">👥</span>Theo dõi</Link></li>
            <li><Link to="/giangvien/Teacher_Class_Infor"><span className="icon">📋</span>Thông tin lớp học</Link></li>
            <li><Link to="/giangvien/Teacher_Periods"><span className="icon">⏰</span>Số tiết dạy</Link></li>
            <li><Link to="/giangvien/Teacher_Textbooks"><span className="icon">📘</span>Giáo trình</Link></li>
            <li><Link to="/giangvien/Teacher_Debt"><span className="icon">💰</span>Công nợ cá nhân</Link></li>
            <li><Link to="/giangvien/Teacher_Homework"><span className="icon">📝</span>Giao bài tập</Link></li>
            <li><Link to="/giangvien/Teacher_Certificate" className="active"><span className="icon">🎓</span>Chứng chỉ</Link></li>
            <li><Link to="/giangvien/Teacher_Setting"><span className="icon">⚙️</span>Cài đặt</Link></li>
            <li><Link to="/"><span className="icon">🚪</span>Đăng xuất</Link></li>
          </ul>
        </nav>

        <main className="main-content">
          <div className="header">
            <h1>Lịch dạy của tôi</h1>
          </div>

          <div className="calendar-header">
            <h2>
              Tuần {weekDays[0].toLocaleDateString('vi-VN')} - {weekDays[6].toLocaleDateString('vi-VN')}
            </h2>
            <div className="calendar-nav">
              <button className="nav-btn" onClick={prevWeek}>← Trước</button>
              <button className="nav-btn active">Tuần</button>
              <button className="nav-btn" onClick={nextWeek}>Sau →</button>
            </div>
          </div>

          <div className="calendar-grid">
            <div className="calendar-days">
              {daysOfWeek.map((d, i) => <div key={i} className="day-header">{d}</div>)}
            </div>

            <div className="calendar-body">
              {daysOfWeek.map((day, i) => (
                <div key={i} className="calendar-day">
                  <div className="day-number">{weekDays[i].getDate()}/{weekDays[i].getMonth()+1}</div>
                  {schedule[day].map(cls => (
                    <div key={cls.id} className="class-event" onClick={() => handleEditClass(day, cls)}>
                      {cls.time} - {cls.subject}<br />Phòng {cls.room}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Form chỉnh sửa */}
          {showEditForm && editData && (
            <div className="modal-overlay">
              <div className="modal">
                <h3>Chỉnh sửa buổi học</h3>
                <label>Ngày:</label>
                <input type="date" name="date" value={editData.date || ""} onChange={handleFormChange} />
                <label>Giờ:</label>
                <input type="time" name="time" value={editData.time} onChange={handleFormChange} />
                <label>Môn học:</label>
                <input type="text" name="subject" value={editData.subject} onChange={handleFormChange} />
                <label>Phòng:</label>
                <input type="text" name="room" value={editData.room} onChange={handleFormChange} />
                <div style={{ marginTop: "10px" }}>
                  <button onClick={handleSave}>💾 Lưu</button>
                  <button onClick={() => setShowEditForm(false)}>❌ Hủy</button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
