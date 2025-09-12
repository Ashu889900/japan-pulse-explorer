import { Book, Shirt, Sparkles, Smartphone, Home, Package } from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  count: number;
}

const categories: Category[] = [
  { id: 'books', name: 'Books', icon: Book, count: 124 },
  { id: 'fashion', name: 'Fashion', icon: Shirt, count: 89 },
  { id: 'beauty', name: 'Beauty', icon: Sparkles, count: 67 },
  { id: 'tech', name: 'Tech', icon: Smartphone, count: 156 },
  { id: 'home', name: 'Home', icon: Home, count: 93 },
  { id: 'lifestyle', name: 'Lifestyle', icon: Package, count: 78 }
];

export const CategorySection = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Discover Trending Categories
        </h2>
        <p className="text-muted-foreground">
          Explore what's hot in Japan across different product categories
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <div
              key={category.id}
              className="group bg-card border border-border rounded-lg p-6 text-center hover:shadow-card-hover hover:border-primary/50 transition-smooth cursor-pointer"
            >
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                <IconComponent className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-smooth">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.count} trending
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};