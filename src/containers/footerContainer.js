import React from "react";
import { Footer } from "../components";

export function FooterContainer() {
	return (
		<Footer>
			<Footer.Title>Questions? Call 000-800-040-1843</Footer.Title>
			<Footer.Break></Footer.Break>
			<Footer.Row>
				<Footer.Link href="#">FAQ</Footer.Link>
				<Footer.Link href="#">Help Centre</Footer.Link>
				<Footer.Link href="#">Account</Footer.Link>
				<Footer.Link href="#">Media Centre</Footer.Link>
				<Footer.Link href="#">Investor Relations</Footer.Link>
				<Footer.Link href="#">Ways to Watch</Footer.Link>
				<Footer.Link href="#">Terms of Use</Footer.Link>
				<Footer.Link href="#">Corporate Information</Footer.Link>
				<Footer.Link href="#">Contact Us</Footer.Link>
				<Footer.Link href="#">Speed Test</Footer.Link>
				<Footer.Link href="#">Legal Notices</Footer.Link>
				<Footer.Link href="#">Netflix Originals</Footer.Link>
			</Footer.Row>
		</Footer>
	);
}
