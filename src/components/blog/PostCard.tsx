import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import type { Post } from "@/data/posts";

interface PostCardProps {
  post: Post;
  variant?: "default" | "horizontal" | "small";
}

const PostCard = ({ post, variant = "default" }: PostCardProps) => {
  if (variant === "small") {
    return (
      <Link to={`/post/${post.slug}`} className="flex gap-3 group">
        <img
          src={post.image}
          alt={post.title}
          className="w-20 h-20 rounded-lg object-cover shrink-0"
        />
        <div className="min-w-0">
          <h4 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h4>
          <span className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
            <Clock className="w-3 h-3" /> {post.readTime} Leitura
          </span>
        </div>
      </Link>
    );
  }

  if (variant === "horizontal") {
    return (
      <Link
        to={`/post/${post.slug}`}
        className="flex gap-4 group bg-card rounded-lg ts-shadow hover:ts-shadow-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-40 h-32 object-cover shrink-0"
        />
        <div className="py-3 pr-4 min-w-0">
          <span className="inline-block px-2.5 py-0.5 text-xs font-semibold bg-accent text-accent-foreground rounded-full mb-2">
            {post.category}
          </span>
          <h3 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <span className="text-xs text-muted-foreground flex items-center gap-1 mt-2">
            <Clock className="w-3 h-3" /> {post.readTime} Leitura
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/post/${post.slug}`}
      className="group bg-card rounded-lg ts-shadow hover:ts-shadow-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold bg-accent text-accent-foreground rounded-full">
          {post.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors mb-2">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>{post.date}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {post.readTime}
            </span>
          </div>
          <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
            Ler mais <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
