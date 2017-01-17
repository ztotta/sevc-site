import React from 'react';
import ReactDOM from 'react-dom';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import App from './App';
import './index.css';

const items = [
		<SidebarItem>Dashboard</SidebarItem>,
		<SidebarItem>Profile</SidebarItem>,
		<SidebarItem>Settings</SidebarItem>,
	];

ReactDOM.render(
  <Sidebar content={items}>
		<App />
  </Sidebar>,
  document.getElementById('root')
);
