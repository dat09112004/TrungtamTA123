import React, { useState } from "react";
import styles from "../css/Student_style.module.css";
import { Link } from "react-router-dom";

export default function TeacherSetting() {
  const [activeTab, setActiveTab] = useState("info");
  const [showEditForm, setShowEditForm] = useState(false);
  const [language, setLanguage] = useState("vi");

  // --- DỮ LIỆU CÁ NHÂN MẪU ---
  const [profile, setProfile] = useState({
    fullName: "Nguyễn Văn Minh",
    birthday: "1987-08-12",
    phone: "0905123456",
    birthplace: "TP. Hồ Chí Minh",
    address: "25 Lê Lợi, Quận 1, TP. Hồ Chí Minh",
    idCard: "079123456789",
  });

  // --- DỮ LIỆU MẬT KHẨU MẪU (GIẢ LẬP) ---
  const [passwords, setPasswords] = useState({
    oldPass: "",
    newPass: "",
    confirmPass: "",
  });

  // ===== XỬ LÝ LƯU THAY ĐỔI THÔNG TIN =====
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    alert("✅ Thông tin cá nhân đã được cập nhật thành công!");
    setShowEditForm(false);
  };

  // ===== XỬ LÝ ĐỔI MẬT KHẨU =====
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const { oldPass, newPass, confirmPass } = passwords;

    if (!oldPass || !newPass || !confirmPass) {
      alert("⚠️ Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    if (newPass.length < 6) {
      alert("⚠️ Mật khẩu mới phải có ít nhất 6 ký tự!");
      return;
    }

    if (newPass !== confirmPass) {
      alert("❌ Mật khẩu xác nhận không khớp!");
      return;
    }

    alert("✅ Đổi mật khẩu thành công!");
    setPasswords({ oldPass: "", newPass: "", confirmPass: "" });
  };

  // ===== XỬ LÝ NGÔN NGỮ =====
  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    alert(`🌐 Đã chọn ngôn ngữ: ${lang === "vi" ? "Tiếng Việt" : "English"}`);
  };

  return (
    <div className="container active">
      <div className="dashboard">
        {/* SIDEBAR */}
        <nav className="sidebar">
          <div className="sidebar-logo">
            <h2>👨‍🎓 Học viên</h2>
          </div>
            <ul className="sidebar-menu">
              <li><Link to="/hocvien/Student_Dashboard">🏠 Trang chủ</Link></li>
              <li><Link to="/hocvien/Student_Registerclass">📅 Đăng ký lớp học</Link></li>
              <li><Link to="/hocvien/Student_Schoolscheduelue">📘 Lịch học</Link></li>
              <li><Link to="/hocvien/Student_Score">📊 Điểm số</Link></li>
              <li><Link to="/hocvien/Student_Fee">💰 Học phí</Link></li>
              <li><Link to="/hocvien/Student_Noti">📢 Thông báo</Link></li>
              <li><Link to="/hocvien/Student_Coursematerials">📚 Tài liệu</Link></li>
              <li><Link to="/hocvien/Student_Attendanceinformation">🕒 Điểm danh</Link></li>
              <li><Link to="/hocvien/Student_Homework">📝 Bài tập</Link></li>
              <li><Link to="/hocvien/Student_Certificate">🎓 Chứng chỉ</Link></li>
              <li><Link to="/hocvien/Student_Setting">⚙️ Cài đặt</Link></li>
              <li><Link to="/">🚪 Đăng xuất</Link></li>
            </ul>
        </nav>  

        {/* MAIN CONTENT */}
        <main className="main-content">
          <div className="header">
            <h1>⚙️ Cài đặt tài khoản</h1>
          </div>

          {/* TABS */}
          <div className="tabs">
            <button
              className={`tab ${activeTab === "info" ? "active" : ""}`}
              onClick={() => setActiveTab("info")}
            >
              👤 Thông tin cá nhân
            </button>
            <button
              className={`tab ${activeTab === "password" ? "active" : ""}`}
              onClick={() => setActiveTab("password")}
            >
              🔒 Đổi mật khẩu
            </button>
            <button
              className={`tab ${activeTab === "language" ? "active" : ""}`}
              onClick={() => setActiveTab("language")}
            >
              🌐 Ngôn ngữ
            </button>
          </div>

          {/* --- THÔNG TIN CÁ NHÂN --- */}
          <div className={`tab-content ${activeTab === "info" ? "active" : ""}`}>
            <div className="schedule-card">
              <h2>👤 Thông tin cá nhân</h2>
              <p><strong>Họ và tên:</strong> {profile.fullName}</p>
              <p><strong>Ngày sinh:</strong> {profile.birthday}</p>
              <p><strong>Số điện thoại:</strong> {profile.phone}</p>
              <p><strong>Nơi sinh:</strong> {profile.birthplace}</p>
              <p><strong>Địa chỉ:</strong> {profile.address}</p>
              <p><strong>Số CCCD:</strong> {profile.idCard}</p>

              <button
                className="login-btn"
                onClick={() => setShowEditForm(!showEditForm)}
              >
                ✏️ Thay đổi thông tin
              </button>

              {showEditForm && (
                <form onSubmit={handleProfileSubmit} style={{ marginTop: "25px" }}>
                  <label>Họ và tên</label>
                  <input
                    type="text"
                    className="form-input"
                    value={profile.fullName}
                    onChange={(e) =>
                      setProfile({ ...profile, fullName: e.target.value })
                    }
                  />

                  <label>Ngày sinh</label>
                  <input
                    type="date"
                    className="form-input"
                    value={profile.birthday}
                    onChange={(e) =>
                      setProfile({ ...profile, birthday: e.target.value })
                    }
                  />

                  <label>Số điện thoại</label>
                  <input
                    type="text"
                    className="form-input"
                    value={profile.phone}
                    onChange={(e) =>
                      setProfile({ ...profile, phone: e.target.value })
                    }
                  />

                  <label>Nơi sinh</label>
                  <input
                    type="text"
                    className="form-input"
                    value={profile.birthplace}
                    onChange={(e) =>
                      setProfile({ ...profile, birthplace: e.target.value })
                    }
                  />

                  <label>Địa chỉ</label>
                  <input
                    type="text"
                    className="form-input"
                    value={profile.address}
                    onChange={(e) =>
                      setProfile({ ...profile, address: e.target.value })
                    }
                  />

                  <label>Số CCCD</label>
                  <input
                    type="text"
                    className="form-input"
                    value={profile.idCard}
                    onChange={(e) =>
                      setProfile({ ...profile, idCard: e.target.value })
                    }
                  />

                  <button type="submit" className="login-btn" style={{ marginTop: "15px" }}>
                    💾 Lưu thay đổi
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* --- ĐỔI MẬT KHẨU --- */}
          <div className={`tab-content ${activeTab === "password" ? "active" : ""}`}>
            <div className="schedule-card">
              <h2>🔒 Đổi mật khẩu</h2>
              <form onSubmit={handlePasswordSubmit}>
                <label>Mật khẩu cũ</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="Nhập mật khẩu cũ"
                  value={passwords.oldPass}
                  onChange={(e) =>
                    setPasswords({ ...passwords, oldPass: e.target.value })
                  }
                />

                <label>Mật khẩu mới</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="Nhập mật khẩu mới"
                  value={passwords.newPass}
                  onChange={(e) =>
                    setPasswords({ ...passwords, newPass: e.target.value })
                  }
                />

                <label>Xác nhận mật khẩu mới</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="Nhập lại mật khẩu mới"
                  value={passwords.confirmPass}
                  onChange={(e) =>
                    setPasswords({ ...passwords, confirmPass: e.target.value })
                  }
                />

                <button type="submit" className="login-btn" style={{ marginTop: "10px" }}>
                  ✅ Xác nhận đổi mật khẩu
                </button>
              </form>
            </div>
          </div>

          {/* --- NGÔN NGỮ --- */}
          <div className={`tab-content ${activeTab === "language" ? "active" : ""}`}>
            <div className="schedule-card">
              <h2>🌐 Ngôn ngữ hiển thị</h2>
              <label htmlFor="lang-select">
                <strong>Chọn ngôn ngữ:</strong>
              </label>
              <select
                id="lang-select"
                className="form-input"
                style={{ width: "200px", marginTop: "10px" }}
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="vi">Tiếng Việt</option>
                <option value="en">English</option>
              </select>
              <p style={{ marginTop: "15px", color: "#555" }}>
                Ngôn ngữ sẽ được áp dụng sau khi tải lại trang.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
