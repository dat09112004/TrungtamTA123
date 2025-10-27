import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Admin_style.css";

export default function Admin_Class_Management() {
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState("add"); // add | edit | view
  const [selectedClassId, setSelectedClassId] = useState(null);
  const [classes, setClasses] = useState([
    {
      id: "A204",
      className: "Tiếng Anh - IELTS",
      subject: "IELTS Advanced",
      teachers: ["Cô Phạm Thị D"],
      schedule: "T3, T5, T7 (19:00 - 20:30)",
      studentCount: "15/20",
      description: "Lớp luyện thi IELTS nâng cao.",
      status: "Hoạt động",
      room: "A106",
    },
  ]);

  const [formData, setFormData] = useState({
    className: "",
    subject: "",
    teachers: [],
    schedule: "",
    studentCount: "",
    description: "",
  });

  const teachersList = ["Cô Trần Mai", "Thầy Lê Tùng", "Cô Nguyễn Vy"];

  // Mở form popup
  const openForm = (mode, classData = null) => {
    setFormMode(mode);
    setShowForm(true);

    if (mode === "edit" || mode === "view") {
      setSelectedClassId(classData.id);
      setFormData({
        className: classData.className,
        subject: classData.subject,
        teachers: classData.teachers,
        schedule: classData.schedule,
        studentCount: classData.studentCount.replace("/20", ""),
        description: classData.description,
      });
    } else {
      setFormData({
        className: "",
        subject: "",
        teachers: [],
        schedule: "",
        studentCount: "",
        description: "",
      });
    }
  };

  // Thay đổi giá trị input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Chọn/bỏ chọn giảng viên
  const handleTeacherSelect = (teacher) => {
    if (formMode === "view") return;
    const updated = formData.teachers.includes(teacher)
      ? formData.teachers.filter((t) => t !== teacher)
      : [...formData.teachers, teacher];
    setFormData({ ...formData, teachers: updated });
  };

  // Lưu khi thêm hoặc sửa
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formMode === "add") {
      const newClass = {
        id: "C" + (classes.length + 1),
        className: formData.className,
        subject: formData.subject,
        teachers: formData.teachers,
        schedule: formData.schedule,
        studentCount: `${formData.studentCount}/20`,
        description: formData.description,
        status: "Hoạt động",
        room: "A10" + (classes.length + 1),
      };
      setClasses([...classes, newClass]);
      alert("✅ Đã thêm lớp học mới!");
    }

    if (formMode === "edit") {
      const updated = classes.map((cls) =>
        cls.id === selectedClassId
          ? {
              ...cls,
              className: formData.className,
              subject: formData.subject,
              teachers: formData.teachers,
              schedule: formData.schedule,
              studentCount: `${formData.studentCount}/20`,
              description: formData.description,
            }
          : cls
      );
      setClasses(updated);
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
            <h1>Quản lý Lớp học</h1>
            <button className="create-btn" onClick={() => openForm("add")}>
              + Tạo Lớp Mới
            </button>
          </div>

          {/* FORM POPUP */}
          {showForm && (
            <div className="form-popup">
              <div className="form-container">
                <h2>
                  {formMode === "add"
                    ? "Thêm Lớp Học Mới"
                    : formMode === "edit"
                    ? "Chỉnh Sửa Lớp Học"
                    : "Chi Tiết Lớp Học"}
                </h2>

                <form onSubmit={handleSubmit}>
                  <h3 className="section-title">Thông tin Lớp học</h3>
                  <label>Tên Lớp *</label>
                  <input
                    type="text"
                    name="className"
                    placeholder="Ví dụ: IELTS Cấp tốc B2"
                    value={formData.className}
                    onChange={handleChange}
                    required
                    disabled={formMode === "view"}
                  />

                  <label>Khóa học (Môn học) *</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Ví dụ: IELTS Advanced"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={formMode === "view"}
                  />

                  <h3 className="section-title">Phân công & Lịch trình</h3>
                  <label>Phân công Giảng viên *</label>
                  <div className="teacher-select">
                    {teachersList.map((teacher) => (
                      <button
                        key={teacher}
                        type="button"
                        className={
                          formData.teachers.includes(teacher)
                            ? "teacher-btn active"
                            : "teacher-btn"
                        }
                        onClick={() => handleTeacherSelect(teacher)}
                        disabled={formMode === "view"}
                      >
                        {teacher}
                      </button>
                    ))}
                  </div>

                  <label>Lịch học chi tiết *</label>
                  <input
                    type="text"
                    name="schedule"
                    placeholder="Ví dụ: T3, T5, T7 (19:00 - 20:30)"
                    value={formData.schedule}
                    onChange={handleChange}
                    required
                    disabled={formMode === "view"}
                  />

                  <label>Số lượng Học viên dự kiến *</label>
                  <input
                    type="number"
                    name="studentCount"
                    placeholder="Nhập số lượng học viên"
                    value={formData.studentCount}
                    onChange={handleChange}
                    required
                    disabled={formMode === "view"}
                  />

                  <h3 className="section-title">Mô tả</h3>
                  <label>Mô tả lớp học</label>
                  <textarea
                    name="description"
                    placeholder="Mô tả mục tiêu, yêu cầu đầu vào của lớp..."
                    value={formData.description}
                    onChange={handleChange}
                    rows="3"
                    disabled={formMode === "view"}
                  ></textarea>

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

          {/* BẢNG LỚP HỌC */}
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
                  <th>Giáo viên phụ trách</th>
                  <th>Số học viên</th>
                  <th>Phòng</th>
                  <th>Tình trạng</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((cls) => (
                  <tr key={cls.id}>
                    <td><strong>{cls.id}</strong></td>
                    <td>{cls.className}</td>
                    <td>{cls.teachers.join(", ")}</td>
                    <td>{cls.studentCount}</td>
                    <td>{cls.room}</td>
                    <td>
                      <span
                        className={`status-badge ${
                          cls.status === "Hoạt động"
                            ? "status-active"
                            : "status-inactive"
                        }`}
                      >
                        {cls.status}
                      </span>
                    </td>
                    <td>
                      <button className="action-btn btn-edit" onClick={() => openForm("view", cls)}>👁️ Xem</button>
                      <button className="action-btn btn-edit" onClick={() => openForm("edit", cls)}>✏️ Sửa</button>
                      <button className="action-btn btn-delete" onClick={() => handleDelete(cls.id)}>🗑️ Xóa</button>
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
