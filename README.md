## API Reference

#### Get blocklist

```http
  GET /blocklist?verbose=false
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `verbose` | `boolean` | Default false. When true, includes the number of times each room has been blocked. |

#### Add to blocklist

```http
  POST /block/{room_number}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `room_number`| `integer` | **Required**. Id of room to block. |



  



# ExpressJS Postgres Example

This example starts an [ExpressJS](https://expressjs.com/) server that connects
to a Railway PostgreSQL database.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new?template=https%3A%2F%2Fgithub.com%2Frailwayapp%2Fexamples%2Ftree%2Fmaster%2Fexamples%2Fexpressjs-postgres&plugins=postgresql)

## ✨ Features

- Postgres
- Express
- TypeScript

## 💁‍♀️ How to use

- Install dependencies `npm install`
- [Create a Railway project with the Postgres plugin](https://dev.new)
- Connect to your Railway project `railway link`
- Start the server `railway run npm run dev`

## 📝 Notes

The server started simply returns the current time in the database. The SQL
query is located in `src/index.ts`.
