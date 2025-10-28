import React from 'react';
import styles from "../css/Student_style.module.css";
import { Link } from "react-router-dom";

export default function StudentScore() {
  const scores = [
    {
      id: "EN001",
      subject: "Tiếng Anh giao tiếp cơ bản",
      tx: [9, 8.5, 9.2, 8.8, 9],
      midterm: 8,
      final: 8.5,
    },
    {
      id: "EN002",
      subject: "Ngữ pháp nâng cao",
      tx: [10, 9.8, 9.5, 10, 9.6],
      midterm: 9,
      final: 9.5,
    },
    {
      id: "EN003",
      subject: "Phát âm & Ngữ điệu",
      tx: [8.5, 8, 8.2, 8.8, 8.5],
      midterm: 8,
      final: 8.8,
    },
    {
      id: "EN004",
      subject: "Kỹ năng nghe - nói",
      tx: [9.5, 9.2, 9, 9.3, 9.4],
      midterm: 8.5,
      final: 9.2,
    },
    {
      id: "EN005",
      subject: "Kỹ năng đọc - viết",
      tx: [9, 8.5, 8.7, 9, 8.9],
      midterm: 8.8,
      final: 9.1,
    },
  ];

  // Tính trung bình TX và điểm trung bình tổng
  const calcAvgTX = (txArray) =>
    (txArray.reduce((a, b) => a + b, 0) / txArray.length).toFixed(2);

  const calcFinalScore = (txArray, midterm, final) => {
    const avgTX = txArray.reduce((a, b) => a + b, 0) / txArray.length;
    return ((avgTX * 0.2) + (midterm * 0.3) + (final * 0.5)).toFixed(2);
  };

  return (
    <div className="container active" id="student-score">
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
            <li><Link to="/hocvien/Student_Score" className="active">📊 Điểm số</Link></li>
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
            <h1>📊 Bảng điểm chi tiết</h1>
          </div>

          {/* Bảng điểm */}
          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã lớp học phần</th>
                  <th>Tên môn học</th>
                  <th>Điểm thường xuyên (TX1 → TX5)</th>
                  <th>TB TX</th>
                  <th>Giữa kỳ</th>
                  <th>Cuối kỳ</th>
                  <th>Điểm trung bình</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {scores.map((item) => {
                  const avgTX = calcAvgTX(item.tx);
                  const avgFinal = calcFinalScore(item.tx, item.midterm, item.final);
                  const status =
                    avgFinal >= 5
                      ? <span className="status-badge status-active">Đạt</span>
                      : <span className="status-badge status-inactive">Không đạt</span>;

                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.subject}</td>
                      <td>
                        {item.tx.map((tx, idx) => (
                          <span key={idx} style={{ marginRight: "5px" }}>
                            TX{idx + 1}: <strong>{tx}</strong>{idx < 4 ? "," : ""}
                          </span>
                        ))}
                      </td>
                      <td><strong>{avgTX}</strong></td>
                      <td>{item.midterm}</td>
                      <td>{item.final}</td>
                      <td><strong>{avgFinal}</strong></td>
                      <td>{status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
