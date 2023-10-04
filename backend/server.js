const express = require("express");
const app = express()

app.use(express.json());

// remember to reset server to update database

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
        },
        {
            "key": "Person3-Test", 
            "username": "Person3", 
            "header": "Test", 
            "postText": "123", 
            "likes": 20
        }
    ]
};

app.get("/posts", (req, res) => {

    res.json(test);
    //console.log(req.body);
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

app.get("/posts/:key", (req, res) => {
    // res.send(req.params);
    // console.log(req.params);
    // for (post of test.posts) {
    //     console.log(posts);
    //     if (post.key == req.params) {
    //         console.log("yea");
    //         //res.json(post);
    //     }
    // }

    // console.log(test.posts);
    for (const post of test.posts) {
        console.log(post.key == req.params.key);
        console.log(post.key, "   ", req.params.key);
        if (post.key === req.params.key) {
            res.send(post);
            console.log(post);
            break;
        }
        //console.log(req.params.key);
    }
    //res.json(test.posts[key] ===);
})

app.post("/posts", (req, res) => {
    
    //test["posts"].push(req.body);
    //console.log("here", test["posts"]);
    
    //res.json(test);
})

app.listen(5000, () => {
    console.log("server started on port 5000");
});