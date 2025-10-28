import React, { useState } from "react";
import styles from "../css/Teacher_style.module.css";
import { Link } from "react-router-dom";

const Teacher_Dashboard = () => {
  const stats = [
    { label: "Học viên", value: 120, className: "students" },
    { label: "Lớp học", value: 8, className: "classes" },
    { label: "Doanh thu", value: "15M", className: "revenue" },
    { label: "Công nợ", value: "2M", className: "debt" },
  ];

  const notifications = [
    "📢 Lớp 12A hoàn thành kiểm tra giữa kỳ.",
    "🗓️ Lớp 10B học bù vào Thứ 7.",
    "📊 Nộp điểm cuối kỳ trước 30/10.",
    "📘 Lớp 11A có bài giảng mới được tải lên.",
  ];

  const schedule = {
    Monday: [
      { subject: "Toán 12A", time: "7:30 - 9:00", room: "P101" },
      { subject: "Hóa 11C", time: "9:15 - 10:45", room: "P102" },
    ],
    Tuesday: [{ subject: "Lý 10B", time: "8:00 - 9:30", room: "P103" }],
    Wednesday: [
      { subject: "Toán 11A", time: "7:30 - 9:00", room: "P104" },
      { subject: "Sinh 10C", time: "9:15 - 10:45", room: "P201" },
    ],
    Thursday: [],
    Friday: [{ subject: "Anh văn 12A", time: "8:00 - 9:30", room: "P202" }],
    Saturday: [{ subject: "Ôn thi THPT 12A", time: "7:30 - 9:00", room: "P105" }],
    Sunday: [],
  };

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const dayLabels = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
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
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <div className="header">
          <h1>Bảng điều khiển</h1>
          <div className="user-info">
            <span>Chào, Cô Lan</span>
            <div className="avatar">L</div>
          </div>
        </div>

        {/* 👉 Đưa thời khóa biểu lên đầu */}
        <div className="calendar-grid">
          <div className="calendar-header">
            <h3>Thời khóa biểu giảng dạy</h3>
          </div>

          <div className="calendar-days">
            {dayLabels.map((label, i) => (
              <div key={i} className="day-header">{label}</div>
            ))}
          </div>

          <div className="calendar-body">
            {days.map((day, i) => (
              <div key={i} className="calendar-day">
                <div className="day-number">{dayLabels[i]}</div>
                {schedule[day].length > 0 ? (
                  schedule[day].map((cls, j) => (
                    <div key={j} className="class-event">
                      <strong>{cls.subject}</strong><br />
                      <small>{cls.time} | {cls.room}</small>
                    </div>
                  ))
                ) : (
                  <div style={{ color: "#718096", fontSize: "13px" }}>Không có lịch</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Thống kê nhanh */}
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className={`stat-card ${s.className}`}>
              <div className="stat-number">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Biểu đồ và thông báo */}
        <div className="charts-grid">
          <div className="chart-card">
            <h3 className="chart-title">Tỷ lệ điểm danh</h3>
            <img
              src="https://quickchart.io/chart?c=%7B%22type%22%3A%22doughnut%22%2C%22data%22%3A%7B%22labels%22%3A%5B%22Đúng%20giờ%22%2C%22Trễ%22%2C%22Vắng%22%5D%2C%22datasets%22%3A%5B%7B%22data%22%3A%5B80%2C15%2C5%5D%2C%22backgroundColor%22%3A%5B%22%2348bb78%22%2C%22%23ed8936%22%2C%22%23f56565%22%5D%7D%5D%7D%2C%22options%22%3A%7B%22plugins%22%3A%7B%22legend%22%3A%7B%22position%22%3A%22bottom%22%7D%7D%7D%7D"
              alt="Attendance Chart"
              style={{
                width: "100%",
                maxHeight: "300px",
                borderRadius: "10px",
                objectFit: "contain",
              }}
            />
            <div style={{ textAlign: "center", marginTop: "10px", color: "#4a5568" }}>
              <strong>80%</strong> đúng giờ • <strong>15%</strong> trễ • <strong>5%</strong> vắng
            </div>
          </div>

          <div className="chart-card">
            <h3 className="chart-title">Thông báo</h3>
            <ul>
              {notifications.map((note, i) => (
                <li key={i}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Teacher_Dashboard;
