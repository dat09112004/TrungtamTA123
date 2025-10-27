import React, { useState } from "react";
import "../css/Admin_style.css";
import { Link } from "react-router-dom";

export default function Admin_Room_Management() {
  const [rooms, setRooms] = useState([
    { id: "A101", capacity: 30, equipment: "Máy chiếu, Điều hòa", status: "Đang hoạt động" },
    { id: "B202", capacity: 25, equipment: "Tivi, Quạt", status: "Tạm dừng" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState("add"); // add | edit | view
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [formData, setFormData] = useState({ id: "", capacity: "", equipment: "", status: "Đang hoạt động" });

  const openForm = (mode, room = null) => {
    setFormMode(mode);
    setShowForm(true);
    if (room) {
      setSelectedRoomId(room.id);
      setFormData({ ...room });
    } else {
      setFormData({ id: "", capacity: "", equipment: "", status: "Đang hoạt động" });
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formMode === "add") {
      setRooms([...rooms, formData]);
      alert("✅ Đã thêm phòng học mới!");
    } else if (formMode === "edit") {
      setRooms(rooms.map(r => r.id === selectedRoomId ? formData : r));
      alert("✏️ Đã cập nhật thông tin phòng!");
    }
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa phòng này không?")) setRooms(rooms.filter(r => r.id !== id));
  };

  return (
    <div className="container active" id="room-management">
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
            <h1>Quản lý phòng học</h1>
            <button className="create-btn" onClick={() => openForm("add")}>+ Thêm phòng học mới</button>
          </div>

          {/* FORM POPUP */}
          {showForm && (
            <div className="form-popup">
              <div className="form-container">
                <h2>{formMode === "add" ? "Thêm phòng học mới" : formMode === "edit" ? "Chỉnh sửa phòng học" : "Chi tiết phòng học"}</h2>
                <form onSubmit={handleSubmit}>
                  <label>Mã phòng *</label><input type="text" name="id" value={formData.id} onChange={handleChange} required disabled={formMode !== "add"} placeholder="VD: A101"/>
                  <label>Sức chứa *</label><input type="number" name="capacity" value={formData.capacity} onChange={handleChange} required disabled={formMode === "view"} placeholder="VD: 30"/>
                  <label>Trang thiết bị *</label><input type="text" name="equipment" value={formData.equipment} onChange={handleChange} required disabled={formMode === "view"} placeholder="VD: Máy chiếu, Điều hòa"/>
                  <label>Tình trạng *</label>
                  <select name="status" value={formData.status} onChange={handleChange} disabled={formMode === "view"}>
                    <option>Đang hoạt động</option><option>Tạm dừng</option>
                  </select>
                  <div className="form-actions">
                    {formMode !== "view" && <button type="submit" className="save-btn">💾 Lưu</button>}
                    <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>{formMode === "view" ? "🔙 Đóng" : "❌ Hủy"}</button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* BẢNG PHÒNG */}
          <div className="filters">
            <input type="text" className="filter-input" placeholder="🔍 Tìm kiếm theo mã phòng..."/>
            <select className="filter-input"><option>Tất cả trạng thái</option><option>Đang hoạt động</option><option>Tạm dừng</option></select>
          </div>

          <div className="class-table">
            <table className="table">
              <thead>
                <tr><th>Mã phòng</th><th>Sức chứa</th><th>Trang thiết bị</th><th>Tình trạng</th><th>Thao tác</th></tr>
              </thead>
              <tbody>
                {rooms.map((room) => (
                  <tr key={room.id}>
                    <td>{room.id}</td>
                    <td>{room.capacity}</td>
                    <td>{room.equipment}</td>
                    <td><span className={`status-badge ${room.status === "Đang hoạt động" ? "status-active" : "status-inactive"}`}>{room.status}</span></td>
                    <td>
                      <button className="action-btn btn-edit" onClick={() => openForm("view", room)}>👁️ Xem</button>
                      <button className="action-btn btn-edit" onClick={() => openForm("edit", room)}>✏️ Sửa</button>
                      <button className="action-btn btn-delete" onClick={() => handleDelete(room.id)}>🗑️ Xóa</button>
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
