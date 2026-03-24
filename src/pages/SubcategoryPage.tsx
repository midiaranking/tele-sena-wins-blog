import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BlogLayout from "@/components/blog/BlogLayout";
import PostCard from "@/components/blog/PostCard";
import Sidebar from "@/components/blog/Sidebar";
import { categories, getPostsBySubcategory, getSubcategory } from "@/data/posts";

const POSTS_PER_PAGE = 6;

const SubcategoryPage = () => {
  const { slug, subSlug } = useParams<{ slug: string; subSlug: string }>();
  const category = categories.find((c) => c.slug === slug);
  const subcategory = slug && subSlug ? getSubcategory(slug, subSlug) : undefined;
  const subcategoryPosts = slug && subSlug ? getPostsBySubcategory(slug, subSlug) : [];
  const [visible, setVisible] = useState(POSTS_PER_PAGE);

  if (!category || !subcategory) {
    return (
      <BlogLayout>
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Subcategoria não encontrada</h1>
          <Link to="/" className="text-primary font-semibold hover:underline">
            Voltar ao início
          </Link>
        </div>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout>
      <section className="py-10">
        <div className="container mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">›</span>
            <Link to={`/categoria/${category.slug}`} className="hover:text-primary">{category.name}</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground font-medium">{subcategory.name}</span>
          </nav>

          <h1 className="text-3xl font-extrabold text-foreground mb-3">{subcategory.name}</h1>
          <p className="text-muted-foreground mb-6 max-w-3xl leading-relaxed">{subcategory.description}</p>

          {/* Other subcategories in same category */}
          {category.subcategories.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {category.subcategories.map((sub) => (
                <Link
                  key={sub.slug}
                  to={`/categoria/${category.slug}/${sub.slug}`}
                  className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
                    sub.slug === subSlug
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-secondary text-foreground border-border hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  }`}
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1">
              {subcategoryPosts.length === 0 ? (
                <p className="text-muted-foreground">Nenhum post encontrado nesta subcategoria.</p>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {subcategoryPosts.slice(0, visible).map((post) => (
                      <PostCard key={post.id} post={post} />
                    ))}
                  </div>
                  {visible < subcategoryPosts.length && (
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

export default SubcategoryPage;
