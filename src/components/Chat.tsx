import React from "react";
import {
	View, StyleSheet,
} from "react-native";
import ChatTimeline from "./ChatTimeline";
import ChatText from "./ChatText";
import * as types from "../types";

const style = StyleSheet.create({
	container: {
	},
});

interface Props {
	defaultText?: string;
}

// React.FC (FunctionComponentの省略記法)
const Chat: React.FC<Props> = (props) => {
	const onSubmitHandler = (inputText: string) => {
		// eslint-disable-next-line no-alert
		alert(`send ${inputText}`);
	};
	const data: types.Chat[] = [
		{ value: "こんにちは", displayName: "tsuge", id: "123" },
		{ value: "どうもどうも", displayName: "管理人", id: "124" },
		{ value: "いらっしゃいませ。\nお名前は？", displayName: "a", id: "125" },
		{ value: "tsugeです。どうもどうも", displayName: "tsuge", id: "126" },
	];

	return (
		<View style={style.container}>
			<View>
				<ChatTimeline chats={data} />
			</View>
			<ChatText onSubmit={onSubmitHandler} defaultText={props.defaultText} />
		</View>
	);
};

export default Chat;
