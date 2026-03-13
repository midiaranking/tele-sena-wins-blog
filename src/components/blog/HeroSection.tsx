import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { getFeaturedPosts } from "@/data/posts";

const HeroSection = () => {
  const featured = getFeaturedPosts();
  const main = featured[0];
  const secondary = featured.slice(1, 3);

  if (!main) return null;

  return (
    <section className="bg-primary/5 py-8 md:py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main featured */}
          <Link
            to={`/post/${main.slug}`}
            className="lg:col-span-2 group relative rounded-lg overflow-hidden aspect-[16/9] lg:aspect-auto lg:min-h-[400px]"
          >
            <img
              src={main.image}
              alt={main.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent text-accent-foreground rounded-full mb-3">
                {main.category}
              </span>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary-foreground mb-3 leading-tight">
                {main.title}
              </h1>
              <p className="text-sm text-primary-foreground/80 mb-3 line-clamp-2 max-w-2xl">
                {main.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                Ler artigo <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          {/* Secondary featured */}
          <div className="flex flex-col gap-6">
            {secondary.map((post) => (
              <Link
                key={post.id}
                to={`/post/${post.slug}`}
                className="group relative rounded-lg overflow-hidden flex-1 min-h-[180px]"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block px-2.5 py-0.5 text-xs font-semibold bg-accent text-accent-foreground rounded-full mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-base font-bold text-primary-foreground line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <span className="text-xs text-primary-foreground/70 flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
