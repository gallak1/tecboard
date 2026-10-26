# Tecboard

O **Tecboard** é um projeto de estudos desenvolvido com **React 19 e Vite**. A aplicação simula um catálogo de eventos de tecnologia: cada evento tem nome, data, categoria por stack e uma capa visual escolhida entre as imagens disponíveis no projeto. O formulário permite cadastrar eventos, que são exibidos em listas agrupadas por tema.

O projeto foi criado para praticar os fundamentos do React e do desenvolvimento frontend. Nesta versão, os eventos ficam somente no estado da aplicação: são perdidos ao recarregar a página. A interface permite criar e consultar eventos; edição, exclusão e persistência em banco de dados não fazem parte da implementação atual.

## Tecnologias

- [React 19](https://react.dev/) e React DOM
- [Vite](https://vite.dev/) para desenvolvimento e build
- TypeScript e JSX/TSX
- CSS
- Node.js e npm

## Como executar

É necessário ter o [Node.js](https://nodejs.org/) instalado. O npm é instalado junto com ele.

1. Clone o repositório e acesse a pasta do projeto:

   ```bash
   git clone <url-do-repositorio>
   cd tecboard
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra no navegador o endereço informado pelo Vite, normalmente `http://localhost:5173`.

Para validar a versão de produção localmente:

```bash
npm run build
npm run preview
```

O comando `npm run build` executa a verificação TypeScript e gera os arquivos prontos para publicação na pasta `dist`.

## Publicação na Vercel

1. Envie o projeto para um repositório no GitHub.
2. Acesse a [Vercel](https://vercel.com/), entre com sua conta e importe o repositório.
3. Confirme as configurações do projeto:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Clique em **Deploy**. A Vercel também pode reconstruir e publicar o projeto automaticamente a cada atualização enviada ao GitHub.

## Aprendizados aplicados

### Projeto e fluxo de desenvolvimento

- **Inicialização com Vite:** configurar corretamente a estrutura, os scripts e as dependências cria uma base leve e rápida para desenvolver uma aplicação React.
- **Node.js no frontend:** embora a aplicação rode no navegador, o Node.js permite executar ferramentas como Vite, npm, TypeScript e ESLint durante o desenvolvimento e a compilação.
- **HMR:** o *Hot Module Replacement* atualiza módulos no navegador durante o desenvolvimento, acelerando a visualização das mudanças sem exigir uma recarga completa da página a cada edição.
- **Build de produção:** `npm run build` compila e otimiza os arquivos da aplicação para publicação, gerando a saída estática em `dist`.

### React, JSX e componentes

- **JSX e abordagem declarativa:** JSX descreve a interface com uma sintaxe semelhante a HTML dentro do JavaScript/TypeScript. Em vez de manipular elementos diretamente de forma imperativa, o código declara a interface desejada e o React a atualiza conforme os dados mudam.
- **Transformação e renderização:** o JSX é transformado em chamadas que criam elementos React (por exemplo, por meio do runtime JSX); o React compara as mudanças na árvore de elementos e atualiza o DOM real de forma eficiente.
- **Boas práticas de JSX:** expressões JavaScript são escritas entre chaves, elementos devem ser fechados e cada componente deve retornar uma estrutura válida. Atributos e nomes de propriedades seguem as convenções do React.
- **Componentes reaproveitáveis:** a interface é dividida em componentes, como formulário, botão, banner e card de evento, que encapsulam partes específicas e podem ser combinados para montar a página.
- **Props e `children`:** propriedades permitem personalizar componentes com dados e funções. A propriedade especial `children` recebe o conteúdo colocado entre as tags de um componente, permitindo composições flexíveis.
- **Destructuring e spread:** o destructuring facilita extrair valores de objetos e props. O spread (`...`) permite repassar propriedades e, neste projeto, também criar novas listas ao atualizar o estado sem modificar o array existente.
- **Organização modular:** manter componentes e estilos em arquivos separados facilita localizar, reutilizar e evoluir cada parte da aplicação.

### Estilos e recursos visuais

- **CSS responsivo e Flexbox:** estilos aplicados por componente organizam o layout e ajudam a interface a se adaptar a diferentes tamanhos de tela.
- **Imagens estáticas:** arquivos em `public` podem ser referenciados por seus caminhos públicos, enquanto recursos em `src/assets` podem ser importados pelos módulos da aplicação.
- **Fontes externas e controles:** o projeto incorpora fontes do Google Fonts e pratica a criação e estilização de elementos de interface, como botões, campos e listas suspensas.

### Dados, formulários e estado

- **Arrays de objetos:** eventos e temas são representados como objetos JavaScript organizados em arrays, facilitando o agrupamento e a exibição das informações.
- **Renderização de listas:** o método `map` transforma os dados em componentes React. A propriedade `key` identifica cada item e ajuda o React a reconciliar as listas com eficiência.
- **Destructuring de objetos:** extrair propriedades dos objetos de evento e tema deixa o acesso aos dados mais claro nos componentes.
- **Formulários e `FormData`:** a submissão do formulário coleta os valores preenchidos, que são convertidos nos dados usados para criar um novo evento.
- **Funções como props:** o formulário recebe uma função do componente principal e a chama ao ser enviado, comunicando o novo evento para a lista.
- **Estado com `useState`:** o estado mantém os eventos exibidos pela aplicação e provoca uma nova renderização quando é atualizado.
- **Imutabilidade:** em vez de alterar diretamente o array existente, o spread cria uma nova lista com os dados anteriores e o novo evento. `push` é útil para adicionar itens a arrays comuns, mas mutar diretamente um array guardado no estado não é a forma recomendada de atualizá-lo no React.
- **Renderização condicional:** `some` verifica se existe algum evento em determinada categoria; assim, a interface pode exibir apenas os temas que têm eventos.
- **Datas e diagnóstico:** métodos de localização, como `toLocaleString` e `toLocaleDateString`, formatam datas conforme a região. As mensagens do console ajudam a localizar erros e diagnosticar problemas durante o desenvolvimento.

## Estrutura principal

```text
src/
  components/   # Componentes React e seus estilos
  App.tsx       # Estado dos eventos e composição da página
  App.css       # Estilos da aplicação
  main.tsx      # Inicialização do React
public/
  card-covers/  # Capas dos cards de evento
  banner.png    # Imagem do banner
```
