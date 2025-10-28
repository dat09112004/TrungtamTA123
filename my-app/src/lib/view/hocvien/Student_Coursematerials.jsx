import React, { useState } from 'react';
import "../css/Student_style.css";
import { Link } from "react-router-dom";


export default function StudentCourseMaterials() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const materials = [
    {
      id: 1,
      name: "Tiếng Anh giao tiếp cơ bản",
      textbook: "English Basic Communication.pdf",
      status: "Có sẵn",
      description: "Tài liệu gồm 5 chương, hướng dẫn các mẫu câu giao tiếp cơ bản và bài tập thực hành.",
      download: "/materials/EnglishBasic.pdf"
    },
    {
      id: 2,
      name: "Tiếng Anh giao tiếp nâng cao",
      textbook: "Advanced English.pdf",
      status: "Có sẵn",
      description: "Tổng hợp cấu trúc ngữ pháp và bài hội thoại nâng cao theo chủ đề.",
      download: "/materials/AdvancedEnglish.pdf"
    },
    {
      id: 3,
      name: "Phát âm & Ngữ điệu",
      textbook: "Pronunciation Guide.pdf",
      status: "Đang cập nhật",
      description: "Tài liệu giúp luyện tập ngữ âm, trọng âm và ngữ điệu trong giao tiếp.",
      download: null
    }
  ];

  const handleViewDetail = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="container active" id="course-materials">
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
            <li><Link to="/hocvien/Student_Noti">📢 Thông báo</Link></li>
            <li><Link to="/hocvien/Student_Coursematerials" className="active">📚 Tài liệu</Link></li>
            <li><Link to="/hocvien/Student_Attendanceinformation">🕒 Điểm danh</Link></li>
            <li><Link to="/hocvien/Student_Homework">📝 Bài tập</Link></li>
            <li><Link to="/hocvien/Student_Certificate">🎓 Chứng chỉ</Link></li>
            <li><Link to="/hocvien/Student_Setting">⚙️ Cài đặt</Link></li>
            <li><Link to="/">🚪 Đăng xuất</Link></li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="main-content">
          <div className="header">
            <h1>Tài liệu môn học</h1>
          </div>

          <div className="filters">
            <input type="text" className="filter-input" placeholder="🔍 Tìm kiếm theo tên môn học..." />
          </div>

          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Tên môn học</th>
                  <th>Giáo trình</th>
                  <th>Trạng thái</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((course) => (
                  <tr key={course.id}>
                    <td>{course.name}</td>
                    <td>{course.textbook}</td>
                    <td>
                      {course.status === "Có sẵn" ? (
                        <span className="status-badge status-active">{course.status}</span>
                      ) : (
                        <span className="status-badge status-inactive">{course.status}</span>
                      )}
                    </td>
                    <td>
                      <button className="action-btn btn-edit" onClick={() => handleViewDetail(course)}>
                        Xem chi tiết
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Chi tiết tài liệu */}
          {selectedCourse && (
            <div className="stat-card" style={{ marginTop: "20px" }}>
              <h2 style={{ color: "#2d3748", marginBottom: "10px" }}>📘 Chi tiết tài liệu</h2>
              <p><strong>Tên môn học:</strong> {selectedCourse.name}</p>
              <p><strong>Giáo trình:</strong> {selectedCourse.textbook}</p>
              <p><strong>Mô tả:</strong> {selectedCourse.description}</p>
              <p><strong>Trạng thái:</strong> {selectedCourse.status}</p>
              {selectedCourse.download ? (
                <a href={selectedCourse.download} className="download-btn" download>
                  <i>⬇</i> Tải xuống
                </a>
              ) : (
                <span className="status-badge status-inactive">Chưa có file tải xuống</span>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
