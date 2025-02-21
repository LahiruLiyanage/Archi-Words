import { Link } from 'react-router-dom';
import articles from "../article-content.js";
import ArticlesList from "../ArticlesList.jsx";

export default function ArticleListPage() {
    return (
        <>
            <h1>Articles</h1>
            <ArticlesList articles={articles} />
        </>
    );
}
