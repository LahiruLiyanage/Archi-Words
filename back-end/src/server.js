import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import admin from 'firebase-admin';
import fs from 'fs';

const credentials = JSON.parse(
    fs.readFileSync('./credentials.json', 'utf8')
);

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});

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

app.use(async function(req, res, next) {
    const { authtoken} = req.headers;
        const user = await admin.auth().verifyIdToken(authtoken);
    if (authtoken) {
        res.sendStatus(400);
    }

    next();
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

app.post('/api/articles/:name/comments', async (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;
    const newComment = { postedBy, text };

    const updatedArticle = await db.collection('articles').findOneAndUpdate({ name }, {
        $push: { comments: newComment }
    }, {
        returnDocument: 'after',
    });

    res.json(updatedArticle);
});

async function start() {
    await connectToDB();

    app.listen(8000, function() {
        console.log('Express server is listening on port 8000');
    });
}

start();
