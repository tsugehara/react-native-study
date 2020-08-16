import React from "react";
import {
	View, Button, StyleSheet, TextInput, TextInputKeyPressEventData, NativeSyntheticEvent,
} from "react-native";

interface State {
	inputText: string;
}

interface Props {
	defaultText?: string;
	onSubmit: (inputText: string) => void;
}

const style = StyleSheet.create({
	container: {
	},
});

// React.PureComponentを利用したクラススタイル（非推奨？）
export default class extends React.PureComponent<Props, State> {
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
		this.props.onSubmit(this.state.inputText);
		this.setState({
			inputText: "",
		});
	}

	onKeyPress(event: NativeSyntheticEvent<TextInputKeyPressEventData>) {
		const eventForWeb = event.nativeEvent as KeyboardEvent;
		if (eventForWeb.ctrlKey && eventForWeb.keyCode === 13) {
			this.onPress();
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
					<TextInput
						defaultValue={this.props.defaultText}
						value={this.state.inputText}
						multiline
						returnKeyType="send"
						onKeyPress={this.onKeyPressHandler}
						onChangeText={this.onChangeTextHandler}
						numberOfLines={2}
					/>
					<Button title="Send" onPress={this.onPressHandler} />
				</View>
			</View>
		);
	}
}
