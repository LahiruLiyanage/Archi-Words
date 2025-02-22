import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';

const articleInfo = [
    { name: 'sd', upvotes: 0, comments: [] },
    { name: 'mm', upvotes: 0, comments: [] },
    { name: 'up', upvotes: 0, comments: [] },
]

const app = express();

app.use(express.json());

let db;

async function connectToDB() {

    const uri = 'mongodb://mongo:mongo@localhost:27017/?authSource=admin';

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    await client.connect();

    db = client.db('full-stack-react-db');
}

app.get('/api/articles/:name', async (req, res) => {
   const { name } = req.params;

   const article = await db.collection('articles').findOne({ name });

   res.json(article);
});

app.post('/api/articles/:name/upvote', async (req, res) => {
    const { name } = req.params;

    const updatedArticle = await db.collection('articles').findOneAndUpdate({ name }, {
        $inc: { upvotes: 1 }
    }, {
        returnDocument: "after"
    });

    res.json(updatedArticle)

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

async function start() {
    await connectToDB();

    app.listen(8000, function() {
        console.log('Express server is listening on port 8000');
    });
}

start();
