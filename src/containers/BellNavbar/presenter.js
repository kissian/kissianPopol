import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Navbar, Nav, NavItem, NavDropdown, MenuItem
} from 'react-bootstrap';
import Logo from 'components/Logo';
import NotifyBody from 'containers/NotifyBody';
import styles from './styles.scss';

class BellNavbar extends Component {
    render() {
        const { logout } = this.props;
        return (
            <Navbar className={styles.navbar} collapseOnSelect onToggle={this.handleToggle}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Logo />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavDropdown eventKey={3} title="kissian" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} href="/profile/information">
                                <i className="fas fa-unlock-alt" />
                                {' '}
                                나의정보변경
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3} onClick={logout}>
                                <i className="fas fa-lock" />
                                Logout
                            </MenuItem>
                        </NavDropdown>
                        <NavItem href="/kissianPopol/blog">
                            <div className="fas fa-th-large"></div>
                        </NavItem>
                        <NavItem href="/kissianPopol/memo">
                            <div className="fab fa-flipboard"></div>
                        </NavItem>
                        <NavItem href="/kissianPopol/messages">
                            <div className="fas fa-comment-alt" />
                        </NavItem>
                        <NavItem href="/kissianPopol/bell">
                            <div className={styles.notifyWrap}>
                                <div className="fas fa-bell" />
                                <NotifyBody />
                            </div>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }    
}

export default BellNavbar;


