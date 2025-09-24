## 9. `<time>`

### Explanation

The `<time>` element represents a **specific period in time**, such as a date, time, or duration.

- Can be **machine-readable** using the `datetime` attribute.
- Improves **accessibility**, **SEO**, and allows scripts to process dates.
- Can represent a **single date**, a **time**, or even a **date range**.

---

### Example

Single date:

```html
<time datetime="2025-09-06">September 6, 2025</time>
```

Single time:

```html
<time datetime="14:30">2:30 PM</time>
```

Date range:

```html
<time datetime="2025-09-01/2025-09-07">Sept 1–7, 2025</time>
```

---

### Real-Time Usage

- **Blog posts**: Published or updated date.
- **Events**: Event date and time on calendars or tickets.
- **News articles**: Timestamp for when the article was posted or updated.
- **Project timelines**: Start and end dates in portfolios or case studies.

---

### In Template Context

Enhancing our **Blog section** with `<time>` for each post:

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
