import { useState } from "react";
import {useLoaderData, useParams} from 'react-router-dom';
import articles from '../article-content.js';
import axios from "axios";
import CommentsList from "../CommentsList.jsx";
import AddCommentForm from "../AddCommentForm.jsx";

export default function ArticlePage() {

    const { name } = useParams();
    const { upvotes: initialUpvotes, comments: initialComments } = useLoaderData();
    const [upvotes, setUpvotes] = useState(initialUpvotes);
    const [comments, setComments] = useState(initialComments);

    const article = articles.find(article => article.name === name);

    async function onUpvoteClicked() {
        const response = await axios.post('/api/articles/' + name + '/upvote');
        const updatedArticleData = response.data;
        setUpvotes(updatedArticleData.upvotes);
    }

    async function onAddComment({ nameText, commentText }) {
        const response = await axios.post('/api/articles/' + name + '/comments', {
            postedBy: nameText,
            text: commentText,
        });
        const updatedArticleData = response.data;
        setComments(updatedArticleData.comments);
    }

    return (
        <>
            <h1>{article.title}</h1>
            <button onClick={onUpvoteClicked}>Upvote</button>
            <p>This article has {upvotes} upvotes!</p>
            {article.content.map(article => <p key={article}>{article}</p>)}
            <AddCommentForm onAddComment={onAddComment} />
            <CommentsList comments={comments} />
        </>
    )
}

export async function articleLoader({params}) {
    const response = await axios.get('/api/articles/' + params.name, {});
    const {upvotes, comments} = response.data;
    return {upvotes, comments};
}
