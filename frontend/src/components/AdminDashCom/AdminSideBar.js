import React from 'react';
import '../components/adminSideBar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="admin-logo"><img src=""></img></div>
      <div className="sidebar-item">Add Practicals</div>
      <div className="sidebar-item">Practicals</div>
      <div className="sidebar-item">Add Syllabus</div>
      <div className="sidebar-item">Add Subjects</div>
    </div>
  );
};

export default Sidebar;
