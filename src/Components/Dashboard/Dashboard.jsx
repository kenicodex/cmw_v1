import React from 'react';
import Navbar from '../Navbar/Navbar';

function Dashboard(props) {
    return (
        <React.Fragment>
            <Navbar />
            <div className="container border-left border-right position-relative" style={{height:"95vh"}}>
                <div className="h3 pl-3 position ">Dashboard</div>
                <div className="row position pl-3 h5">
                    Orders
                </div>
            </div>
        </React.Fragment>
    );
}
export default Dashboard;