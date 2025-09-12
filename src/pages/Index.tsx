import { Header } from "@/components/Header";
import { CategorySection } from "@/components/CategorySection";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Zap, Clock } from "lucide-react";
import { trendingProducts } from "@/data/products";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Discover What's Hot in Japan
              <span className="block text-3xl font-normal mt-2 opacity-90">
                Before It Hits Your Country
              </span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Curated trending products from Japan's hottest categories. 
              From Tokyo's streets to your doorstep.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Real-time trends
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Curated daily
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Before global launch
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <CategorySection />

      {/* Trending Now Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              🔥 Trending Right Now
            </h2>
            <p className="text-muted-foreground">
              The hottest products taking Japan by storm
            </p>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-trending-hot/10 text-trending-hot border-trending-hot/20">
              🔥 Hot
            </Badge>
            <Badge variant="outline" className="bg-trending-rising/10 text-trending-rising border-trending-rising/20">
              📈 Rising
            </Badge>
            <Badge variant="outline" className="bg-trending-popular/10 text-trending-popular border-trending-popular/20">
              ⭐ Popular
            </Badge>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-smooth">
            Load More Trending Products
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Trending Products</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">Daily</div>
              <p className="text-muted-foreground">Fresh Updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">TrendNow</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Your gateway to discovering Japanese trends before they go global
          </p>
          <p className="text-sm text-muted-foreground">
            © 2025 TrendNow. Discover what Japan loves, delivered worldwide.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
