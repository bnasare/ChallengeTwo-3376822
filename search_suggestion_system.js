
class SearchSuggestionSystem {
  constructor(products) {
    this.products = [...products].sort(); // Clone and sort the list
  }

  getSuggestions(searchWord) {
    const results = [];
    for (let i = 1; i <= searchWord.length; i++) {
      const currentPrefix = searchWord.substring(0, i);
      const suggestions = this.findMatchingProducts(currentPrefix);
      results.push(suggestions);
    }
    return results;
  }

  findMatchingProducts(prefix) {
    const matches = [];
    for (const product of this.products) {
      if (product.startsWith(prefix)) {
        matches.push(product);
        if (matches.length === 3) break;
      }
    }
    return matches;
  }
}

// Test function similar to the Dart version
function testSearchSystem() {
  const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
  const searchSystem = new SearchSuggestionSystem(products);
  const searchWord = "mouse";

  console.log(`🔍 Searching for: "${searchWord}"`);
  console.log("Available products:", products);
  console.log("\n--- Step by step suggestions ---");

  const suggestions = searchSystem.getSuggestions(searchWord);
  for (let i = 0; i < suggestions.length; i++) {
    const typedSoFar = searchWord.substring(0, i + 1);
    console.log(`User types "${typedSoFar}" → Suggestions: [${suggestions[i].join(', ')}]`);
  }

  console.log("\n--- Final result format ---");
  console.log(suggestions);
}

// Another test case
function testWithMon() {
  console.log("\n" + "=".repeat(50));
  console.log('Testing with "mon":');
  const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
  const system = new SearchSuggestionSystem(products);
  const suggestions = system.getSuggestions("mon");

  for (let i = 0; i < suggestions.length; i++) {
    const prefix = "mon".substring(0, i + 1);
    console.log(`"${prefix}" → [${suggestions[i].join(', ')}]`);
  }
}

// Run the tests
testSearchSystem();
testWithMon();
