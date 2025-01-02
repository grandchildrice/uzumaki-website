import { getArticles } from "@/lib/blog-helper";
import ActivityItem from "../ActivityItem";
import ResearchOutput from "../ResearchOutput";

export default async function ArticlesList({
  databaseId,
  articleType,
  style,
  getRecent,
}: {
  databaseId: string;
  articleType?: string;
  style: string;
  getRecent?: boolean;
}) {
  const page_size = getRecent ? 3 : undefined;
  const articles = await getArticles(
    databaseId,
    { type: articleType },
    page_size
  );
  if (style == "activity") {
    return (
      <>
        {articles.map((article) => (
          <ActivityItem
            key={article.id}
            date={article.publishedAt}
            title={article.title}
            description=""
            link={"/activity/" + article.id}
          />
        ))}
      </>
    );
  } else if (style == "research") {
    return (
      <>
        {articles.map((article) => (
          <ResearchOutput
            key={article.id}
            date={article.publishedAt}
            title={article.title}
            authors={article.author}
            link={"/research/" + article.id}
          />
        ))}
      </>
    );
  } else return <></>;
}
