const express = require("express")

const app = express()

.length("/health", (req, res) => res.send({messenge: "Okay!"}))