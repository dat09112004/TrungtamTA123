import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Admin_style.css";

export default function Admin_Class_Management() {
  // Danh sách phòng học
  const roomList = [
    { id: "A101", status: "Đang hoạt động" },
    { id: "B202", status: "Tạm dừng" },
    { id: "C303", status: "Đang hoạt động" },
  ];

  // Danh sách lớp (thêm ngày bắt đầu và kết thúc)
  const [classes, setClasses] = useState([
    {
      id: "L001",
      className: "IELTS Cấp tốc B2",
      subject: "IELTS Advanced",
      teacher: "Cô Trần Mai",
      schedule: "T2, T4, T6 (19:00 - 20:30)",
      studentCount: 25,
      room: "A101",
      status: "Đang hoạt động",
      startDate: "2025-11-01",
      endDate: "2026-01-30",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState("add"); // add | edit | view
  const [selectedId, setSelectedId] = useState(null);

  const [formData, setFormData] = useState({
    id: "",
    className: "",
    subject: "",
    teacher: "",
    schedule: "",
    studentCount: "",
    room: "",
    status: "Đang hoạt động",
    startDate: "",
    endDate: "",
  });

  // Mở form thêm / sửa / xem
  const openForm = (mode, data = null) => {
    setFormMode(mode);
    setShowForm(true);
    if (data) {
      setSelectedId(data.id);
      setFormData(data);
    } else {
      setFormData({
        id: "",
        className: "",
        subject: "",
        teacher: "",
        schedule: "",
        studentCount: "",
        room: "",
        status: "Đang hoạt động",
        startDate: "",
        endDate: "",
      });
    }
  };

  // Thay đổi input
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Lưu dữ liệu
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formMode === "add") {
      const newClass = {
        ...formData,
        id: "L" + String(classes.length + 1).padStart(3, "0"),
      };
      setClasses([...classes, newClass]);
      alert("✅ Đã thêm lớp học mới!");
    } else if (formMode === "edit") {
      setClasses(
        classes.map((cls) => (cls.id === selectedId ? formData : cls))
      );
      alert("✏️ Đã cập nhật thông tin lớp!");
    }
    setShowForm(false);
  };

  // Xóa lớp
  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa lớp này không?")) {
      setClasses(classes.filter((cls) => cls.id !== id));
    }
  };

  return (
    <div className="container active" id="class-management">
      <div className="dashboard">
        {/* SIDEBAR */}
        <nav className="sidebar">
          <div className="sidebar-logo">
            <h2>📚 Admin Panel</h2>
          </div>
          <ul className="sidebar-menu">
            <li><Link to="/admin/Admin_Dashboard">🏠 Dashboard</Link></li>
            <li><Link to="/admin/Admin_Student_Management">👥 Quản lý học viên</Link></li>
            <li><Link to="/admin/Admin_Steacher_Management">👨‍🏫 Quản lý Giáo viên</Link></li>
            <li><Link to="/admin/Admin_Class_Management" className="active">📝 Quản lý Lớp học</Link></li>
            <li><Link to="/admin/Admin_Subject_Management">📚 Quản lý Môn học</Link></li>
            <li><Link to="/admin/Admin_Room_Management">🚪 Quản lý phòng học</Link></li>
            <li><Link to="/admin/Admin_Certificate_Management">🎓 Quản lý chứng chỉ</Link></li>
            <li><Link to="/admin/Admin_finance">💰 Quản lý Tài chính</Link></li>
            <li><Link to="/admin/admin_Notice_Management">📢 Quản lý Thông Báo</Link></li>
            <li><Link to="/admin/Admin_Setting">⚙️ Cài đặt</Link></li>
            <li><Link to="/">❌ Đăng xuất</Link></li>
          </ul>
        </nav>

        {/* MAIN CONTENT */}
        <main className="main-content">
          <div className="header">
            <h1>Quản lý Lớp học</h1>
            <button className="create-btn" onClick={() => openForm("add")}>
              + Tạo lớp mới
            </button>
          </div>

          {/* FORM POPUP */}
          {showForm && (
            <div className="form-popup">
              <div className="form-container">
                <h2>
                  {formMode === "add"
                    ? "Thêm Lớp học"
                    : formMode === "edit"
                    ? "Chỉnh sửa lớp học"
                    : "Chi tiết lớp học"}
                </h2>

                <form onSubmit={handleSubmit}>
                  <label>Mã lớp</label>
                  <input
                    type="text"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    disabled
                    placeholder="Tự động tạo"
                  />

                  <label>Tên lớp *</label>
                  <input
                    type="text"
                    name="className"
                    value={formData.className}
                    onChange={handleChange}
                    required
                    disabled={formMode === "view"}
                  />

                  <label>Khóa học *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={formMode === "view"}
                  />

                  <label>Giáo viên *</label>
                  <input
                    type="text"
                    name="teacher"
                    value={formData.teacher}
                    onChange={handleChange}
                    required
                    disabled={formMode === "view"}
                  />

                  <label>Lịch học *</label>
                  <input
                    type="text"
                    name="schedule"
                    value={formData.schedule}
                    onChange={handleChange}
                    required
                    disabled={formMode === "view"}
                  />

                  <label>Ngày bắt đầu *</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    disabled={formMode === "view"}
                  />

                  <label>Ngày kết thúc *</label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                    disabled={formMode === "view"}
                  />

                  <label>Số học viên *</label>
                  <input
                    type="number"
                    name="studentCount"
                    value={formData.studentCount}
                    onChange={handleChange}
                    required
                    disabled={formMode === "view"}
                  />

                  <label>Phòng học *</label>
                  <select
                    name="room"
                    value={formData.room}
                    onChange={handleChange}
                    disabled={formMode === "view"}
                  >
                    <option value="">-- Chọn phòng học --</option>
                    {roomList.map((room) => (
                      <option key={room.id} value={room.id}>
                        {room.id} ({room.status})
                      </option>
                    ))}
                  </select>

                  <label>Tình trạng *</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    disabled={formMode === "view"}
                  >
                    <option>Đang hoạt động</option>
                    <option>Tạm dừng</option>
                  </select>

                  <div className="form-actions">
                    {formMode !== "view" && (
                      <button type="submit" className="save-btn">
                        💾 Lưu
                      </button>
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

          {/* BẢNG DANH SÁCH */}
          <div className="filters">
            <input
              type="text"
              className="filter-input"
              placeholder="🔍 Tìm kiếm theo tên lớp..."
            />
            <select className="filter-input">
              <option>Tất cả trạng thái</option>
              <option>Đang hoạt động</option>
              <option>Tạm dừng</option>
            </select>
          </div>

          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã lớp</th>
                  <th>Tên lớp</th>
                  <th>Khóa học</th>
                  <th>Giáo viên</th>
                  <th>Lịch học</th>
                  <th>Ngày bắt đầu</th>
                  <th>Ngày kết thúc</th>
                  <th>Học viên</th>
                  <th>Phòng</th>
                  <th>Tình trạng</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((cls) => (
                  <tr key={cls.id}>
                    <td>{cls.id}</td>
                    <td>{cls.className}</td>
                    <td>{cls.subject}</td>
                    <td>{cls.teacher}</td>
                    <td>{cls.schedule}</td>
                    <td>{cls.startDate}</td>
                    <td>{cls.endDate}</td>
                    <td>{cls.studentCount}</td>
                    <td>{cls.room}</td>
                    <td>
                      <span
                        className={`status-badge ${
                          cls.status === "Đang hoạt động"
                            ? "status-active"
                            : "status-inactive"
                        }`}
                      >
                        {cls.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="action-btn btn-edit"
                        onClick={() => openForm("view", cls)}
                      >
                        👁️ Xem
                      </button>
                      <button
                        className="action-btn btn-edit"
                        onClick={() => openForm("edit", cls)}
                      >
                        ✏️ Sửa
                      </button>
                      <button
                        className="action-btn btn-delete"
                        onClick={() => handleDelete(cls.id)}
                      >
                        🗑️ Xóa
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
