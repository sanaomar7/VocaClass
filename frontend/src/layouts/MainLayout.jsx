// frontend/src/layouts/MainLayout.jsx
import { useNavigate } from "react-router-dom";

const MainLayout = ({ children }) => {
  const navigate = useNavigate();        // ✅ أضفناها هنا
  const year = new Date().getFullYear();

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate("/");                       // ✅ يستخدم useNavigate
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app-root">
      {/* HEADER */}
      <header className="app-header">
        <div className="container">
          <div className="header-inner">
            <div className="header-left">
              <div className="logo">
                <a href="/" onClick={handleLogoClick}>
                  <img
                    src="/assets/kideoIcon.png"
                    alt="Kideo"
                    className="logo-img"
                  />
                </a>
              </div>

              <nav className="nav">
                <a href="#vision">Vision</a>
                <a href="#voca">Voca Tooki</a>
                <a href="#preschool">Preschool</a>
                <a href="#testimonial">Testimonial</a>
                <a href="#team">Team</a>
                <a href="#contact">Contact Us</a>
              </nav>
            </div>

            <div className="header-right">
              <div className="header-social">
                <button type="button" className="social-icon social-icon--fb">
                  F
                </button>
                <button type="button" className="social-icon social-icon--ig">
                  IG
                </button>
                <button type="button" className="social-icon social-icon--in">
                  in
                </button>
                <button type="button" className="social-icon social-icon--yt">
                  ▶
                </button>
              </div>

              <button type="button" className="header-lang">
                ENG ▾
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main>{children}</main>

      {/* FOOTER */}
      <footer className="app-footer">
        <div className="container">
          <small>© {year} Kideo. All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
