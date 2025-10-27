import React, { useState } from "react";
import "../css/Admin_style.css";
import { Link } from "react-router-dom";

export default function Admin_Student_Management() {
  // 📘 Giả lập dữ liệu lớp học (để chọn & lấy học phí tự động)
  const classList = [
    { name: "Tiếng Anh B1", tuition: 2500000 },
    { name: "Tiếng Nhật N5", tuition: 3200000 },
    { name: "IELTS Advanced", tuition: 4500000 },
  ];

  const [students, setStudents] = useState([
    {
      id: "HV001",
      name: "Lê Thị Thu Trang",
      dob: "2004-08-15",
      phone: "0912345678",
      password: "123456",
      className: "Tiếng Anh B1",
      tuition: 2500000,
      status: "Đang hoạt động",
    },
    {
      id: "HV002",
      name: "Nguyễn Văn Hùng",
      dob: "2003-03-10",
      phone: "0987654321",
      password: "abcdef",
      className: "Tiếng Nhật N5",
      tuition: 3200000,
      status: "Tạm dừng",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState("add"); // add | edit | view
  const [selectedId, setSelectedId] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    dob: "",
    phone: "",
    password: "",
    className: "",
    tuition: "",
    status: "Đang hoạt động",
  });

  const [searchName, setSearchName] = useState("");
  const [filterStatus, setFilterStatus] = useState("Tất cả trạng thái");

  // 🧭 Mở popup form
  const openForm = (mode, student = null) => {
    setFormMode(mode);
    setShowForm(true);
    if (student) {
      setSelectedId(student.id);
      setFormData(student);
    } else {
      setFormData({
        id: "",
        name: "",
        dob: "",
        phone: "",
        password: "",
        className: "",
        tuition: "",
        status: "Đang hoạt động",
      });
    }
  };

  // 🔄 Khi thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Nếu chọn lớp học → cập nhật học phí tự động
    if (name === "className") {
      const selected = classList.find((c) => c.name === value);
      setFormData({
        ...formData,
        className: value,
        tuition: selected ? selected.tuition : "",
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // 💾 Lưu học viên
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formMode === "add") {
      const newId = "HV" + String(students.length + 1).padStart(3, "0");
      const newStudent = { ...formData, id: newId };
      setStudents([...students, newStudent]);
      alert("✅ Đã thêm học viên mới!");
    } else if (formMode === "edit") {
      setStudents(students.map((s) => (s.id === selectedId ? formData : s)));
      alert("✏️ Đã cập nhật thông tin học viên!");
    }
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa học viên này không?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  // 🔍 Tìm kiếm và lọc
  const filteredStudents = students.filter((s) => {
    const matchesName = s.name.toLowerCase().includes(searchName.toLowerCase());
    const matchesStatus =
      filterStatus === "Tất cả trạng thái" || s.status === filterStatus;
    return matchesName && matchesStatus;
  });

  return (
    <div className="container active" id="students">
      <div className="dashboard">
        {/* SIDEBAR */}
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

        {/* MAIN CONTENT */}
        <main className="main-content">
          <div className="header">
            <h1>Quản lý học viên</h1>
            <button className="create-btn" onClick={() => openForm("add")}>
              + Thêm học viên mới
            </button>
          </div>

          {/* FORM POPUP */}
          {showForm && (
            <div className="form-popup">
              <div className="form-container">
                <h2>
                  {formMode === "add"
                    ? "Thêm học viên mới"
                    : formMode === "edit"
                    ? "Chỉnh sửa học viên"
                    : "Chi tiết học viên"}
                </h2>
                <form onSubmit={handleSubmit}>
                  <label>Mã học viên</label>
                  <input type="text" name="id" value={formData.id} disabled placeholder="Tự động tạo" />
                  <label>Họ và tên *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required disabled={formMode === "view"} />
                  <label>Ngày sinh *</label>
                  <input type="date" name="dob" value={formData.dob} onChange={handleChange} required disabled={formMode === "view"} />
                  <label>Số điện thoại *</label>
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} required disabled={formMode === "view"} />
                  <label>Mật khẩu *</label>
                  <input type="password" name="password" value={formData.password} onChange={handleChange} required disabled={formMode === "view"} />
                  <label>Lớp *</label>
                  <select name="className" value={formData.className} onChange={handleChange} disabled={formMode === "view"}>
                    <option value="">-- Chọn lớp học --</option>
                    {classList.map((cls) => (
                      <option key={cls.name} value={cls.name}>
                        {cls.name} ({cls.tuition.toLocaleString()} đ)
                      </option>
                    ))}
                  </select>
                  <label>Học phí *</label>
                  <input type="text" name="tuition" value={formData.tuition ? formData.tuition.toLocaleString() + " đ" : ""} disabled />
                  <label>Tình trạng *</label>
                  <select name="status" value={formData.status} onChange={handleChange} disabled={formMode === "view"}>
                    <option>Đang hoạt động</option>
                    <option>Tạm dừng</option>
                  </select>
                  <div className="form-actions">
                    {formMode !== "view" && <button type="submit" className="save-btn">💾 Lưu</button>}
                    <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>
                      {formMode === "view" ? "🔙 Đóng" : "❌ Hủy"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* TÌM KIẾM + LỌC */}
          <div className="filters">
            <input type="text" className="filter-input" placeholder="🔍 Tìm theo tên học viên..." value={searchName} onChange={(e) => setSearchName(e.target.value)} />
            <select className="filter-input" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
              <option>Tất cả trạng thái</option>
              <option>Đang hoạt động</option>
              <option>Tạm dừng</option>
            </select>
          </div>

          {/* BẢNG */}
          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã HV</th>
                  <th>Họ và tên</th>
                  <th>Ngày sinh</th>
                  <th>SĐT</th>
                  <th>Lớp</th>
                  <th>Học phí</th>
                  <th>Tình trạng</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((s) => (
                    <tr key={s.id}>
                      <td>{s.id}</td>
                      <td>{s.name}</td>
                      <td>{s.dob}</td>
                      <td>{s.phone}</td>
                      <td>{s.className}</td>
                      <td>{s.tuition.toLocaleString()} đ</td>
                      <td>
                        <span className={`status-badge ${s.status === "Đang hoạt động" ? "status-active" : "status-inactive"}`}>
                          {s.status}
                        </span>
                      </td>
                      <td>
                        <button className="action-btn btn-edit" onClick={() => openForm("view", s)}>👁️ Xem</button>
                        <button className="action-btn btn-edit" onClick={() => openForm("edit", s)}>✏️ Sửa</button>
                        <button className="action-btn btn-delete" onClick={() => handleDelete(s.id)}>🗑️ Xóa</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="8" style={{ textAlign: "center" }}>Không có dữ liệu phù hợp</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
