import BlogHeader from "./BlogHeader";
import BlogFooter from "./BlogFooter";

interface BlogLayoutProps {
  children: React.ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <BlogHeader />
      <main className="flex-1">{children}</main>
      <BlogFooter />
    </div>
  );
};

export default BlogLayout;
