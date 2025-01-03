# What is EJS ?

>[!TIP]
>EJS (Embedded JavaScript) is a simple templating language that lets you generate HTML with JavaScript. It is commonly used in Node.js applications to create dynamic web pages by embedding JavaScript code directly within HTML. EJS helps developers easily render data from the server into views by combining logic and templates.

## Key Features of EJS:
### 1.Templating Syntax:
- <%= %>: Outputs escaped content (safe for HTML).
- <%- %>: Outputs raw, unescaped content.
- <% %>: Executes JavaScript code without output.
### 2.Separation of Concerns:
- EJS allows developers to maintain separate template files, keeping logic and presentation clean and modular.
### 3.Ease of Use:
- Integrates seamlessly with Express.js and other Node.js frameworks.
- Provides a familiar syntax for those used to JavaScript.
### 4.Conditional Rendering:
- You can use if, for, and other JavaScript logic to control how the content is displayed.
### 5.Partial Templates:
- Includes reusable components with <%- include('partial.ejs') %> for efficient template management.

## Examples
app.js(Node.js)
```javascript
const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // Set EJS as the templating engine

app.get('/', (req, res) => {
  res.render('index', { name: 'Bek' }); // Pass data to the template
});

app.listen(3000, () => console.log('Server running on port 3000'));
```
index.ejs
```html
<!DOCTYPE html>
<html>
<head>
  <title>Welcome</title>
</head>
<body>
  <h1>Hello, <%= name %>!</h1>
</body>
</html>

```
output
When you visit http://localhost:3000, the page will render:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Welcome</title>
</head>
<body>
  <h1>Hello, Bek!</h1>
</body>
</html>
```
