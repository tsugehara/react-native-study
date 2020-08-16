import React from "react";
import * as types from "../types";

// eslint-disable-next-line import/prefer-default-export
export const useChats = (initialChats: types.Chat[] = []) => {
	const [chats, setChats] = React.useState(initialChats);
	return {
		chats,

		addChat: (chat: types.Chat) => {
			setChats(chats.concat(chat));
		},

		createId: () => `${parseInt(chats[chats.length - 1].id, 10) + 1}`,
	};
};
