const express = require("express")

const app = express()

("/health", (req, res) => res.send({messenge: "Okay!"}))