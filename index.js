"use strict";

var app = require("app");
var BrowserWindow = require("browser-window");
var twitter = require("./lib/tweet");
var clipboard = require("clipboard");

var ipc = require("ipc");

require("crash-reporter").start();

var mainWindow = null;
//mainWindow.openDevTools(true);

app.on("window-all-closed", () =>{
  app.quit();
  if(process.platform != "darwin"){
    app.quit();
  }
});

app.on("ready", () => {
  mainWindow = new BrowserWindow({width: 300, heigth: 600});
  twitter.fetch(10, (err, res, data) => {
    clipboard.writeText(JSON.stringify(res),"initial");
    mainWindow.loadUrl("file://" + __dirname + "/index.html");
    twitter.stream.on("tweet",(tweet) => {
      mainWindow.webContents.send("tweet", JSON.stringify(tweet));
    });
  });
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});



ipc.on("post",(sys,tweet) => {
 var tw = JSON.parse(tweet);
  tw = twitter.post(tw);
});

