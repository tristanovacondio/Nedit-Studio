import React from "react";
import theme from "theme";
import { Theme, Link, Text, Span, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Menu display="block">
			<Override slot="link-404">
				404
			</Override>
		</Menu>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				Nedit Studio
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0">
				First we think about what we really need. Really need. We tend to remove as much as possible and in the end we come up with a simple design that we believe fits best in most of the situation.{" "}
				<br />
				Nothing extreme, nothing in plastic,{" "}
				<Link href="#www.google.com" target="_self">
					<Span>
						nothing
					</Span>
				</Link>
				{" "}useless.{" "}
			</Text>
			<Button font="--lead" margin="20px" lg-background="#868686" lg-color="#000000">
				Discover our products
			</Button>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});