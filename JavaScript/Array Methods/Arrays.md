### `forEach`

**Description:** Runs a provided function once for each array element. Does not return a value.

```js
// Log each product name from an online store
const products = ["Shirt", "Pants", "Hat"];
products.forEach((item) => console.log(item));
// Output: Shirt, Pants, Hat
```

```js
// Disable all submit buttons during form validation
const buttons = document.querySelectorAll("button.submit");
buttons.forEach((btn) => (btn.disabled = true));
```

**Real-time usage:** On an e-commerce site, disable “Add to Cart” buttons while checking stock for each product.

---

### `map`

**Description:** Transforms every element in an array and returns a new array of the same length.

```js
// Convert item prices from dollars to cents
const prices = [5.99, 12.49, 3.5];
const cents = prices.map((p) => Math.round(p * 100));
// cents → [599, 1249, 350]
```

```js
// Extract email addresses from user objects
const users = [{ email: "a@x.com" }, { email: "b@y.com" }];
const emails = users.map((u) => u.email);
// emails → ['a@x.com', 'b@y.com']
```

**Real-time usage:** Generating a list of thumbnail image URLs from a list of full-size image paths for a gallery.

---

### `reduce`

**Description:** Reduces an array to a single value by applying a function cumulatively to its elements.

```js
// Calculate total order value in a cart
const cart = [{ price: 20 }, { price: 15 }, { price: 30 }];
const total = cart.reduce((sum, item) => sum + item.price, 0);
// total → 65
```

```js
// Build a lookup of usernames by ID
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const lookup = users.reduce((obj, u) => {
  obj[u.id] = u.name;
  return obj;
}, {});
// lookup → { '1': 'Alice', '2': 'Bob' }
```

**Real-time usage:** Summing up all hours logged by a team this week before generating an invoice.

---

### `filter`

**Description:** Returns a new array containing only elements that pass a given test.

```js
// Show only in-stock products
const store = [{ inStock: true }, { inStock: false }];
const available = store.filter((p) => p.inStock);
// available → [{ inStock: true }]
```

```js
// Find high-priority tasks
const tasks = [{ priority: 1 }, { priority: 3 }, { priority: 2 }];
const urgent = tasks.filter((t) => t.priority > 2);
// urgent → [{ priority: 3 }]
```

**Real-time usage:** Filtering search results on a travel site by available dates or budget range.

---

### `some`

**Description:** Tests whether at least one element passes a test. Returns `true` or `false`.

```js
// Check if any seats are sold out
const shows = [{ seatsLeft: 0 }, { seatsLeft: 5 }];
const soldOut = shows.some((s) => s.seatsLeft === 0);
// soldOut → true
```

```js
// Detect if any form field is empty
const fields = ["John", "", "Doe"];
const hasEmpty = fields.some((f) => f.trim() === "");
// hasEmpty → true
```

**Real-time usage:** Before submitting a registration form, confirm that no mandatory field is left blank.

---

### `every`

**Description:** Tests whether all elements pass a test. Returns `true` or `false`.

```js
// Ensure all users are adults
const ages = [21, 30, 18];
const allAdult = ages.every((a) => a >= 18);
// allAdult → true
```

```js
// Confirm all images have loaded
const images = document.querySelectorAll("img.loaded");
const ready = Array.from(images).every((img) => img.complete);
// ready → depends on whether every image is complete
```

**Real-time usage:** On a booking site, allow checkout only if every date in a multi-day reservation is available.

---

### `find`

**Description:** Returns the first element that passes a test, or `undefined` if none do.

```js
// Locate a product by SKU
const products = [{ sku: "A1" }, { sku: "B2" }];
const item = products.find((p) => p.sku === "B2");
// item → { sku: 'B2' }
```

```js
// Find the first error in form validation
const errors = ["", "Invalid email", ""];
const firstError = errors.find((e) => e !== "");
// firstError → 'Invalid email'
```

**Real-time usage:** On login, fetch the user object matching the entered username before checking the password.

---

### `entries`

**Description:** Returns an iterator of `[index, value]` pairs for each element.

```js
// Numbered list of menu items
const menu = ["Home", "About", "Contact"];
for (const [i, name] of menu.entries()) {
  console.log(`${i + 1}. ${name}`);
}
// → 1. Home
//   2. About
//   3. Contact
```

```js
// Convert array to object with numeric keys
const arr = ["x", "y"];
const obj = Object.fromEntries(arr.entries());
// obj → { '0': 'x', '1': 'y' }
```

**Real-time usage:** Rendering chat messages with their sequence number in a messaging app.

---

### `flat`

**Description:** Flattens nested arrays by one level (default).

```js
// One-level flatten of comments and replies
const threads = ["msg1", ["reply1", "reply2"], "msg2"];
const flat = threads.flat();
// flat → ['msg1', 'reply1', 'reply2', 'msg2']
```

```js
// Remove one level of nesting from API response
const data = [
  [1, 2],
  [3, 4],
];
const numbers = data.flat();
// numbers → [1, 2, 3, 4]
```

**Real-time usage:** After fetching grouped search results, flatten them into a single list for display.

---

### `flatMap`

**Description:** Maps each element and then flattens the result by one level.

```js
// Split paragraphs into sentences
const paras = ["Hello world. Hi there"];
const sents = paras.flatMap((p) => p.split(". "));
// sents → ['Hello world', 'Hi there']
```

```js
// Expand each order into individual items
const orders = [{ items: [1, 2] }, { items: [3] }];
const allItems = orders.flatMap((o) => o.items);
// allItems → [1, 2, 3]
```

**Real-time usage:** On a blog platform, generate a combined tag list by extracting tags from each post.

---

### `fill`

**Description:** Fills all or part of an array with a static value.

```js
// Initialize a seating chart with empty seats
const seats = new Array(5).fill("empty");
// seats → ['empty','empty','empty','empty','empty']
```

```js
// Mark a range of days as holidays
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
days.fill("Holiday", 2, 4);
// days → ['Mon','Tue','Holiday','Holiday','Fri']
```

**Real-time usage:** Pre-populate calendar slots before user selects actual times.

---

### `sort`

**Description:** Sorts the array in place; use a comparator for numeric or custom order.

```js
// Sort product prices low to high
const prices = [20, 5, 15];
prices.sort((a, b) => a - b);
// prices → [5, 15, 20]
```

```js
// Alphabetical sort of usernames
const names = ["bob", "alice", "carol"];
names.sort();
// names → ['alice', 'bob', 'carol']
```

**Real-time usage:** Let users toggle product lists by price or name order on an online store.

---

### `slice`

**Description:** Returns a shallow copy of a portion of the array (start inclusive, end exclusive).

```js
// Paginate items 0–9
const allItems = Array.from({ length: 100 }, (_, i) => i + 1);
const page1 = allItems.slice(0, 10);
// page1 → [1,2,…,10]
```

```js
// Get last three notifications
const notes = ["n1", "n2", "n3", "n4", "n5"];
const recent = notes.slice(-3);
// recent → ['n3','n4','n5']
```

**Real-time usage:** In a social feed, fetch and display the next batch of posts when the user scrolls.

---

### `shift`

**Description:** Removes and returns the first element; mutates the array.

```js
// Process next task in queue
const queue = ["t1", "t2", "t3"];
const next = queue.shift();
// next → 't1', queue → ['t2','t3']
```

```js
// Drop header from CSV row
let row = ["header", "data1", "data2"];
row.shift();
// row → ['data1','data2']
```

**Real-time usage:** In a print server, take the oldest print job off the queue to send to the printer.

---

### `unshift`

**Description:** Adds one or more elements to the beginning; returns new length.

```js
// Add emergency alert at start of notifications
let alerts = ["a2", "a3"];
alerts.unshift("a1");
// alerts → ['a1','a2','a3']
```

```js
// Prepend timestamp to logs
let logs = ["entry1", "entry2"];
logs.unshift(new Date().toISOString());
// logs → ['2025-06-16T17:00:00.000Z','entry1','entry2']
```

**Real-time usage:** In a chat app, when a system message arrives it appears at the top of the chat history.

---

### `splice`

**Description:** Adds/removes/replaces elements at a given index; returns removed items.

```js
// Remove and replace menu items
let menu = ["Home", "About", "Contact"];
const removed = menu.splice(1, 1, "Services", "Blog");
// removed → ['About']
// menu → ['Home','Services','Blog','Contact']
```

```js
// Delete two old sessions from session list
let sessions = ["s1", "s2", "s3", "s4"];
sessions.splice(0, 2);
// sessions → ['s3','s4']
```

**Real-time usage:** When editing a playlist, remove outdated tracks and insert new ones at a specific position without rebuilding the whole list.
