import React from 'react';
import {Link} from 'react-router-dom';
import {ListItemButton} from '@mui/material'

import withRouter from '../../utils/withRouter';
import {showToastError, showToastSuccess} from '../../utils/tools';

const AdminNav = (props) => {
    const link = [
        {
            title: 'Matches',
            linkTo: '/admin_matches'
        },
        {
            title: 'Players',
            linkTo: '/admin_players'
        }
    ];

    const renderItems = () => (
        link.map(link => (
            <Link to={link.linkTo} key={link.title}>
                <ListItemButton button className='admin_nav_link'>
                    {link.title}
                </ListItemButton>
            </Link>
        ))
    )

    return (
        <div>
            {renderItems()}
        </div>
    )
}

export default withRouter(AdminNav);
