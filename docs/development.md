# Programação de Funcionalidades

Este documento de desenvolvimento de software tem como objetivo apresentar a seção de Implementação do sistema, a qual descreve a forma como os requisitos funcionais e/ou não funcionais foram implementados. Serão detalhadas as estratégias e abordagens adotadas para construir o sistema de acordo com as necessidades e expectativas definidas nas etapas anteriores do processo de desenvolvimento.

>**Links Referência**:
>
> - Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
> - Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)


## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-018| A tela home deve fornecer uma navegação clara e intuitiva para as principais funcionalidades e seções do aplicativo, como menus, botões ou ícones que levam a outras telas ou recursos. | ALTA | index.html |
|RF-011| Para os exercícios, o usuário poderá escolher entre até três dificuldades. | MEDIA | exercises.html |
|RF-010| O aplicativo deve conter, para iniciantes, exercícios básicos de música. | MEDIA | exercises.html |
|RF-001|O aplicativo deve ter no mínimo dois modos diferentes, um para amadores e iniciantes, e outro para músicos já experientes | ALTA | playground.html |
|RF-002|O aplicativo deverá conter um playground, onde seja possível o usuário interagir com a interface. | ALTA | playground-advanced-mode.html e playground-freeplay-mode.html |
|RF-003|Para o playground, apresentar as notas corretas de acordo com a escolha do usuário. | ALTA | playground-advanced-mode.html e playground-freeplay-mode.html |
|RF-004|Para o playground, ao menos dois instrumentos devem ser apresentados como opções de escolha (violão, piano). | ALTA | playground-advanced-mode.html e playground-freeplay-mode.html |
|RF-005|Para o playground, o usuário poderá fazer o overlapping de no máximo 3 escalas no mesmo tom. | ALTA | playground-advanced-mode.html e playground-freeplay-mode.html |
|RF-006|Para o playground, deve haver uma opção para que o usuário identifique as terças e quintas, de acordo com sua escolha. | ALTA | playground-advanced-mode.html e playground-freeplay-mode.html |
|RF-007|Para o playground, na escolha da interface do violão, o usuário poderá escolher entre afinações padrões, ou criar afinações personalizadas. | ALTA | playground-advanced-mode.html e playground-freeplay-mode.html |
|RF-008|Para o playground, dependendo das notas escolhidas, o aplicativo deverá gerar um código, que ficará disponível ao usuário, para que o mesmo possa guardar suas configurações para usá-las mais tarde. | ALTA | playground-advanced-mode.html e playground-freeplay-mode.html |
|RF-009|Para o playground, haverá um modo de construção de escalas totalmente manual (direcionados para pessoas experientes/professores). | ALTA | playground-advanced-mode.html e playground-freeplay-mode.html|
|RF-012|As sessões de estudo teórico devem ter mais que um parágrafo. | ALTA | theory.html|
|RF-013|Devem ser apresentados ao menos um exemplo durante as sessões de estudo| ALTA | theory.html|
|RF-014|Em todo artigo teórico deve conter uma sintese do assunto abordado e o objetivo pedagógico do conteúdo. | ALTA | theory.html|
|RF-015|Os artigos teóricos devem possuir diagramas e outras representações para elucidar conceitos, incluindo partituras ou outros sistemas de escrita. | ALTA | theory.html|
|RF-016|O usuário poderá escolher de forma personalizada o que gostaria de aprender e os assuntos apresentados devem alinhar-se ao seu objetivo. | ALTA | theory.html|
|RF-017|Poderá ser utilizado recursos de hipermídia como áudio ou vídeo. | ALTA | theory.html|

## Descrição das estruturas:

|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| title | Texto | Define o título da página exibido na barra de título do navegador.  | Aprendizagem Musical                      |
| logo  | Imagem | Link que contém um logotipo e um nome de aplicativo. | Simbolo musical  |
| appName | Texto             | Nome do app                       | Aprendizagem músical   |
| changeTheme | Botão  | Botão para alterar o tema  | dark/light    |
| englishTranslation | Botão  |  Botão para selecionar a tradução para o inglês |      Learn Music Header/Aprenda Música título  |
| portugueseTranslation | Botão  | Botão para selecionar a tradução para o português | Learn Music Header/Aprenda Música título  |
| presentationContent | Texto  | Cabeçalho e subcabeçalho da apresentação cujo texto é definido dinamicamente por meio de scripts | Aprenda Música título/ Aprenda Música subtítulo  |
| buttons | Botão  | Redireciona para as demais telas | Exercicios/ Playground/ Teoria ou Exercicios percepção musical/  Exercicios percepção rítimica/  Exercicios complete a escala |
| difficultySelect | Texto  | Escolha do nivel de dificuldade dos exercicios | Basico/ Avançado/ Intermediário    |
| containerPlay | Texto  | Escolha entre os modos playground | Livre/ Avançado    |

### Funcionalidades do Sistema

A seguir, apresentaremos uma descrição das interfaces desenvolvidas para cada uma das funcionalidades do sistema, juntamente com o respectivo endereço URL e instruções de uso.

#### Responsividade

Para garantir a responsividade [RNF-02] do site, foi realizado um planejamento detalhado para determinar quais tipos de tela o aplicativo deveria suportar. A equipe definiu que a largura mínima seria de 320 pixels e a largura máxima seria de 2560 pixels.

Com base nessa definição, a interface foi implementada utilizando o grid layout e o flexbox, permitindo que os componentes e a estrutura HTML se adaptassem automaticamente ao tamanho da tela do usuário. Essas técnicas garantiram uma experiência consistente e agradável, independentemente do dispositivo utilizado para acessar o site.

Nenhum pré-processador de CSS foi utilizado no projeto. A equipe optou por utilizar recursos nativos, evitando sobrecarregar a estrutura HTML com classes e IDs gerados automaticamente, o que poderia comprometer o desempenho do site. Essa abordagem foi adotada visando garantir uma melhor performance geral do sistema.

Largura da tela: 2560px
**![img-index-pc-responsividade](./img/img-index-pc-responsividade.jpg)** 

Largura da tela: 320px
**![img-index-mobile-responsividade](./img/img-index-pc-responsividade.jpg)** 

#### JavaScript

Para esta entrega, foram criadas duas funcionalidades para a interface do usuário: a opção de trocar o tema da página e a tradução da interface.

**Modo Escuro/Claro**
Para implementar essa funcionalidade, foram necessários conhecimentos de CSS, bem como compreensão do DOM e seus eventos. A funcionalidade consiste em duas etapas: uma automática e outra manual, esta última dependendo da escolha do usuário.

Na solução automática, uma variável é armazenada no localStorage para guardar um valor caso o usuário tenha selecionado algum tema específico. Caso contrário, o tema claro (light) é exibido ao usuário.
No solução manual disponibilizamos ao usuário a opção de trocar o tema manualmente, através de um botão de mudança de tema. Esse botão se adapta ao tema selecionado. Após o clique, a variável no localStorage é atualizada, permitindo que o usuário navegue pelo site com o tema escolhido aplicado em todas as páginas.

Modo light:

**![modo-light](./img/img-index-pc-responsividade.jpg)** 

Modo dark:

**![modo-dark](./img/img-index-pc-responsividade.jpg)** 


**Tradução**

A funcionalidade de tradução da pagina atende aos requisito RNF-07  e RNF-08. Consiste em realizar uma busca no documento, utilizando um atributo personalizado chamado "data-text-node", que descreve a tag em que se encontra. Durante essa busca, é verificado o idioma do navegador por meio da API padrão "navigator", que representa o estado do agente do usuário, incluindo sua linguagem preferida.

Caso o usuário não tenha um idioma definido, o valor padrão é o inglês. No entanto, o usuário pode alterar essa configuração clicando nas bandeiras que representam o idioma desejado. Ao clicar na bandeira dos Estados Unidos, a função de tradução é ativada e todo o texto é traduzido.

Para garantir a manutenção do conteúdo [RNF-08], a tradução é realizada a partir de um arquivo JSON que utiliza o sistema de chave-valor para definir os valores de tradução para os diferentes idiomas. Assim como os temas, a opção de qual tradução usar também é armazenada no localStorage quando selecionada pelo usuário.

É importante mencionar que essa tradução não é realizada por aplicativos de terceiros, mas sim implementada em JavaScript nativo, utilizando os módulos JS, o que proporciona uma programação modular e mais organizada do que o padrão funcional, tornando-a mais fácil de ser mantida.

Arquivo de tradução ingles:

**![ingles-tradutor](./img/img-index-pc-responsividade.jpg)** 

Arquivo de tradução português:

**![portugues-tradutor](./img/img-index-pc-responsividade.jpg)** 
