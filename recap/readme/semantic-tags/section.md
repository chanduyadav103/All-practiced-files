## 4. `<section>`

### Explanation

The `<section>` element defines a **thematic grouping of related content**, typically with its own heading.

- Use `<section>` when content belongs together under a common theme (e.g., About, Services, Projects).
- Each `<section>` should usually start with a heading (`<h2>`, `<h3>`, etc.).
- Do not use `<section>` just for styling; it should have **semantic meaning**.

---

### Example

```html
<main>
  <section id="about">
    <h2>About Me</h2>
    <p>I’m a frontend developer passionate about clean and accessible code.</p>
  </section>

  <section id="skills">
    <h2>Skills</h2>
    <ul>
      <li>HTML5 & CSS3</li>
      <li>JavaScript (ES6+)</li>
      <li>React & Angular</li>
    </ul>
  </section>
</main>
```

---

### Real-Time Usage

- **Portfolio websites**: “About”, “Projects”, “Contact” as separate sections.
- **E-commerce**: “Product Description”, “Reviews”, “Specifications”.
- **Blogs**: A long article divided into thematic sections (“Introduction”, “Body”, “Conclusion”).

---

### In Template Context

Here’s our evolving template with proper `<section>` elements inside `<main>`.

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
