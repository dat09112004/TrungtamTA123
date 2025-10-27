import React, { useState } from "react";
import "../css/Admin_style.css";
import { Link } from "react-router-dom";

export default function Admin_finance() {
  const [records, setRecords] = useState([
    {
      id: "HV001",
      studentName: "Nguyễn Văn A",
      className: "IELTS Cấp tốc B2",
      amount: 3000000,
      dueDate: "2025-11-10",
      status: "Chưa nộp",
    },
    {
      id: "HV002",
      studentName: "Trần Thị B",
      className: "TOEIC Advanced",
      amount: 2500000,
      dueDate: "2025-10-30",
      status: "Đã nộp",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState("add"); // add | edit | view
  const [selectedId, setSelectedId] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    studentName: "",
    className: "",
    amount: "",
    dueDate: "",
    status: "Chưa nộp",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("Tất cả trạng thái");

  const openForm = (mode, data = null) => {
    setFormMode(mode);
    setShowForm(true);
    if (data) {
      setSelectedId(data.id);
      setFormData(data);
    } else {
      setFormData({
        id: "",
        studentName: "",
        className: "",
        amount: "",
        dueDate: "",
        status: "Chưa nộp",
      });
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formMode === "add") {
      setRecords([...records, formData]);
      alert("✅ Đã thêm công nợ mới!");
    } else if (formMode === "edit") {
      setRecords(records.map((r) => (r.id === selectedId ? formData : r)));
      alert("✏️ Đã cập nhật công nợ!");
    }
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa công nợ này không?")) {
      setRecords(records.filter((r) => r.id !== id));
    }
  };

  // Tìm kiếm và lọc
  const filteredRecords = records.filter((r) => {
    const matchesSearch = r.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "Tất cả trạng thái" || r.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container active" id="finance">
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
            <h1>Quản lý tài chính</h1>
            <button className="create-btn" onClick={() => openForm("add")}>+ Thêm công nợ</button>
          </div>

          {/* FORM POPUP */}
          {showForm && (
            <div className="form-popup">
              <div className="form-container">
                <h2>
                  {formMode === "add"
                    ? "Thêm công nợ mới"
                    : formMode === "edit"
                    ? "Chỉnh sửa công nợ"
                    : "Chi tiết công nợ"}
                </h2>
                <form onSubmit={handleSubmit}>
                  <label>Mã học viên *</label><input type="text" name="id" value={formData.id} onChange={handleChange} required disabled={formMode === "view"} />
                  <label>Họ tên học viên *</label><input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required disabled={formMode === "view"} />
                  <label>Lớp *</label><input type="text" name="className" value={formData.className} onChange={handleChange} required disabled={formMode === "view"} />
                  <label>Số tiền *</label><input type="number" name="amount" value={formData.amount} onChange={handleChange} required disabled={formMode === "view"} />
                  <label>Hạn nộp *</label><input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} required disabled={formMode === "view"} />
                  <label>Trạng thái *</label>
                  <select name="status" value={formData.status} onChange={handleChange} disabled={formMode === "view"}>
                    <option>Đã nộp</option><option>Chưa nộp</option>
                  </select>
                  <div className="form-actions">
                    {formMode !== "view" && <button type="submit" className="save-btn">💾 Lưu</button>}
                    <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>{formMode === "view" ? "🔙 Đóng" : "❌ Hủy"}</button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* TÌM KIẾM + LỌC */}
          <div className="filters">
            <input type="text" className="filter-input" placeholder="🔍 Tìm kiếm theo mã học viên..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <select className="filter-input" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
              <option>Tất cả trạng thái</option>
              <option>Đã nộp</option>
              <option>Chưa nộp</option>
            </select>
          </div>

          {/* BẢNG DỮ LIỆU */}
          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã HV</th><th>Học viên</th><th>Lớp</th><th>Số tiền</th><th>Hạn nộp</th><th>Trạng thái</th><th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.length > 0 ? (
                  filteredRecords.map((r) => (
                    <tr key={r.id}>
                      <td>{r.id}</td>
                      <td>{r.studentName}</td>
                      <td>{r.className}</td>
                      <td>{r.amount.toLocaleString()} đ</td>
                      <td>{r.dueDate}</td>
                      <td>
                        <span className={`status-badge ${r.status === "Đã nộp" ? "status-active" : "status-inactive"}`}>{r.status}</span>
                      </td>
                      <td>
                        <button className="action-btn btn-edit" onClick={() => openForm("view", r)}>👁️ Xem</button>
                        <button className="action-btn btn-edit" onClick={() => openForm("edit", r)}>✏️ Sửa</button>
                        <button className="action-btn btn-delete" onClick={() => handleDelete(r.id)}>🗑️ Xóa</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="7" style={{ textAlign: "center" }}>Không có dữ liệu phù hợp</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
