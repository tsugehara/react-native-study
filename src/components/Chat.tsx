import React from "react";
import {
	View, StyleSheet,
} from "react-native";
import ChatLine from "./ChatLine";
import ChatText from "./ChatText";

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

	return (
		<View style={style.container}>
			<View>
				<ChatLine />
			</View>
			<ChatText onSubmit={onSubmitHandler} defaultText={props.defaultText} />
		</View>
	);
};

export default Chat;
