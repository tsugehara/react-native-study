import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as types from "../types";

const style = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
	},
	contentOwner: {
		width: 60,
	},
	content: {
		flex: 2,
	},
});

interface Props {
	item: types.Chat;
}

// Pure functionにしろと怒られるけど、React.Componentを継承したクラスの書き方
// eslint-disable-next-line react/prefer-stateless-function
export default class extends React.Component<Props> {
	render() {
		const { item } = this.props;
		return (
			<View style={style.container}>
				<Text style={style.contentOwner}>{item.displayName}</Text>
				<Text style={style.content}>{item.value}</Text>
			</View>
		);
	}
}
