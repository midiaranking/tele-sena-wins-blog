import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { posts, categories, getPostsByCategory } from "@/data/posts";
import PostCard from "./PostCard";
import BannerCTA from "./BannerCTA";
import NewsletterWidget from "./NewsletterWidget";

const Sidebar = () => {
  const topPosts = posts.slice(0, 5);

  return (
    <aside className="space-y-8">
      {/* Most read */}
      <div className="mx-[8px]">
        <h3 className="text-xl font-bold text-foreground mb-4 pb-2 border-b-2 border-primary">
          Mais Lidos
        </h3>
        <div className="space-y-4">
          {topPosts.map((post) => (
            <PostCard key={post.id} post={post} variant="small" />
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <BannerCTA />

      {/* Newsletter */}
      <NewsletterWidget />

      {/* Categories */}
      <div className="bg-card rounded-xl ts-shadow p-5">
        <h3 className="text-xl font-bold text-foreground mb-4 pb-2 border-b-2 border-primary">
          Categorias
        </h3>
        <ul className="divide-y divide-border">
          {categories.map((cat) => {
            const count = getPostsByCategory(cat.slug).length;
            return (
              <li key={cat.slug}>
                <Link
                  to={`/categoria/${cat.slug}`}
                  className="group flex items-center justify-between py-3 px-2 text-sm text-foreground hover:text-primary transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-medium truncate">{cat.name}</span>
                    <span className="shrink-0 text-xs text-muted-foreground bg-secondary rounded-full px-2 py-0.5">
                      {count}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;