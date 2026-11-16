## Objetivo

A tabela fluxo_produtos tem como objetivo registrar o histórico de todas as movimentações de estoque dos produtos, permitindo identificar entradas, saídas, suas origens e os saldos resultantes.

Cada registro representa a movimentação de um único produto.

## Datas

* criado_por: usúario que realizou a criação do registro.
* data_criacao: data de criação do registro.

## Chaves Estrangeiras

* O campo saida_venda_id referencia a tabela de pedidos e representa o número do pedido que realizou a movimentação do produto, caso essa movimentação tenha sido realizada por uma venda ou pelo cancelamento de uma venda.
* O campo entrada_nota_id, referencia a tabela notas_entradas e representa o registro da nota que realizou a movimentação do produto, caso essa movimentação tenha sido realizada por essa operação.
* O campo produto_id , referencia a tabela de produtos e representa o registro do produto na movimentação
* A chave estrangeira criado_por representa o responsável que realizou a movimentação do produto.

## Regras de Negócio

* A movimentação do produto irá proceder como ENTRADA ou SAÍDA, mas nunca os dois ao mesmo tempo.
* A ENTRADA poderá ser MANUAL, sendo realizada manualmente pelo usuário, ou por entrada de nota fiscal, sendo o campo entrada_nota_id preenchido com o ID da nota correspondente.
* A SAÍDA poderá ser MANUAL, sendo realizada manualmente pelo usuário, ou por venda, sendo o campo saida_venda_id preenchido com o número do pedido correspondente.
* Orçamentos não deverão gerar movimentações de estoque. A saída ocorrerá somente quando o pedido for efetivado como venda.
* Quando uma venda for cancelada após ter gerado uma saída de estoque, o sistema deverá registrar uma nova movimentação mantendo o status SAIDA, mas com a quantidade_mov negativa. Dessa forma, ao realizar o cálculo do estoque, o valor negativo será subtraído do estoque anterior, devolvendo a quantidade ao estoque.
* A movimentação original da venda deverá permanecer no histórico, sem ser excluída ou alterada. A nova movimentação deverá ficar vinculada ao número do pedido que originou a saída, por meio do campo saida_venda_id.
* O fluxo de produtos será administrado pelas colunas:
 ** est_anterior, onde terá o registro da movimentação anterior
 ** quantidade_mov, onde terá o registro da movimentação do produto
 **est_atual, onde terá o registro do estoque após a movimentação.
* Nas movimentações de ENTRADA, a quantidade_mov será somada ao est_anterior. Nas movimentações de SAIDA, a quantidade_mov será subtraída do est_anterior. No cancelamento de venda, como a quantidade_mov será negativa, sua subtração aumentará o estoque.

## Observações Técnicas

* A tabela possui duas formas de identificação: o ID para as regras internas do banco de dados e o código para as regras de negócio do sistema.
* A coluna codigo será gerada no formato L0001, com incremento sequencial de uma unidade (L0002, L0003, L0004 e assim por diante).
* As colunas est_anterior, quantidade_mov e est_atual serão NOT NULL. A coluna quantidade_mov deverá aceitar valores positivos e negativos, pois valores negativos serão utilizados nos cancelamentos de vendas.
* Os valores das colunas est_anterior, quantidade_mov e est_atual serão armazenados no banco de dados como REAL, pois a movimentação poderá ser decimal (com ponto flutuante).
* Os campos esto_anterior, quantidade_mov e esto_atual deverão respeitar as regras de controle de estoque definidas pelo módulo de Produtos. O módulo de Fluxo de Produtos deverá apenas registrar os valores correspondentes à movimentação, garantindo a consistência entre o saldo anterior, a quantidade movimentada e o saldo resultante.
* Todos os campos deverão receber tratamento de remoção de espaços em branco antes e depois dos dados (trim).
* Todos os campos deverão receber tratamento para armazenamento em letras maiúsculas (uppercase).