const express = require("express");
const app = express()

app.get("/api", (req, res) => {
    // res.json({
    //     "users": ["userOne", "userTwo", "userThree"],
    //     "work": "hello"
    // });

    res.json({
        "posts": [
            {
                "key": "Person-What-is-the-future?",
                "username": "Person",
                "header": "What is the future?",
                "postText": "AI", 
                "likes": 0
            },
            {
                "key": "Person2-Dogs-are-good-pets", 
                "username": "Person2", 
                "header": "Dogs are good pets", 
                "postText": "Source? me", 
                "likes": 3
            }
        ]
    });

});

app.listen(5000, () => {
    console.log("server started on port 5000");
});