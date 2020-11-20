import React from "react";
import theme from "theme";
import { Theme, Link, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section background="--color-darkL2" padding="64px 0" sm-padding="40px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						margin-right="-20%"
						padding-bottom="120%"
						background="url(https://uploads.quarkly.io/5fb7db832c4ef2001e328c09/images/IMG_20201119_162007.jpg?v=2020-11-20T19:24:39.734Z) 50% 15%/cover"
						lg-margin-right="0"
						lg-padding-bottom="80%"
						lg-background="url(https://uploads.quarkly.io/5fb7db832c4ef2001e328c09/images/IMG_20201119_162007.jpg?v=2020-11-20T19:24:39.734Z) 50% 15%/cover"
					/>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						padding="98px 64px"
						margin-left="-20%"
						margin-top="36px"
						background="--color-greyD2"
						color="--light"
						mix-blend-mode="normal"
						lg-margin-left="0"
						lg-margin-top="0"
						flex-direction="column"
						lg-background="#464646"
						opacity="50%"
					/>
					<Text
						as="h4"
						margin="0"
						font="--base"
						letter-spacing="1px"
						text-transform="uppercase"
					>
						About THIS TABLE
					</Text>
					<Text as="h1" margin="0 0 16px 0" font="--headline1" lg-font="--headline2">
						Ha Ha Ha
					</Text>
					<Text as="p" margin="16px 0" font="--base" max-width="400px">
						A simple and classic design
					</Text>
				</StackItem>
			</Stack>
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