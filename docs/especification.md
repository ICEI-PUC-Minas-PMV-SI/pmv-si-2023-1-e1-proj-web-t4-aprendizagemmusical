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

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA |  |
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA | |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
