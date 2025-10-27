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
      type: "Thu", // ✅ thêm type
    },
    {
      id: "HV002",
      studentName: "Trần Thị B",
      className: "TOEIC Advanced",
      amount: 2500000,
      dueDate: "2025-10-30",
      status: "Đã nộp",
      type: "Thu",
    },
  ]);

  const [expenses, setExpenses] = useState([]); // ✅ danh sách chi tiêu
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState("add");
  const [formType, setFormType] = useState("Thu"); // ✅ Thu hoặc Chi
  const [formData, setFormData] = useState({
    id: "",
    studentName: "",
    className: "",
    amount: "",
    dueDate: "",
    status: "Chưa nộp",
    note: "",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("Tất cả trạng thái");

  const openForm = (mode, type = "Thu", data = null) => {
    setFormMode(mode);
    setFormType(type);
    setShowForm(true);
    if (data) {
      setFormData(data);
    } else {
      setFormData({
        id: "",
        studentName: "",
        className: "",
        amount: "",
        dueDate: "",
        status: "Chưa nộp",
        note: "",
      });
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "Thu") {
      setRecords([...records, { ...formData, type: "Thu" }]);
      alert("✅ Đã thêm khoản thu mới!");
    } else {
      setExpenses([
        ...expenses,
        {
          id: `CHI${expenses.length + 1}`,
          description: formData.note,
          amount: Number(formData.amount),
          date: formData.dueDate,
        },
      ]);
      alert("💸 Đã thêm khoản chi!");
    }
    setShowForm(false);
  };

  const handleDelete = (id, type) => {
    if (window.confirm("Bạn có chắc muốn xóa khoản này không?")) {
      if (type === "Thu") setRecords(records.filter((r) => r.id !== id));
      else setExpenses(expenses.filter((e) => e.id !== id));
    }
  };

  // ✅ Tính toán tổng
  const totalIncome = records
    .filter((r) => r.status === "Đã nộp")
    .reduce((sum, r) => sum + Number(r.amount), 0);

  const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);
  const balance = totalIncome - totalExpense;

  // ✅ Lọc danh sách
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
            <div>
              <button className="create-btn" onClick={() => openForm("add", "Thu")}>
                + Thêm công nợ
              </button>
              <button className="expense-btn" onClick={() => openForm("add", "Chi")}>
                💸 Thêm chi tiêu
              </button>
            </div>
          </div>

          {/* ✅ Tổng hợp Thu - Chi */}
          <div className="summary-box">
            <div className="summary-item income">
              <h3>💰 Tổng thu</h3>
              <p>{totalIncome.toLocaleString()} đ</p>
            </div>
            <div className="summary-item expense">
              <h3>💸 Tổng chi</h3>
              <p>{totalExpense.toLocaleString()} đ</p>
            </div>
            <div className="summary-item balance">
              <h3>📊 Lợi nhuận</h3>
              <p>{balance.toLocaleString()} đ</p>
            </div>
          </div>

          {/* FORM POPUP */}
          {showForm && (
            <div className="form-popup">
              <div className="form-container">
                <h2>
                  {formType === "Thu" ? "Thêm khoản thu" : "Thêm chi tiêu"}
                </h2>
                <form onSubmit={handleSubmit}>
                  {formType === "Thu" ? (
                    <>
                      <label>Mã học viên *</label>
                      <input type="text" name="id" value={formData.id}
                        onChange={handleChange} required />
                      <label>Họ tên học viên *</label>
                      <input type="text" name="studentName" value={formData.studentName}
                        onChange={handleChange} required />
                      <label>Lớp *</label>
                      <input type="text" name="className" value={formData.className}
                        onChange={handleChange} required />
                      <label>Số tiền *</label>
                      <input type="number" name="amount" value={formData.amount}
                        onChange={handleChange} required />
                      <label>Hạn nộp *</label>
                      <input type="date" name="dueDate" value={formData.dueDate}
                        onChange={handleChange} required />
                      <label>Trạng thái *</label>
                      <select name="status" value={formData.status}
                        onChange={handleChange}>
                        <option>Đã nộp</option>
                        <option>Chưa nộp</option>
                      </select>
                    </>
                  ) : (
                    <>
                      <label>Nội dung chi tiêu *</label>
                      <input type="text" name="note" value={formData.note}
                        onChange={handleChange} required />
                      <label>Số tiền *</label>
                      <input type="number" name="amount" value={formData.amount}
                        onChange={handleChange} required />
                      <label>Ngày chi *</label>
                      <input type="date" name="dueDate" value={formData.dueDate}
                        onChange={handleChange} required />
                    </>
                  )}

                  <div className="form-actions">
                    <button type="submit" className="save-btn">💾 Lưu</button>
                    <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>❌ Hủy</button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* BẢNG THU */}
          <h2>📈 Danh sách khoản thu</h2>
          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã HV</th><th>Học viên</th><th>Lớp</th>
                  <th>Số tiền</th><th>Hạn nộp</th><th>Trạng thái</th><th>Thao tác</th>
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
                        <span className={`status-badge ${r.status === "Đã nộp" ? "status-active" : "status-inactive"}`}>
                          {r.status}
                        </span>
                      </td>
                      <td>
                        <button className="action-btn btn-delete" onClick={() => handleDelete(r.id, "Thu")}>
                          🗑️ Xóa
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="7" style={{ textAlign: "center" }}>Không có dữ liệu</td></tr>
                )}
              </tbody>
            </table>
          </div>

          {/* BẢNG CHI */}
          <h2>💸 Danh sách khoản chi</h2>
          <div className="class-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã chi</th><th>Nội dung</th><th>Số tiền</th><th>Ngày chi</th><th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {expenses.length > 0 ? (
                  expenses.map((e) => (
                    <tr key={e.id}>
                      <td>{e.id}</td>
                      <td>{e.description}</td>
                      <td>{e.amount.toLocaleString()} đ</td>
                      <td>{e.date}</td>
                      <td>
                        <button className="action-btn btn-delete" onClick={() => handleDelete(e.id, "Chi")}>
                          🗑️ Xóa
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="5" style={{ textAlign: "center" }}>Chưa có khoản chi nào</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
