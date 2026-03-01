import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";
import GraphPaperLayout from "@/components/layout/GraphPaperLayout";
import { blogPosts, BlogPost } from "@/data/blogPosts";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileGalleryList from "@/components/gallery/MobileGalleryList";

const TEXT_MAX_WIDTH = "max-w-2xl";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const isMobile = useIsMobile();

  const handleSelectPost = (id: string) => {
    const post = blogPosts.find(p => p.id === id);
    if (post) setSelectedPost(post);
  };

  // Mobile Layout
  if (isMobile) {
    return (
      <GraphPaperLayout>
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <MobileGalleryList
              key="list"
              title="Blog"
              subheader="Thoughts on engineering, technology, and design."
              items={blogPosts.map(p => ({ id: p.id, label: p.label }))}
              onSelect={handleSelectPost}
            />
          ) : (
            <motion.div
              key={selectedPost.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="min-h-screen p-6 pt-8"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-widest text-foreground border border-foreground/30 rounded-full hover:bg-foreground hover:text-background transition-colors mb-6"
              >
                ← Back
              </button>
              <h1 className="text-2xl font-light mb-3">{selectedPost.title}</h1>
              {selectedPost.date && (
                <div className="flex items-center gap-2 text-accent text-sm mb-6">
                  <Calendar className="w-4 h-4" />
                  <span className="font-mono">{selectedPost.date}</span>
                </div>
              )}
              <div className="prose-blog">
                <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </GraphPaperLayout>
    );
  }

  // Desktop Layout
  return (
    <GraphPaperLayout>
      <div className="min-h-screen flex">
        {/* Sticky Sidebar */}
        <aside className="sticky top-0 h-screen w-72 flex-shrink-0 p-8 border-r border-border/30">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-widest text-foreground border border-foreground/30 rounded-full hover:bg-foreground hover:text-background transition-colors"
            >
              ← Back
            </Link>
          </div>

          <h2 className="text-2xl font-bold uppercase tracking-wider text-foreground mb-8">
            Blog
          </h2>

          <nav className="flex flex-col gap-3">
            {blogPosts.map((post, index) => {
              const isActive = selectedPost?.id === post.id;

              return (
                <motion.button
                  key={post.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedPost(post)}
                  className={`text-left text-lg transition-colors duration-200 ${
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {post.label}
                </motion.button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 md:p-12 lg:p-16 overflow-y-auto">
          <AnimatePresence mode="wait">
            {!selectedPost ? (
              <motion.div
                key="initial"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-light mb-4">Blog</h1>
                  <p className={`text-muted-foreground ${TEXT_MAX_WIDTH} leading-relaxed`}>
                    Thoughts on engineering, technology, and design.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={selectedPost.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-light mb-4">{selectedPost.title}</h1>
                  {selectedPost.date && (
                    <div className="flex items-center gap-2 text-accent text-sm mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono">{selectedPost.date}</span>
                    </div>
                  )}
                </div>

                <div className={`prose-blog ${TEXT_MAX_WIDTH}`}>
                  <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </GraphPaperLayout>
  );
};

export default Blog;
