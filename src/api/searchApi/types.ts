export interface image{
	textScore:number,
	textContent:string
}

export interface Page {
	pageNum: number;
	pageContent: string[];
	imageTexts?: image[];
}

export interface ResultList {
	pdfId: number;
	totalScore: number;
	fileName: string;
	totalPageNum: number;
	pages: Page[];
}

export interface Data {
	numOfResults: number;
	resultList: ResultList[];
}

export interface searchResponseType {
	data?: Data;
}


