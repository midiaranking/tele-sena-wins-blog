import { useParams, Link } from "react-router-dom";
import { Clock, User, ArrowLeft, Share2 } from "lucide-react";
import BlogLayout from "@/components/blog/BlogLayout";
import PostCard from "@/components/blog/PostCard";
import BannerCTA from "@/components/blog/BannerCTA";
import { getPostBySlug, getRelatedPosts, resolveCategory, categories } from "@/data/posts";

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <BlogLayout>
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Post não encontrado</h1>
          <Link to="/" className="text-primary font-semibold hover:underline">
            Voltar ao início
          </Link>
        </div>
      </BlogLayout>
    );
  }

  const related = getRelatedPosts(post);
  const resolvedSlug = resolveCategory(post.categorySlug);
  const resolvedCategory = categories.find(c => c.slug === resolvedSlug);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = post.title;
    const links: Record<string, string> = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    };
    if (platform === "copy") {
      navigator.clipboard.writeText(url);
      return;
    }
    window.open(links[platform], "_blank");
  };

  return (
    <BlogLayout>
      <article className="py-8">
        <div className="container mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">›</span>
            <Link to={`/categoria/${resolvedSlug}`} className="hover:text-primary">
              {resolvedCategory?.name || post.category}
            </Link>
            <span className="mx-2">›</span>
            <span className="text-foreground font-medium line-clamp-1">{post.title}</span>
          </nav>

          {/* Header */}
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent text-accent-foreground rounded-full mb-4">
            {resolvedCategory?.name || post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
            <span>{post.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime} de leitura</span>
          </div>

          {/* Featured image */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-lg mb-8 aspect-video object-cover"
          />

          {/* Content */}
          <div
            className="prose prose-lg max-w-none mb-10
              [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-4
              [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3
              [&_p]:text-ts-text [&_p]:mb-4 [&_p]:leading-relaxed
              [&_.highlight-tip]:bg-[#FFF8E1] [&_.highlight-tip]:border-l-4 [&_.highlight-tip]:border-accent [&_.highlight-tip]:p-4 [&_.highlight-tip]:rounded-r-lg [&_.highlight-tip]:my-6 [&_.highlight-tip]:text-sm
              [&_.highlight-info]:bg-[#E8F0FE] [&_.highlight-info]:border-l-4 [&_.highlight-info]:border-primary [&_.highlight-info]:p-4 [&_.highlight-info]:rounded-r-lg [&_.highlight-info]:my-6 [&_.highlight-info]:text-sm
              [&_.highlight-alert]:bg-[#FFF0F0] [&_.highlight-alert]:border-l-4 [&_.highlight-alert]:border-destructive [&_.highlight-alert]:p-4 [&_.highlight-alert]:rounded-r-lg [&_.highlight-alert]:my-6 [&_.highlight-alert]:text-sm"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author section */}
          <div className="bg-secondary rounded-lg p-6 mb-10 flex items-start gap-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
              <User className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <Link to="/equipe" className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                Por Equipe Tele Sena
              </Link>
              <p className="text-sm text-muted-foreground mt-1">
                Conteúdo revisado e atualizado para te ajudar a cuidar melhor do seu dinheiro.
              </p>
            </div>
          </div>

          {/* Inline CTA */}
          <div className="rounded-lg p-6 mb-10" style={{ background: "var(--ts-gradient-blue)" }}>
            <h3 className="text-xl font-bold text-primary-foreground mb-2">
              Compre sua Tele Sena e concorra a prêmios!
            </h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Não perca a chance de mudar sua vida. Adquira já a sua Tele Sena 2026.
            </p>
            <a
              href="https://telesena.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-ts-yellow transition-colors"
            >
              Comprar agora
            </a>
          </div>

          {/* Share */}
          <div className="flex flex-wrap items-center gap-4 mb-10 pb-8 border-b border-border">
            <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Share2 className="w-4 h-4" /> Compartilhar:
            </span>
            <button onClick={() => handleShare("whatsapp")} className="px-4 py-2 bg-[#25D366] text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">WhatsApp</button>
            <button onClick={() => handleShare("facebook")} className="px-4 py-2 bg-[#1877F2] text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">Facebook</button>
            <button onClick={() => handleShare("twitter")} className="px-4 py-2 bg-foreground text-background text-sm font-medium rounded-lg hover:opacity-80 transition-opacity">Twitter</button>
            <button onClick={() => handleShare("copy")} className="px-4 py-2 bg-secondary text-foreground text-sm font-medium rounded-lg hover:bg-muted transition-colors">Copiar link</button>
          </div>

          {/* Back */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-10"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar ao blog
          </Link>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-10 bg-secondary">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">Posts Relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </BlogLayout>
  );
};

export default PostPage;
