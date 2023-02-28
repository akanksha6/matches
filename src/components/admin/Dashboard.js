import React from 'react';
import AdminLayout from '../../HoC/AdminLayout';

const Dashboard = (props) => {

    return (
        <AdminLayout>
            <div className='user_dashboard'>
                <div>
                    Dashboard
                </div>
            </div>
        </AdminLayout>
    )
}

export default Dashboard;