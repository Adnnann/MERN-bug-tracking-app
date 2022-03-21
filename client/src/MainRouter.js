import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Dashboard from './components/Dashboard'
import ReportedBugs from './components/ReportedBugs';
import ViewBug from './components/ViewBug';
import CreateBug from './components/CreateBug';
import EditBug from './components/EditBug';


const MainRouter = () => {

    return(

        <Router>
        <Header />
        <ViewBug />
        <CreateBug />
        <EditBug />
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/dashboard' element={<Dashboard />}></Route>
                <Route path='/viewBugs' element={<ReportedBugs />}></Route>
            </Routes>
            
        </Router>

    )
}

export default MainRouter