# Documentation

[Doc Adonis](https://docs.adonisjs.com/guides/preface/introduction)
[Doc Tailwind](https://tailwindcss.com/docs/installation)
[Doc DaisyUI](https://daisyui.com/components/)

## Install

```bash
git clone git@github.com:AloisSvnt/Buku.git
cd Buku
npm install
```

## Config :

##### 1. Create the .env from .env.exemple
```bash
cp .env.example .env
```

##### 3. Generate the APP_KEY'
```bash
node ace generate:key
```

##### 3. Create the folder '/tmp'
```bash
mkdir tmp
```

## Migrations

```bash
node ace migration:run
```

## Seeds

```bash
node ace db:seed
```

## Server

```bash
npm run dev
```
