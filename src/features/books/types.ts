export type Book = {
	title: string;
	authors: string[];
	publisher?: string;
	publishedDate?: string;
	description?: string;
	imageLinks?: {
		thumbnail: string;
		smallThumbnail: string;
	};
};
