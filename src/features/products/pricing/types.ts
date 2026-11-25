/**
 * Shared TypeScript types for Rocky Lens product variant pricing and selectors.
 */

export interface VariantOption {
  id: string;
  name: string;
  subTitle?: string;
  coating?: string;
  sphRange?: string;
  cylRange?: string;
  addRange?: string;
  color?: string;
  price: number; // in VNĐ
  formattedPrice: string;
  badge?: string;
}

export interface SelectorGroup {
  id: string;
  label: string;
  type: 'index' | 'subproduct' | 'power_range' | 'color' | 'add';
  options: {
    id: string;
    label: string;
    sub?: string;
    badge?: string;
  }[];
}

export interface ProductPricingSchema {
  slug: string;
  productName: string;
  track: 'feature' | 'need';
  categoryLabel: string;
  selectorGroups: SelectorGroup[];
  variants: VariantOption[];
  calculatePrice: (selected: Record<string, string>) => {
    price: number;
    formattedPrice: string;
    matchedVariant?: VariantOption;
    summaryLines: { label: string; value: string }[];
  };
}
