export interface IProductImage {
	sourceUrl: string;
	altText: string;
}

export interface IProductPricing {
	price: number;
	regularPrice: number;
	salePrice: number;
}

export interface IProduct extends IProductPricing {
	id: string;
	databaseId: number;
	name: string;
	slug: string;
	description: string;
	onSales: boolean;
	image: IProductImage;
	quantity: number;
}

export interface ProductQueryResponse {
	data: {
		products: {
			nodes: IProduct[];
		};
	};
}

export interface ICategory {
	id: string;
	databaseId: number;
	name: string;
	slug: string;
}

export interface CategoryQueryResponse {
	data: {
		productCategories: {
			nodes: ICategory[];
		};
	};
}

export interface IFavoriteProduct {
	databaseId: number;
	name: string;
	slug: string;

	image?: {
		sourceUrl: string;
	};
}

export interface IHeaderProps {
	onSearch: (searchTerm: string) => void;
}

export interface IProductSearchProps {
	onSearch: (searchTerm: string) => void;
}

export type SortOptionKey =
	| "latest"
	| "popularity"
	| "name_asc"
	| "name_desc"
	| "price_asc"
	| "price_desc";

export interface ISortByOption {
	field: string;
	order: string;
}

export interface IProductSortProps {
	value: SortOptionKey;
	onSortChange: (option: SortOptionKey) => void;
}

export interface IProductProps {
	product: IProduct;
}

export interface ProductModalProps {
	product: IProduct | null;
	isOpen: boolean;
	onClose: () => void;
}

export interface IProductListProps {
	products: IProduct[];
}

export interface IProductsPageProps {
	selectedCategory: string;
	searchTerm: string;
	sortby: ISortByOption;
	openProductModal: (product: IProduct) => void;
}

export interface IProductsState {
	items: IProduct[];
	cursor: string | null;
	hasNextPage: boolean;
	pending: boolean;
	error: string | null;
	filters: {
		category: string;
		search: string;
		sortby: ISortByOption;
	};
	modal: {
		isOpen: boolean;
		selectedProduct: IProduct | null;
	};
}

export interface ICategoriesState {
	items: ICategory[];
	pending: boolean;
	error: string | null;
}

export interface IFetchProductsParams {
	first?: number;
	after?: string | null;
	category?: string | null;
	search?: string | null;
	sortby?: ISortByOption;
	replace?: boolean;
}
