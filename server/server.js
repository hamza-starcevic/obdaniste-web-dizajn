import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8001;
const JWT_SECRET = "malaTajna";
//function to establish connection to database
function connectToDatabase() {
  const db = new sqlite3.Database("./data.db");
  return db;
}
async function getUserByEmail(email) {
  const db = connectToDatabase();
  //Find if the user exists
  const sql = `SELECT * FROM Users WHERE email = '${email}'`;
  const user = await new Promise((resolve, reject) => {
    db.get(sql, (err, row) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(row);
    });
  });
  db.close();
  if (user && user.email === email) {
    return true;
  }
  return false;
}
//Register user
app.post("/register", async (req, res) => {
  try {
    const db = connectToDatabase();
    const user = req.body;
    // Check if the username is already taken
    const existingUser = await getUserByEmail(user.email);
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Hash the password using bcrypt
    const passwordHash = await bcrypt.hash(user.password, 10);

    const sql = `INSERT INTO Users (ime, prezime, imeRoditelja, datumRodjenjaDjeteta, email, password, brojTelefona, roditeljiZaposleni, adresaStanovanja, gradStanovanja, dijeteBezRoditelja, samohraniILIrazvedeni, rom, bitneNapomene)
      VALUES (
          '${user.ime}',
          '${user.prezime}',
          '${user.imeRoditelja}',
          '${user.datumRodjenjaDjeteta}',
          '${user.email}',
          '${passwordHash}',
          '${user.brojTelefona}',
          '${user.roditeljiZaposleni}',
          '${user.adresaStanovanja}',
          '${user.gradStanovanja}',
          '${user.dijeteBezRoditelja}',
          '${user.samohraniILIrazvedeni}',
          '${user.rom}',
          '${user.bitneNapomene}'
      )`;
    db.run(sql, (err) => {
      if (err) {
        res
          .status(500)
          .json({ message: "Error inserting new user", error: err });
      } else {
        res.status(200).json({ message: "New user inserted" });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error inserting new user", error: err });
  }
});

//Login user
app.post("/login", async (req, res) => {
  try {
    const db = connectToDatabase();
    const user = req.body;

    const sql = `SELECT * FROM Users WHERE email = '${user.email}'`;
    db.get(sql, async (err, row) => {
      if (err) {
        res.status(500).json({ message: "Error logging in", error: err });
      } else {
        if (row) {
          // Compare the password with the password hash
          const passwordMatch = await bcrypt.compare(
            user.password,
            row.password
          );
          if (passwordMatch) {
            // res.status(200).json({ message: "Login successful" });

            //Add claims to token
            const token = jwt.sign(
              {
                email: user.email,
                ime: row.ime,
                prezime: row.prezime,
                imeRoditelja: row.imeRoditelja,
                datumRodjenjaDjeteta: row.datumRodjenjaDjeteta,
                brojTelefona: row.brojTelefona,
                roditeljiZaposleni: row.roditeljiZaposleni,
                adresaStanovanja: row.adresaStanovanja,
                gradStanovanja: row.gradStanovanja,
                dijeteBezRoditelja: row.dijeteBezRoditelja,
                samohraniILIrazvedeni: row.samohraniILIrazvedeni,
                rom: row.rom,
                bitneNapomene: row.bitneNapomene,
              },
              JWT_SECRET
            );

            res.status(200).json({ token });
          } else {
            res.status(401).json({ message: "Login failed" });
          }
        } else {
          res.status(401).json({ message: "Login failed" });
        }
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error logging in", error: err });
  }
});
//Decoding token
app.post("/decode", (req, res) => {
  try {
    const token = req.body.token;
    console.log(token);
    const decodedToken = jwt.verify(token, JWT_SECRET);
    res.status(200).json({ decodedToken, valid: true });
  } catch (err) {
    console.log("Error decoding token");
    res
      .status(500)
      .json({ message: "Error decoding token", error: err, valid: false });
  }
});

app.get("/users", (req, res) => {
  const db = connectToDatabase();
  const sql = `SELECT * FROM Users`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(500).json({ message: "Error getting users", error: err });
    } else {
      res.status(200).json({ users: rows });
    }
  });
});

app.delete("/users/:id", (req, res) => {
  const db = connectToDatabase();
  const id = req.params.id;
  const sql = `DELETE FROM Users WHERE id = ${id}`;
  db.run(sql, (err) => {
    if (err) {
      res.status(500).json({ message: "Error deleting user", error: err });
    } else {
      res.status(200).json({ message: "User deleted" });
    }
  });
});

app.post("/posts", (req, res) => {
  try {
    const db = connectToDatabase();
    const post = req.body;
    const sql = `INSERT INTO Posts (naslov, sadrzaj, datumObjave)
                  VALUES (?, ?, ?)`;
    const values = [post.naslov, post.sadrzaj, post.datumObjave];

    db.run(sql, values, (err) => {
      if (err) {
        res
          .status(500)
          .json({ message: "Error inserting new post", error: err });
      } else {
        res.status(200).json({ message: "New post inserted" });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error inserting new post", error: err });
  }
});

app.get("/posts", (req, res) => {
  const db = connectToDatabase();
  const sql = `SELECT * FROM Posts`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(500).json({ message: "Error getting posts", error: err });
    } else {
      res.status(200).json({ posts: rows });
    }
  });
});
//Start server
app.listen(port, () => console.log(`Server radi na: ${port}`));
