import React from "react";
import { View, Text, StyleSheet } from "react-native";

const style = StyleSheet.create({
	container: {
		alignItems: "center",
	},
});

export default class extends React.Component {
	render() {
		return (
			<View style={style.container}>
				<Text>
					A
				</Text>
			</View>
		);
	}
}
