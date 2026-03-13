import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PostCard from "./PostCard";
import type { Post, Category } from "@/data/posts";

interface ThematicSectionProps {
  category: Category;
  posts: Post[];
  altBg?: boolean;
}

const ThematicSection = ({ category, posts, altBg }: ThematicSectionProps) => {
  if (posts.length === 0) return null;

  return (
    <section className={`py-10 ${altBg ? "bg-secondary" : "bg-background"}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">{category.name}</h2>
          <Link
            to={`/categoria/${category.slug}`}
            className="text-sm font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all"
          >
            Ver todos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThematicSection;
