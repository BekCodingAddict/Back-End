# What is Pug?

>[!NOTE]
>The Pug template engine (formerly known as Jade) is a template engine for Node.js that simplifies writing HTML. It uses a clean, minimal syntax that eliminates the need for most HTML tags, resulting in more concise code.
> - https://pugjs.org 

## Key Features of Pug:
- Clean Syntax: Pug removes the need for closing tags and repetitive attributes, making the templates more readable and faster to write.
- Dynamic Content: You can embed JavaScript logic directly in the template to dynamically render data.
- Extensibility: Supports loops, conditionals, includes, and mixins (reusable blocks of code).
- Compatible: Converts templates into standard HTML, making them usable in any web browser.

### Example
HTML
```html
<div class="container">
  <h1>Hello, Pug!</h1>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</div>
```
Equivalent Pug:
```pug
.container
  h1 Hello, Pug!
  ul
    li Item 1
    li Item 2
```

## Use Case:
- Dynamic Pages: Rendering server-side HTML with dynamic data, such as user profiles or lists.
- Component-Based Design: Reusable components with mixins.
- Express Integration: Pug is commonly used with the Express.js framework for building web applications.

## Installation:
To use Pug in a Node.js project, you can install it using npm:
```bash
npm install pug
```

## Basic Usage:
1.Set Up in Express:
```javascript
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views'); // Directory for Pug files

app.get('/', (req, res) => {
  res.render('index', { title: 'Home', message: 'Welcome to Pug!' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```
2.Pug Template (views/index.pug):
```pug
doctype html
html
  head
    title= title
  body
    h1= message
```
When you navigate to http://localhost:3000, the rendered page will display "Welcome to Pug!".
