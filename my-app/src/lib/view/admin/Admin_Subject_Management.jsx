import React, { useState } from "react";
import "../css/Admin_style.css";
import { Link } from "react-router-dom";

export default function Admin_Subject_Management() {
  const [subjects, setSubjects] = useState([
    { id: "MH001", name: "Tiếng Anh Giao Tiếp A1", syllabus: "english_communication_a1.pdf", status: "Đang hoạt động" },
    { id: "MH002", name: "Ngữ Pháp Tiếng Anh B1", syllabus: "english_grammar_b1.pdf", status: "Đang hoạt động" },
    { id: "MH003", name: "Kỹ Năng Nghe - Nói Tiếng Anh", syllabus: "english_listening_speaking.pdf", status: "Tạm dừng" },
    { id: "MH004", name: "Tin Học Văn Phòng Cơ Bản", syllabus: "basic_office_it.pdf", status: "Đang hoạt động" },
    { id: "MH005", name: "Luyện Thi IELTS Advanced", syllabus: "ielts_advanced.pdf", status: "Đang hoạt động" },
    { id: "MH006", name: "TOEIC Intensive", syllabus: "toeic_intensive.pdf", status: "Tạm dừng" },
    { id: "MH007", name: "Kỹ Năng Thuyết Trình", syllabus: "presentation_skills.pdf", status: "Đang hoạt động" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState("add"); // add | edit | view
  const [selectedId, setSelectedId] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    syllabus: "",
    status: "Đang hoạt động",
  });

  // Tìm kiếm + lọc
  const [searchId, setSearchId] = useState("");
  const [searchName, setSearchName] = useState("");
  const [filterStatus, setFilterStatus] = useState("Tất cả trạng thái");

  const openForm = (mode, subject = null) => {
    setFormMode(mode);
    setShowForm(true);
    if (subject) {
      setSelectedId(subject.id);
      setFormData(subject);
    } else {
      setFormData({ id: "", name: "", syllabus: "", status: "Đang hoạt động" });
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, syllabus: file.name });
      alert(`📚 Đã chọn file giáo trình: ${file.name}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formMode === "add") {
      const newSubject = { ...formData, id: "MH" + String(subjects.length + 1).padStart(3, "0") };
      setSubjects([...subjects, newSubject]);
      alert("✅ Đã thêm môn học mới!");
    } else if (formMode === "edit") {
      setSubjects(subjects.map((s) => (s.id === selectedId ? formData : s)));
      alert("✏️ Đã cập nhật môn học!");
    }
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa môn học này không?")) {
      setSubjects(subjects.filter((s) => s.id !== id));
    }
  };

  // Lọc dữ liệu theo tìm kiếm
  const filteredSubjects = subjects.filter((s) => {
    const matchId = s.id.toLowerCase().includes(searchId.toLowerCase());
    const matchName = s.name.toLowerCase().includes(searchName.toLowerCase());
    const matchStatus = filterStatus === "Tất cả trạng thái" || s.status === filterStatus;
    return matchId && matchName && matchStatus;
  });

  return (
    <div className="container active" id="admin-dashboard">
      <div className="dashboard">
        {/* SIDEBAR */}
        <nav className="sidebar">
          <div className="sidebar-logo"><h2>📚 Admin Panel</h2></div>
          <ul className="sidebar-menu">
            <li><Link to="/admin/Admin_Dashboard">🏠 Dashboard</Link></li>
            <li><Link to="/admin/Admin_Student_Management">👥 Quản lý học viên</Link></li>
            <li><Link to="/admin/Admin_Steacher_Management">👨‍🏫 Quản lý Giáo viên</Link></li>
            <li><Link to="/admin/Admin_Class_Management">📝 Quản lý Lớp học</Link></li>
            <li><Link to="/admin/Admin_Subject_Management" className="active">📚 Quản lý Môn học</Link></li>
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
            <h1>Quản lý Môn học</h1>
            <button className="create-btn" onClick={() => openForm("add")}>+ Thêm môn học mới</button>
          </div>

          {/* FORM POPUP */}
          {showForm && (
            <div className="form-popup">
              <div className="form-container">
                <h2>
                  {formMode === "add" ? "Thêm môn học mới" :
                   formMode === "edit" ? "Chỉnh sửa môn học" : "Chi tiết môn học"}
                </h2>

                <form onSubmit={handleSubmit}>
                  <label>Mã môn</label>
                  <input type="text" name="id" value={formData.id} disabled placeholder="Tự động tạo" />

                  <label>Tên môn học *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required disabled={formMode === "view"} />

                  <label>Giáo trình *</label>
                  {formMode === "view" ? (
                    <input type="text" value={formData.syllabus} disabled />
                  ) : (
                    <input type="file" name="syllabus" accept=".pdf,.doc,.docx" onChange={handleFileUpload} />
                  )}

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

          {/* BỘ LỌC + TÌM KIẾM */}
          <div className="filters">
            <input
              type="text"
              className="filter-input"
              placeholder="🔍 Tìm kiếm theo mã môn học..."
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
            />
            <input
              type="text"
              className="filter-input"
              placeholder="🔍 Tìm kiếm theo tên môn học..."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            <select
              className="filter-input"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option>Tất cả trạng thái</option>
              <option>Đang hoạt động</option>
              <option>Tạm dừng</option>
            </select>
          </div>

          {/* BẢNG DỮ LIỆU */}
          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã môn</th>
                  <th>Tên môn học</th>
                  <th>Giáo trình</th>
                  <th>Tình trạng</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubjects.length > 0 ? (
                  filteredSubjects.map((s) => (
                    <tr key={s.id}>
                      <td>{s.id}</td>
                      <td>{s.name}</td>
                      <td><a href={`#${s.syllabus}`} className="syllabus-link">{s.syllabus}</a></td>
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
                  <tr>
                    <td colSpan="5" style={{ textAlign: "center" }}>Không có dữ liệu phù hợp</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
