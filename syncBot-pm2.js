module.exports = {
  apps : [
      {
        name: "syncBot",
        script: "./syncBot.js",
        watch: true,
        env: {
          "NODE_ENV": "development",
        }
      }
  ]
}
