import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo" ><a href="/">THE LOGO</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users </a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;