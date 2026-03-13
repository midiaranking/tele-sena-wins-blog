import { Link } from "react-router-dom";
import { posts, categories } from "@/data/posts";
import PostCard from "./PostCard";
import BannerCTA from "./BannerCTA";
import NewsletterWidget from "./NewsletterWidget";

const Sidebar = () => {
  const topPosts = posts.slice(0, 5);

  return (
    <aside className="space-y-8">
      {/* Most read */}
      <div>
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
      <div>
        <h3 className="text-xl font-bold text-foreground mb-4 pb-2 border-b-2 border-primary">
          Categorias
        </h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat.slug}>
              <Link
                to={`/categoria/${cat.slug}`}
                className="flex items-center justify-between py-2 px-3 text-sm text-ts-text hover:text-primary hover:bg-secondary rounded-lg transition-colors"
              >
                <span>{cat.name}</span>
                <span className="text-xs text-muted-foreground">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
