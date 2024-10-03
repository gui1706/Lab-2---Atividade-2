# Sistema de Citações de Anime - Exemplo de Arquitetura Limpa

Este projeto demonstra a implementação de um sistema simples de citações de anime usando os princípios da Arquitetura Limpa em JavaScript.

## Estrutura do Projeto

O projeto está organizado nas seguintes camadas:

- Domain: Contém as entidades e interfaces do repositório.
- Application: Contém os casos de uso da aplicação.
- Infrastructure: Implementa o repositório com um banco de dados em memória.
- Presentation: Contém o controlador que interage com a camada de aplicação.

## Como Executar

1. Certifique-se de ter o Node.js instalado em seu sistema.
2. Clone este repositório.
3. Navegue até o diretório do projeto.
4. Execute o seguinte comando no terminal:

   ```
   node index.js
   ```

Isso executará o aplicativo e exibirá uma citação aleatória de anime no console.

## Extensões Possíveis

- Adicionar mais citações ao repositório em memória.
- Implementar um repositório que use um banco de dados real.
- Criar uma interface de usuário (CLI ou Web) para interagir com o sistema.