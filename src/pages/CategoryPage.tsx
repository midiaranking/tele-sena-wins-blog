import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import BlogLayout from "@/components/blog/BlogLayout";
import CategoryBar from "@/components/blog/CategoryBar";
import PostCard from "@/components/blog/PostCard";
import Sidebar from "@/components/blog/Sidebar";
import { categories, getPostsByCategory } from "@/data/posts";

const POSTS_PER_PAGE = 6;

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  const categoryPosts = slug ? getPostsByCategory(slug) : [];
  const [visible, setVisible] = useState(POSTS_PER_PAGE);

  if (!category) {
    return (
      <BlogLayout>
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Categoria não encontrada</h1>
          <Link to="/" className="text-primary font-semibold hover:underline">
            Voltar ao início
          </Link>
        </div>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout>
      <CategoryBar />

      <section className="py-10">
        <div className="container mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground font-medium">{category.name}</span>
          </nav>

          <h1 className="text-3xl font-extrabold text-foreground mb-2">{category.name}</h1>
          <p className="text-muted-foreground mb-8 max-w-2xl">{category.description}</p>

          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1">
              {categoryPosts.length === 0 ? (
                <p className="text-muted-foreground">Nenhum post encontrado nesta categoria.</p>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {categoryPosts.slice(0, visible).map((post) => (
                      <PostCard key={post.id} post={post} />
                    ))}
                  </div>
                  {visible < categoryPosts.length && (
                    <div className="text-center mt-8">
                      <button
                        onClick={() => setVisible((v) => v + POSTS_PER_PAGE)}
                        className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        Carregar mais
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="w-full lg:w-80 shrink-0">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </BlogLayout>
  );
};

export default CategoryPage;
