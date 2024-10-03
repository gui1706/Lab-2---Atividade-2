Sistema de Citações de Anime - Exemplo de Arquitetura Limpa
Visão Geral do Projeto
Este projeto é uma implementação simples de um sistema de citações de anime usando os princípios da Arquitetura Limpa em JavaScript. O objetivo principal é demonstrar como estruturar um aplicativo seguindo os conceitos de separação de responsabilidades e inversão de dependências.
Ideia do Projeto
A ideia central é criar um sistema que possa fornecer citações aleatórias de personagens de anime. Embora seja um exemplo simples, ele ilustra como diferentes componentes de um sistema podem interagir de forma desacoplada, permitindo fácil manutenção e extensibilidade.
Estrutura do Projeto
O projeto está organizado em quatro camadas principais, seguindo os princípios da Arquitetura Limpa:

Domain (Domínio)

Contém as entidades centrais e as interfaces do repositório.
Localização: src/domain/


Application (Aplicação)

Contém os casos de uso da aplicação.
Localização: src/application/


Infrastructure (Infraestrutura)

Implementa as interfaces definidas no domínio, como o repositório.
Localização: src/infrastructure/


Presentation (Apresentação)

Lida com a apresentação dos dados ao usuário.
Localização: src/presentation/



Como o Código Funciona
1. Domain Layer

Quote.js: Define a entidade Quote com propriedades como id, character, text, e anime.
QuoteRepository.js: Define a interface QuoteRepository com o método getRandomQuote().

2. Application Layer

GetRandomQuote.js: Implementa o caso de uso para obter uma citação aleatória, utilizando a interface QuoteRepository.

3. Infrastructure Layer

InMemoryQuoteRepository.js: Implementa QuoteRepository usando um array em memória para armazenar as citações.

4. Presentation Layer

QuoteController.js: Atua como um intermediário entre a camada de aplicação e o usuário, formatando a saída da citação.

5. Ponto de Entrada

index.js: Conecta todas as camadas, criando instâncias das classes necessárias e executando o fluxo principal.

Fluxo de Execução

O InMemoryQuoteRepository é instanciado com algumas citações pré-definidas.
Um caso de uso GetRandomQuote é criado, recebendo o repositório como dependência.
O QuoteController é instanciado, recebendo o caso de uso como dependência.
Quando quoteController.getRandomQuote() é chamado:

O controller chama o caso de uso.
O caso de uso chama o método getRandomQuote() do repositório.
O repositório retorna uma citação aleatória.
O controller formata a citação para exibição.


A citação formatada é exibida no console.

Como Executar

Certifique-se de ter o Node.js instalado em seu sistema.
Clone este repositório.
Navegue até o diretório do projeto.
Execute os seguintes comandos no terminal:
Copynpm install
npm start


Isso executará o aplicativo e exibirá uma citação aleatória de anime no console.
Benefícios desta Arquitetura

Separação de Preocupações: Cada camada tem uma responsabilidade clara e bem definida.
Testabilidade: As dependências são injetadas, facilitando a criação de testes unitários.
Flexibilidade: É fácil trocar implementações (por exemplo, mudar o repositório para usar um banco de dados real) sem afetar outras partes do sistema.
Manutenibilidade: As mudanças em uma camada têm impacto mínimo nas outras.

Possíveis Extensões

Adicionar mais citações ao repositório.
Implementar um repositório que use um banco de dados real (por exemplo, MongoDB ou SQLite).
Criar uma interface de usuário web ou CLI para interagir com o sistema.
Adicionar funcionalidades como busca por personagem ou anime.