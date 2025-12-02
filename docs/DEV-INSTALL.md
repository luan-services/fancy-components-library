# Development Guide

Este documento é somente para desenvolvimento da biblioteca.
Ele explica como:

Instalar dependências
Buildar o TypeScript  
Rodar o servidor para testar componentes  

#  Instalação

Instale dependências:

```bash
npm install
```

# Build da library

A biblioteca é escrita em TypeScript dentro da pasta src/. Para gerar os arquivos JavaScript finais dentro de dist/, execute:

```bash
npm run build
```

Isso usa o tsup para:

- compilar .ts → .js

- erar tipagens .d.ts

- criar arquivos que serão publicados no npm

Sempre rode o build após alterar algo em src/.

# Build automático (modo watch)

Para não precisar rodar build a cada alteração:

```bash
npm run build:watch
```

Isso recompila instantaneamente sempre que você alterar qualquer arquivo em src/.

* Esse comando deve ficar rodando em um terminal separado.

# Rodando servidor de testes

O navegador não permite imports ES modules via file://, então precisamos de um servidor local.

Execute:

```bash
npm run dev
```

O Vite vai subir um servidor local que recarrega o navegador automaticamente à cada mudança (build:watch precisa estar ativo).