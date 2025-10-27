import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Admin_style.css";

export default function Admin_Certificate_Management() {
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState("add"); // add | edit | view
  const [selectedId, setSelectedId] = useState(null);

  const [certificates, setCertificates] = useState([
    {
      id: "CC001",
      studentId: "HV001",
      studentName: "Nguyễn Văn A",
      course: "IELTS Advanced",
      issueDate: "2025-05-10",
      type: "Hoàn thành",
      status: "Đã cấp",
    },
    {
      id: "CC002",
      studentId: "HV002",
      studentName: "Trần Thị B",
      course: "TOEIC Intensive",
      issueDate: "2025-07-15",
      type: "Xuất sắc",
      status: "Đã cấp",
    },
  ]);

  const [formData, setFormData] = useState({
    id: "",
    studentId: "",
    studentName: "",
    course: "",
    issueDate: "",
    type: "",
    status: "Đã cấp",
  });

  const openForm = (mode, cert = null) => {
    setFormMode(mode);
    setShowForm(true);
    if (cert) {
      setSelectedId(cert.id);
      setFormData(cert);
    } else {
      setFormData({
        id: "",
        studentId: "",
        studentName: "",
        course: "",
        issueDate: "",
        type: "",
        status: "Đã cấp",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formMode === "add") {
      const newCert = {
        ...formData,
        id: "CC" + String(certificates.length + 1).padStart(3, "0"),
      };
      setCertificates([...certificates, newCert]);
      alert("✅ Đã cấp chứng chỉ mới!");
    }

    if (formMode === "edit") {
      const updated = certificates.map((cert) =>
        cert.id === selectedId ? formData : cert
      );
      setCertificates(updated);
      alert("✏️ Đã cập nhật chứng chỉ!");
    }

    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa chứng chỉ này không?")) {
      setCertificates(certificates.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="container active" id="certificate-management">
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
            <h1>Quản lý chứng chỉ</h1>
            <button className="create-btn" onClick={() => openForm("add")}>
              + Cấp chứng chỉ mới
            </button>
          </div>

          {/* FORM POPUP */}
          {showForm && (
            <div className="form-popup">
              <div className="form-container">
                <h2>
                  {formMode === "add"
                    ? "Cấp chứng chỉ mới"
                    : formMode === "edit"
                    ? "Chỉnh sửa chứng chỉ"
                    : "Chi tiết chứng chỉ"}
                </h2>

                <form onSubmit={handleSubmit}>
                  <label>Mã chứng chỉ</label><input type="text" name="id" value={formData.id} onChange={handleChange} disabled={formMode !== "add"} placeholder="Tự động tạo nếu để trống"/>
                  <label>Mã học viên *</label><input type="text" name="studentId" value={formData.studentId} onChange={handleChange} required disabled={formMode === "view"}/>
                  <label>Tên học viên *</label><input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required disabled={formMode === "view"}/>
                  <label>Khóa học *</label><input type="text" name="course" value={formData.course} onChange={handleChange} required disabled={formMode === "view"}/>
                  <label>Ngày cấp *</label><input type="date" name="issueDate" value={formData.issueDate} onChange={handleChange} required disabled={formMode === "view"}/>
                  <label>Loại chứng chỉ *</label><input type="text" name="type" value={formData.type} onChange={handleChange} required disabled={formMode === "view"} placeholder="VD: Hoàn thành, Xuất sắc..."/>
                  <label>Trạng thái</label>
                  <select name="status" value={formData.status} onChange={handleChange} disabled={formMode === "view"}>
                    <option>Đã cấp</option><option>Đang chờ xử lí</option><option>Đã thu hồi</option>
                  </select>
                  <div className="form-actions">
                    {formMode !== "view" && (<button type="submit" className="save-btn">💾 Lưu</button>)}
                    <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>{formMode === "view" ? "🔙 Đóng" : "❌ Hủy"}</button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* BẢNG DỮ LIỆU */}
          <div className="filters">
            <input
              type="text"
              className="filter-input"
              placeholder="🔍 Tìm kiếm theo mã HV, mã CC..."
            />
            <select className="filter-input">
              <option>-- Lọc theo khóa học --</option>
              <option>IELTS Advanced</option>
              <option>TOEIC Intensive</option>
            </select>
            <select className="filter-input">
              <option>-- Lọc theo trạng thái --</option>
              <option>Đã cấp</option>
              <option>Đang chờ xử lí</option>
              <option>Đã thu hồi</option>
            </select>
          </div>

          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã CC</th>
                  <th>Mã HV</th>
                  <th>Học viên</th>
                  <th>Khóa học</th>
                  <th>Ngày cấp</th>
                  <th>Loại</th>
                  <th>Trạng thái</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {certificates.map((cert) => (
                  <tr key={cert.id}>
                    <td>{cert.id}</td>
                    <td>{cert.studentId}</td>
                    <td>{cert.studentName}</td>
                    <td>{cert.course}</td>
                    <td>{cert.issueDate}</td>
                    <td>{cert.type}</td>
                    <td>
                      <span
                        className={`status-badge ${
                          cert.status === "Đã cấp"
                            ? "status-active"
                            : cert.status === "Đang chờ xử lí"
                            ? "status-pending"
                            : "status-inactive"
                        }`}
                      >
                        {cert.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="action-btn btn-edit"
                        onClick={() => openForm("view", cert)}
                      >
                        👁️ Xem
                      </button>
                      <button
                        className="action-btn btn-edit"
                        onClick={() => openForm("edit", cert)}
                      >
                        ✏️ Sửa
                      </button>
                      <button
                        className="action-btn btn-delete"
                        onClick={() => handleDelete(cert.id)}
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
