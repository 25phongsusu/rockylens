/**
 * Facade tương thích ngược cho hệ thống tính giá và theme màu sắc sản phẩm.
 * Code đã được tách theo module trong `./pricing/*` và `./product-themes`.
 */

import { ProductPricingSchema } from './pricing/types';
import { FEATURE_PRICING_SCHEMAS } from './pricing/feature-pricing';
import { NEED_PRICING_SCHEMAS } from './pricing/need-pricing';

export type {
  VariantOption,
  SelectorGroup,
  ProductPricingSchema,
} from './pricing/types';

export {
  FEATURE_THEMES,
  getProductTheme,
} from './product-themes';
export type { FeatureTheme } from './product-themes';

export const PRICING_SCHEMAS: Record<string, ProductPricingSchema> = {
  ...FEATURE_PRICING_SCHEMAS,
  ...NEED_PRICING_SCHEMAS,
};

/**
 * Lấy cấu hình giá & bộ chọn cho sản phẩm theo slug
 */
export function getProductPricingConfig(slug: string): ProductPricingSchema | null {
  return PRICING_SCHEMAS[slug] || null;
}
