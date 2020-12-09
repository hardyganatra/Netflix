import React from "react";
import { Con } from "";

export default function Footer({ children, ...restprops }) {
	return <Container {...restprops}>{children}</Container>;
}

FooterRow = function FooteRRow({ children, ...restprops }) {
	<Row {...restprops}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restprops }) {
	<Column {...restprops}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restprops }) {
	<Link {...restprops}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restprops }) {
	<Title {...restprops}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restprops }) {
	<Text {...restprops}>{children}</Text>;
};
