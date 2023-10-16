### Architecture
- I used express, HTML, Javascript, and Angular for the front end in the application. Personally I much more preffered express over Angular, but that's probably because Angular is still confusing to me, and most personal application I create likely won't require it. I did notice that it does offer certain advantages, and has a better overall code structure for scaling.
- The backend used a NoSQL MongoDB database because it had to persist data. Now why it used this over SQL? I'm not totally sure, but I can confirm json files are a lot easier to work with than a relational database.

### Functionality
- JSON is completely different from Javascript. JSON is for storing information, or configuration files, whereas Javascript is for writing software. You can technically do configurations is Javascript, but persisting data doesn't make any sense in JS. Javascript handles logic on the frontend, an the JSON helps persisting data in the NoSQL database.

### Testing
- Methods are just functions inside of objects, but in this case it seemed they were being used as end points. I didn't like how the application kept re-creating the exact same function over and over again. An example of this was "isLoggedIn()" it was in like 5 places, and I don't know if this is the result of Angular, Endpoints, or just a quick setup maybe? The security was a little confusing, but ultimately it just seemed like I needed to make sure the code is running authentication checks before doing anything.

### Reflection
- I think the most useful skill I gathered in this course is likely MongoDB. I've already used it before, but not this directly. Specifically I've used MongoDB in existing systems, but not from scratch. I'm mostly a backend developer, and after doing this course I think I'd prefer to stay a backend developer lol.
