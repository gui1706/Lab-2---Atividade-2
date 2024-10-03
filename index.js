import { InMemoryQuoteRepository } from './src/infrastructure/repositories/InMemoryQuoteRepository.js';
import { GetRandomQuote } from './src/application/use-cases/GetRandomQuote.js';
import { QuoteController } from './src/presentation/controllers/QuoteController.js';

const quoteRepository = new InMemoryQuoteRepository();
const getRandomQuoteUseCase = new GetRandomQuote(quoteRepository);
const quoteController = new QuoteController(getRandomQuoteUseCase);

console.log(quoteController.getRandomQuote());
