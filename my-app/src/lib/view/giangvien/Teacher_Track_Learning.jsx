import React, { useState } from "react";
import styles from "../css/Teacher_style.module.css";
import { Link } from "react-router-dom";

export default function TeacherTrackLearning() {
  // ===== DỮ LIỆU MẪU =====
  const [students, setStudents] = useState([
    {
      id: "HV001",
      name: "Nguyễn Văn A",
      progress: 85,
      average: 8.5,
      className: "12A",
      status: "Đang học",
    },
    {
      id: "HV002",
      name: "Trần Thị B",
      progress: 90,
      average: 9.0,
      className: "12A",
      status: "Hoàn thành",
    },
    {
      id: "HV003",
      name: "Lê Văn C",
      progress: 70,
      average: 7.2,
      className: "11B",
      status: "Đang học",
    },
    {
      id: "HV004",
      name: "Phạm Thị D",
      progress: 60,
      average: 6.8,
      className: "10A",
      status: "Cần cải thiện",
    },
    {
      id: "HV005",
      name: "Hoàng Văn E",
      progress: 95,
      average: 9.5,
      className: "11B",
      status: "Hoàn thành",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterClass, setFilterClass] = useState("Tất cả");

  // ===== TÌM KIẾM VÀ LỌC =====
  const filteredStudents = students.filter((s) => {
    const matchSearch =
      s.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchClass =
      filterClass === "Tất cả" || s.className === filterClass;
    return matchSearch && matchClass;
  });

  const classOptions = ["Tất cả", ...new Set(students.map((s) => s.className))];

  return (
    <div className="container active" id="track-learning">
      <div className="dashboard">
        {/* SIDEBAR */}
        <nav className="sidebar">
          <div className="sidebar-logo">
            <h2>👨‍🏫 Giảng Viên</h2>
          </div>
          <ul className="sidebar-menu">
            <li><Link to="/giangvien/Teacher_Dashboard"><span className="icon">🏠</span>Dashboard</Link></li>
            <li><Link to="/giangvien/Teacher_Schedule"><span className="icon">📅</span>Lịch dạy</Link></li>
            <li><Link to="/giangvien/Teacher_Track_Learning" className="active"><span className="icon">👥</span>Theo dõi</Link></li>
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

        {/* MAIN CONTENT */}
        <main className="main-content">
          <div className="header">
            <h1>📊 Theo dõi học tập của học viên</h1>
          </div>

          {/* Bộ lọc và tìm kiếm */}
          <div className="filters">
            <input
              type="text"
              className="filter-input"
              placeholder="🔍 Nhập mã hoặc tên học viên..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="filter-input"
              value={filterClass}
              onChange={(e) => setFilterClass(e.target.value)}
            >
              {classOptions.map((opt, i) => (
                <option key={i} value={opt}>
                  {opt === "Tất cả" ? "Tất cả lớp" : `Lớp ${opt}`}
                </option>
              ))}
            </select>
          </div>

          {/* BẢNG HỌC VIÊN */}
          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã học viên</th>
                  <th>Tên học viên</th>
                  <th>Lớp</th>
                  <th>Tiến độ học tập</th>
                  <th>Điểm trung bình</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((s) => (
                    <tr key={s.id}>
                      <td>{s.id}</td>
                      <td>{s.name}</td>
                      <td>{s.className}</td>
                      <td>
                        <div className="progress-bar">
                          <div
                            className="progress-fill"
                            style={{
                              width: `${s.progress}%`,
                              backgroundColor:
                                s.progress >= 90
                                  ? "#48bb78"
                                  : s.progress >= 70
                                  ? "#ed8936"
                                  : "#f56565",
                            }}
                          >
                            {s.progress}%
                          </div>
                        </div>
                      </td>
                      <td>{s.average}</td>
                      <td
                        style={{
                          color:
                            s.status === "Hoàn thành"
                              ? "#48bb78"
                              : s.status === "Đang học"
                              ? "#3182ce"
                              : "#e53e3e",
                          fontWeight: "bold",
                        }}
                      >
                        {s.status}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" style={{ textAlign: "center", color: "#888" }}>
                      Không tìm thấy học viên phù hợp.
                    </td>
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
