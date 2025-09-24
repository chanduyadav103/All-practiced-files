## 8. `<figure>` & `<figcaption>`

### Explanation

The `<figure>` element is used to wrap **self-contained media or illustrations** (like images, charts, code snippets, or diagrams) that are referenced in the main content.
The `<figcaption>` provides a **caption or description** for that media.

- A `<figure>` can be placed anywhere in the document, and it doesn’t break the flow of the main text.
- `<figcaption>` must be inside `<figure>` (either before or after the media).
- It improves accessibility and SEO by pairing the content with a descriptive caption.

---

### Example

```html
<article>
  <h2>Growth of Web Technologies</h2>
  <p>The chart below shows how JavaScript usage has grown over the years.</p>

  <figure>
    <img
      src="js-growth-chart.png"
      alt="JavaScript usage growth chart from 2010 to 2025"
    />
    <figcaption>
      Figure 1: Growth in JavaScript adoption worldwide (2010–2025)
    </figcaption>
  </figure>
</article>
```

---

### Real-Time Usage

- **Blogs**: Add diagrams or screenshots with captions.
- **News articles**: Embed images with captions describing the photo.
- **Research papers**: Graphs, charts, or tables with references.
- **Portfolios**: Showcase designs, code snippets, or product images.

---

### In Template Context

Now let’s enhance our **Projects section** with a `<figure>` and `<figcaption>`.

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
        display: flex;
        flex-direction: column;
        min-height: 100vh;
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
        display: flex;
        gap: 2rem;
        flex: 1;
        padding: 1rem;
      }
      section {
        margin-bottom: 2rem;
        padding: 1rem;
        background: #fafafa;
        border-radius: 8px;
        flex: 2;
      }
      article {
        padding: 1rem;
        margin-bottom: 1rem;
        border: 1px solid #ddd;
        border-radius: 6px;
        background: #fff;
      }
      aside {
        flex: 1;
        padding: 1rem;
        background: #f0f8ff;
        border-radius: 8px;
      }
      figure {
        margin: 1rem 0;
      }
      figcaption {
        font-size: 0.85rem;
        color: #555;
        text-align: center;
        margin-top: 0.5rem;
      }
      footer {
        text-align: center;
        font-size: 0.9rem;
        margin-top: auto;
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
      <div style="flex: 2;">
        <section id="projects">
          <h2>Projects</h2>

          <article>
            <h3>Portfolio Website</h3>
            <p>A personal website to showcase my projects and experience.</p>

            <figure>
              <img
                src="portfolio-screenshot.png"
                alt="Screenshot of my portfolio homepage"
                width="100%"
              />
              <figcaption>
                Figure 1: Homepage of my Portfolio Website (2025)
              </figcaption>
            </figure>

            <footer>
              <p>Created in 2025 · HTML, CSS, JS</p>
            </footer>
          </article>

          <article>
            <h3>Blog Platform</h3>
            <p>A blog engine built with HTML5, CSS3, and JavaScript.</p>

            <figure>
              <img
                src="blog-platform.png"
                alt="Screenshot of blog platform interface"
                width="100%"
              />
              <figcaption>Figure 2: Blog management dashboard</figcaption>
            </figure>

            <footer>
              <p>Created in 2024 · React + Node.js</p>
            </footer>
          </article>
        </section>
      </div>
    </main>

    <footer>
      <p>&copy; 2025 My Portfolio. All rights reserved.</p>
      <p>
        <a href="mailto:me@example.com">me@example.com</a> |
        <a href="#">Privacy Policy</a>
      </p>
    </footer>
  </body>
</html>
```

---
