import React from "react";
import jumboData from "./fixtures/jumbo.json";
import Jumbotron from "./components/jumbotron";

export default function App() {
	return (
		<Jumbotron.Container prop="test" prop2="test2">
			{jumboData.map((item) => (
				<Jumbotron key={item.id} direction={item.direction}>
					<Jumbotron.Pane>
						<Jumbotron.Title>{item.title}</Jumbotron.Title>
						<Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
					</Jumbotron.Pane>
					<Jumbotron.Pane>
						<Jumbotron.Image
							src={item.image}
							alt={item.alt}
						></Jumbotron.Image>
					</Jumbotron.Pane>
				</Jumbotron>
			))}
		</Jumbotron.Container>
	);
}
