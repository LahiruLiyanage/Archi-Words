import { Link } from 'react-router-dom';
import articles from "../article-content.js";

export default function ArticleListPage() {
    return (
        <>
            <h1>Articles</h1>
            {articles.map(article => (
                <Link key={article.name} to={`/articles/${article.id}`} >
                    <h3>{article.title}</h3>
                    <p>{article.content[0].substring(0,150)}</p>
                </Link>
            ))}
        </>
    );
}
