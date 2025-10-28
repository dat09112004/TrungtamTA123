import React, { useState } from "react";
import "../css/Teacher_style.css";
import { Link } from "react-router-dom";

export default function TeacherPeriods() {
  // ===== DỮ LIỆU MẪU =====
  const [periods, setPeriods] = useState([
    { id: 1, subject: "Toán học", className: "12A", date: "2025-10-05", lessons: 4, hours: 3 },
    { id: 2, subject: "Vật lý", className: "11B", date: "2025-10-10", lessons: 3, hours: 2.5 },
    { id: 3, subject: "Hóa học", className: "10A", date: "2025-09-28", lessons: 2, hours: 1.5 },
    { id: 4, subject: "Tiếng Anh", className: "12A", date: "2025-10-15", lessons: 3, hours: 2 },
    { id: 5, subject: "Sinh học", className: "11C", date: "2025-10-18", lessons: 2, hours: 1.5 },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterMonth, setFilterMonth] = useState("Tất cả");

  // ====== TÍNH TOÁN ======
  const totalLessons = periods.reduce((sum, p) => sum + p.lessons, 0);
  const totalHours = periods.reduce((sum, p) => sum + p.hours, 0);
  const totalSubjects = new Set(periods.map((p) => p.subject)).size;
  const totalSalary = totalLessons * 100000; // 100k / tiết

  // ====== TÌM KIẾM & LỌC ======
  const filteredPeriods = periods.filter((p) => {
    const matchSearch =
      p.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.className.toLowerCase().includes(searchTerm.toLowerCase());

    const matchFilter =
      filterMonth === "Tất cả" ||
      new Date(p.date).getMonth() + 1 === Number(filterMonth);

    return matchSearch && matchFilter;
  });

  const monthOptions = [
    "Tất cả",
    ...Array.from(new Set(periods.map((p) => new Date(p.date).getMonth() + 1))),
  ];

  return (
    <div className="container active" id="teaching-periods">
      <div className="dashboard">
        {/* SIDEBAR */}
        <nav className="sidebar">
          <div className="sidebar-logo">
            <h2>👨‍🏫 Giảng Viên</h2>
          </div>
          <ul className="sidebar-menu">
            <li><Link to="/giangvien/Teacher_Dashboard"><span className="icon">🏠</span>Dashboard</Link></li>
            <li><Link to="/giangvien/Teacher_Schedule"><span className="icon">📅</span>Lịch dạy</Link></li>
            <li><Link to="/giangvien/Teacher_Track_Learning"><span className="icon">👥</span>Theo dõi</Link></li>
            <li><Link to="/giangvien/Teacher_Class_Infor"><span className="icon">📋</span>Thông tin lớp học</Link></li>
            <li><Link to="/giangvien/Teacher_Periods" className="active"><span className="icon">⏰</span>Số tiết dạy</Link></li>
            <li><Link to="/giangvien/Teacher_Textbooks"><span className="icon">📘</span>Giáo trình</Link></li>
            <li><Link to="/giangvien/Teacher_Debt"><span className="icon">💰</span>Công nợ cá nhân</Link></li>
            <li><Link to="/giangvien/Teacher_Homework"><span className="icon">📝</span>Giao bài tập</Link></li>
            <li><Link to="/giangvien/Teacher_Certificate"><span className="icon">🎓</span>Chứng chỉ</Link></li>
            <li><Link to="/giangvien/Teacher_Setting"><span className="icon">⚙️</span>Cài đặt</Link></li>
            <li><Link to="/"><span className="icon">🚪</span>Đăng xuất</Link></li>
          </ul>
        </nav>

        {/* MAIN CONTENT */}
        <main className="main-content">
          <div className="header">
            <h1>📚 Quản lý số tiết dạy</h1>
          </div>

          {/* Bộ lọc */}
          <div className="filters">
            <input
              type="text"
              className="filter-input"
              placeholder="🔍 Tìm kiếm theo môn hoặc lớp..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="filter-input"
              value={filterMonth}
              onChange={(e) => setFilterMonth(e.target.value)}
            >
              {monthOptions.map((m, i) => (
                <option key={i} value={m}>
                  {m === "Tất cả" ? "Tất cả tháng" : `Tháng ${m}`}
                </option>
              ))}
            </select>
          </div>

          {/* Thống kê */}
          <div className="stats-grid">
            <div className="stat-card classes">
              <div className="stat-number">{totalHours}</div>
              <div className="stat-label">Tổng số giờ</div>
            </div>
            <div className="stat-card students">
              <div className="stat-number">{totalLessons}</div>
              <div className="stat-label">Tổng số tiết</div>
            </div>
            <div className="stat-card revenue">
              <div className="stat-number">{totalSubjects}</div>
              <div className="stat-label">Số môn giảng dạy</div>
            </div>
            {/* 💰 Lương */}
            <div className="stat-card salary">
              <div className="stat-number">{totalSalary.toLocaleString()} đ</div>
              <div className="stat-label">Tổng lương giảng dạy</div>
            </div>
          </div>

          {/* BẢNG CHI TIẾT */}
          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Ngày dạy</th>
                  <th>Môn học</th>
                  <th>Lớp</th>
                  <th>Số tiết</th>
                  <th>Số giờ</th>
                  <th>Thành tiền</th>
                </tr>
              </thead>
              <tbody>
                {filteredPeriods.length > 0 ? (
                  filteredPeriods.map((p) => (
                    <tr key={p.id}>
                      <td>{p.date}</td>
                      <td>{p.subject}</td>
                      <td>{p.className}</td>
                      <td>{p.lessons}</td>
                      <td>{p.hours}</td>
                      <td>{(p.lessons * 100000).toLocaleString()} đ</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" style={{ textAlign: "center", color: "#888" }}>
                      Không có dữ liệu phù hợp.
                    </td>
                  </tr>
                )}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="5" style={{ textAlign: "right", fontWeight: "bold" }}>Tổng cộng:</td>
                  <td style={{ fontWeight: "bold", color: "#2e7d32" }}>
                    {totalSalary.toLocaleString()} đ
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
