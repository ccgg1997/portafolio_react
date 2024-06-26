import React from 'react'
import "./Navbar.css"
import { tabs } from '../../sources'
import {Link} from "react-scroll"

const Navbar = () => {
  return (
    <navbar className="navbar flex">
        <div className="box flex-center tabs-group sidebar">
            {
                tabs.map((tab,index)=>(
                    <Link>
                    </Link>
                ))
            }
        </div>
        <div className="box flex-center tabs-group sidebar"></div>
        
    </navbar>
  )
}

export default Navbar