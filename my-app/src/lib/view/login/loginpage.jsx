import React, { useState } from "react";
import "../css/login.css";

function App() {
  const announcements = [
    {
      month: "Tháng 09",
      day: "30",
      title: "Khuyến mãi nhập học vào tháng 11 này",
      tag: "HOT",
    },
    {
      month: "Tháng 09",
      day: "30",
      title: "Bổ sung các môn ngoại ngữ mới",
      tag: "NEW",
    },
    {
      month: "Tháng 09",
      day: "23",
      title: "Đăng ký nhập học tiếng Pháp ngay hôm nay",
      tag: "NEW",
    },
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Đăng nhập: ${username} / ${password}`);
  };

  return (
    <div>
      <header>
        <div className="logo-title">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg"
            alt="Logo"
            className="logo"
          />
          <h1>Trung tâm Ngoại ngữ</h1>
        </div>
      </header>

      <main>
        <section className="announcements">
          {announcements.map((a, i) => (
            <div className="announcement" key={i}>
              <div className="date">
                <span>{a.month}</span>
                <h2>{a.day}</h2>
              </div>
              <div className="content">
                <h3>
                  {a.title}{" "}
                  <span className={a.tag === "HOT" ? "hot" : "new"}>
                    {a.tag}
                  </span>
                </h3>
                <p className="link">Xem chi tiết</p>
              </div>
            </div>
          ))}
        </section>

        <aside className="login-box">
          <h2>CỔNG ĐĂNG NHẬP</h2>
          <form onSubmit={handleLogin}>
            <div className="login-form">
              <label>
                <i className="fa-solid fa-user"></i> Đăng nhập
              </label>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Nhập tên đăng nhập"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <label>
                <i className="fa-solid fa-lock"></i> Mật khẩu
              </label>
              <div className="input-box">
                <input
                  type="password"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button className="login-btn" type="submit">
              ĐĂNG NHẬP
            </button>

            <div className="support-box">
              <h3>📞 Hỗ trợ người học</h3>
              <p>
                Hotline: <strong>0123 456 789</strong>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:support@globalhorizon.edu.vn">
                  support@globalhorizon.edu.vn
                </a>
              </p>
              <p>Giờ làm việc: Thứ 2 - Thứ 6, 8:00 - 17:00</p>
            </div>

            <div className="support-box">
              <h3>📞 Trung Tâm tư vấn</h3>
              <p>
                Hotline: <strong>0123 456 789</strong>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:tuvan@globalhorizon.edu.vn">
                  tuvan@globalhorizon.edu.vn
                </a>
              </p>
              <p>Giờ làm việc: Thứ 2 - Thứ 7, 8:00 - 17:00</p>
            </div>
          </form>
        </aside>
      </main>

      <footer>
        <p>Trung tâm Ngoại ngữ</p>
      </footer>
    </div>
  );
}

export default App;