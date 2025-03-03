export interface ProductData {
  access_level: number;
  brand: string;
  brand_img: string;
  disabled: number;
  display_tag: string[];
  image_url: string;
  in_stock_status: boolean;
  item_name: string;
  min_order_qty: number;
  mrp_price: number;
  name: string;
  oem_part_number: string;
  price: number;
  rating: number;
  short_description: string;
  slug: string;
  status: string;
  url: string;
  weight_per_unit: number;
  weight_uom: string;
}

export interface ProductsViewProps {
  loading: boolean;
  listItems: ProductData[];
  filtersData?: any;
  productListTotalCount?: any;
  handleLoadMore?: any;
  wishlistData: any;
  currency_state_from_redux?: any;
  handlePaginationBtn?: any;
  selectLangData?: any;
  selectedMultiLangData?: any;
}

export interface ProductsProps {
  productListTotalCount?: any;
  handleLoadMore?: any;
  loading: boolean;
  product_data: any;
  filtersData: any;
  wishlistData: any;
  handleRenderingOfImages?: any;
  currency_state_from_redux?: any;
  selectedMultiLangData?: any;
}
