
const router = require('express').Router();

// set up the openai api
const openai = require('openai');
const configuration = new openai.Configuration({
    organization: process.env.OPENAI_ORG,
    apiKey: process.env.OPENAI_API_KEY
});
const openaiapi = new openai.OpenAIApi(configuration);

router.post('/', async (req, res) => {
    try {
        // get the books from the request body
        const books = req.body.books;

        // check that the books are valid
        if (!books || !Array.isArray(books) || books.length < 1) { 
            res.status(400).json({error: "Please provide a list of books to base recommendations on, in the format {books: [\"book1\", \"book2\", ...]}."});
            return;
        }

        // create the message to send to the openai api
        const message = "Please recommend 10 books for me to read that I might like, considering I enjoy the following books: " + books.join(", ");

        // send the message to the openai api
        const completion = await openaiapi.createChatCompletion(
            {
                model: "gpt-3.5-turbo",
                messages:  [{"role": "user", "content": message}],
                temperature: 0.6
            }
        );

        // return the recommendations
        res.status(200).json({recommendations: completion.data.choices[0].message.content.split("\n")});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
module.exports = router;