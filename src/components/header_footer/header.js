import React from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Button} from '@mui/material';

import {auth} from '../../firebase';
import { signOut } from 'firebase/auth';
import {CityLogo, showToastError, showToastSuccess} from '../utils/tools';

const Header = ({user}) => {

    const logoutHandler = () => {
        signOut(auth)
        .then(() => {
            showToastSuccess('Logged out');
        }).catch(error => {
            showToastError('Error', error.message);
        })
    }

    return (
        <AppBar
            position='fixed'
            style={{
                backgroundColor: '#98c5e9',
                boxShadow: 'none',
                padding: '10px 0px',
                borderBottom: '2px solid #00285e'
            }}
        >
            <Toolbar style={{display: 'flex'}}>
                <div style={{flexGrow: 1}}>
                    <div className='header_logo'>
                        <CityLogo 
                            link={true}
                            linkTo={'/'}
                            width='70px'
                            height='70px'
                        />
                    </div>
                </div>

                <Link to="/team"> 
                    <Button color='inherit'>Team</Button>
                </Link>
                <Link to="/matches"> 
                    <Button color='inherit'>Matches</Button>
                </Link>

                { user ?
                <>
                    <Link to="/dashboard"> 
                        <Button color='inherit'>Dashboard</Button>
                    </Link>

                    <Button 
                    color='inherit'
                    onClick={() => logoutHandler()}
                    >Logout</Button>
                </>
                :
                    null
                }
            </Toolbar>
        </AppBar>
    )
}

export default Header;