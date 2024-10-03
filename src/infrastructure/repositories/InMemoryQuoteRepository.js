class InMemoryQuoteRepository extends QuoteRepository {
  constructor() {
    super();
    this.quotes = [
      new Quote(
        1,
        "Naruto Uzumaki",
        "Eu nunca volto atrás na minha palavra, esse é o meu jeito ninja!",
        "Naruto"
      ),
      new Quote(
        2,
        "Edward Elric",
        "Um coração feito de aço é necessário para um alquimista.",
        "Fullmetal Alchemist"
      ),
      new Quote(
        3,
        "Monkey D. Luffy",
        "Se você não arriscar sua vida, você não pode criar um futuro.",
        "One Piece"
      ),
      new Quote(4, "Light Yagami", "Eu sou a justiça!", "Death Note"),
      new Quote(5, "Saitama", "Ok.", "One Punch Man"),
    ];
  }

  getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[randomIndex];
  }
}
