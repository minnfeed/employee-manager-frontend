import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBeer, FaCoffee, FaApple } from 'react-icons/fa';
import Card from '../components/Card/Card';

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Card
            icon={<FaBeer />}
            text="Tổng nhân viên"
            iconBackgroundColor="#f0ad4e"
          />
        </div>
        <div className="col-md-3">
          <Card
            icon={<FaBeer />}
            text="Số phòng ban"
            iconBackgroundColor="#f0ad4e"
          />
        </div>
        <div className="col-md-3">
          <Card
            icon={<FaBeer />}
            text="Truy cập"
            iconBackgroundColor="#f0ad4e"
          />
        </div>
        <div className="col-md-3">
          <Card
            icon={<FaApple />}
            text="Thông báo"
            iconBackgroundColor="#ff5733"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
