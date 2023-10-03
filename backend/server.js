const express = require("express");
const app = express()

const jsonServer = require("json-server");

// app.use("/api", jsonServer.router("db.json"));
// app.listen(3000);
app.use(express.json());

app.get("/posts", (req, res) => {
    console.log(req.body);
    // res.json({
    //     "posts": [
    //         {
    //             "key": "Person-What-is-the-future?",
    //             "username": "Person",
    //             "header": "What is the future?",
    //             "postText": "AI", 
    //             "likes": 0
    //         },
    //         {
    //             "key": "Person2-Dogs-are-good-pets", 
    //             "username": "Person2", 
    //             "header": "Dogs are good pets", 
    //             "postText": "Source? me", 
    //             "likes": 3
    //         }
    //     ]
    // });
});

let test = {
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
};

app.post("/posts", (req, res) => {
    
    test["posts"].push(req.body);
    //console.log("here", test["posts"]);
    
    res.json(test);
})

app.listen(5000, () => {
    console.log("server started on port 5000");
});