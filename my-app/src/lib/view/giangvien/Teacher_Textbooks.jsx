import React, { useState } from "react";
import "../css/Teacher_style.css";
import { Link } from "react-router-dom";

export default function TeacherTextbooks() {
  // ================= DỮ LIỆU MẪU BAN ĐẦU =================
  const [textbooks, setTextbooks] = useState([
    {
      id: 1,
      code: "ENG101",
      name: "Tiếng Anh Cơ Bản",
      textbook: "English_Basics.pdf",
      fileUrl: "",
    },
    {
      id: 2,
      code: "MTH202",
      name: "Toán Cao Cấp",
      textbook: "Advanced_Math.pdf",
      fileUrl: "",
    },
    {
      id: 3,
      code: "IT301",
      name: "Lập Trình Web",
      textbook: "Web_Programming.pdf",
      fileUrl: "",
    },
  ]);

  // ================= STATE CẦN THIẾT =================
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTextbook, setSelectedTextbook] = useState(null);

  const [form, setForm] = useState({
    code: "",
    name: "",
    textbook: "",
    file: null,
  });

  // ================= MỞ / ĐÓNG MODAL =================
  const openModal = (item = null) => {
    if (item) {
      setEditIndex(item.id);
      setForm({
        code: item.code,
        name: item.name,
        textbook: item.textbook,
        file: null,
      });
    } else {
      setEditIndex(null);
      setForm({ code: "", name: "", textbook: "", file: null });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // ================= XỬ LÝ THÊM / CẬP NHẬT =================
  const handleSave = () => {
    if (!form.code || !form.name || !form.textbook) {
      alert("⚠️ Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    if (editIndex) {
      setTextbooks((prev) =>
        prev.map((t) =>
          t.id === editIndex
            ? {
                ...t,
                code: form.code,
                name: form.name,
                textbook: form.textbook,
                fileUrl: form.file ? URL.createObjectURL(form.file) : t.fileUrl,
              }
            : t
        )
      );
      alert("✅ Cập nhật giáo trình thành công!");
    } else {
      const newTextbook = {
        id: Date.now(),
        code: form.code,
        name: form.name,
        textbook: form.textbook,
        fileUrl: form.file ? URL.createObjectURL(form.file) : "",
      };
      setTextbooks([...textbooks, newTextbook]);
      alert("✅ Thêm giáo trình mới thành công!");
    }

    closeModal();
  };

  // ================= XÓA GIÁO TRÌNH =================
  const handleDelete = (id) => {
    if (window.confirm("❌ Bạn có chắc muốn xóa giáo trình này không?")) {
      setTextbooks(textbooks.filter((t) => t.id !== id));
    }
  };

  // ================= XEM CHI TIẾT =================
  const handleViewDetails = (item) => {
    setSelectedTextbook(item);
  };

  // ================= XỬ LÝ FILE UPLOAD =================
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, file, textbook: file.name });
    }
  };

  // ================= TÌM KIẾM & LỌC =================
  const filteredTextbooks = textbooks.filter(
    (t) =>
      t.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ================== JSX GIAO DIỆN ==================
  return (
    <div className="container active" id="textbooks">
      <div className="dashboard">
        {/* SIDEBAR */}
        <nav className="sidebar">
          <div className="sidebar-logo">
            <h2>👨‍🏫 Giảng Viên</h2>
          </div>
          <ul className="sidebar-menu">
            <li>
              <Link to="/giangvien/Teacher_Dashboard">
                <span className="icon">🏠</span>Dashboard
              </Link>
            </li>
            <li>
              <Link to="/giangvien/Teacher_Schedule">
                <span className="icon">📅</span>Lịch dạy
              </Link>
            </li>
            <li>
              <Link to="/giangvien/Teacher_Track_Learning">
                <span className="icon">👥</span>Theo dõi
              </Link>
            </li>
            <li>
              <Link to="/giangvien/Teacher_Class_Infor">
                <span className="icon">📋</span>Thông tin lớp học
              </Link>
            </li>
            <li>
              <Link to="/giangvien/Teacher_Periods">
                <span className="icon">⏰</span>Số tiết dạy
              </Link>
            </li>
            <li>
              <Link to="/giangvien/Teacher_Textbooks" className="active">
                <span className="icon">📘</span>Giáo trình
              </Link>
            </li>
            <li>
              <Link to="/giangvien/Teacher_Debt">
                <span className="icon">💰</span>Công nợ cá nhân
              </Link>
            </li>
            <li>
              <Link to="/giangvien/Teacher_Homework">
                <span className="icon">📝</span>Giao bài tập
              </Link>
            </li>
            <li>
              <Link to="/giangvien/Teacher_Certificate">
                <span className="icon">🎓</span>Chứng chỉ
              </Link>
            </li>
            <li>
              <Link to="/giangvien/Teacher_Setting">
                <span className="icon">⚙️</span>Cài đặt
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="icon">🚪</span>Đăng xuất
              </Link>
            </li>
          </ul>
        </nav>

        {/* MAIN CONTENT */}
        <main className="main-content">
          <div className="header">
            <h1>📘 Giáo trình giảng dạy</h1>
            <button className="create-btn" onClick={() => openModal()}>
              + Thêm giáo trình
            </button>
          </div>

          {/* TÌM KIẾM */}
          <div className="filters">
            <input
              type="text"
              placeholder="🔍 Tìm kiếm theo mã hoặc tên môn..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="filter-input"
            />
          </div>

          {/* DANH SÁCH GIÁO TRÌNH */}
          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã môn</th>
                  <th>Tên môn học</th>
                  <th>Giáo trình</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {filteredTextbooks.length > 0 ? (
                  filteredTextbooks.map((t) => (
                    <tr key={t.id}>
                      <td>{t.code}</td>
                      <td>{t.name}</td>
                      <td>
                        {t.fileUrl ? (
                          <a href={t.fileUrl} download>
                            {t.textbook}
                          </a>
                        ) : (
                          t.textbook
                        )}
                      </td>
                      <td>
                        <button className="btn btn-view" onClick={() => handleViewDetails(t)}>👁️</button>
                        <button className="btn btn-edit" onClick={() => openModal(t)}>✏️</button>
                        <button className="btn btn-delete" onClick={() => handleDelete(t.id)}>🗑️</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" style={{ textAlign: "center", color: "#888" }}>
                      Không tìm thấy giáo trình phù hợp.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* MODAL THÊM / SỬA */}
          {showModal && (
            <div className="modal-overlay">
              <div className="modal">
                <div className="modal-header">
                  <h3>{editIndex ? "✏️ Chỉnh sửa giáo trình" : "➕ Thêm giáo trình"}</h3>
                  <button className="modal-close" onClick={closeModal}>
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <label>Mã môn</label>
                  <input
                    type="text"
                    value={form.code}
                    onChange={(e) => setForm({ ...form, code: e.target.value })}
                  />

                  <label>Tên môn học</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />

                  <label>Giáo trình (Tên / Link)</label>
                  <input
                    type="text"
                    value={form.textbook}
                    onChange={(e) => setForm({ ...form, textbook: e.target.value })}
                  />

                  <label>📂 Upload tài liệu</label>
                  <input type="file" onChange={handleFileUpload} />

                  <div className="modal-actions">
                    <button className="btn btn-secondary" onClick={closeModal}>
                      Hủy
                    </button>
                    <button className="btn btn-primary" onClick={handleSave}>
                      Lưu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MODAL CHI TIẾT */}
          {selectedTextbook && (
            <div className="modal-overlay">
              <div className="modal">
                <div className="modal-header">
                  <h3>📘 Chi tiết giáo trình</h3>
                  <button className="modal-close" onClick={() => setSelectedTextbook(null)}>
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <p><strong>Mã môn:</strong> {selectedTextbook.code}</p>
                  <p><strong>Tên môn học:</strong> {selectedTextbook.name}</p>
                  <p><strong>Giáo trình:</strong> {selectedTextbook.textbook}</p>
                  {selectedTextbook.fileUrl && (
                    <p>
                      <a href={selectedTextbook.fileUrl} download>
                        📥 Tải file
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
