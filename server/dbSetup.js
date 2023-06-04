import sqlite3 from "sqlite3";

// Create a new database connection
const db = new sqlite3.Database("./data.db");

// Create a table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS Users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ime TEXT,
  prezime TEXT,
  imeRoditelja TEXT,
  datumRodjenjaDjeteta TEXT,
  email TEXT,
  password TEXT,
  brojTelefona TEXT,
  roditeljiZaposleni INTEGER,
  adresaStanovanja TEXT,
  gradStanovanja TEXT,
  dijeteBezRoditelja INTEGER,
  samohraniILIrazvedeni TEXT,
  rom INTEGER,
  bitneNapomene TEXT
)`);

//Create a table Posts
db.run(`CREATE TABLE IF NOT EXISTS Posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  naslov TEXT,
  sadrzaj TEXT,
  datumObjave TEXT
)`);

function seedDatabase() {
  const users = [
    {
      ime: "John",
      prezime: "Doe",
      imeRoditelja: "Jane",
      datumRodjenjaDjeteta: "2000-01-01",
      email: "john@example.com",
      password: "password1",
      brojTelefona: "123456789",
      roditeljiZaposleni: 1,
      adresaStanovanja: "123 Main Street",
      gradStanovanja: "City",
      dijeteBezRoditelja: "No",
      samohraniILIrazvedeni: "No",
      rom: "No",
      bitneNapomene: "",
    },
    {
      ime: "Jane",
      prezime: "Smith",
      imeRoditelja: "John",
      datumRodjenjaDjeteta: "1995-05-15",
      email: "jane@example.com",
      password: "password2",
      brojTelefona: "987654321",
      roditeljiZaposleni: 0,
      adresaStanovanja: "456 Elm Street",
      gradStanovanja: "Town",
      dijeteBezRoditelja: "Yes",
      samohraniILIrazvedeni: "Yes",
      rom: "Yes",
      bitneNapomene: "Has allergies",
    },
  ];

  users.forEach((user) => {
    db.run(
      `INSERT INTO Users (
        ime,
        prezime,
        imeRoditelja,
        datumRodjenjaDjeteta,
        email,
        password,
        brojTelefona,
        roditeljiZaposleni,
        adresaStanovanja,
        gradStanovanja,
        dijeteBezRoditelja,
        samohraniILIrazvedeni,
        rom,
        bitneNapomene
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.ime,
        user.prezime,
        user.imeRoditelja,
        user.datumRodjenjaDjeteta,
        user.email,
        user.password,
        user.brojTelefona,
        user.roditeljiZaposleni,
        user.adresaStanovanja,
        user.gradStanovanja,
        user.dijeteBezRoditelja,
        user.samohraniILIrazvedeni,
        user.rom,
        user.bitneNapomene,
      ],
      (err) => {
        if (err) {
          console.error(err);
        }
      }
    );
  });

  console.log("Database seeded successfully");
}

// Seed the database on server start
seedDatabase();
