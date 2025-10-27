import React, { useState } from 'react';
import '../css/Teacher_style.css';
import { Link, useNavigate } from "react-router-dom";

export default function TeacherClassInfor() {
  const navigate = useNavigate();

  // Dữ liệu mẫu: mỗi lớp có nhiều ngày học (ngày thực tế)
  const classList = [
    { 
      id: 'ENG101', 
      name: 'Tiếng Anh giao tiếp B1', 
      className: 'B1A', 
      room: 'P.203', 
      dates: ['2025-10-21', '2025-10-23', '2025-10-25', '2025-10-27'],
      students: 50 
    },
    { 
      id: 'KOR102', 
      name: 'Tiếng Hàn sơ cấp 2', 
      className: 'HANA2', 
      room: 'P.105', 
      dates: ['2025-10-22', '2025-10-24', '2025-10-26'],
      students: 50 
    }
  ];

  // Trạng thái lưu ngày học được chọn theo lớp
  const [selectedDates, setSelectedDates] = useState({});

  const handleDateChange = (classId, date) => {
    setSelectedDates(prev => ({ ...prev, [classId]: date }));
  };

  const handleNavigate = (path, classInfo, date = null) => {
    navigate(path, { state: { classInfo, selectedDate: date } });
  };

  return (
    <div className="container active" id="class-infor">
      <div className="dashboard">
        {/* Thanh sidebar */}
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

        {/* Nội dung chính */}
        <main className="main-content">
          <div className="header">
            <h1>Thông tin lớp học</h1>
          </div>

          <div className="filters">
            <input type="text" className="filter-input" placeholder="🔍 Tìm kiếm theo mã môn học..." />
          </div>

          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã môn học</th>
                  <th>Tên môn học</th>
                  <th>Lớp học</th>
                  <th>Phòng học</th>
                  <th>Ngày học</th>
                  <th>Số học viên</th>
                  <th>Điểm danh</th>
                  <th>Nhập điểm</th>
                </tr>
              </thead>
              <tbody>
                {classList.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.className}</td>
                    <td>{item.room}</td>

                    {/* Dropdown chọn ngày học theo date */}
                    <td>
                      <select
                        className="date-select"
                        value={selectedDates[item.id] || ""}
                        onChange={(e) => handleDateChange(item.id, e.target.value)}
                      >
                        <option value="">-- Chọn ngày học --</option>
                        {item.dates.map((date, idx) => (
                          <option key={idx} value={date}>
                            {new Date(date).toLocaleDateString('vi-VN')}
                          </option>
                        ))}
                      </select>
                    </td>

                    <td>{item.students}</td>

                    {/* Nút điểm danh */}
                    <td>
                      <button
                        className="btn-attendance"
                        disabled={!selectedDates[item.id]}
                        onClick={() =>
                          handleNavigate('/giangvien/Teacher_Roll_Call', item, selectedDates[item.id])
                        }
                      >
                        Điểm danh
                      </button>
                    </td>

                    {/* Nút nhập điểm (chung cho môn học) */}
                    <td>
                      <button
                        className="btn-grade"
                        onClick={() => handleNavigate('/giangvien/Teacher_Score', item)}
                      >
                        Nhập điểm
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
