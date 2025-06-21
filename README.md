# Search Suggestion System in JavaScript

This is a JavaScript implementation of a search suggestion system that provides up to **3 product suggestions** for each prefix of a search word. It mimics the behavior of smart search bars like those seen on e-commerce websites.

---

## 📁 File

- `search_suggestion_system.js`: Contains the main class and test functions.

---

## 🚀 How It Works

### Class: `SearchSuggestionSystem`

- **Constructor**
  - Takes an array of product strings.
  - Clones and sorts them lexicographically.

- **Method: `getSuggestions(searchWord)`**
  - Returns a list of lists.
  - Each list contains up to 3 suggestions for each prefix of `searchWord`.

- **Method: `findMatchingProducts(prefix)`**
  - Returns up to 3 products that start with the given prefix.

---

