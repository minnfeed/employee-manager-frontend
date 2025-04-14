import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="position-fixed top-0 start-50 translate-middle-x mt-3 z-3" style={{ width: '80%', maxWidth: '1200px' }}>
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow px-4 py-2 border rounded-4"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Nền trong suốt
          backdropFilter: 'blur(10px)', // Hiệu ứng mờ nền phía sau (glass effect)
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <Link className="navbar-brand fw-bold text-white" to='/'>WorkForce360</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link text-white" to="#">Dashboard</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="#">Nhân viên</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="#">Phòng ban</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="#">Báo cáo</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-white"
                to="#"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i ></i>Khang
              </Link>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><Link className="dropdown-item" to="#">Thông tin cá nhân</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item text-danger" to="#">Đăng xuất</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
