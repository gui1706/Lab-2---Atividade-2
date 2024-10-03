export class QuoteController {
  constructor(getRandomQuote) {
    this.getRandomQuoteUseCase = getRandomQuote;
  }
  getRandomQuote() {
    const quote = this.getRandomQuoteUseCase.execute();
    return `"${quote.text}" - ${quote.character} (${quote.anime})`;
  }
}
