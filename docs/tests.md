# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Os testes de software desempenham um papel fundamental no ciclo de vida do desenvolvimento de software, permitindo a detecção de erros, falhas e comportamentos indesejados.

## Plano de Testes de Software

Aqui exemplificamos alguns testes feitos pautados nos requisitos funcionais e nao funcionais.


**Caso de Teste** | **CT01 - Manter preferências de tema e idioma do usuário**
 :--------------: | ------------
**Procedimento**  | As alterações de tema (dark ou light) e idioma (português ou inglês) devem ficar armazenadas, afim do usuário não precisar trocar suas configurações em casa página
**Requisitos associados** | RNF-09
**Resultado esperado** | Ao escolher um tema e um idioma e navegar pelas páginas do site a configuração deve ser mantida.
**Ação** | Clique nos botões do escolha.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - O playground deverá apresentar as notas corretas de acordo com a escolha do usuário**
 :--------------: | ------------
**Procedimento**  | Ao selecionar a nota desejada o playground deverá destacar na diagramção a escolha feita.
**Requisitos associados** | RF-03
**Resultado esperado** | Destaque das notas selecionadas no layout.
**Ação** | Seleção da nota na caixa de multipla escolha.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **O site deverá ser responsivo permitindo a visualização em um celular de forma adequada**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa gênero, seu tipo de usuário (cuidador ou comum), data de nascimento e clica em criar.<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br> 3) A aplicação armazena os dados e direciona o usuário para a tela de login.
**Requisitos associados** | RNF-02
**Resultado esperado** | Todas as funcionalidades do site devem ter êxito quando usadas em um celular.
**Ação** | Percorrer todas as telas a fim de utilizar o site em um celular.
**Resultado obtido** | Sucesso.

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*TC-01 - Criar uma conta*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.|
|Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t| 

|*Caso de Teste*                                 |*TC-02 - Efetuar Login (usuário autenticado)*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 


## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.
<br>

Para tanto, elaboramos dois cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, conforme especificado na etapa de especificações do projeto.
<br>

Foram convidadas duas pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:
<br>

Taxa de sucesso: responde se o usuário conseguiu ou não executar a funcionalidade proposta;
<br>

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da funcionalidade proposta, conforme a seguinte escala:
<br>

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Com o intuito de respeitar as diretrizes da Lei Geral de Proteção de Dados, não foram coletadas informações pessoais dos usuários que participaram do teste, pois não havia Termo de Consentimento Livre e Esclarecido.
<br>

A seguir, apresento os dois cenários utilizados durante a realização dos testes de usabilidade da aplicação. Esses cenários foram escolhidos para demonstrar as principais histórias de usuário sendo realizadas, juntamente com as funcionalidades avaliadas e as ferramentas utilizadas.
<br>

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que já toca um instrumento músical e gostaria de criar suas próprias composições. |
| 2             | Você é uma pessoa que quer aprender a tocar piano mas nao tem condições financeiras. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que já toca um instrumento músical e gostaria de criar suas próprias composições.

| Usuário | Taxa de sucesso | Satisfação subjetiva |
|---------|-----------------|----------------------|
| 1       | SIM             | 5                    |
| 2       | SIM             | 5                    | 


Comentários dos usuários: 
Usando modo avançado do playground consegui testar novas composições de escalas e criar novas músicas.
<br>

Não tive dificuldades, melhorei meus conhecimentos musicais com os artigos e pude praticar usando o playground.




Cenário 2: Você é uma pessoa que quer aprender a tocar piano mas nao tem condições financeiras.

| Usuário | Taxa de sucesso | Satisfação subjetiva |
|---------|-----------------|----------------------|
| 1       | SIM             | 5                    |
| 2       | SIM             | 5                    |


Comentários dos usuários: 
Achei muito bom ter a interface do piano no playground, com isso consegui testar as notas e escalas.
<br>

Não tive dificuldades, o site redireciona bem as telas e tem responsividade nas layouts dos instrumentos, facilitando o estudo através do celular. 



## Avaliação dos Testes de Usabilidade

Analisando os resultados obtidos nos testes de usabilidades podemos concluir que a aplicação web se comportou conforme esperado e alcançou seu objetivo de ser uma plataforma de aprendizagem musical.
<br>

Durante a avaliação de testes de usabilidade, os participantes realizaramm tarefas específicas dentro da aplicação enquanto foram observados e suas interações foram registradas. Além disso, as notas das avaliações foram 100% satisfatórias.
<br>

Com os testes, tivemos a oportunidade de identificar e corrigir problemas de usabilidade, validamos as funcionalidades e com isso ajustamos todos os gaps encontrados para manter o nosso compromisso de qualidade da plataforma desenvolvida.
<br>


