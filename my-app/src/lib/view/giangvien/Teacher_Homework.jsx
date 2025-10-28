import React, { useState } from "react";
import styles from "../css/Teacher_style.module.css";
import { Link } from "react-router-dom";

export default function TeacherHomework() {
  // ---- DỮ LIỆU MẪU ----
  const [homeworks, setHomeworks] = useState([
    {
      id: 1,
      code: "ENG101",
      subject: "Tiếng Anh",
      title: "Bài viết luận 1",
      content: "Viết đoạn văn 150 từ về 'My Favorite Hobby'",
      className: "12A",
      deadline: "2025-10-30",
      fileName: "Essay_ENG101.pdf",
    },
    {
      id: 2,
      code: "MATH102",
      subject: "Toán học",
      title: "Bài tập Đại số",
      content: "Giải 5 bài phương trình bậc hai trang 34 SGK",
      className: "11B",
      deadline: "2025-11-01",
      fileName: "Algebra_HW.docx",
    },
    {
      id: 3,
      code: "CHEM201",
      subject: "Hóa học",
      title: "Thí nghiệm Axit-Bazơ",
      content: "Làm báo cáo đo pH của dung dịch",
      className: "10A",
      deadline: "2025-11-05",
      fileName: "Chemistry_Lab.pdf",
    },
  ]);

  // ---- STATE ----
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterClass, setFilterClass] = useState("Tất cả");

  const [newHomework, setNewHomework] = useState({
    code: "",
    subject: "",
    title: "",
    content: "",
    className: "",
    deadline: "",
    file: null,
    fileName: "",
  });

  // ---- HÀM MỞ / ĐÓNG MODAL ----
  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setIsEditing(false);
    setEditId(null);
    setNewHomework({
      code: "",
      subject: "",
      title: "",
      content: "",
      className: "",
      deadline: "",
      file: null,
      fileName: "",
    });
  };

  // ---- HÀM THÊM HOẶC CẬP NHẬT BÀI TẬP ----
  const handleSaveHomework = (e) => {
    e.preventDefault();
    const { code, subject, title, className, deadline } = newHomework;
    if (!code || !subject || !title || !className || !deadline) {
      alert("⚠️ Vui lòng nhập đầy đủ thông tin bắt buộc!");
      return;
    }

    if (isEditing) {
      setHomeworks((prev) =>
        prev.map((hw) =>
          hw.id === editId
            ? { ...newHomework, id: hw.id, fileName: newHomework.fileName || hw.fileName }
            : hw
        )
      );
      alert("✅ Đã cập nhật bài tập!");
    } else {
      const newItem = {
        id: homeworks.length + 1,
        ...newHomework,
      };
      setHomeworks([...homeworks, newItem]);
      alert("✅ Đã thêm bài tập mới!");
    }
    closeModal();
  };

  // ---- HÀM XÓA ----
  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa bài tập này?")) {
      setHomeworks(homeworks.filter((hw) => hw.id !== id));
    }
  };

  // ---- HÀM SỬA ----
  const handleEdit = (hw) => {
    setNewHomework({
      code: hw.code,
      subject: hw.subject,
      title: hw.title,
      content: hw.content,
      className: hw.className,
      deadline: hw.deadline,
      fileName: hw.fileName,
    });
    setEditId(hw.id);
    setIsEditing(true);
    setShowModal(true);
  };

  // ---- HÀM CHỌN FILE ----
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewHomework({ ...newHomework, file, fileName: file.name });
    }
  };

  // ---- LỌC & TÌM KIẾM ----
  const filteredHomeworks = homeworks.filter((hw) => {
    const matchSearch =
      hw.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hw.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchFilter =
      filterClass === "Tất cả" || hw.className === filterClass;
    return matchSearch && matchFilter;
  });

  const classOptions = ["Tất cả", ...new Set(homeworks.map((hw) => hw.className))];

  return (
    <div className="container active" id="homework">
      <div className="dashboard">
        {/* SIDEBAR */}
        <nav className="sidebar">
          <div className="sidebar-logo">
            <h2>👨‍🏫 Giảng Viên</h2>
          </div>
          <ul className="sidebar-menu">
            <li><Link to="/giangvien/Teacher_Dashboard"><span className="icon">🏠</span>Dashboard</Link></li>
            <li><Link to="/giangvien/Teacher_Schedule"><span className="icon">📅</span>Lịch dạy</Link></li>
            <li><Link to="/giangvien/Teacher_Track_Learning"><span className="icon">👥</span>Theo dõi</Link></li>
            <li><Link to="/giangvien/Teacher_Class_Infor"><span className="icon">📋</span>Thông tin lớp học</Link></li>
            <li><Link to="/giangvien/Teacher_Periods"><span className="icon">⏰</span>Số tiết dạy</Link></li>
            <li><Link to="/giangvien/Teacher_Textbooks"><span className="icon">📘</span>Giáo trình</Link></li>
            <li><Link to="/giangvien/Teacher_Debt"><span className="icon">💰</span>Công nợ cá nhân</Link></li>
            <li><Link to="/giangvien/Teacher_Homework" className="active"><span className="icon">📝</span>Giao bài tập</Link></li>
            <li><Link to="/giangvien/Teacher_Certificate"><span className="icon">🎓</span>Chứng chỉ</Link></li>
            <li><Link to="/giangvien/Teacher_Setting"><span className="icon">⚙️</span>Cài đặt</Link></li>
            <li><Link to="/"><span className="icon">🚪</span>Đăng xuất</Link></li>
          </ul>
        </nav>

        {/* MAIN CONTENT */}
        <main className="main-content">
          <div className="header">
            <h1>📝 Quản lý bài tập</h1>
            <button className="create-btn" onClick={openModal}>
              ➕ Thêm bài tập
            </button>
          </div>

          {/* Bộ lọc */}
          <div className="filters">
            <input
              type="text"
              className="filter-input"
              placeholder="🔍 Tìm kiếm theo tên hoặc môn học..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="filter-input"
              value={filterClass}
              onChange={(e) => setFilterClass(e.target.value)}
            >
              {classOptions.map((opt, i) => (
                <option key={i} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* BẢNG BÀI TẬP */}
          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã môn</th>
                  <th>Tên môn học</th>
                  <th>Tên bài tập</th>
                  <th>Nội dung</th>
                  <th>Lớp</th>
                  <th>Hạn nộp</th>
                  <th>Tài liệu</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {filteredHomeworks.length > 0 ? (
                  filteredHomeworks.map((hw) => (
                    <tr key={hw.id}>
                      <td>{hw.code}</td>
                      <td>{hw.subject}</td>
                      <td>{hw.title}</td>
                      <td>{hw.content}</td>
                      <td>{hw.className}</td>
                      <td>{hw.deadline}</td>
                      <td>
                        {hw.fileName ? (
                          <a href="#" style={{ color: "#4a90e2" }}>{hw.fileName}</a>
                        ) : (
                          <span style={{ color: "#aaa" }}>Chưa có</span>
                        )}
                      </td>
                      <td>
                        <button className="action-btn btn-edit" onClick={() => handleEdit(hw)}>✏️</button>
                        <button className="action-btn btn-delete" onClick={() => handleDelete(hw.id)}>🗑️</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" style={{ textAlign: "center", color: "#888" }}>
                      Không tìm thấy bài tập phù hợp.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      {/* MODAL THÊM/SỬA BÀI TẬP */}
      {showModal && (
        <div className="modal-overlay" style={{ display: "flex" }}>
          <div className="modal" role="dialog">
            <div className="modal-header">
              <h3 className="modal-title">
                {isEditing ? "✏️ Cập nhật bài tập" : "➕ Thêm bài tập"}
              </h3>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
            </div>

            <div className="modal-body">
              <table className="modal-table">
                <tbody>
                  <tr>
                    <th>Mã môn</th>
                    <td>
                      <input
                        type="text"
                        value={newHomework.code}
                        onChange={(e) => setNewHomework({ ...newHomework, code: e.target.value })}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Tên môn học</th>
                    <td>
                      <input
                        type="text"
                        value={newHomework.subject}
                        onChange={(e) => setNewHomework({ ...newHomework, subject: e.target.value })}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Tên bài tập</th>
                    <td>
                      <input
                        type="text"
                        value={newHomework.title}
                        onChange={(e) => setNewHomework({ ...newHomework, title: e.target.value })}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Nội dung</th>
                    <td>
                      <textarea
                        rows="3"
                        value={newHomework.content}
                        onChange={(e) => setNewHomework({ ...newHomework, content: e.target.value })}
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <th>Lớp</th>
                    <td>
                      <input
                        type="text"
                        value={newHomework.className}
                        onChange={(e) => setNewHomework({ ...newHomework, className: e.target.value })}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Hạn nộp</th>
                    <td>
                      <input
                        type="date"
                        value={newHomework.deadline}
                        onChange={(e) => setNewHomework({ ...newHomework, deadline: e.target.value })}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Tài liệu</th>
                    <td>
                      <input type="file" onChange={handleFileUpload} />
                      {newHomework.fileName && (
                        <p style={{ marginTop: "6px", color: "#4a90e2" }}>
                          📎 {newHomework.fileName}
                        </p>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="modal-actions">
              <button className="btn btn-secondary" onClick={closeModal}>
                Hủy
              </button>
              <button className="btn btn-primary" onClick={handleSaveHomework}>
                {isEditing ? "Cập nhật" : "Lưu"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
