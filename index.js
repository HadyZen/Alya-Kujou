/* HADY ZEN'IN */

const { spawn } = require("child_process");

setInterval(function() {
  console.clear();
}, 3600000); 

function hady() {
  const child = spawn("node Alya.js", {
    cwd: __dirname,
    stdio: "inherit",
    shell: true
  });

  child.on("close", (code) => {
    if (code == 2) { hady(); }
  });
};

hady();
