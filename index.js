const quoteRepository = new InMemoryQuoteRepository();
const getRandomQuote = new GetRandomQuote(quoteRepository);
const quoteController = new QuoteController(getRandomQuote);

console.log(quoteController.getRandomQuote());