import React from 'react';
import "../css/Teacher_style.css";
import { Link, useLocation } from "react-router-dom";

export default function TeacherRollCall() {
  const location = useLocation();
  const classInfo = location.state?.classInfo;

  // Dữ liệu mẫu học viên
  const studentsByClass = {
    ENG101: [
      { id: 'HV001', name: 'Nguyễn Văn A' },
      { id: 'HV002', name: 'Trần Thị B' },
      { id: 'HV003', name: 'Lê Văn C' },
    ],
    KOR102: [
      { id: 'HV011', name: 'Park Ji Min' },
      { id: 'HV012', name: 'Kim Seo Hyun' },
      { id: 'HV013', name: 'Nguyễn Thu Hằng' },
    ],
  };

  const students = studentsByClass[classInfo?.id] || [];

  return (
    <div className="container active" id="roll-call">
      <div className="dashboard">
        <nav className="sidebar">
          <div className="sidebar-logo"><h2>👨‍🏫 Giảng Viên</h2></div>
          <ul className="sidebar-menu">
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
          </ul>
        </nav>

        <main className="main-content">
          <div className="header">
            <h1>Điểm danh - {classInfo?.className} ({classInfo?.name})</h1>
          </div>

          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã học viên</th>
                  <th>Tên học viên</th>
                  <th>Có mặt</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td><input type="checkbox" defaultChecked /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button className="btn_save">💾 Lưu điểm danh</button>
        </main>
      </div>
    </div>
  );
}
