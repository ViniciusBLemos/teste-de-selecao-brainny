# Teste de seleção para estagío Brainny

Teste desenvolvido em typescript. O desafio consiste em tratar um array de 1000 registros atráves de map, filter, reduce, find e outras funções.
Para popular o array deveria ser utilizado o faker.js
Para mockar os objetos, passaram as seguintes regras ;
    - Os dados devem estar em pt_BR;
    - Os dados devem ser coerentes com os seus campos. Ex: é inpossível que algum cliente tenha nascido em 2023;
    - As datas de nascimento devem ser entre 1910 e 2006;
    - Os nomes devem ser nomes completos;

## 🔧 Funções

### Função 01:
- Na primeira utilizei a função filter() para filtrar o character recebido e retornar todos os nomes que começam com ele e utilizei toUpperCase() para ser case sensitive.

### Função 02:
- Na segunda utilizei map() para me retornar todos os clientes no padrão:"Cliente: NOME_DO_CLIENTE", também usei toUpperCase() para deixar tudo em caixa alta e replace() para achar os espaços e trocar por underline.

### Função 03:
- A terceira foi praticamente igual a segunda com o padrão um pouco diferente ("Cliente INDEX: NOME_DO_CLIENTE") com isso precisei usar indexOf() para eu ter a posição de cada cliente.

### Função 04:
- Na quarta usei filter() para me dar o valor de quantos clientes existiam com a inicial que foi recebida para isso user charAt() para mandar a posição que eu queria checar, length para me dar o valor final e também usei to UpperCase().

### Função 05:
- Na quinta utilizei somente map() pois só deveria retornar os nomes dos clientes.

### Função 06:
- Na sexta era basicamente igual a quinta mas desta vez deveria retornar somneto o primeiro nome, para isso usei split() passando o caractere " "(espaço) onde eu queria dividir ela. 

### Função 07:
- A sétima era parecida com as duas anteriores mas dessa vez tinha que receber um caracter e retornar todos os primeiros nomes dos clientes que começavam com essa letra. Primeiro usei map() e split() para ter o primeiro nome de todos os clientes e joguei numa variavel e depois retornei o valor final com filter() verificando a primeira letra de todos os valores.

### Função 08:
- Na oitava fiz uma variavel para pegar a data atual com getFullYear() e subtrair 18, para depois verificar com filter() se a data da variavel batia com a do cliente usando getTime() e setFullYear().

### Função 09:
- Na nona usei filter() para comparar ver se existia algum cliente com o nome que foi passado na função.

### Função 10:
- Na décima user map() para pegar o total de compras de cada cliente e utilizando paseInt() para converter as strings para number, e com isso usei o reduce() para somar tudo.

### Função 11:
- A décima primeira utilizei uma variavel para a data atual com getFullYear() e subtrai 1 para comparar depois com os clientes que não fizeram compras a mais de um ano com getTime() e setFullYear().

### Função 12:
- Na décima segunda usei filter() para verificar quais clientes ja tinham realizado mais de 15 compras, nisso usei parceInt() para converter os valores.

### Função 13:
- Na décima terceira usei unshift() para receber um novo usuario gerado pelo faker e colocar na primeira posição do array.



<p align="center">Copyright © 2022 ViniciusBLemos</p>