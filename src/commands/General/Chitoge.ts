  /** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "chitoge",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}support`,
			baseXp: 200,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://media.tenor.com/videos/80f557139bc3a0857f6a705da6990fdc/mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `🌟 *sasuke* 🌟\n\n🍀 *Description: join Bot support*\n\n🌐 *support: https://chat.whatsapp.com/CPQJoQEPRCN3rOacY9TLYP * \n\n 📒 *🧧Admins: https://wa.me/919389379221 https://wa.me/+919106196230* \n`,
			}
		);
	};
}
 
