## 3. `<main>`

### Explanation

The `<main>` element represents the **main content** of the document.

- It should contain the unique content of the page that is directly related to the document’s primary purpose.
- Only **one `<main>`** is allowed per page.
- It must not be a descendant of `<header>`, `<footer>`, `<article>`, `<aside>`, or `<nav>`.
- Screen readers can jump directly to `<main>`, improving accessibility.

---

### Example

```html
<main>
  <h2>Welcome to My Portfolio</h2>
  <p>This is where I showcase my skills and projects.</p>
</main>
```

Nested with sections:

```html
<main>
  <section id="about">
    <h2>About Me</h2>
    <p>
      I’m a frontend developer specializing in semantic HTML, CSS, and
      JavaScript.
    </p>
  </section>

  <section id="projects">
    <h2>Projects</h2>
    <article>
      <h3>Portfolio Website</h3>
      <p>A personal website to showcase my work and experience.</p>
    </article>
  </section>
</main>
```

---

### Real-Time Usage

- On **blogs/news sites**, `<main>` contains the article content (not headers, footers, or ads).
- On **e-commerce sites**, `<main>` contains the product listings or details.
- On **dashboard apps**, `<main>` contains charts, reports, and user data.

---

### In Template Context

Here’s the template updated with `<header>`, `<nav>`, and `<main>` (which includes some content placeholders).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Semantic HTML5 Template</title>
    <style>
      body {
        font-family: system-ui, sans-serif;
        margin: 0;
      }
      header,
      footer {
        padding: 1rem;
        background: #f5f5f5;
      }
      nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 1rem;
      }
      nav a {
        text-decoration: none;
      }
      nav a[aria-current="page"] {
        font-weight: 700;
      }
      main {
        padding: 1rem;
      }
      section {
        margin-bottom: 2rem;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>My Portfolio</h1>
      <nav aria-label="Primary">
        <ul>
          <li><a href="/" aria-current="page">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a frontend developer who enjoys creating semantic and accessible
          web pages.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <article>
          <h3>Portfolio Website</h3>
          <p>A personal website to showcase my projects and experience.</p>
        </article>
        <article>
          <h3>Blog Platform</h3>
          <p>A blog engine built with HTML5, CSS3, and JavaScript.</p>
        </article>
      </section>
    </main>
  </body>
</html>
```
