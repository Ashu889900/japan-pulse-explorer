import { Search, Globe, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">TrendNow</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search trending products..."
                className="pl-10 bg-background border-input transition-smooth focus:shadow-trending"
              />
            </div>
          </div>

          {/* Country Selector */}
          <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-lg">
            <Globe className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">🇯🇵 Japan</span>
          </div>
        </div>
      </div>
    </header>
  );
};