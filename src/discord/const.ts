class Constants {
	EMOTE_PERIOD: { NORMAL: number; ELITE: number; PRO: number };
	EMOTE_LIMIT: { NORMAL: number; ELITE: number; PRO: number };

	constructor() {
		this.EMOTE_LIMIT = { NORMAL: 1, ELITE: 2, PRO: 3 };
		this.EMOTE_PERIOD = { NORMAL: 14, ELITE: 7, PRO: 0 };
	}
}

export const Const = new Constants();
