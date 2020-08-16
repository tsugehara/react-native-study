import React from "react";
import { Text, StyleSheet } from "react-native";
import * as types from "../types";

const style = StyleSheet.create({
	container: {
		alignItems: "center",
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
			<Text style={style.container}>{item.value}</Text>
		);
	}
}
