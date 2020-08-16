import React from "react";
import {
	View, StyleSheet,
} from "react-native";
import ChatTimeline from "./ChatTimeline";
import ChatForm from "./ChatForm";
import * as hooks from "../hooks";

const style = StyleSheet.create({
	container: {
	},
});

interface Props {
	defaultText?: string;
}

// React.FC (FunctionComponentの省略記法)
const Chat: React.FC<Props> = (props) => {
	const useChats = hooks.useChats([
		{ value: "こんにちは", displayName: "tsuge", id: "123" },
		{ value: "どうもどうも", displayName: "管理人", id: "124" },
		{ value: "いらっしゃいませ。\nお名前は？", displayName: "a", id: "125" },
		{ value: "tsugeです。どうもどうも", displayName: "tsuge", id: "126" },
	]);
	const onSubmitHandler = (inputText: string) => {
		const chat = {
			value: inputText,
			displayName: "tsuge",
			id: useChats.createId(),
		};
		useChats.addChat(chat);
	};

	return (
		<View style={style.container}>
			<View>
				<ChatTimeline chats={useChats.chats} />
			</View>
			<ChatForm onSubmit={onSubmitHandler} defaultText={props.defaultText} />
		</View>
	);
};

export default Chat;
