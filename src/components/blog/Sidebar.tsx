import { posts } from "@/data/posts";
import PostCard from "./PostCard";
import BannerCTA from "./BannerCTA";

const Sidebar = () => {
  const topPosts = posts.slice(0, 5);

  return (
    <aside className="space-y-8">
      {/* Most read */}
      <div className="mx-[8px]">
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
    </aside>
  );
};

export default Sidebar;