import React, { useState, useContext, createContext } from "react";
import {
	Container,
	Inner,
	Item,
	Header,
	Body,
	Title,
} from "./styles/accordian";

const ToggleContext = createContext();

export default function Accordian({ children, ...restprops }) {
	return (
		<Container {...restprops}>
			<Inner>{children}</Inner>
		</Container>
	);
}
Accordian.Title = function AccordianTitle({ children, ...restprops }) {
	return <Title {...restprops}>{children}</Title>;
};

// Accordian.Frame = function AccordianFrame({ children, ...restprops }) {
// 	return <Frame {...restprops}>{children}</Frame>;
// };

Accordian.Item = function AccordianItem({ children, ...restprops }) {
	const [toogleShow, setToogleShow] = useState(false);
	return (
		<ToggleContext.Provider value={{ toogleShow, setToogleShow }}>
			<Item {...restprops}>{children}</Item>
		</ToggleContext.Provider>
	);
};

Accordian.Header = function AccordianHeader({ children, ...restprops }) {
	const { toogleShow, setToogleShow } = useContext(ToggleContext);
	return (
		<Header
			onClick={() => setToogleShow((toogleShow) => !toogleShow)}
			{...restprops}
		>
			{children}
			{toogleShow ? (
				<img src="/images/icons/close-slim.png" alt="close" />
			) : (
				<img src="/images/icons/add.png" alt="Add" />
			)}
		</Header>
	);
};

Accordian.Body = function AccordianBody({ children, ...restprops }) {
	const { toogleShow } = useContext(ToggleContext);
	return toogleShow ? <Body {...restprops}>{children}</Body> : null;
};
