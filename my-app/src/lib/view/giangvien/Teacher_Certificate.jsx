import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from "../css/Teacher_style.module.css";

export default function TeacherCertificate() {
  // ----- DỮ LIỆU MẪU -----
  const [certificates, setCertificates] = useState([
    { id: 1, name: "TESOL", date: "2020-05-12", place: "Đại học Sư phạm TP.HCM", image: "https://i.imgur.com/lzHfZsT.png" },
    { id: 2, name: "IELTS 8.0", date: "2021-08-25", place: "British Council", image: "https://i.imgur.com/4s2yqfu.png" },
    { id: 3, name: "Tin học B", date: "2019-06-10", place: "Đại học Khoa học Tự nhiên", image: "https://i.imgur.com/EDIfVQ2.png" },
    { id: 4, name: "Sư phạm cấp 2", date: "2022-02-15", place: "Bộ Giáo dục", image: "https://i.imgur.com/vu9rKjT.png" },
    { id: 5, name: "Phương pháp giảng dạy nâng cao", date: "2023-03-22", place: "Trung tâm Edutech", image: "https://i.imgur.com/D4vBvDU.png" }
  ]);

  // ----- STATE cho tìm kiếm & lọc -----
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPlace, setFilterPlace] = useState("Tất cả");

  // ----- STATE cho thêm chứng chỉ -----
  const [newCert, setNewCert] = useState({
    name: "",
    date: "",
    place: "",
    image: ""
  });

  // ----- HÀM THÊM CHỨNG CHỈ -----
  const handleAddCertificate = (e) => {
    e.preventDefault();
    if (!newCert.name || !newCert.date || !newCert.place) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const newItem = {
      id: certificates.length + 1,
      ...newCert
    };

    setCertificates([...certificates, newItem]);
    setNewCert({ name: "", date: "", place: "", image: "" });
    alert("✅ Đã thêm chứng chỉ mới!");
  };

  // ----- LỌC & TÌM KIẾM -----
  const filteredCertificates = certificates.filter(cert => {
    const matchSearch = cert.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchFilter = filterPlace === "Tất cả" || cert.place === filterPlace;
    return matchSearch && matchFilter;
  });

  // ----- DANH SÁCH NƠI CẤP (lọc) -----
  const placeOptions = ["Tất cả", ...new Set(certificates.map(c => c.place))];

  return (
    <div className="container active" id="certificate">
      <div className="dashboard">
        {/* Sidebar */}
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
            <li><Link to="/giangvien/Teacher_Homework"><span className="icon">📝</span>Giao bài tập</Link></li>
            <li><Link to="/giangvien/Teacher_Certificate" className="active"><span className="icon">🎓</span>Chứng chỉ</Link></li>
            <li><Link to="/giangvien/Teacher_Setting"><span className="icon">⚙️</span>Cài đặt</Link></li>
            <li><Link to="/"><span className="icon">🚪</span>Đăng xuất</Link></li>
          </ul>
        </nav>

        {/* MAIN */}
        <main className="main-content">
          <div className="header">
            <h1>🎓 Quản lý chứng chỉ cá nhân</h1>
          </div>

          {/* Thanh tìm kiếm và lọc */}
          <div className="filters">
            <input
              type="text"
              placeholder="🔍 Tìm chứng chỉ theo tên..."
              className="filter-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
              className="filter-input"
              value={filterPlace}
              onChange={(e) => setFilterPlace(e.target.value)}
            >
              {placeOptions.map((p, i) => (
                <option key={i} value={p}>{p}</option>
              ))}
            </select>
          </div>

          {/* Form thêm chứng chỉ */}
          <div className="class-header">
            <h3>➕ Thêm chứng chỉ mới</h3>
          </div>
          <form onSubmit={handleAddCertificate} style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <input
                type="text"
                placeholder="Tên chứng chỉ"
                className="filter-input"
                value={newCert.name}
                onChange={(e) => setNewCert({ ...newCert, name: e.target.value })}
              />
              <input
                type="date"
                className="filter-input"
                value={newCert.date}
                onChange={(e) => setNewCert({ ...newCert, date: e.target.value })}
              />
              <input
                type="text"
                placeholder="Nơi cấp"
                className="filter-input"
                value={newCert.place}
                onChange={(e) => setNewCert({ ...newCert, place: e.target.value })}
              />
              <input
                type="text"
                placeholder="URL hình ảnh (tuỳ chọn)"
                className="filter-input"
                value={newCert.image}
                onChange={(e) => setNewCert({ ...newCert, image: e.target.value })}
              />
              <button type="submit" className="create-btn">Thêm</button>
            </div>
          </form>

          {/* Bảng hiển thị chứng chỉ */}
          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Tên chứng chỉ</th>
                  <th>Ngày cấp</th>
                  <th>Nơi cấp</th>
                  <th>Hình ảnh</th>
                </tr>
              </thead>
              <tbody>
                {filteredCertificates.length > 0 ? (
                  filteredCertificates.map((cert) => (
                    <tr key={cert.id}>
                      <td>{cert.name}</td>
                      <td>{cert.date}</td>
                      <td>{cert.place}</td>
                      <td>
                        {cert.image ? (
                          <img
                            src={cert.image}
                            alt={cert.name}
                            style={{ width: "80px", borderRadius: "6px" }}
                          />
                        ) : (
                          <span style={{ color: "#999" }}>Không có hình</span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" style={{ textAlign: "center", color: "#888" }}>
                      Không tìm thấy chứng chỉ phù hợp.
                    </td>
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
