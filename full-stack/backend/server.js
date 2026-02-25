import express from 'express';

const app = express();

app.get('/',(req, res) => {
    res.send('Server is ready');
});

app.get('/api/jokes', (req, res) => {
    const jokes =[
        {
            id: 1,
            title: '1st Joke',
            Content: 'This is a joke'
        },

         {
            id: 2,
            title: '2nd Joke',
            Content: 'This is a joke'
        },

         {
            id: 3,
            title: '3rd Joke',
            Content: 'This is a joke'
        },

         {
            id: 4,
            title: '4th Joke',
            Content: 'This is a joke'
        },

         {
            id: 5,
            title: '5th Joke',
            Content: 'This is a joke'
        },

         {
            id: 6,
            title: '6th Joke',
            Content: 'This is a joke'
        },
    ];
    res.send(jokes)
});

const port = process.env.PORT || 3000; 

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);    
})