import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';

const articleInfo = [
    { name: 'sd', upvotes: 0, comments: [] },
    { name: 'mm', upvotes: 0, comments: [] },
    { name: 'up', upvotes: 0, comments: [] },
]

const app = express();

app.use(express.json());

app.get('/api/articles/:name', async (req, res) => {
   const { name } = req.params;

   const uri = 'mongodb://localhost:27017';

   const client = new MongoClient(uri, {
       serverApi: {
           version: ServerApiVersion.v1,
           strict: true,
           deprecationErrors: true,
       }
   });

   await client.connect();

   const db = client.db('full-stack-react-db');

   const article = await db.collection('articles').findOne({ name });

   res.json(article);
});

app.post('/api/articles/:name/upvote', (req, res) => {
    const article = articleInfo.find(article => article.name === req.params.name);
    article.upvotes += 1;

    res.json(article);
});

app.post('/api/articles/:name/comments', (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;

    const article = articleInfo.find(article => article.name === name);

    article.comments.push({
        postedBy,
        text,
    });

    res.json(article);
})

app.listen(8000, function() {
    console.log('Express server is listening on port 8000');
});
