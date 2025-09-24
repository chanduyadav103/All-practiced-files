## 10. `<address>`

### Explanation

The `<address>` element is used to provide **contact information** for the nearest `<article>` or the entire website.

- Can include **email, phone, physical address, social links**.
- Not for arbitrary text; it should represent **author/owner contact details**.
- Usually placed in a **footer**, but can appear in an article if it refers to that author.

---

### Example

For a website footer:

```html
<footer>
  <address>
    Contact: <a href="mailto:info@example.com">info@example.com</a><br />
    Phone: +91 98765 43210<br />
    Location: Hyderabad, India
  </address>
</footer>
```

Inside a blog article:

```html
<article>
  <h2>My Travel Blog</h2>
  <p>Sharing my travel experiences around the world.</p>
  <footer>
    <address>
      Written by: Jane Doe<br />
      Email: <a href="mailto:jane@example.com">jane@example.com</a>
    </address>
  </footer>
</article>
```

---

### Real-Time Usage

- **Website footers**: Company or personal contact info.
- **Blog posts**: Author information.
- **E-commerce sites**: Support contact info in footer.
- **Documentation pages**: Contact details for contributors or maintainers.

---

### In Template Context

Adding `<address>` to our semantic template footer:

```html
<footer>
  <p>&copy; 2025 My Portfolio. All rights reserved.</p>
  <address>
    Email: <a href="mailto:me@example.com">me@example.com</a><br />
    Phone: +91 98765 43210<br />
    Location: Hyderabad, India
  </address>
  <p><a href="#">Privacy Policy</a></p>
</footer>
```

This makes the **contact info semantically correct**, accessible, and SEO-friendly.

---
