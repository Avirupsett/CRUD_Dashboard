import React, { useEffect, useRef, useState } from 'react'
import './Rsidebar.css'
import { Link } from 'react-router-dom';
import DarkMode from '../../../services/darkmode';
import Searchbox from '../../../features/documentation/component/searchbox';

export default function Rsidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [darkmode, setDarkmode] = useState(false)
  const ref = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target) && ref2.current && !ref2.current.contains(event.target)) {
         setIsOpen(true)
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("DarkMode") === "on") {
      DarkMode("dark")
      setDarkmode(true)
    }
    else {
      setDarkmode(false)
      DarkMode("light")
    }

  }, [setDarkmode])

  const changecolor = () => {
    if (darkmode) {
      setDarkmode(false)
      DarkMode("light")
    }
    else {
      setDarkmode(true)
      DarkMode("dark")
    }
  }

  const handleSidebar = () => {
    setIsOpen(current => !current);
  };
  const handleArrowClick = event => {
    event.currentTarget.classList.toggle('showMenu');
  };
  return (
    <>
      <div ref={ref} className={isOpen ? "sidebar close" : "sidebar"} >
        <div className="logo-details">
          <i className='bx bxl-c-plus-plus'></i>
          <span className="logo_name">AdminPanel</span>
          {/* <i className={'bx bx-left-arrow-circle'} id="btn" onClick={() => handleSidebar()}></i> */}
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">
              <i className='bx bx-grid-alt' ></i>
              <span className="link_name">Home</span>
            </Link>
            <ul className="sub-menu blank">
              <li><Link className="link_name" to="/">Home</Link></li>
            </ul>
          </li>
          <li onClick={handleArrowClick} >
            <div className="iocn-link">
              <Link to="/">
                <i className='bx bx-collection' ></i>
                <span className="link_name">Category</span>
              </Link>
              <i className='bx bxs-chevron-down arrow ' ></i>
            </div>
            <ul className="sub-menu">
              <li><Link className="link_name" to="/">Category</Link></li>
              <li><Link to="/">HTML & CSS</Link></li>
              <li><Link to="/">JavaScript</Link></li>
              <li><Link to="/">PHP & MySQL</Link></li>
            </ul>
          </li>
          <li onClick={handleArrowClick}>
            <div className="iocn-link">
              <Link to="/">
                <i className='bx bx-book-alt' ></i>
                <span className="link_name">Posts</span>
              </Link>
              <i className='bx bxs-chevron-down arrow' ></i>
            </div>
            <ul className="sub-menu">
              <li><Link className="link_name" to="/">Posts</Link></li>
              <li><Link to="/">Web Design</Link></li>
              <li><Link to="/">Login Form</Link></li>
              <li><Link to="/">Card Design</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/">
              <i className='bx bx-pie-chart-alt-2' ></i>
              <span className="link_name">Analytics</span>
            </Link>
            <ul className="sub-menu blank">
              <li><Link className="link_name" to="/">Analytics</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/">
              <i className='bx bx-line-chart' ></i>
              <span className="link_name">Chart</span>
            </Link>
            <ul className="sub-menu blank">
              <li><Link className="link_name" to="/">Chart</Link></li>
            </ul>
          </li>
          <li onClick={handleArrowClick}>
            <div className="iocn-link">
              <Link to="/documentation">
                <i className='bx bx-plug' ></i>
                <span className="link_name">Docs</span>
              </Link>
              <i className='bx bxs-chevron-down arrow' ></i>
            </div>
            <ul className="sub-menu">
              <li><Link className="link_name" to="/documentation">Docs</Link></li>
              <li><Link to="/documentation/save">Save</Link></li>
              <li><Link to="/documentation/working">Working</Link></li>
              <li><Link to="/documentation/build">Build</Link></li>
              <li><Link to="/documentation/voucher">Voucher</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/">
              <i className='bx bx-compass' ></i>
              <span className="link_name">Explore</span>
            </Link>
            <ul className="sub-menu blank">
              <li><Link className="link_name" to="/">Explore</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/">
              <i className='bx bx-history'></i>
              <span className="link_name">History</span>
            </Link>
            <ul className="sub-menu blank">
              <li><Link className="link_name" to="/">History</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/">
              <i className='bx bx-cog' ></i>
              <span className="link_name">Setting</span>
            </Link>
            <ul className="sub-menu blank">
              <li><Link className="link_name" to="/">Setting</Link></li>
            </ul>
          </li>
          <li>
          <Link to="/" onClick={(e) => {e.preventDefault();changecolor()}}>
          <i className={darkmode ? `bx bx-sun` : `bx bx-moon`}></i>
              <span className="link_name">{darkmode ? 'Light Mode' : 'Dark Mode'}</span>
              </Link>
            <ul className="sub-menu blank">
              <li><Link className="link_name" to="/" onClick={(e)=>{e.preventDefault()}}>{darkmode ? 'Light Mode' : 'Dark Mode'}</Link></li>
            </ul>
          </li>
          <li>
            {/* <div className="profile-details" onClick={() => changecolor()}>
              <div className="profile-content">
          
              </div>
              <div className="name-job">
                <div className="profile_name">{darkmode ? 'Light Mode' : 'Dark Mode'}</div>
              </div>
              <i className={darkmode ? `bx bx-sun` : `bx bx-moon`}></i>

            </div> */}
            {/* <div className="profile-details">
      <div className="profile-content">
        <img src="image/profile.jpg" alt="profileImg"/>
      </div>
      <div className="name-job">
        <div className="profile_name">Prem Shahi</div>
        <div className="job">Web Desginer</div>
      </div>
      <i className='bx bx-log-out' ></i>
    </div> */}

          </li>
        </ul>
      </div>
      <section className="home-section home-section-toolbar" >
        <div className="home-content mt-2 mb-2 d-flex justify-content-between">
          <i ref={ref2} className='bx bx-menu' style={{ color: "var(--text-color)" }} onClick={() => handleSidebar()}></i>
          {/* <span className="text">Drop Down Sidebar</span> */}
          <Searchbox/>
        </div>
      </section>
    </>
  )
}
