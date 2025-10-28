import React from 'react';
import styles from "../css/Student_style.module.css";
import { Link } from "react-router-dom";

export default function StudentDashboard() {
  const showStudentTab = (tab) => {
    console.log('Chuyển tab:', tab);
  };

  return (
    <div className="container active" id="student-dashboard">
      <div className="dashboard">
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
              <li><Link to="/hocvien/Student_Coursematerials">📚 Tài liệu</Link></li>
              <li><Link to="/hocvien/Student_Attendanceinformation">🕒 Điểm danh</Link></li>
              <li><Link to="/hocvien/Student_Homework">📝 Bài tập</Link></li>
              <li><Link to="/hocvien/Student_Certificate">🎓 Chứng chỉ</Link></li>
              <li><Link to="/hocvien/Student_Setting">⚙️ Cài đặt</Link></li>
              <li><Link to="/">🚪 Đăng xuất</Link></li>
            </ul>
        </nav>

        <main className="main-content">
          <div className="student-header">
            <div className="student-info">
              <div className="student-avatar">B</div>
              <div className="student-details">
                <h2>Trần Thị Bình</h2>
                <p>Mã học viên: HV001234</p>
                <p>Lớp: 11A1 - Khóa học 2024-2025</p>
              </div>
            </div>
            <div style={{ background: 'linear-gradient(45deg, #667eea, #764ba2)', color: 'white', padding: 20, borderRadius: 10, textAlign: 'center' }}>
              <h3>📢 Thông báo mới</h3>
              <p>Lịch thi giữa kỳ đã được cập nhật. Vui lòng kiểm tra lịch học.</p>
            </div>
          </div>

          <div className="tabs">
            <button className="tab active" onClick={() => showStudentTab('schedule')}>📅 Lịch học của tôi</button>
          </div>

          <div className="tab-content active" id="schedule-tab">
            <h3>Lịch học tuần này</h3>
            <div className="schedule-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <h4>🔢 Toán 11 - Cơ bản</h4>
                <span style={{ background: '#e6fffa', color: '#234e52', padding: '4px 8px', borderRadius: 12, fontSize: 12 }}>Thứ 2, 4, 6</span>
              </div>
              <p><strong>Giáo viên:</strong> Thầy Nguyễn Văn A</p>
              <p><strong>Thời gian:</strong> 08:00 - 09:30</p>
              <p><strong>Phòng học:</strong> A1</p>
            </div>

            <div className="schedule-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <h4>🔬 Vật Lý 11 - Nâng cao</h4>
                <span style={{ background: '#fef5e7', color: '#744210', padding: '4px 8px', borderRadius: 12, fontSize: 12 }}>Thứ 3, 5</span>
              </div>
              <p><strong>Giáo viên:</strong> Cô Trần Thị B</p>
              <p><strong>Thời gian:</strong> 14:00 - 15:30</p>
              <p><strong>Phòng học:</strong> B2</p>
            </div>

            <div className="schedule-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <h4>🇬🇧 Tiếng Anh - IELTS</h4>
                <span style={{ background: '#f0fff4', color: '#22543d', padding: '4px 8px', borderRadius: 12, fontSize: 12 }}>Thứ 7</span>
              </div>
              <p><strong>Giáo viên:</strong> Cô Phạm Thị D</p>
              <p><strong>Thời gian:</strong> 09:00 - 11:00</p>
              <p><strong>Phòng học:</strong> C1</p>
            </div>

          </div>

          <div className="tab-content active " id="grades-tab">
            <h3>Bảng điểm học tập</h3>
            <div className="class-table">
              <table className="table">
                <thead>
                  <tr>
                    <th>Môn học</th>
                    <th>Điểm kiểm tra</th>
                    <th>Điểm giữa kỳ</th>
                    <th>Điểm cuối kỳ</th>
                    <th>Điểm trung bình</th>
                    <th>Xếp loại</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Toán 11</strong></td>
                    <td>8.5</td>
                    <td>8.0</td>
                    <td>8.5</td>
                    <td><strong>8.3</strong></td>
                    <td><span className="status-badge" style={{ background: '#c6f6d5', color: '#22543d' }}>Giỏi</span></td>
                  </tr>
                  <tr>
                    <td><strong>Vật Lý 11</strong></td>
                    <td>7.5</td>
                    <td>7.0</td>
                    <td>8.0</td>
                    <td><strong>7.5</strong></td>
                    <td><span className="status-badge" style={{ background: '#bee3f8', color: '#2a69ac' }}>Khá</span></td>
                  </tr>
                  <tr>
                    <td><strong>Tiếng Anh</strong></td>
                    <td>9.0</td>
                    <td>8.5</td>
                    <td>9.0</td>
                    <td><strong>8.8</strong></td>
                    <td><span className="status-badge" style={{ background: '#c6f6d5', color: '#22543d' }}>Giỏi</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="tab-content" id="fees-tab">
            <h3>Tình trạng học phí</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
              <div className="stat-card">
                <div className="stat-number" style={{ color: '#48bb78' }}>5,500,000₫</div>
                <div className="stat-label">Tổng học phí năm học</div>
              </div>
              <div className="stat-card">
                <div className="stat-number" style={{ color: '#667eea' }}>4,500,000₫</div>
                <div className="stat-label">Đã đóng</div>
              </div>
              <div className="stat-card">
                <div className="stat-number" style={{ color: '#f56565' }}>1,000,000₫</div>
                <div className="stat-label">Còn nợ</div>
              </div>
            </div>

            <div className="class-table" style={{ marginTop: 30 }}>
              <h4 style={{ marginBottom: 15 }}>Lịch sử đóng học phí</h4>
              <table className="table">
                <thead>
                  <tr>
                    <th>Ngày đóng</th>
                    <th>Kỳ học</th>
                    <th>Số tiền</th>
                    <th>Phương thức</th>
                    <th>Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>15/08/2024</td>
                    <td>Học kỳ 1 - 2024</td>
                    <td>2,500,000₫</td>
                    <td>Chuyển khoản</td>
                    <td><span className="status-badge status-active">Đã thanh toán</span></td>
                  </tr>
                  <tr>
                    <td>15/01/2025</td>
                    <td>Học kỳ 2 - 2025</td>
                    <td>2,000,000₫</td>
                    <td>Tiền mặt</td>
                    <td><span className="status-badge status-active">Đã thanh toán</span></td>
                  </tr>
                  <tr>
                    <td>15/06/2025</td>
                    <td>Học kỳ hè - 2025</td>
                    <td>1,000,000₫</td>
                    <td>Chưa đóng</td>
                    <td><span className="status-badge status-inactive">Chưa thanh toán</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: 20, textAlign: 'center' }}>
              <button className="create-btn" style={{ background: 'linear-gradient(45deg, #667eea, #764ba2)' }}>💳 Thanh toán ngay</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}