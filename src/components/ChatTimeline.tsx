import React from "react";
import { FlatList } from "react-native";
// import { ScrollView } from "react-native";
import ChatLine from "./ChatLine";
import * as types from "../types";

interface Props {
	chats: types.Chat[];
}

// FlatListはWeb用に最適化されていないとのことでなんかエラー出る
const timeline = React.memo<Props>((props) => {
	const { chats } = props;
	return (
		<FlatList
			data={chats}
			renderItem={({ item }) => (
				<ChatLine item={item} />
			)}
		/>
	);
});

// ScrollView版（これもエラーだが）
/*
const timeline = React.memo<Props>((props) => (
	<ScrollView>
		{props.chats.map((chat) => (
			<ChatLine key={chat.id} item={chat} />
		))}
	</ScrollView>
), (prev, next) => {
	console.log("memo", prev, next);
	return true;
});
*/

export default timeline;
