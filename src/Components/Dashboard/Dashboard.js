import React from 'react'
import logo from '../../images/logo.jpg';

import Barchart from '../../Charts/Barchart';
const Dashboard = () => {
  return (
    <>
    <nav className="navbar navbar-light" style={{ padding:'1rem' ,backgroundColor:'#e3f2fd'}}>
        <a className="navbar-brand">Dashboard</a>
        {/* <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> */}
        <img src={logo}/>
    </nav>
    <Barchart barchartid="barchart1"/>
    <Barchart barchartid="barchart2"/>
    <Barchart barchartid="barchart3"/>
    
    {/* <Barchart id="chartdiv2"/> */}
    </>
    
  )
}

export default Dashboard