## 5. `<article>`

### Explanation

The `<article>` element represents **self-contained, independent content** that can be reused or distributed outside the page.

- It should make sense on its own (e.g., a blog post, news article, product card).
- Articles can be nested (e.g., a blog `<article>` containing user comment `<article>`s).
- Each `<article>` usually has a heading.

---

### Example

```html
<section id="blog">
  <h2>Latest Blog Posts</h2>

  <article>
    <header>
      <h3>Why Semantic HTML Matters</h3>
      <time datetime="2025-09-06">September 6, 2025</time>
    </header>
    <p>Semantic HTML improves accessibility, SEO, and developer experience.</p>
    <footer>
      <p>Written by John Doe</p>
    </footer>
  </article>

  <article>
    <header>
      <h3>10 Tips for Writing Clean Code</h3>
      <time datetime="2025-08-28">August 28, 2025</time>
    </header>
    <p>Clean code makes projects easier to maintain and scale over time.</p>
    <footer>
      <p>Written by Jane Smith</p>
    </footer>
  </article>
</section>
```

---

### Real-Time Usage

- **News sites**: Each news story is an `<article>`.
- **Blogs**: Each post is an `<article>`.
- **E-commerce**: A product card (title, description, price) is an `<article>`.
- **Forums/Q\&A**: Each user post or answer is an `<article>`.

---

### In Template Context

Here’s our template updated with `<article>` elements inside `<section>`:

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
        padding: 1rem;
        background: #fafafa;
        border-radius: 8px;
      }
      article {
        padding: 1rem;
        margin-bottom: 1rem;
        border: 1px solid #ddd;
        border-radius: 6px;
        background: #fff;
      }
      article header {
        font-size: 0.9rem;
        color: #555;
        margin-bottom: 0.5rem;
      }
      article footer {
        font-size: 0.8rem;
        color: #777;
        margin-top: 0.5rem;
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
          <li><a href="#blog">Blog</a></li>
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

      <section id="blog">
        <h2>Latest Blog Posts</h2>

        <article>
          <header>
            <h3>Why Semantic HTML Matters</h3>
            <time datetime="2025-09-06">September 6, 2025</time>
          </header>
          <p>
            Semantic HTML improves accessibility, SEO, and developer experience.
          </p>
          <footer>
            <p>Written by John Doe</p>
          </footer>
        </article>

        <article>
          <header>
            <h3>10 Tips for Writing Clean Code</h3>
            <time datetime="2025-08-28">August 28, 2025</time>
          </header>
          <p>
            Clean code makes projects easier to maintain and scale over time.
          </p>
          <footer>
            <p>Written by Jane Smith</p>
          </footer>
        </article>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>
          You can reach me at
          <a href="mailto:me@example.com">me@example.com</a>.
        </p>
      </section>
    </main>
  </body>
</html>
```

---
