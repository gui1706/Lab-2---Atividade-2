class GetRandomQuote {
  constructor(quoteRepository) {
    this.quoteRepository = quoteRepository;
  }

  execute() {
    return this.quoteRepository.getRandomQuote();
  }
}
