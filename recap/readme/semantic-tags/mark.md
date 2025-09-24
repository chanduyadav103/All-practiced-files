## 11. `<mark>`

### Explanation

The `<mark>` element is used to **highlight text** that is relevant or important in the current context.

- Often used to show **search results**, **keywords**, or **emphasized content**.
- Visually highlighted by default (yellow background), but styling can be customized via CSS.
- Should be used **semantically**, not purely for styling.

---

### Example

Highlighting keywords in a blog post:

```html
<p>Learning <mark>HTML5 semantic tags</mark> improves accessibility and SEO.</p>
```

Search results highlighting:

```html
<p>
  You searched for "<mark>frontend developer</mark>", and these results match
  your query.
</p>
```

---

### Real-Time Usage

- **Blogs & articles**: Highlight important terms or concepts.
- **Search results pages**: Highlight matched query terms.
- **Documentation**: Emphasize code snippets or warnings.
- **Tutorials**: Highlight steps, variables, or commands.

---

### In Template Context

Adding `<mark>` to our semantic template to emphasize skills in the About section:

```html
<section id="about">
  <h2>About Me</h2>
  <p>
    I am a frontend developer who enjoys creating <mark>semantic</mark> and
    <mark>accessible</mark> web pages.
  </p>
</section>
```

This visually highlights important terms while keeping them **semantically meaningful**.

---
