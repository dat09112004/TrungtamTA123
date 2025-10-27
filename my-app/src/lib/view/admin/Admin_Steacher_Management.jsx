import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Admin_style.css";

export default function Admin_Steacher_Management() {
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState("add"); // add | edit | view
  const [selectedId, setSelectedId] = useState(null);

  // Dữ liệu mẫu giáo viên
  const [teachers, setTeachers] = useState([
    {
      id: "GV001",
      name: "Cô Trần Mai",
      phone: "0905123456",
      password: "abc123",
      status: "Hoạt động",
    },
    {
      id: "GV002",
      name: "Thầy Nguyễn Văn An",
      phone: "0912345678",
      password: "pass456",
      status: "Tạm dừng",
    },
  ]);

  // Dữ liệu form
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    status: "Hoạt động",
  });

  // Mở form
  const openForm = (mode, teacher = null) => {
    setFormMode(mode);
    setShowForm(true);

    if (mode === "edit" || mode === "view") {
      setSelectedId(teacher.id);
      setFormData({
        name: teacher.name,
        phone: teacher.phone,
        password: teacher.password,
        status: teacher.status,
      });
    } else {
      setFormData({
        name: "",
        phone: "",
        password: "",
        status: "Hoạt động",
      });
    }
  };

  // Lưu dữ liệu
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formMode === "add") {
      const newTeacher = {
        id: "GV" + String(teachers.length + 1).padStart(3, "0"),
        ...formData,
      };
      setTeachers([...teachers, newTeacher]);
      alert("✅ Đã thêm giáo viên mới!");
    } else if (formMode === "edit") {
      setTeachers(
        teachers.map((t) =>
          t.id === selectedId ? { ...t, ...formData } : t
        )
      );
      alert("✏️ Đã cập nhật thông tin giáo viên!");
    }
    setShowForm(false);
  };

  // Xóa giáo viên
  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa giáo viên này không?")) {
      setTeachers(teachers.filter((t) => t.id !== id));
    }
  };

  // Xử lý thay đổi input
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="container active" id="teacher-management">
      <div className="dashboard">
        {/* SIDEBAR */}
        <nav className="sidebar">
          <div className="sidebar-logo"><h2>📚 Admin Panel</h2></div>
          <ul className="sidebar-menu">
            <li><Link to="/admin/Admin_Dashboard">🏠 Dashboard</Link></li>
            <li><Link to="/admin/Admin_Student_Management">👥 Quản lý Học viên</Link></li>
            <li><Link to="/admin/Admin_Steacher_Management" className="active">👨‍🏫 Quản lý Giáo viên</Link></li>
            <li><Link to="/admin/Admin_Class_Management">📝 Quản lý Lớp học</Link></li>
            <li><Link to="/admin/Admin_Subject_Management">📚 Quản lý Môn học</Link></li>
            <li><Link to="/admin/Admin_Room_Management">🚪 Quản lý Phòng học</Link></li>
            <li><Link to="/admin/Admin_Certificate_Management">🎓 Quản lý Chứng chỉ</Link></li>
            <li><Link to="/admin/Admin_finance">💰 Quản lý Tài chính</Link></li>
            <li><Link to="/admin/admin_Notice_Management">📢 Quản lý Thông báo</Link></li>
            <li><Link to="/admin/Admin_Setting">⚙️ Cài đặt</Link></li>
            <li><Link to="/">❌ Đăng xuất</Link></li>
          </ul>
        </nav>

        {/* MAIN CONTENT */}
        <main className="main-content">
          <div className="header">
            <h1>👨‍🏫 Quản lý Giáo viên</h1>
            <button className="create-btn" onClick={() => openForm("add")}>
              + Thêm giáo viên
            </button>
          </div>

          {/* POPUP FORM */}
          {showForm && (
            <div className="form-popup">
              <div className="form-container">
                <h2>
                  {formMode === "add"
                    ? "Thêm Giáo viên mới"
                    : formMode === "edit"
                    ? "Chỉnh sửa Giáo viên"
                    : "Chi tiết Giáo viên"}
                </h2>

                <form onSubmit={handleSubmit}>
                  <label>Họ và tên *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nhập họ tên giáo viên"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={formMode === "view"}
                  />

                  <label>Số điện thoại *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="VD: 0905123456"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    title="Số điện thoại gồm 10 chữ số"
                    required
                    disabled={formMode === "view"}
                  />

                  <label>Mật khẩu *</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Nhập mật khẩu"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    disabled={formMode === "view"}
                  />

                  <label>Trạng thái *</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    disabled={formMode === "view"}
                  >
                    <option>Hoạt động</option>
                    <option>Tạm dừng</option>
                  </select>

                  <div className="form-actions">
                    {formMode !== "view" && (
                      <button type="submit" className="save-btn">💾 Lưu</button>
                    )}
                    <button
                      type="button"
                      className="cancel-btn"
                      onClick={() => setShowForm(false)}
                    >
                      {formMode === "view" ? "🔙 Đóng" : "❌ Hủy"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* DANH SÁCH GIÁO VIÊN */}
          <div className="filters">
            <input type="text" className="filter-input" placeholder="🔍 Tìm kiếm theo tên..." />
            <select className="filter-input">
              <option>Tất cả trạng thái</option>
              <option>Hoạt động</option>
              <option>Tạm dừng</option>
            </select>
          </div>

          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã GV</th>
                  <th>Họ và Tên</th>
                  <th>Số điện thoại</th>
                  <th>Mật khẩu</th>
                  <th>Trạng thái</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((t) => (
                  <tr key={t.id}>
                    <td><strong>{t.id}</strong></td>
                    <td>{t.name}</td>
                    <td>{t.phone}</td>

                    {/* 🔒 Ẩn mật khẩu trong bảng */}
                    <td>{"•".repeat(t.password.length)}</td>

                    <td>
                      <span
                        className={`status-badge ${
                          t.status === "Hoạt động" ? "status-active" : "status-inactive"
                        }`}
                      >
                        {t.status}
                      </span>
                    </td>
                    <td>
                      <button className="action-btn btn-edit" onClick={() => openForm("view", t)}>👁️ Xem</button>
                      <button className="action-btn btn-edit" onClick={() => openForm("edit", t)}>✏️ Sửa</button>
                      <button className="action-btn btn-delete" onClick={() => handleDelete(t.id)}>🗑️ Xóa</button>
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
