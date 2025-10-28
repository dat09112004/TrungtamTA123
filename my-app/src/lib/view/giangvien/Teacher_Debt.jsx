import React, { useState } from "react";
import "../css/Teacher_style.css";
import { Link } from "react-router-dom";

export default function TeacherDebt() {
  const [debts, setDebts] = useState([
    { id: 1, name: "Bảo hiểm y tế", amount: 500000, required: true },
    { id: 2, name: "Bảo hiểm tai nạn", amount: 300000, required: true },
    { id: 3, name: "Đồng phục giảng viên", amount: 250000, required: false },
    { id: 4, name: "Phí hoạt động ngoại khóa", amount: 150000, required: false },
    { id: 5, name: "Phí sử dụng thư viện", amount: 200000, required: true },
  ]);

  const [selectedDebts, setSelectedDebts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showQRModal, setShowQRModal] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const totalAmount = debts
    .filter((d) => selectedDebts.includes(d.id))
    .reduce((sum, d) => sum + d.amount, 0);

  const handleSelect = (id) => {
    setSelectedDebts((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handlePayment = () => {
    if (selectedDebts.length === 0) {
      alert("⚠️ Vui lòng chọn ít nhất một khoản công nợ để thanh toán!");
      return;
    }
    setShowQRModal(true);
  };

  const handleConfirmPayment = () => {
    setIsConfirmed(true);
    setTimeout(() => {
      alert("✅ Thanh toán thành công! Cảm ơn bạn.");
      setShowQRModal(false);
      setSelectedDebts([]);
      setIsConfirmed(false);
    }, 1000);
  };

  const filteredDebts = debts.filter((d) =>
    d.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Giả lập link QR chuyển tiền
  const qrImage = `https://quickchart.io/qr?text=Thanh%20toan%20${totalAmount.toLocaleString()}%20VND`;

  return (
    <div className="container active" id="debt">
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
            <li><Link to="/giangvien/Teacher_Debt" className="active"><span className="icon">💰</span>Công nợ cá nhân</Link></li>
            <li><Link to="/giangvien/Teacher_Homework"><span className="icon">📝</span>Giao bài tập</Link></li>
            <li><Link to="/giangvien/Teacher_Certificate"><span className="icon">🎓</span>Chứng chỉ</Link></li>
            <li><Link to="/giangvien/Teacher_Setting"><span className="icon">⚙️</span>Cài đặt</Link></li>
            <li><Link to="/"><span className="icon">🚪</span>Đăng xuất</Link></li>
          </ul>
        </nav>

        {/* MAIN CONTENT */}
        <main className="main-content">
          <div className="header">
            <h1>💰 Công nợ cá nhân</h1>
          </div>

          {/* TÌM KIẾM */}
          <div className="filters">
            <input
              type="text"
              className="filter-input"
              placeholder="🔍 Tìm kiếm theo tên công nợ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* BẢNG CÔNG NỢ */}
          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Tên công nợ</th>
                  <th>Số tiền</th>
                  <th>Bắt buộc</th>
                  <th>Chọn</th>
                </tr>
              </thead>
              <tbody>
                {filteredDebts.length > 0 ? (
                  filteredDebts.map((d) => (
                    <tr key={d.id}>
                      <td>{d.name}</td>
                      <td>{d.amount.toLocaleString()} VND</td>
                      <td style={{ color: d.required ? "#e53e3e" : "#3182ce" }}>
                        {d.required ? "Có" : "Không"}
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedDebts.includes(d.id)}
                          onChange={() => handleSelect(d.id)}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" style={{ textAlign: "center", color: "#888" }}>
                      Không tìm thấy công nợ phù hợp.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* TỔNG TIỀN + THANH TOÁN */}
          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Tổng số tiền thanh toán</th>
                  <td>
                    <strong style={{ color: "#2d3748", fontSize: "18px" }}>
                      {totalAmount.toLocaleString()} VND
                    </strong>
                  </td>
                </tr>
                <tr>
                  <th>Thao tác</th>
                  <td>
                    <button className="btn_pay" onClick={handlePayment}>
                      💳 Thanh toán
                    </button>
                  </td>
                </tr>
              </thead>
            </table>
          </div>
        </main>
      </div>

      {/* MODAL QR THANH TOÁN */}
      {showQRModal && (
        <div className="modal-overlay" style={{ display: "flex" }}>
          <div className="modal">
            <div className="modal-header">
              <h3 className="modal-title">💳 Thanh toán qua QR</h3>
              <button className="modal-close" onClick={() => setShowQRModal(false)}>
                ×
              </button>
            </div>
            <div className="modal-body" style={{ textAlign: "center" }}>
              <p>Vui lòng quét mã QR để thanh toán số tiền:</p>
              <h2 style={{ color: "#2d3748" }}>{totalAmount.toLocaleString()} VND</h2>
              <img
                src={qrImage}
                alt="QR Code"
                style={{
                  marginTop: "10px",
                  width: "220px",
                  height: "220px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                }}
              />
              <p style={{ marginTop: "10px", color: "#555" }}>
                Nội dung chuyển khoản: <b>Thanh toan cong no</b>
              </p>

              <div style={{ marginTop: "20px" }}>
                <button
                  className="btn_pay"
                  onClick={handleConfirmPayment}
                  disabled={isConfirmed}
                >
                 Xác nhận đã thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
