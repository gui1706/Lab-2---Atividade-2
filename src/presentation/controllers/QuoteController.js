class QuoteController {
  constructor(getRandomQuote) {
    this.getRandomQuote = getRandomQuote;
  }

  getRandomQuote() {
    const quote = this.getRandomQuote.execute();
    return `"${quote.text}" - ${quote.character} (${quote.anime})`;
  }
}
