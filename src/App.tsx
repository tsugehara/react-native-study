import React from "react";
import { View, Text } from "react-native";
import "./App.css";
import Chat from "./components/Chat";

interface Props {
}

// React.FunctionComponent
const App: React.FunctionComponent<Props> = () => (
	<View>
		<View>
			<Text>
				learn react
			</Text>
		</View>
		<Chat />
	</View>
);

export default App;

// AppRegistry.registerComponent("App", () => App);
