import { useState } from "react";
import BlogLayout from "@/components/blog/BlogLayout";
import HeroSection from "@/components/blog/HeroSection";
import CategoryBar from "@/components/blog/CategoryBar";
import PostCard from "@/components/blog/PostCard";
import Sidebar from "@/components/blog/Sidebar";
import ThematicSection from "@/components/blog/ThematicSection";
import BannerCTA from "@/components/blog/BannerCTA";
import ContentCarousel from "@/components/blog/ContentCarousel";
import { posts, categories, getPostsByCategory } from "@/data/posts";

const POSTS_PER_PAGE = 6;

const Index = () => {
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);
  const gridPosts = posts.slice(0, visiblePosts);
  const hasMore = visiblePosts < posts.length;

  // Get thematic sections: pick categories that have posts
  const thematicCategories = categories.filter(
    (cat) => getPostsByCategory(cat.slug).length > 0
  ).slice(0, 4);

  return (
    <BlogLayout>
      <HeroSection />
      <CategoryBar />

      {/* Main content grid */}
      <section className="py-10">
        <div className="container mx-auto">
          {/* Large news carousel */}
          <ContentCarousel
            posts={posts.slice(0, 7)}
            title="Últimos Artigos"
          />

          {/* Banner Painel do X */}
          <a
            href="https://telesena.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-8 mt-4 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={bannerPainelX}
              alt="Promoção Comercial Painel do X 2026 - Tele Sena de Carnaval - R$ 22.000.000,00"
              className="w-full h-auto object-cover"
            />
          </a>

          <h2 className="text-2xl font-bold text-foreground mb-6">Todos os Artigos</h2>
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Posts grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 px-0 mx-[12px]">
                {gridPosts.map((post) =>
                <PostCard key={post.id} post={post} />
                )}
              </div>
              {hasMore &&
              <div className="text-center mt-8">
                  <button
                  onClick={() => setVisiblePosts((v) => v + POSTS_PER_PAGE)}
                  className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                  
                    Carregar mais
                  </button>
                </div>
              }
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-80 shrink-0">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

      {/* Content Carousel */}
      <ContentCarousel
        posts={posts.filter((_, i) => i >= 3 && i < 10)}
        title="Explore nossos conteúdos"
      />

      {/* CTA banner */}
      <section className="py-10 bg-secondary">
        <div className="container mx-auto max-w-3xl">
          <BannerCTA />
        </div>
      </section>

      {/* Thematic sections */}
      {thematicCategories.map((cat, i) =>
      <ThematicSection
        key={cat.slug}
        category={cat}
        posts={getPostsByCategory(cat.slug)}
        altBg={i % 2 === 1} />

      )}
    </BlogLayout>);

};

export default Index;