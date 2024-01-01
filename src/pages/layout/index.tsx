import React from 'react';
import { Outlet } from 'react-router-dom';
import './style.scss';

const Layout = () => {
	return (
		<>
			<Outlet />
		</>
	);
}

export default Layout;
