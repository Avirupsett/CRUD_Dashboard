import React from 'react'
import DashBoard from '../features/dashboard'
import Sidebar from '../layouts/Navbar/component/sidebar'
import 'react-responsive-modal/styles.css'
import { BrowserRouter as Router} from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <Sidebar />
      <DashBoard/>
    </Router>
  )
}
