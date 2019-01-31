import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Badge
} from 'reactstrap';

const NavBar = (props) => {
   
        return(
            <div style={{direction : 'rtl'}}>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">سبد خرید</NavbarBrand>
                    <Badge color="info" pill className="m-2">
                        {props.counters.filter(c => c.value > 0).length}
                    </Badge>
                </Navbar>
            </div>
        );

}

export default NavBar;