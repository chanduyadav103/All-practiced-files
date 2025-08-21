### 1. What is CSS?

- **Definition:** CSS (Cascading Style Sheets) is used to style HTML elements by applying layout, colors, fonts, etc.
- **Code:**

  ```css
  h1 {
    color: blue;
  }
  ```

---

### 2. What is SCSS?

- **Definition:** SCSS (Sassy CSS) is a syntax of Sass that adds variables, nesting, mixins, and functions to CSS.
- **Code:**

  ```scss
  $primary: blue;

  h1 {
    color: $primary;
  }
  ```

---

### 3. How do you link CSS to an HTML file?

- **Definition:** Use the `<link>` tag inside `<head>`.
- **Code:**

  ```html
  <link rel="stylesheet" href="styles.css" />
  ```

---

### 4. What’s the difference between CSS and SCSS?

| Feature     | CSS               | SCSS                        |
| ----------- | ----------------- | --------------------------- |
| Syntax      | Plain             | Superset of CSS             |
| Variables   | Limited (`--var`) | Advanced (`$var`)           |
| Nesting     | No                | Yes                         |
| Logic/Loops | No                | Yes (e.g., `@for`, `@each`) |
| Compilation | Not required      | Needs to be compiled to CSS |

---

### 5. How do you comment in CSS vs. SCSS?

- **CSS:**

  ```css
  /* This is a comment */
  ```

- **SCSS:**

  ```scss
  // Single-line (not compiled)
  /* Multi-line (compiled) */
  ```

---

### 6. What are CSS selectors?

- **Definition:** CSS selectors target HTML elements to apply styles.
- **Examples:**

  ```css
  p {
  } /* Type selector */
  .class {
  } /* Class selector */
  #id {
  } /* ID selector */
  ```

---

### 7. How do you use variables in SCSS?

- **Definition:** Variables store reusable values like colors or spacing.
- **Code:**

  ```scss
  $primary-color: #3498db;

  body {
    color: $primary-color;
  }
  ```

---

### 8. What is the box model in CSS?

- **Definition:** The box model describes how margin, border, padding, and content make up an element’s space.
- **Diagram (Visual Order):** `Margin → Border → Padding → Content`

---

### 9. How do you center a div horizontally in CSS?

- **Code:**

  ```css
  .center {
    margin: 0 auto;
    width: 50%;
  }
  ```

---

### 10. What is `!important` in CSS?

- **Definition:** Overrides all other conflicting styles, even inline ones.
- **Code:**

  ```css
  p {
    color: red !important;
  }
  ```

---

### 11. What is nesting in SCSS?

- **Definition:** Nesting lets you define child styles inside parent selectors.
- **Code:**

  ```scss
  nav {
    ul {
      li {
        a {
          color: red;
        }
      }
    }
  }
  ```

---

### 12. What are mixins in SCSS?

- **Definition:** Mixins store reusable chunks of CSS that accept parameters.
- **Code:**

  ```scss
  @mixin flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box {
    @include flexCenter;
  }
  ```

---

### 13. How does SCSS inheritance work?

- **Definition:** Reuse styles with `@extend`.
- **Code:**

  ```scss
  .btn {
    padding: 10px;
  }

  .btn-primary {
    @extend .btn;
    background: blue;
  }
  ```

---

### 14. What’s the difference between `em` and `rem` units?

| Unit  | Relative To                       |
| ----- | --------------------------------- |
| `em`  | Parent element’s font-size        |
| `rem` | Root element’s font-size (`html`) |

---

### 15. What is BEM methodology in CSS?

- **Definition:** Block Element Modifier – naming convention to write clean, reusable CSS.
- **Example:**

  ```html
  <button class="btn btn--primary btn__icon"></button>
  ```

---

### 16. How do you create a responsive grid with CSS?

- **Code (Flexbox):**

  ```css
  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .col {
    flex: 1 0 30%;
  }
  ```

---

### 17. What’s the difference between `display: none` and `visibility: hidden`?

| Property             | Result                      |
| -------------------- | --------------------------- |
| `display: none`      | Element removed from layout |
| `visibility: hidden` | Space remains, just hidden  |

---

### 18. How do you use `@media` queries in SCSS?

- **Code:**

  ```scss
  .box {
    width: 100%;

    @media (min-width: 768px) {
      width: 50%;
    }
  }
  ```

---

### 19. What are pseudo-classes vs. pseudo-elements?

| Type           | Example    | Purpose                          |
| -------------- | ---------- | -------------------------------- |
| Pseudo-class   | `:hover`   | Apply styles on a state          |
| Pseudo-element | `::before` | Style specific parts of elements |

---

### 20. How do you optimize CSS performance?

- **Tips:**

  - Minify CSS files
  - Remove unused styles (tree-shaking)
  - Use shorthand properties
  - Avoid deep nesting

---

### 21. How does SCSS compilation work?

- **Definition:** SCSS files are compiled into standard CSS using tools like `sass`, `webpack`, or `gulp`.

---

### 22. What are partials in SCSS?

- **Definition:** SCSS files starting with `_` that are meant to be imported into main files.
- **Example:**

  ```scss
  // _variables.scss
  $color: red;
  ```

---

### 23. What’s the difference between `@use` and `@import` in SCSS?

| Feature    | `@import` | `@use`                          |
| ---------- | --------- | ------------------------------- |
| Reuse      | Yes       | Yes                             |
| Namespace  | No        | Yes (default namespace applied) |
| Deprecated | Yes       | No                              |

---

### 24. How do you create a theme system with SCSS?

- **Code:**

  ```scss
  $light-theme: (
    bg: #fff,
    text: #000,
  );

  .theme-light {
    background: map-get($light-theme, bg);
    color: map-get($light-theme, text);
  }
  ```

---

### 25. What are CSS custom properties (variables)?

- **Definition:** Native CSS variables using `--` prefix.
- **Code:**

  ```css
  :root {
    --main-color: green;
  }

  body {
    color: var(--main-color);
  }
  ```

---

### 26. Compare SCSS variables vs. CSS variables

| Feature           | SCSS (`$var`)         | CSS (`--var`)      |
| ----------------- | --------------------- | ------------------ |
| Scope             | Static (compile-time) | Dynamic (run-time) |
| JavaScript Access | No                    | Yes                |
| Theming           | Less flexible         | More flexible      |

---

### 27. How do you debug SCSS compilation errors?

- **Tips:**

  - Check line number and file
  - Ensure all brackets/semicolons are closed
  - Use `--watch` for live error feedback

---

### 28. What is `@content` in SCSS mixins?

- **Definition:** Inserts passed block of styles into a mixin.
- **Code:**

  ```scss
  @mixin card {
    border: 1px solid #ccc;
    @content;
  }

  .box {
    @include card {
      background: white;
    }
  }
  ```

---

### 29. How do you prevent CSS global scope pollution?

- **Tips:**

  - Use BEM naming
  - SCSS modules
  - Isolate styles with scoped selectors

---

### 30. What’s the difference between Flexbox and Grid?

| Property  | Flexbox         | CSS Grid            |
| --------- | --------------- | ------------------- |
| Direction | 1D (row/column) | 2D (row and column) |
| Layout    | Content-based   | Container-based     |

---

### 31. How do you write a loop in SCSS?

- **Code:**

  ```scss
  @for $i from 1 through 3 {
    .m-#{$i} {
      margin: $i * 10px;
    }
  }
  ```

---

### 32. What is `@at-root` in SCSS?

- **Definition:** Removes nested selector to place style at root level.
- **Code:**

  ```scss
  .parent {
    @at-root .child {
      color: red;
    }
  }
  ```

---

### 33. How do you use maps in SCSS?

- **Code:**

  ```scss
  $colors: (
    primary: #333,
    secondary: #666,
  );

  body {
    color: map-get($colors, primary);
  }
  ```

---

### 34. What’s the purpose of `@debug` in SCSS?

- **Definition:** Prints debug info during compilation.
- **Code:**

  ```scss
  $var: 100px;
  @debug $var;
  ```

---

### 35. How do you handle dark/light mode with SCSS?

- **Code:**

  ```scss
  $dark-theme: (
    bg: #000,
    text: #fff,
  );
  $light-theme: (
    bg: #fff,
    text: #000,
  );

  [data-theme="dark"] {
    background: map-get($dark-theme, bg);
    color: map-get($dark-theme, text);
  }

  [data-theme="light"] {
    background: map-get($light-theme, bg);
    color: map-get($light-theme, text);
  }
  ```

---
