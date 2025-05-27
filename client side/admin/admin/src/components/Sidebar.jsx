import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaugeHigh, faTrophy, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div>
       {/* <!-- left sidebar --> */}
        <div className="nav-left-sidebar sidebar-dark">
            <div className="menu-list">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="d-xl-none d-lg-none" href="#">Dashboard</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav flex-column">
                            <li className="nav-divider">
                                Menu
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#"><FontAwesomeIcon icon={faGaugeHigh}/><span style={{marginLeft:'10px'}}></span>Overview</a>
                            </li>
                              <li className="nav-item ">
                                <Link className="nav-link" href="#"><FontAwesomeIcon icon={faIdCard}/><span style={{marginLeft:'10px'}}></span>Registration</Link>
                            </li>
                         
                            <li className="nav-item ">
                                <Link to="/Add_event" className="nav-link" href="#" style={{marginLeft:'1px'}}><FontAwesomeIcon icon={faTrophy}/><span style={{marginLeft:'10px'}}>Events</span></Link>
                            </li>
                       
                            <li className="nav-item ">
                                <a className="nav-link" href="#" style={{marginLeft:'3px'}}><FontAwesomeIcon icon={faGear}/><span style={{marginLeft:'11px'}}>Settings</span></a>
                            </li>
                    
                  
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}
