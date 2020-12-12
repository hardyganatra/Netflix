import React from "react";
import { Accordian } from "../components";
import FaqsData from "../fixtures/faqs.json";

export function AccordianContainer() {
	return (
		<Accordian>
			<Accordian.Title>Feequesntly Asked Questions</Accordian.Title>
			{FaqsData.map((item) => {
				return (
					<Accordian.Item key={item.id}>
						<Accordian.Header>{item.header}</Accordian.Header>
						<Accordian.Body>{item.body}</Accordian.Body>
					</Accordian.Item>
				);
			})}
		</Accordian>
	);
}
