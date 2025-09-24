## 2. `<nav>`

### Explanation

`<nav>` identifies a block of **primary navigation links**. You can use multiple `<nav>` elements on a page (e.g., a main site menu, a footer menu, an in-page table of contents). Do not wrap every link on the page in `<nav>`—reserve it for major navigation sections.

Key points:

- Prefer lists (`<ul><li>`) for groups of links.
- Add an accessible name (e.g., `aria-label="Primary"` or a visible heading).
- Mark the current page with `aria-current="page"` on the active link.

---

### Example

```html
<nav aria-label="Primary">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/projects">Projects</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

Secondary navigation (e.g., in-page table of contents):

```html
<nav aria-label="On this page">
  <ul>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#requirements">Requirements</a></li>
    <li><a href="#installation">Installation</a></li>
  </ul>
</nav>
```

---

### Real-Time Usage

- **Global site menu** in the header for primary sections.
- **Sidebar** navigation for documentation or dashboards.
- **Footer** navigation for legal and utility links (Privacy, Terms, Sitemap).
- **In-page** table of contents for long articles.

---

### In Template Context

Below is the evolving template with `<header>` (from previous step) and a proper `<nav>`. We’ll keep expanding this file as we proceed through tags.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Semantic HTML5 Template</title>
    <style>
      /* Minimal visuals to verify structure */
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
    </style>
  </head>
  <body>
    <header>
      <h1>My Portfolio</h1>

      <!-- Primary navigation -->
      <nav aria-label="Primary">
        <ul>
          <li><a href="/" aria-current="page">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <!-- More sections will be added as we progress (main, section, article, aside, etc.) -->
  </body>
</html>
```
