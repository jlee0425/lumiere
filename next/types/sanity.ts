export type SanityImage = {
	_key: string;
	asset: {
		url: string;
		metadata: {
			dimensions: { aspectRatio: number; width: number; height: number };
		};
	};
};

export type GalleryImage = {
	key: string;
	url: string;
	isPortrait: boolean;
	width: number;
	height: number;
};
