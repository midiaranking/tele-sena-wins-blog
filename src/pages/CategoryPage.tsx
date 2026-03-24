import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BlogLayout from "@/components/blog/BlogLayout";
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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tele-sena-wins-blog.lovable.app/" },
      { "@type": "ListItem", "position": 2, "name": category.name, "item": `https://tele-sena-wins-blog.lovable.app/categoria/${category.slug}` },
    ],
  };

  return (
    <BlogLayout>
      <Helmet>
        <title>{category.name} | Blog da Tele Sena</title>
        <meta name="description" content={category.description} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>
      <section className="py-10">
        <div className="container mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground font-medium">{category.name}</span>
          </nav>

          <h1 className="text-3xl font-extrabold text-foreground mb-3">{category.name}</h1>
          <p className="text-muted-foreground mb-6 max-w-3xl leading-relaxed">{category.description}</p>

          {/* Subcategories as navigation links */}
          {category.subcategories && category.subcategories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {category.subcategories.map((sub) => (
                <Link
                  key={sub.slug}
                  to={`/categoria/${category.slug}/${sub.slug}`}
                  className="px-4 py-2 text-sm font-medium bg-secondary text-foreground rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          )}

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
