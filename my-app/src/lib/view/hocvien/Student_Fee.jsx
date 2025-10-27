import React from 'react';
import '../css/Student_style.css';
import { Link } from "react-router-dom";

export default function StudentFee() {
  return (
    <div className="container active" id="fee">
      <div className="dashboard">
        <nav className="sidebar">
          <div className="sidebar-logo">
            <h2>👨‍🎓 Học viên</h2>
          </div>
          <ul className="student-menu">
            <li><Link to="/student/dashboard">🏠 Trang chủ</Link></li>
            <li><Link to="/student/register-class">📅 Đăng ký lớp học</Link></li>
            <li><Link to="/student/school-schedule">📘 Lịch học</Link></li>
            <li><Link to="/student/score">📊 Điểm số</Link></li>
            <li><Link to="/student/fee">💰 Học phí</Link></li>
            <li><Link to="/student/noti">📢 Thông báo</Link></li>
            <li><Link to="/student/course-materials">📚 Tài liệu</Link></li>
            <li><Link to="/student/attendance-information">🕒 Điểm danh</Link></li>
            <li><Link to="/student/homework">📝 Bài tập</Link></li>
            <li><Link to="/student/certificate">🎓 Chứng chỉ</Link></li>
            <li><Link to="/student/setting">⚙️ Cài đặt</Link></li>
            <li><Link to="/">🚪 Đăng xuất</Link></li>
          </ul>
        </nav>

        <main className="main-content">
          <div className="header">
            <h1>Học phí</h1>
          </div>

          <div className="class-table">
            <h1>Học phí chưa thanh toán</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>Tên môn học</th>
                  <th>Số tiền</th>
                  <th>Bắc buộc</th>
                  <th>Chọn</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tiếng anh C1</td>
                  <td>1,000,000 VND</td>
                  <td> </td>
                  <td><input type="checkbox" defaultChecked /></td>
                </tr>
                <tr>
                  <td>Tiếng anh B1</td>
                  <td>900,000 VND</td>
                  <td> </td>
                  <td><input type="checkbox" /></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Tổng số tiền thanh toán</th>
                  <th>.........</th>
                </tr>
                <tr>
                  <th>Thanh toán</th>
                  <td><button className="btn_pay">Thanh toán</button></td>
                </tr>
              </thead>
            </table>
          </div>

          <div className="class-table">
            <h2>Học phí đã thanh toán</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Tên môn học</th>
                  <th>Số tiền</th>
                  <th>Bắc buộc</th>
                  <th>Tình trạng</th>
                </tr>
              </thead>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
