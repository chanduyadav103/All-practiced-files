## 7. `<footer>`

### Explanation

The `<footer>` element represents **footer content** for its nearest sectioning element (like `<article>`, `<section>`, `<main>`, or the entire `<body>`).

- Usually contains **author info, copyright, links, related documents, or contact info**.
- A page can have **multiple footers**: one global site footer and smaller ones for individual articles or sections.
- Not just for the bottom of the page — an article can also have its own footer.

---

### Example

```html
<article>
  <h2>Understanding Semantic HTML</h2>
  <p>Semantic HTML helps create meaningful structures for web pages.</p>
  <footer>
    <p>
      Written by John Doe · Published on
      <time datetime="2025-09-06">September 6, 2025</time>
    </p>
  </footer>
</article>

<footer>
  <p>&copy; 2025 My Portfolio. All rights reserved.</p>
</footer>
```

---

### Real-Time Usage

- **Website-wide footer**: Contact info, copyright, navigation links, social media.
- **Blog article footer**: Author name, tags, “Read More” links.
- **E-commerce**: Legal disclaimers, payment info, customer service links.

---

### In Template Context

Now let’s add a proper `<footer>` to our semantic template.

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
        <section id="about">
          <h2>About Me</h2>
          <p>
            I am a frontend developer who enjoys creating semantic and
            accessible web pages.
          </p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <article>
            <h3>Portfolio Website</h3>
            <p>A personal website to showcase my projects and experience.</p>
            <footer>
              <p>Created in 2025 · HTML, CSS, JS</p>
            </footer>
          </article>
          <article>
            <h3>Blog Platform</h3>
            <p>A blog engine built with HTML5, CSS3, and JavaScript.</p>
            <footer>
              <p>Created in 2024 · React + Node.js</p>
            </footer>
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
              Semantic HTML improves accessibility, SEO, and developer
              experience.
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
      </div>

      <aside>
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <h3>Tip</h3>
        <p>
          Semantic tags help search engines and screen readers understand your
          site better.
        </p>
      </aside>
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
