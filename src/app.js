import React from "react";
import { FooterContainer } from "./containers/footerContainer";
import { JumbotronContainer } from "./containers/JumbotronContainer";
import { AccordianContainer } from "./containers/accordianContainer";

export default function App() {
	return (
		<>
			<JumbotronContainer />
			<AccordianContainer />
			<FooterContainer />
		</>
	);
}
