import React from 'react'
// import DashBoard from '../features/dashboard'
// import SearchBox from '../features/searchbox'
// import Sidebar from '../layouts/Navbar/component/sidebar'
import 'react-responsive-modal/styles.css'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Rsidebar from '../layouts/Navbar/component/Rsidebar';
import Docs from '../features/documentation';
import Company from '../features/Company';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Rsidebar />
      </Switch>

      <Company />

      <Docs />
      {/* <SearchBox/> */}
      {/* <DashBoard/> */}
    </Router>
  )
}
