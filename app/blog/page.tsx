"use client";
import { useState } from "react";
import { Navbar } from "@/components/ui/NavBar/navbar";
import LightRays from "@/components/ui/LightRays/lightRays";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
  image: string;
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt: "Learn best practices for structuring React apps that can grow with your needs.",
    content: "In this comprehensive guide, we explore the essential patterns and practices for building React applications that scale. From component architecture to state management, we cover everything you need to know to build maintainable and performant applications. We'll discuss code splitting, lazy loading, and optimization techniques that have proven effective in production environments.",
    author: "Jane Developer",
    date: "2026-02-20",
    category: "React",
    readTime: 8,
    image: "🚀",
    featured: true,
  },
  {
    id: 2,
    title: "TypeScript Tips and Tricks",
    excerpt: "Master advanced TypeScript patterns to write more robust code.",
    content: "TypeScript has become the standard for building large-scale JavaScript applications. In this article, we dive deep into advanced TypeScript features including generics, utility types, and conditional types. Learn how to leverage these powerful features to catch bugs early, improve IDE support, and write self-documenting code that's easier to maintain.",
    author: "John TypeScript",
    date: "2026-02-18",
    category: "TypeScript",
    readTime: 10,
    image: "📘",
    featured: true,
  },
  {
    id: 3,
    title: "Modern CSS Grid and Flexbox",
    excerpt: "Create responsive layouts with modern CSS layout techniques.",
    content: "CSS has evolved significantly over the years. Modern layout techniques like CSS Grid and Flexbox have revolutionized how we build responsive designs. This guide covers the fundamentals and advanced techniques for both Grid and Flexbox, with practical examples and interactive demos. Learn how to create flexible, responsive layouts without relying on frameworks.",
    author: "CSS Master",
    date: "2026-02-15",
    category: "CSS",
    readTime: 7,
    image: "🎨",
    featured: true,
  },
  {
    id: 4,
    title: "Web Performance Optimization Strategies",
    excerpt: "Improve your site's performance and user experience with proven optimization strategies.",
    content: "Performance is crucial for user experience and SEO. This detailed guide covers various optimization strategies including code splitting, tree shaking, lazy loading, and image optimization. We'll explore tools and metrics that help identify bottlenecks and demonstrate how to implement solutions that significantly improve your site's performance metrics.",
    author: "Performance Pro",
    date: "2026-02-12",
    category: "Performance",
    readTime: 12,
    image: "⚡",
    featured: false,
  },
  {
    id: 5,
    title: "State Management Beyond Redux",
    excerpt: "Explore alternative approaches to managing application state.",
    content: "While Redux is powerful, it's not always the best choice for every project. This article explores various state management solutions including Context API, Zustand, Jotai, and Recoil. We compare their strengths and weaknesses, and provide guidance on choosing the right tool for your specific use case. Learn when to use each approach and how to implement them effectively.",
    author: "State Manager",
    date: "2026-02-10",
    category: "React",
    readTime: 9,
    image: "🔄",
    featured: false,
  },
  {
    id: 6,
    title: "Testing React Components Like a Pro",
    excerpt: "Write comprehensive tests for your React components using modern testing tools.",
    content: "Testing is an often-overlooked aspect of development, but it's crucial for maintaining code quality. This comprehensive guide covers testing strategies for React components using Jest, React Testing Library, and Cypress. We discuss unit testing, integration testing, and end-to-end testing, with practical examples and best practices for writing tests that provide real value.",
    author: "Test Master",
    date: "2026-02-08",
    category: "Testing",
    readTime: 11,
    image: "✅",
    featured: false,
  },
];

export default function Blogs() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "React", "TypeScript", "CSS", "Performance", "Testing"];
  
  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((p) => p.category === selectedCategory);

  return (
    <div className="relative text-white min-h-screen">
      {/* Fixed LightRays background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#740580"
          raysSpeed={1.5}
          lightSpread={2}
          rayLength={5}
          followMouse={false}
          mouseInfluence={0.1}
          noiseAmount={0.5}
          distortion={0.05}
          className="custom-rays w-full h-full"
        />
      </div>
      <div className="fixed top-5 z-20 w-full">
        <Navbar username="Blog" />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen pt-32 px-4 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-[#F2C447] to-[#FF1D68] bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-gray-400 text-xl mb-12">
            Insights, tutorials, and thoughts on web development, React, TypeScript,
            and everything in between.
          </p>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#F2C447] to-[#FF1D68] text-black"
                    : "border border-[#740580] text-white hover:border-[#F2C447]"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group cursor-pointer bg-gradient-to-br from-[#740580] from-opacity-10 to-[#740580] to-opacity-5 border border-[#740580] border-opacity-20 rounded-xl overflow-hidden hover:border-opacity-50 transition-all duration-300"
              >
                {/* Featured Badge */}
                {post.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#F2C447] to-[#FF1D68] text-black text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}

                {/* Image */}
                <div className="w-full h-40 bg-gradient-to-br from-[#F2C447] to-[#FF1D68] bg-opacity-10 group-hover:bg-opacity-20 transition-all flex items-center justify-center text-6xl">
                  {post.image}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs px-3 py-1 bg-[#740580] bg-opacity-30 text-[#F2C447] rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs px-3 py-1 bg-[#FF1D68] bg-opacity-20 text-[#FF1D68] rounded-full">
                      {post.readTime} min read
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#F2C447] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-[#740580] border-opacity-20">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <span className="text-[#F2C447] group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                No posts found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Post Detail Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-gray-900 rounded-xl max-w-3xl w-full border border-[#740580] border-opacity-30 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-48 bg-gradient-to-br from-[#F2C447] to-[#FF1D68] bg-opacity-10 flex items-center justify-center sticky top-0">
              <div className="text-7xl">{selectedPost.image}</div>
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 text-white hover:text-[#F2C447] transition-colors bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="flex gap-2 mb-4">
                <span className="text-xs px-3 py-1 bg-[#740580] bg-opacity-30 text-[#F2C447] rounded-full">
                  {selectedPost.category}
                </span>
                <span className="text-xs px-3 py-1 bg-[#FF1D68] bg-opacity-20 text-[#FF1D68] rounded-full">
                  {selectedPost.readTime} min read
                </span>
              </div>

              <h2 className="text-4xl font-bold text-white mb-4">
                {selectedPost.title}
              </h2>

              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-[#915EFF] border-opacity-20">
                <div>
                  <p className="text-sm font-semibold text-[#40ffaa]">
                    {selectedPost.author}
                  </p>
                  <p className="text-xs text-gray-500">{selectedPost.date}</p>
                </div>
              </div>

              <article className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
                <p className="mb-6 text-lg">{selectedPost.content}</p>
                
                <div className="mt-8 p-6 border-l-4 border-[#F2C447] bg-[#740580] bg-opacity-10">
                  <h3 className="text-lg font-bold text-[#F2C447] mb-2">Key Takeaways</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Implementation patterns for {selectedPost.category}</li>
                    <li>Best practices and industry standards</li>
                    <li>Real-world examples and case studies</li>
                    <li>Practical tips you can apply immediately</li>
                  </ul>
                </div>
              </article>

              {/* Share Section */}
              <div className="mt-8 pt-8 border-t border-[#740580] border-opacity-20">
                <h3 className="text-lg font-bold mb-4">Share this article</h3>
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-[#740580] bg-opacity-20 text-[#F2C447] rounded-lg hover:bg-opacity-40 transition-all">
                    Twitter
                  </button>
                  <button className="px-4 py-2 bg-[#740580] bg-opacity-20 text-[#F2C447] rounded-lg hover:bg-opacity-40 transition-all">
                    LinkedIn
                  </button>
                  <button className="px-4 py-2 bg-[#740580] bg-opacity-20 text-[#F2C447] rounded-lg hover:bg-opacity-40 transition-all">
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-[#740580] border-opacity-20 py-8 px-4 text-center text-gray-400">
        <p>&copy; 2026 Developer. All rights reserved.</p>
      </footer>
    </div>
  );
}
