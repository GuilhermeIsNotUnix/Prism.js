const ipInfo = require("ipinfo");
const ip = process.argv[2];

if(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)) {
    ipInfo(ip , (err, cLoc) => {
        console.log(err || cLoc);
    });
} else {
    console.log("prism: IP faltando ou invalido...");
    help();
}

function help() {
    console.log("sintaxe: node index.js <ip>");
}