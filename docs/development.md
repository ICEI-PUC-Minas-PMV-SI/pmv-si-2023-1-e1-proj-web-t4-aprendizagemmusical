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

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |

