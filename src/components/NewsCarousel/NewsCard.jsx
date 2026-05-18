import { ArrowUpRight } from "lucide-react";

function NewsCard({ post }) {
  return (
    <article
      className="relative flex text-white flex-col 
    justify-between h-150 p-6 rounded-2xl border overflow-hidden"
    >
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={post.image}
        alt={post.author}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
      {/* Top */}
      <div className="flex items-center justify-start gap-3 text-sm z-10">
        <p className="font-medium">{post.author}</p>

        <div className="flex items-center gap-1">
          <span>🕒</span>
          <p>{post.readTime} min read</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex items-end justify-between gap-4 z-10">
        <h3 className="text-2xl font-bold">{post.title}</h3>

        <button className="text-2xl border rounded-full p-2">
          <ArrowUpRight size={20} />
        </button>
      </div>
    </article>
  );
}

export default NewsCard;
