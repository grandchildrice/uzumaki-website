import ArticlesList from "@/components/articles-list";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Activity() {
  const activity_db_id = process.env.NOTION_DATABASE_ACTIVITY_ID;
  if (!activity_db_id) {
    throw new Error("Internal error.");
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center text-blue-400 hover:underline mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-blue-400">Activity</h1>
      <div className="space-y-8">
        <ArticlesList databaseId={activity_db_id} style="activity" />
      </div>
    </div>
  );
}
