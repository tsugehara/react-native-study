import React from "react";
import {
	View, StyleSheet, Button, TextInput, TextInputKeyPressEventData, NativeSyntheticEvent,
} from "react-native";
import ChatLine from "./ChatLine";

const style = StyleSheet.create({
	container: {
	},
});

interface Props {
	defaultText?: string;
}
interface State {
	inputText: string;
}

export default class extends React.Component<Props, State> {
	onPressHandler = this.onPress.bind(this);

	onKeyPressHandler = this.onKeyPress.bind(this);

	onChangeTextHandler = this.onChangeText.bind(this);

	defaultText: string = "";

	constructor(props: Props) {
		super(props);
		this.state = {
			inputText: this.defaultText ?? "",
		};
	}

	onPress() {
		alert(`send ${this.state.inputText}`);
	}

	onKeyPress(event: NativeSyntheticEvent<TextInputKeyPressEventData>) {
		const eventForWeb = event.nativeEvent as KeyboardEvent;
		if (eventForWeb.ctrlKey && eventForWeb.keyCode === 13) {
			this.onPress({});
			event.preventDefault();
		}
	}

	onChangeText(inputValue: string) {
		this.setState({
			inputText: inputValue,
		});
	}

	render() {
		return (
			<View style={style.container}>
				<View>
					<ChatLine />
				</View>
				<View>
					<TextInput defaultValue={this.props.defaultText} value={this.state.inputText} multiline returnKeyType="send" onKeyPress={this.onKeyPressHandler} onChangeText={this.onChangeTextHandler} numberOfLines={2} />
					<Button title="Send" onPress={this.onPressHandler} />
				</View>
			</View>
		);
	}
}
