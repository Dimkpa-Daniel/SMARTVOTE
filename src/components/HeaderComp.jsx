import React from "react";
import styled from "styled-components";
import logo from "../assets/techcreek logo.png"

const HeaderComp = () => {
	return (
		<div className="navbar">
		<nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand image1" href="#">
                <img src={logo} alt="" width="70" height="60"
                    class="d-inline-block align-text-top" />
					<p>Smart-Vote</p>

            </a>
        </div>
    </nav>
		</div>
		
	);
};

export default HeaderComp;

const Header = styled.header``;
