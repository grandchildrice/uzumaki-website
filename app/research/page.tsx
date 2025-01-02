import ArticlesList from "@/components/articles-list";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Research() {
  const research_db_id = process.env.NOTION_DATABASE_RESEARCH_ID;
  if (!research_db_id) {
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
      <h1 className="text-4xl font-bold mb-8 text-blue-400">
        Research Outputs
      </h1>
      <div className="grid gap-6">
        <ArticlesList databaseId={research_db_id} style="research" />
      </div>
    </div>
  );
}
