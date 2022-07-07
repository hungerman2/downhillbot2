interface IConstants {
	EMOTE_LIMIT_NORMAL: number;
	EMOTE_LIMIT_ELITE: number;
	EMOTE_LIMIT_PRO: number;
}

class Constants implements IConstants {
	EMOTE_LIMIT_NORMAL: number = 1;
	EMOTE_LIMIT_ELITE: number = 2;
	EMOTE_LIMIT_PRO: number = 3;
}

export const Const = new Constants();
