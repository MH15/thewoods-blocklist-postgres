import bodyParser from "body-parser";
import express from "express";
import pg from "pg";

// Connect to the database using the DATABASE_URL environment
//   variable injected by Railway
const pool = new pg.Pool();

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  const { rows } = await pool.query("SELECT NOW()");
  res.send(`Hello, World! The time from the DB is ${rows[0].now}`);
});

app.get("/blocklist", async (req, res) => {
  let verbose = req.query.verbose
  if(verbose == "true") {
    const {rows} = await pool.query("SELECT * FROM blocklist;")
    res.send(rows)
  } else {
    const {rows} = await pool.query("SELECT room_number FROM blocklist;")
    const list = rows.map(row => {
      return row.room_number
    })
    res.send(list)
  }
})


const insertString = "INSERT INTO blocklist(room_number, blocks) VALUES ($1, $2) ON CONFLICT (room_number) DO UPDATE SET blocks=blocklist.blocks+1 WHERE blocklist.room_number = $1;"
app.get("/block/:room_number", async (req, res) => {
  const result = await pool.query(insertString, [req.params.room_number, 1])
  res.send(JSON.stringify(result.rowCount))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
