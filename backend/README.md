# Overview

A API do backend é um recurso Node.js-based para comunicar com o Aplicativo. Você pode usa-la para acessar data e definir certas propriedades para usuários.  
Esta foi criada para servir à 11ª Semana da Omnistack desenvolvida pela Rocketseat.  
O Backend foi desenvolvido pensando-se no conceito DRY (Don't Repeat Yourself) e arquitetura MVC.

# Models: ONGS e Incidents

Este é o Model de ONGS

## Estrutura

```js
{
  "_id": "<UID Aleatório>",
  "name": "<Nome da ONG>",
	"email": "<Email da ONG>",
	"whatsapp": "<Whatsapp da ONG>",
	"city": "<Cidade da ONG>",
	"uf": "<Estado da ONG>"
}
```

Este é o Model de Incidents (No caso da Omnistack, os Casos)

## Estrutura

```js
{
  "title": "<Titulo do Caso>",
  "description": "<Descrição do Caso>",
	"value": "<Valor do Caso>",
}
```

# Controllers

Aqui estão listados os controles da API do BeTheHero, seus métodos, parâmetros e estrutura.

## ONGS

As ONGS são os usuários do programa.

| Método     | Estrutura                    | Ação                               | Parâmetros                    | Retorno   |
| ---------- | ---------------------------- | ---------------------------------- | ----------------------------- | --------- |
| ![GET][1]  | `http://localhost:3333/ongs` | Lista todos as ONGS cadastrados    | **Nenhum**                    | JSON/ONGS |
| ![POST][2] | `http://localhost:3333/ongs` | Cadastra uma ONG no banco de dados | JSON/name,email,whats,city,uf | JSON/ONG  |

## INCIDENTS

Este controlador serve para listar usuários porém em modo de pesquisa.  
Com este módulo é possível procurar por usuários em um raio de **10km** e com techs específicas.

| Método       | Estrutura                             | Ação                             | Parâmetros                                        | Retorno    |
| ------------ | ------------------------------------- | -------------------------------- | ------------------------------------------------- | ---------- |
| ![GET][3]    | `http://localhost:3333/incidents`     | Lista todos os Casos cadastrados | **Nenhum**                                        | JSON/CASOS |
| ![POST][4]   | `http://localhost:3333/incidents`     | Cria um caso                     | JSON/title,description,value HEADER/authorization | JSON/id    |
| ![DELETE][5] | `http://localhost:3333/incidents/:id` | Deleta um caso                   | HEADER/authorization                              | **Nenhum** |

## Login e Profile

Estes controladores são responsáveis pelo login e pelo sessão da aplicação. Onde depois de logado, o usuário recebe todos os casos criados pela ONG que logou.

| Método     | Estrutura                        | Ação                                             | Parâmetros           | Retorno    |
| ---------- | -------------------------------- | ------------------------------------------------ | -------------------- | ---------- |
| ![GET][6]  | `http://localhost:3333/profile`  | Lista todos os Casos cadastrados pela ONG logada | HEADER/authorization | JSON/CASOS |
| ![POST][7] | `http://localhost:3333/sessions` | Responsável pelo login da ONG                    | JSON/id              | JSON/name  |

# Exemplos

## Index-ONG

```http
GET http://localhost:3333/ongs HTTP/1.1
```

<details>
<summary><code>HTTP/1.1 200 OK</code></summary>

```json
[
  {
    "id": "3e0beda5",
    "name": "APAE",
    "email": "contato@apae.com.br",
    "whatsapp": "5555555555",
    "city": "São José",
    "uf": "SC"
  },
  {
    "id": "25b72708",
    "name": "ONG",
    "email": "contato@ong.com.br",
    "whatsapp": "5555555555",
    "city": "São José",
    "uf": "SC"
  },
  {
    "id": "67ed72b1",
    "name": "TESTE",
    "email": "vinicius@asd.com",
    "whatsapp": "5555555555",
    "city": "dsadsa",
    "uf": "SC"
  }
]
```

</details>

---

## Create-ONG

```http
POST http://localhost:3333/ongs HTTP/1.1
```

<details>
<summary><code>HTTP/1.1 200 OK</code></summary>

```json
{
  "id": "6cf3fcb3"
}
```

</details>

---

## Index-Incident

```http
GET http://localhost:3333/incidents HTTP/1.1
```

<details>
<summary><code>HTTP/1.1 200 OK</code></summary>

```json
[
  {
    "id": 13,
    "title": "Caso 1",
    "description": "Detalhe do caso",
    "value": 120,
    "ong_id": "3e0beda5",
    "name": "APAE",
    "email": "contato@apae.com.br",
    "whatsapp": "99999999",
    "city": "São José",
    "uf": "SC"
  },
  {
    "id": 14,
    "title": "Caso 1",
    "description": "Detalhe do caso",
    "value": 120,
    "ong_id": "3e0beda5",
    "name": "APAE",
    "email": "contato@apae.com.br",
    "whatsapp": "99999999",
    "city": "São José",
    "uf": "SC"
  }
]
```

</details>

---

## Create-Incident

```http
POST http://localhost:3333/incidents HTTP/1.1
```

<details>
<summary><code>HTTP/1.1 200 OK</code></summary>

```json
{
  "id": 22
}
```

</details>

---

## Delete-Incident

```http
DELETE http://localhost:3333/incidents/7 HTTP/1.1
```

<details>
<summary><code>HTTP/1.1 204 No Content</code></summary>

```json
{
  "No body returned for response"
}
```

</details>

---

## Index-Profile

```http
GET http://localhost:3333/profile HTTP/1.1
```

<details>
<summary><code>HTTP/1.1 200 OK</code></summary>

```json
[
  {
    "id": 13,
    "title": "Caso 1",
    "description": "Detalhe do caso",
    "value": 120,
    "ong_id": "3e0beda5"
  },
  {
    "id": 14,
    "title": "Caso 2",
    "description": "Detalhe do caso",
    "value": 130,
    "ong_id": "3e0beda5"
  }
]
```

</details>

---

## Create-Session

```http
POST http://localhost:3333/sessions HTTP/1.1
```

<details>
<summary><code>HTTP/1.1 200 OK</code></summary>

```json
[
  {
    "name": "APAE"
  }
]
```

</details>

---

[1]: #Index-ONG
[2]: #Create-ONG
[3]: #Index-Incident
[4]: #Create-Incident
[5]: #Delete-Incident
[6]: #Index-Profile
[7]: #Create-Session
