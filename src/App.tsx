import React from "react";
import { View, Text } from "react-native";
import "./App.css";
import Chat from "./components/Chat";

export default class App extends React.Component {
	render() {
		return (
			<View>
				<View>
					<Text>
						learn react
					</Text>
				</View>
				<Chat />
			</View>
		);
	}
}

// AppRegistry.registerComponent("App", () => App);
