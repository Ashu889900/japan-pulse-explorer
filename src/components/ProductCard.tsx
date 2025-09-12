import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  reviews: number;
  trendType: 'hot' | 'rising' | 'popular' | 'new';
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const trendConfig = {
  hot: {
    label: '🔥 HOT',
    className: 'bg-trending-hot text-trending-hot-foreground hover:bg-trending-hot/90'
  },
  rising: {
    label: '📈 RISING',
    className: 'bg-trending-rising text-trending-rising-foreground hover:bg-trending-rising/90'
  },
  popular: {
    label: '⭐ POPULAR',
    className: 'bg-trending-popular text-trending-popular-foreground hover:bg-trending-popular/90'
  },
  new: {
    label: '🆕 NEW',
    className: 'bg-trending-new text-trending-new-foreground hover:bg-trending-new/90'
  }
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const trendStyle = trendConfig[product.trendType];

  return (
    <Card className="group bg-gradient-card border border-border shadow-card hover:shadow-card-hover transition-smooth overflow-hidden">
      {/* Product Image */}
      <div className="relative aspect-square bg-muted overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Trend Badge */}
        <Badge className={`absolute top-3 left-3 font-semibold text-xs ${trendStyle.className}`}>
          {trendStyle.label}
        </Badge>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-smooth">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-3">
            {product.description}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.reviews.toLocaleString()})
          </span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-foreground">{product.price}</span>
          <Button size="sm" className="bg-gradient-primary hover:opacity-90 transition-smooth">
            View Product
            <ExternalLink className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </div>
    </Card>
  );
};