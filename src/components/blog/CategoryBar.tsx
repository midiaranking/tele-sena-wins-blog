import { Link, useParams } from "react-router-dom";
import { categories } from "@/data/posts";

const CategoryBar = () => {
  const { slug } = useParams();

  return (
    <div className="border-b border-border bg-background">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-2 py-3">
          <Link
            to="/"
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              !slug
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background text-primary border-primary hover:bg-primary/5"
            }`}
          >
            Todos
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/categoria/${cat.slug}`}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                slug === cat.slug
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-primary border-primary hover:bg-primary/5"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
