import React, { useState } from "react";
import styles from "../css/Login.module.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const announcements = [
    { month: "Tháng 09", day: "30", title: "Khuyến mãi nhập học vào tháng 11 này", tag: "HOT" },
    { month: "Tháng 09", day: "30", title: "Bổ sung các môn ngoại ngữ mới", tag: "NEW" },
    { month: "Tháng 09", day: "23", title: "Đăng ký nhập học tiếng Pháp ngay hôm nay", tag: "NEW" },
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const users = [
    { username: "admin", password: "123456", role: "admin" },
    { username: "giangvien", password: "123456", role: "teacher" },
    { username: "hocvien", password: "123456", role: "student" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      alert(`✅ Đăng nhập thành công với vai trò: ${user.role.toUpperCase()}`);
      switch (user.role) {
        case "admin":
          navigate("/admin/Admin_Dashboard");
          break;
        case "teacher":
          navigate("/giangvien/Teacher_Dashboard");
          break;
        case "student":
          navigate("/hocvien/Student_Dashboard");
          break;
        default:
          alert("Không xác định được vai trò!");
      }
    } else {
      alert("❌ Sai tên đăng nhập hoặc mật khẩu!");
    }
  };

  return (
    <div className={styles.loginPageContainer}>
      <header className={styles.header}>
        <div className={styles.logoTitle}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg"
            alt="Logo"
            className={styles.logo}
          />
          <h1>Trung tâm Ngoại ngữ</h1>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.announcements}>
          {announcements.map((a, i) => (
            <div className={styles.announcement} key={i}>
              <div className={styles.date}>
                <span>{a.month}</span>
                <h2>{a.day}</h2>
              </div>
              <div className={styles.content}>
                <h3>
                  {a.title}{" "}
                  <span
                    className={
                      a.tag === "HOT" ? styles.hot : styles.newTag
                    }
                  >
                    {a.tag}
                  </span>
                </h3>
                <p className={styles.link}>Xem chi tiết</p>
              </div>
            </div>
          ))}
        </section>

        <aside className={styles.loginBox}>
          <h2>CỔNG ĐĂNG NHẬP</h2>
          <form onSubmit={handleLogin}>
            <div className={styles.loginForm}>
              <label htmlFor="username">
                <i className="fa-solid fa-user"></i> Tên đăng nhập
              </label>
              <div className={styles.inputBox}>
                <input
                  id="username"
                  type="text"
                  placeholder="Nhập tên đăng nhập"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <label htmlFor="password">
                <i className="fa-solid fa-lock"></i> Mật khẩu
              </label>
              <div className={styles.inputBox}>
                <input
                  id="password"
                  type="password"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button className={styles.loginBtn} type="submit">
              ĐĂNG NHẬP
            </button>

            <div className={styles.supportBox}>
              <h3>📞 Hỗ trợ người học</h3>
              <p>Hotline: <strong>0123 456 789</strong></p>
              <p>Email: <a href="mailto:support@globalhorizon.edu.vn">support@globalhorizon.edu.vn</a></p>
              <p>Giờ làm việc: Thứ 2 - Thứ 6, 8:00 - 17:00</p>
            </div>

            <div className={styles.supportBox}>
              <h3>💬 Trung tâm tư vấn</h3>
              <p>Hotline: <strong>0123 456 789</strong></p>
              <p>Email: <a href="mailto:tuvan@globalhorizon.edu.vn">tuvan@globalhorizon.edu.vn</a></p>
              <p>Giờ làm việc: Thứ 2 - Thứ 7, 8:00 - 17:00</p>
            </div>
          </form>
        </aside>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Trung tâm Ngoại ngữ - Hệ thống quản lý học viên</p>
      </footer>
    </div>
  );
}

export default LoginPage;
