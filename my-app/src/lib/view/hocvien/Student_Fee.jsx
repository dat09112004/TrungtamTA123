import React, { useState } from 'react';
import "../css/Student_style.css";
import { Link } from "react-router-dom";

export default function StudentFee() {
  const [courses, setCourses] = useState([
    { id: 1, name: "Tiếng Anh C1", price: 1000000, required: true, paid: false, dueDate: "2025-11-05" },
    { id: 2, name: "Tiếng Anh B1", price: 900000, required: false, paid: false, dueDate: "2025-11-10" },
    { id: 3, name: "Ngữ pháp nâng cao", price: 800000, required: false, paid: true, paidDate: "2025-10-20" },
  ]);

  const [selectedIds, setSelectedIds] = useState([1]); // mặc định chọn môn 1
  const [showQR, setShowQR] = useState(false);

  // ✅ Chọn / bỏ chọn môn học
  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // ✅ Hủy đăng ký (chỉ áp dụng cho môn chưa thanh toán)
  const cancelCourse = (id) => {
    if (window.confirm("Bạn có chắc muốn hủy đăng ký lớp này không?")) {
      setCourses(courses.filter((c) => c.id !== id));
      setSelectedIds(selectedIds.filter((i) => i !== id));
    }
  };

  const selectedCourses = courses.filter(
    (course) => selectedIds.includes(course.id) && !course.paid
  );
  const total = selectedCourses.reduce((sum, c) => sum + c.price, 0);

  return (
    <div className="container active" id="fee">
      <div className="dashboard">

        {/* Sidebar */}
        <nav className="sidebar">
          <div className="sidebar-logo">
            <h2>👨‍🎓 Học viên</h2>
          </div>
          <ul className="sidebar-menu">
            <li><Link to="/hocvien/Student_Dashboard">🏠 Trang chủ</Link></li>
            <li><Link to="/hocvien/Student_Registerclass">📅 Đăng ký lớp học</Link></li>
            <li><Link to="/hocvien/Student_Schoolscheduelue">📘 Lịch học</Link></li>
            <li><Link to="/hocvien/Student_Score">📊 Điểm số</Link></li>
            <li><Link to="/hocvien/Student_Fee" className="active">💰 Học phí</Link></li>
            <li><Link to="/hocvien/Student_Noti">📢 Thông báo</Link></li>
            <li><Link to="/hocvien/Student_Coursematerials">📚 Tài liệu</Link></li>
            <li><Link to="/hocvien/Student_Attendanceinformation">🕒 Điểm danh</Link></li>
            <li><Link to="/hocvien/Student_Homework">📝 Bài tập</Link></li>
            <li><Link to="/hocvien/Student_Certificate">🎓 Chứng chỉ</Link></li>
            <li><Link to="/hocvien/Student_Setting">⚙️ Cài đặt</Link></li>
            <li><Link to="/">🚪 Đăng xuất</Link></li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="main-content">
          <div className="header">
            <h1>💰 Quản lý học phí</h1>
          </div>

          {/* Học phí chưa thanh toán */}
          <div className="class-table">
            <h2>Học phí chưa thanh toán</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Tên môn học</th>
                  <th>Số tiền</th>
                  <th>Bắt buộc</th>
                  <th>Hạn nộp</th>
                  <th>Chọn</th>
                  <th>Hủy đăng ký</th>
                </tr>
              </thead>
              <tbody>
                {courses
                  .filter((c) => !c.paid)
                  .map((c) => (
                    <tr key={c.id}>
                      <td>{c.name}</td>
                      <td>{c.price.toLocaleString()} VND</td>
                      <td>
                        {c.required ? (
                          <span className="status-badge status-active">Bắt buộc</span>
                        ) : (
                          "-"
                        )}
                      </td>
                      <td>{c.dueDate}</td>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedIds.includes(c.id)}
                          onChange={() => toggleSelect(c.id)}
                        />
                      </td>
                      <td>
                        <button
                          className="cancel-btn"
                          onClick={() => cancelCourse(c.id)}
                        >
                          ❌ Hủy
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* Tổng tiền + nút thanh toán */}
          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Tổng số tiền thanh toán</th>
                  <th>{total.toLocaleString()} VND</th>
                </tr>
                <tr>
                  <th>Thực hiện thanh toán</th>
                  <td>
                    <button
                      className="btn_pay"
                      disabled={selectedCourses.length === 0}
                      onClick={() => setShowQR(true)}
                    >
                      Thanh toán
                    </button>
                  </td>
                </tr>
              </thead>
            </table>
          </div>

          {/* Học phí đã thanh toán */}
          <div className="class-table">
            <h2>Học phí đã thanh toán</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Tên môn học</th>
                  <th>Số tiền</th>
                  <th>Bắt buộc</th>
                  <th>Tình trạng</th>
                  <th>Ngày thanh toán</th>
                </tr>
              </thead>
              <tbody>
                {courses
                  .filter((c) => c.paid)
                  .map((c) => (
                    <tr key={c.id}>
                      <td>{c.name}</td>
                      <td>{c.price.toLocaleString()} VND</td>
                      <td>
                        {c.required ? (
                          <span className="status-badge status-active">Bắt buộc</span>
                        ) : (
                          "-"
                        )}
                      </td>
                      <td>
                        <span className="status-badge status-active">Đã thanh toán</span>
                      </td>
                      <td>{c.paidDate}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* POPUP QR */}
          {showQR && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
              }}
            >
              <div
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "30px",
                  width: "400px",
                  textAlign: "center",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
                }}
              >
                <h2>💳 Thanh toán qua QR</h2>
                <p>Vui lòng quét mã QR để thanh toán:</p>

                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=ThanhToanHocPhi"
                  alt="QR Code"
                  style={{ margin: "15px 0", borderRadius: "8px" }}
                />

                <h4>Các môn học:</h4>
                <ul style={{ textAlign: "left", marginLeft: "40px" }}>
                  {selectedCourses.map((c) => (
                    <li key={c.id}>{c.name} — {c.price.toLocaleString()} VND</li>
                  ))}
                </ul>

                <h3 style={{ marginTop: "15px", color: "#2d3748" }}>
                  Tổng cộng: {total.toLocaleString()} VND
                </h3>

                <button
                  className="btn_pay"
                  style={{ marginTop: "20px" }}
                  onClick={() => setShowQR(false)}
                >
                  Đóng
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
