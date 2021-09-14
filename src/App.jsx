import React from "react";
import styled from "styled-components";
import Firstbody from "./components/Firstbody";
import Footer from "./components/Footer";
import HeaderComp from "./components/HeaderComp";
import Secondbody from "./components/Secondbody";
import Thirdbody from "./components/Thirdbody";

const App = () => {
	return (
		<Wrapper className="app">
			<HeaderComp />
			<Firstbody />
			<Secondbody />
			<Thirdbody />
			<Footer />
		</Wrapper>
	);
};

export default App;

const Wrapper = styled.div``;
