import React, { useState } from "react";
import "../css/Admin_style.css";
import { Link } from "react-router-dom";

export default function Admin_Notice_Management() {
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState("add");
  const [searchTerm, setSearchTerm] = useState("");
  const [notices, setNotices] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    content: "",
    receiverType: "Tất cả trung tâm",
    receiverName: "",
    date: "",
  });

  const openForm = (mode, data = null) => {
    setFormMode(mode);
    if (data) setFormData(data);
    else
      setFormData({
        id: "",
        title: "",
        content: "",
        receiverType: "Tất cả trung tâm",
        receiverName: "",
        date: "",
      });
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formMode === "add") {
      const newNotice = { ...formData, id: Date.now() };
      setNotices([...notices, newNotice]);
    } else if (formMode === "edit") {
      setNotices(
        notices.map((n) => (n.id === formData.id ? formData : n))
      );
    }
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa thông báo này không?")) {
      setNotices(notices.filter((n) => n.id !== id));
    }
  };

  const filteredNotices = notices.filter((n) =>
    n.receiverName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container active" id="notice">
      <div className="dashboard">
        <nav className="sidebar">
          <div className="sidebar-logo"><h2>📚 Admin Panel</h2></div>
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
            <h1>📢 Quản lý Thông Báo</h1>
            <button className="create-btn" onClick={() => openForm("add")}>
              + Thêm Thông Báo
            </button>
          </div>

          {/* FORM POPUP */}
          {showForm && (
            <div className="form-popup">
              <div className="form-container">
                <h2>
                  {formMode === "add"
                    ? "Thêm Thông Báo"
                    : formMode === "edit"
                    ? "Chỉnh sửa Thông Báo"
                    : "Chi tiết Thông Báo"}
                </h2>
                <form onSubmit={handleSubmit}>
                  <label>Tiêu đề *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    disabled={formMode === "view"}
                  />
                  <label>Nội dung *</label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    disabled={formMode === "view"}
                    rows="4"
                  ></textarea>

                  <label>Gửi đến *</label>
                  <select
                    name="receiverType"
                    value={formData.receiverType}
                    onChange={handleChange}
                    disabled={formMode === "view"}
                  >
                    <option>Tất cả trung tâm</option>
                    <option>Học viên cụ thể</option>
                  </select>

                  {formData.receiverType === "Học viên cụ thể" && (
                    <>
                      <label>Tên học viên *</label>
                      <input
                        type="text"
                        name="receiverName"
                        value={formData.receiverName}
                        onChange={handleChange}
                        required
                        disabled={formMode === "view"}
                        placeholder="Nhập tên học viên cụ thể"
                      />
                    </>
                  )}

                  <label>Ngày gửi *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    disabled={formMode === "view"}
                  />

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

          {/* TÌM KIẾM */}
          <div className="filters">
            <input
              type="text"
              className="filter-input"
              placeholder="🔍 Tìm kiếm theo tên học viên..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* BẢNG DỮ LIỆU */}
          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tiêu đề</th>
                  <th>Người nhận</th>
                  <th>Ngày gửi</th>
                  <th>Nội dung</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {filteredNotices.length > 0 ? (
                  filteredNotices.map((n) => (
                    <tr key={n.id}>
                      <td>{n.id}</td>
                      <td>{n.title}</td>
                      <td>
                        {n.receiverType === "Tất cả trung tâm"
                          ? "📢 Toàn trung tâm"
                          : n.receiverName}
                      </td>
                      <td>{n.date}</td>
                      <td>{n.content}</td>
                      <td>
                        <button className="action-btn btn-edit" onClick={() => openForm("view", n)}>👁️ Xem</button>
                        <button className="action-btn btn-edit" onClick={() => openForm("edit", n)}>✏️ Sửa</button>
                        <button className="action-btn btn-delete" onClick={() => handleDelete(n.id)}>🗑️ Xóa</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="6" style={{ textAlign: "center" }}>Không có thông báo nào</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
