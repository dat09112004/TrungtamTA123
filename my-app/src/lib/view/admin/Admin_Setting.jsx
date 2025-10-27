import React from "react";
import "../css/Admin_style.css";
import { Link } from "react-router-dom";

export default function Admin_Setting() {
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
          </div>
        </main>
      </div>
    </div>
  );
}
