import React from "react";
import { ScrollView } from "react-native";
import ChatLine from "./ChatLine";
import * as types from "../types";

interface Props {
	chats: types.Chat[];
}

// FlatListはWeb用に最適化されていないとのこと
/*
return (
	<FlatList
		data={props.chats}
		renderItem={({item}) => (
			<ChatLine item={item} />
		)}
	/>
);
*/

// ScrollViewでもエラーになる・・
const timeline = React.memo<Props>((props) => (
	<ScrollView>
		{props.chats.map((chat) => (
			<ChatLine key={chat.id} item={chat} />
		))}
	</ScrollView>
));

export default timeline;
