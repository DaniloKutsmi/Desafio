# Documentação do Projeto: Landing Page SmartPet Floripa

## 1. Identificação do Projeto e Autor
* **Projeto:** Desafio Extra C2 - Introdução à Programação Front-End e Back-End
* **Instituição:** SCTEC / LAB365 SENAI/SC
* **Autor:** Danilo Henrique Kutsmi Vilar Moreira
* **Contexto:** Landing Page Comercial e Responsiva para Pet Shop
* **Repositório do Projeto:** https://github.com/DaniloKutsmi/Desafio
* **Site para visualização:** https://danilokutsmi.github.io/Desafio/

## 2. Descrição das Etapas de Desenvolvimento

O projeto foi desenvolvido do zero com o objetivo de criar uma página institucional moderna e funcional para o pet shop fictício SmartPet Floripa, utilizando HTML5, CSS3 e JavaScript puro.

### Identidade Visual e Estrutura (HTML)
A escolha das cores buscou equilibrar o lado tecnológico do negócio com o cuidado animal. Utilizei variáveis no CSS para gerenciar a paleta: azul para passar confiança, bege para o fundo acolhedor e laranja nos botões de ação (CTA) para chamar a atenção do usuário. A tipografia padrão escolhida foi a Poppins, importada do Google Fonts.

A estrutura do arquivo `index.html` foi montada usando tags semânticas para melhorar a organização. A página conta com as quatro seções obrigatórias:
1. **Destaque (Hero):** Banner inicial com a proposta de valor e botão de agendamento.
2. **Sobre:** Informações sobre a empresa e blocos com dados numéricos.
3. **Serviços:** Vitrine com os principais atendimentos.
4. **Contato:** Área final com informações locais e o formulário.

### Layout e Estilização (CSS)
Para atender os critérios de avaliação, apliquei diferentes técnicas de estilização:
* **Posicionamento e Sobreposição:** Na seção inicial, utilizei as propriedades `relative` e `absolute` para sobrepor a foto do cachorro (Goldendoodle) sobre um círculo colorido no fundo, criando um efeito visual dinâmico.
* **Flexbox e Grid:** Usei Flexbox na estrutura geral do "Sobre" e na organização da barra de navegação. Já para os cards de indicadores e serviços, utilizei o CSS Grid para criar uma distribuição alinhada. Os textos institucionais foram justificados e ganharam um recuo na primeira linha (`text-indent`) para melhorar a leitura.
* **Proporção e Responsividade:** Usei a propriedade `aspect-ratio: 16 / 10` nos cards de serviços para evitar que as imagens fiquem distorcidas. Também apliquei Media Queries para que, em telas menores de celulares e tablets, os elementos se empilhem verticalmente de forma organizada.

### Interatividade (JavaScript)
No arquivo `script.js`, criei a lógica de validação do formulário de contato. O código intercepta o envio, impede que a página recarregue e verifica se existem campos vazios usando o método `.trim()`. O campo de e-mail é validado usando a checagem nativa do navegador (`checkValidity()`). Se houver algum erro, o JavaScript adiciona a classe `.invalid` para destacar as bordas em vermelho; se tudo estiver correto, exibe uma mensagem de sucesso na tela por 5 segundos e limpa os campos.

## 3. Guia de Execução Local

Para testar o projeto no seu computador, siga os passos abaixo:

1. **Baixar o arquivo:** Baixe e descompacte o arquivo `.zip` do projeto em uma pasta.
2. **Verificar os arquivos:** Certifique-se de que os arquivos `index.html`, `style.css`, `script.js` e a pasta `assets/images/` estão no mesmo diretório.
3. **Abrir o site:** Clique com o botão direito no arquivo `index.html`, selecione "Abrir com" e escolha o navegador de sua preferência (Chrome, Edge, Firefox ou Safari).
4. **Testar a validação:** Vá até o formulário de contato e clique em "Enviar Mensagem" com os campos em branco ou com um e-mail inválido para ver os alertas do JavaScript funcionando.