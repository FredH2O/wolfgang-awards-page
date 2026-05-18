import { ArrowUpRight } from "lucide-react";

function NewsCard({ post }) {
  return (
    <article className="flex flex-col justify-between h-150 p-6 rounded-2xl border">
      {/* Top */}
      <div className="flex items-center justify-start gap-3 text-sm">
        <p className="font-medium">{post.author}</p>

        <div className="flex items-center gap-1">
          <span>🕒</span>
          <p>{post.readTime} min read</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex items-end justify-between gap-4">
        <h3 className="text-2xl font-bold">{post.title}</h3>

        <button className="text-2xl border rounded-full p-2">
          <ArrowUpRight size={20} />
        </button>
      </div>
    </article>
  );
}

export default NewsCard;
