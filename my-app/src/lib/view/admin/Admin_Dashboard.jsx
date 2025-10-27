import React from "react";
import { Link } from "react-router-dom";
import "../css/Admin_style.css";

export default function Admin_Dashboard() {
  return (
    <div className="container active" id="admin-dashboard">
      <div className="dashboard">
        <nav className="sidebar">
          <div className="sidebar-logo">
            <h2>📚 Admin Panel</h2>
          </div>
          <ul className="sidebar-menu">
            <li><Link to="/admin/Admin_Dashboard">🏠 Dashboard</Link></li>
            <li><Link to="/admin/Admin_Student_Management">👥 Quản lý học viên</Link></li>
            <li><Link to="/admin/Admin_Steacher_Management">👨‍🏫 Quản lý Giáo viên</Link></li>
            <li><Link to="/admin/Admin_Class_Management">📝 Quản lý Lớp học</Link></li>
            <li><Link to="/admin/Admin_Subject_Management">📚 Quản lý Môn học</Link></li>
            <li><Link to="/admin/Admin_Room_Management">🚪 Quản lý phòng học</Link></li>
            <li><Link to="/admin/Admin_Certificate_Management">🎓 Quản lý chứng chỉ</Link></li>
            <li><Link to="/admin/Admin_finance">💰 Quản lý Tài chính</Link></li>
            <li><Link to="/admin/admin_Notice_Management">📢 Quản lý Thông Báo</Link></li>
            <li><Link to="/admin/Admin_Setting">⚙️ Cài đặt</Link></li>
            <li><Link to="/">❌ Đăng xuất</Link></li>
          </ul>
        </nav>

        <main className="main-content">
          <div className="header">
            <h1>Dashboard Tổng quan</h1>
            <div className="user-info">
              <span>Xin chào, Admin</span>
              <div className="avatar">A</div>
            </div>
          </div>

          <div className="chart-card">
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <h3 className="chart-title" style={{ margin: 0 }}>
                📈 Thống kê theo tháng/năm
              </h3>
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <label htmlFor="statMonth">
                  <strong>Chọn tháng:</strong>
                </label>
                <input type="month" id="statMonth" />
                <button className="action-btn btn-edit" id="applyStatBtn">
                  Áp dụng
                </button>
              </div>
            </div>
            <div style={{ marginTop: 8, color: "#666" }} id="selectedMonthLabel"></div>
            <div className="stats-grid" style={{ marginTop: 16 }}>
              <div className="stat-card revenue" id="openRevenueDetail">
                <div className="stat-number" id="statRevenue">0</div>
                <div className="stat-label">Doanh thu tháng</div>
              </div>
              <div className="stat-card students">
                <div className="stat-number" id="statNewStudents">0</div>
                <div className="stat-label">Học viên mới</div>
              </div>
              <div className="stat-card classes">
                <div className="stat-number" id="statCertificates">0</div>
                <div className="stat-label">Chứng chỉ được cấp</div>
              </div>
              <div className="stat-card debt">
                <div className="stat-number" id="statExpenses">0</div>
                <div className="stat-label">Tổng tiền chi tiêu</div>
              </div>
              <div className="stat-card classes">
                <div className="stat-number" id="statOpenedClasses">0</div>
                <div className="stat-label">Tổng số lớp mở</div>
              </div>
              <div className="stat-card students">
                <div className="stat-number" id="statTotalStudents">0</div>
                <div className="stat-label">Tổng HV hiện tại</div>
              </div>
              <div className="stat-card">
                <div className="stat-number" id="statTotalSubjects">0</div>
                <div className="stat-label">Tổng số môn</div>
              </div>
              <div className="stat-card">
                <div className="stat-number" id="statTotalMaterials">0</div>
                <div className="stat-label">Tổng số tài liệu</div>
              </div>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card students">
              <div className="stat-number">1,234</div>
              <div className="stat-label">Tổng số Học viên</div>
            </div>
            <div className="stat-card classes">
              <div className="stat-number">48</div>
              <div className="stat-label">Tổng số Lớp học</div>
            </div>
            <div className="stat-card revenue">
              <div className="stat-number">125.5M</div>
              <div className="stat-label">Doanh thu tháng này</div>
            </div>
            <div className="stat-card debt">
              <div className="stat-number">12.3M</div>
              <div className="stat-label">Tổng công nợ</div>
            </div>
          </div>

          <div className="charts-grid">
            <div className="chart-card">
              <h3 className="chart-title">📊 Số lượng học viên theo khóa học</h3>
              <canvas id="studentChart" height="250"></canvas>
            </div>
            <div className="chart-card">
              <h3 className="chart-title">🥧 Tình trạng học phí</h3>
              <canvas id="tuitionChart" height="250"></canvas>
            </div>
          </div>

          <div className="chart-card">
            <h3 className="chart-title">📢 Thông báo gần đây</h3>
            <div style={{ padding: 20 }}>
              <div
                style={{
                  padding: 15,
                  background: "#fef3c7",
                  borderLeft: "4px solid #f59e0b",
                  marginBottom: 10,
                  borderRadius: 6,
                }}
              >
                <strong>Nhắc nhở:</strong> Có 15 học viên chưa đóng học phí tháng này
              </div>
              <div
                style={{
                  padding: 15,
                  background: "#dbeafe",
                  borderLeft: "4px solid #3b82f6",
                  marginBottom: 10,
                  borderRadius: 6,
                }}
              >
                <strong>Sự kiện:</strong> Cuộc thi Olympic Toán học sẽ diễn ra vào ngày 25/09
              </div>
              <div
                style={{
                  padding: 15,
                  background: "#dcfce7",
                  borderLeft: "4px solid #22c55e",
                  borderRadius: 6,
                }}
              >
                <strong>Thông báo:</strong> Lịch nghỉ lễ Quốc khánh từ 02/09 - 04/09
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
