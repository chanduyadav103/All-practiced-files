# Semantic Tags in HTML5

Semantic tags describe the meaning of the content they contain. Instead of using only `<div>` and `<span>`, semantic tags allow developers to create structured, accessible, and SEO-friendly layouts.

---

## Common Semantic Tags with Explanations

1. **`<header>`** – Represents the top section of a page or a section; usually contains the logo, navigation, or introductory content.
2. **`<nav>`** – Defines a navigation block for menus and links to other sections/pages.
3. **`<main>`** – Represents the main, unique content of the document (only one per page).
4. **`<section>`** – Groups related content together, often with a heading (e.g., About, Services, Projects).
5. **`<article>`** – Defines independent, self-contained content such as blogs, news posts, or forum entries.
6. **`<aside>`** – Represents side content such as ads, sidebars, or related links.
7. **`<footer>`** – Bottom section of a page or article (includes copyright, contact info, links).
8. **`<figure>`** – Groups visual content (images, charts, code snippets).
9. **`<figcaption>`** – Provides a caption for a `<figure>`.
10. **`<mark>`** – Highlights important text.
11. **`<time>`** – Represents time/date in machine-readable format.
12. **`<address>`** – Provides contact details for individuals or organizations.

---

## Real-Time Usage Examples

### Example 1: Website Layout

```html
<header>
  <h1>My Portfolio</h1>
  <nav>
    <a href="#about">About</a> | <a href="#projects">Projects</a> |
    <a href="#contact">Contact</a>
  </nav>
</header>

<main>
  <section id="about">
    <h2>About Me</h2>
    <p>I am a web developer specializing in frontend technologies.</p>
  </section>

  <section id="projects">
    <h2>Projects</h2>
    <article>
      <h3>Personal Blog</h3>
      <p>A blog built with HTML, CSS, and JavaScript.</p>
    </article>
  </section>
</main>

<footer>
  <p>&copy; 2025 My Portfolio</p>
</footer>
```

_Usage: Personal portfolio website with structured sections._

---

### Example 2: Blog Post

```html
<article>
  <header>
    <h2>How to Learn HTML</h2>
    <time datetime="2025-09-06">September 6, 2025</time>
  </header>
  <p>
    HTML is the foundation of web development. Start with the basics and
    practice daily.
  </p>
  <footer>
    <p>Written by John Doe</p>
  </footer>
</article>
```

_Usage: Blog or news article where each post is an independent unit._

---

### Example 3: Online Store Product Page

```html
<main>
  <article>
    <h2>Wireless Headphones</h2>
    <figure>
      <img src="headphones.jpg" alt="Wireless Headphones" />
      <figcaption>Wireless Headphones - Black Edition</figcaption>
    </figure>
    <p>High-quality sound with noise cancellation.</p>
    <p>Price: $120</p>
  </article>

  <aside>
    <h3>Related Products</h3>
    <ul>
      <li><a href="#">Bluetooth Speaker</a></li>
      <li><a href="#">Earbuds</a></li>
    </ul>
  </aside>
</main>
```

_Usage: E-commerce product page with related items in the sidebar._

---

### Example 4: Contact Information

```html
<footer>
  <h2>Contact Us</h2>
  <address>
    Email: <a href="mailto:info@example.com">info@example.com</a><br />
    Phone: +91 98765 43210<br />
    Location: Hyderabad, India
  </address>
</footer>
```

_Usage: Footer with company contact details for accessibility and SEO._

---

## Visual Diagram of a Typical HTML Layout

```
+---------------------------------------------------+
|                     <header>                      |
|   Logo | Navigation Links (Home, About, Contact)  |
+---------------------------------------------------+
|                     <main>                        |
|   +-----------------------+   +-----------------+ |
|   |       <article>       |   |     <aside>     | |
|   | Blog Post / Products  |   | Related Links   | |
|   | or Main Content Area  |   | Ads / Side Info | |
|   +-----------------------+   +-----------------+ |
+---------------------------------------------------+
|                     <footer>                      |
|  © 2025 Company Name | Contact Info | Policies    |
+---------------------------------------------------+
```

---

## Benefits of Semantic Tags

1. **Accessibility** – Screen readers can understand content meaning.
2. **SEO Optimization** – Search engines rank structured content better.
3. **Readability** – Developers can quickly understand page structure.
4. **Consistency** – Encourages clean and standard layouts.
