## 1. `<header>`

### Explanation

The `<header>` element represents the **introductory section** of a page or a section. It usually contains branding, a logo, navigation menus, or an introductory heading. You can have **multiple headers** on a page — one for the entire site and others for individual `<article>` or `<section>` elements.

---

### Example

```html
<header>
  <h1>My Website</h1>
  <nav>
    <a href="#home">Home</a> | <a href="#about">About</a> |
    <a href="#contact">Contact</a>
  </nav>
</header>
```

---

### Real-Time Usage

- At the top of most websites (site-wide navigation and branding).
- Inside a blog article to show the **title and author details**.
- On e-commerce sites, it contains **logo + menu + search bar**.

---

### In Template Context

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Semantic HTML5 Template</title>
  </head>
  <body>
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <a href="#about">About</a> | <a href="#projects">Projects</a> |
        <a href="#contact">Contact</a>
      </nav>
    </header>
  </body>
</html>
```
