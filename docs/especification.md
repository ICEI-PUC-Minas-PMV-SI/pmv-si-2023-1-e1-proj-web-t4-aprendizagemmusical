# Especificações do Projeto
<br><br>
Através de uma pesquisa em formato de entrevista, e diante de uma análise geral do problema na perspectiva do usuário, estabeleceram-se as especificações do projeto que foi detalhada na consolidação a seguir.

## Personas
<br><br>
As personas levantadas durante o processo de investigação do problema através de entrevistas com o público alvo estão representadas abaixo:
<br>

    
| **![Marcelo Faria](./img/marcelo_faria.jpg)** |    **Marcelo Faria**                                                                                                                                                                               |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Idade**   | **30**                                                                                                                                                                                    |
| Ocupação          | Psicólogo                                                                                                                                                                                 |
| Motivações        | Gostaria de trazer os benefícios da música para os seus atendimentos                                                                                                                      |
| Frustrações       | Marcelo é a única pessoa na família que não tem conhecimento em relação à música. Marcelo, como um total amador, não consegue aprender em meio a sua família, devido a falta de didática. |
| Hobbies           | Sua família é composta por músicos, por isso, naturalmente adora cantar.                                                                                                                  |
| Aplicativos       | Linkedin, Whatsapp, Kwai, Tidal                                                                                                                                                           |
<br>

| **![Marcelo Faria](./img/sergio_gomes.jpg)**| **Sérgio Gomes**                                                                                                                                 |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
|   **Idade**    | **18**                                                                                                                                     |
| Ocupação         | Estudante                                                                                                                                  |
| Motivações       | Sérgio tem um ídolo e escuta muita música no seu dia-a-dia. Por isso se interessa em aprender sobre os instrumentos utilizados pelo ídolo. |
| Frustrações      | Incapacidade técnica de tocar instrumentos musicais como seu ídolo.                                                                        |
| Hobbies          | Jogos digitais                                                                                                                             |
| Aplicativos      | TikTok, Instagram, WhatsApp, Kwai, Twitter                                                                                                 |
<br>

|**![Maria Vasconcelos](./img/maria_vasconcelos.jpg)**  |  **Maria Vasconcelos**                                                                                             |
|-----------------------|---------------------------------------------------------------------------------------------------------|
|  **Idade**           | **23**                                                                                                  |
| Ocupação              | Estudante                                                                                               |
| Motivações            | Maria quer ser uma músicista profissional no futuro.                                                    |
| Frustrações           | Por falta de recursos, Maria não consegue adentrar no meio onde o Piano ou Saxofone são mais populares. |
| Hobbies               | Ir em eventos como orquestras e conservatórios, opéras e concertos.                                     |
| Aplicativos           | Whatsapp, TikTok, Duolingo, LinkedIn, Kwai, Twitter, Spotify, Deezer                                    |
<br>

| **![Fernanda Couto](./img/fernanda_couto.jpg)**  | **Fernanda Couto**                                                                                                                                                                               |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  **Idade**        | **45**                                                                                                                                                                                      |
| Ocupação           | Professora de educação infantil                                                                                                                                                             |
| Motivações         | Fernanda já toca um instrumento músical, e gostaria de criar suas próprias composições.                                                                                                     |
| Frustrações        | Devido ao tempo, Fernanda não pode fazer cursos presenciais de música. Devido à falta de intuitividade das ferramentas, Fernanda não consegue se aprofundar no seu desenvolvimento músical. |
| Hobbies            | Ir ao cinema, escutar música variadas                                                                                                                                                       |
| Aplicativos        | Whatsapp, Facebook, Shein, LinkedIn, Spotify                                                                                                                                                |
<br>

## Histórias de Usuários
<br><br>
Fundamentadas na pesquisa feita para o desenvolvimento, foram registradas as histórias de
usuários apresentadas a seguir.
<br>


| Eu como…          |                           …quero/desejo…                           |                                  ...para...                                 |
|-------------------|:------------------------------------------------------------------:|:---------------------------------------------------------------------------:|
| Marcelo Faria     | Aprender sobre música e aprender a tocar algum instrumento musical | Como psicólogo, quero utilizar isso como recurso durante meus atendimentos. |
| Maria Vasconcelos | Aprender sobre música clássica e teoria musical gratuitamente      | Não dispõe de recursos para aprender com profissionais da área              |
| Fernanda Couto    | Aprender a criar suas próprias composições                         | Para utilizar esses conhecimentos em suas aulas como professora             |
| Fernanda Couto    | Testar seus conhecimentos através de exercícios                    | Para verificar se está evoluindo em seu aprendizado                         |
| Maria Vasconcelos | Aprender a ler partituras e outras representações musicais         |                                                                             |
| Maria Vasconcelos | aprender a identificar a sonoridade de cada nota musical           |                                                                             |
<br>

## Requisitos
<br><br>

Itens imprescindíveis para a execução do projeto de forma que alcance o fim desejado.
<br>

### Requisitos Funcionais
<br><br>

A tabela a seguir apresenta os requisitos do projeto, descrevendo e identificando as prioridades.
<br><br>

| ID    |                                                                                               Descrição                                                                                               | Prioridade |
|-------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------:|
| RF-01 | O aplicativo deve ter no mínimo dois modos diferentes, um para amadores e iniciantes, e outro para músicos já experientes.                                                                            | Alta       |
| RF-02 | O aplicativo deverá conter um playground, onde seja possível o usuário interagir com a interface.                                                                                                     | Alta       |
| RF-03 | Para o playground, apresentar as notas corretas de acordo com a escolha do usuário.                                                                                                                   | Alta       |
| RF-04 | Para o playground, ao menos dois instrumentos devem ser apresentados como opções de escolha (violão, piano).                                                                                          | Alta       |
| RF-05 | Para o playground, o usuário poderá fazer o overlapping de no máximo 3 escalas no mesmo tom.                                                                                                          | Média      |
| RF-06 | Para o playground, deve haver uma opção para que o usuário identifique as terças e quintas, de acordo com sua escolha.                                                                                | Baixa      |
| RF-07 | Para o playground, na escolha da interface do violão, o usuário poderá escolher entre afinações padrões, ou criar afinações personalizadas.                                                           | Baixa      |
| RF-08 | Para o playground, dependendo das notas escolhidas, o aplicativo deverá gerar um código, que ficará disponível ao usuário, para que o mesmo possa guardar suas configurações para usá-las mais tarde. | Baixa      |
| RF-09 | Para o playground, haverá um modo de construção de escalas totalmente manual (direcionados para pessoas experientes/professores).                                                                     | Alta       |
| RF-10 | O aplicativo deve conter, para iniciantes, exercícios básicos de música.                                                                                                                              | Média      |
| RF-11 | Para os exercícios, o usuário poderá escolher entre até três dificuldades.                                                                                                                            | Média      |
| RF-12 | As sessões de estudo teórico devem ter mais que um parágrafo.                                                                                                                              | Média      |
| RF-13 | Devem ser apresentados ao menos um exemplo durante as sessões de estudo.                                                                                                                            | Média      |
| RF-14 | Em todo artigo teórico deve conter uma sintese do assunto abordado e o objetivo pedagógico do conteúdo.                                                                                                                            | Média      |
| RF-15 | Os artigos teóricos devem possuir diagramas e outras representações para elucidar conceitos, incluindo partituras ou outros sistemas de escrita.                                                                                                                            | Média      |
| RF-16 | O usuário poderá escolher de forma personalizada o que gostaria de aprender e os assuntos apresentados devem alinhar-se ao seu objetivo.                                                                                                                            | Média      |
| RF-17 | Poderá ser utilizado recursos de hipermídia como áudio ou vídeo.                                                                                                                            | Média      |



### Requisitos não Funcionais
<br><br>

A tabela a seguir apresenta os requisitos não funcionais que o projeto deve possuir.
<br>

| ID     |                                                   Descrição                                                  | Prioridade |
|--------|:------------------------------------------------------------------------------------------------------------:|:----------:|
| RNF-01 | O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku); | Alta       |
| RNF-02 | O site deverá ser responsivo permitindo a visualização em um celular de forma adequada                       | Alta       |
| RNF-03 | O site deve ter bom nível de contraste entre os elementos da tela em conformidade                            | Média      |
| RNF-04 | O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) | Alta       |
| RNF-05 | O site deve possuir recursos de acessibilidade tais como aumento da fonte                                    | Média      |


## Restrições
<br><br>

A tabela a seguir exibe as restrições que se configuram como obrigações claras para o desenvolvimento do projeto.
<br>


| ID  | Descrição |
| ------------- |-------------|
| RE-01 | O projeto deverá seguir o cronograma de entregas proposto, respeitando a data de entrega a cada etapa.     |
| RE-02      | O aplicativo deve se restringir às tecnologias básicas da Web no Frontend.     |
| RE-03      | A equipe não pode subcontratar o desenvolvimento do trabalho.     |
| RE-04      | Devido a restrições de orçamento, serão utilizadas apenas figuras de bancos de imagens gratuitos, como por exemplo o Freepik ou de criação do próprio grupo com as devidas atribuições de crédito e direitos de uso.      |
| RE-05      | Pelo mesmo motivo, utilizaremos uma versão de avaliação/gratuita do provedor de hospedagem.     |

