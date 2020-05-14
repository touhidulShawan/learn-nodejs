const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();
const publicPathDirectory = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

// configure to use public folder content
app.use(express.static(publicPathDirectory));

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialPath);

// config for index page
app.get("", (request, response) => {
  response.render("index", {
    title: "Weather App",
    name: "Sarah James",
  });
});

// config for about page
app.get("/about", (request, response) => {
  response.render("about", {
    title: "About Me",
    name: "Sarah James",
  });
});

// config for help page
app.get("/help", (request, response) => {
  response.render("help", {
    title: "Help",
    helpTxt: "Some help text",
    name: "Sara James",
  });
});

app.get("/help/*", (request, response) => {
  response.render("404", {
    errorMsg: "Help article not found",
  });
});

// config to match all the links that are not listed up for give 404 error

app.get("*", (request, response) => {
  response.render("404", {
    errorMsg: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
