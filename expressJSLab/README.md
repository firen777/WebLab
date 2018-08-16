Beginner Guide from: https://www.youtube.com/watch?v=gnsO8-xJ8rs&t=2s

Note from comment:
> for people watching: express-validator middleware (42:55) no longer requires the long middleware
> statement. You just need this:
> ```
> app.use(expressValidator());
> ```

> NOTE:
> This video uses express-validator v2, but the current is v4. Instead of trying to find the error 
> formatter code that he uses, just insert :
> ```
> // express validator middleware
> app.use(expressValidator()); 
> ```
> Then continue with the rules code he  puts into the app.post.