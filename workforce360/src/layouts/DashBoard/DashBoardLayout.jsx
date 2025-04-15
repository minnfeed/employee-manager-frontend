import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import './DashBoard.css';
function DashBoardLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="dashboard-container mt-5">
        <Outlet />
      </div>
    </div>
  );
}
export default DashBoardLayout;
