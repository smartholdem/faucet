"use strict";
var BigNumber = require("bignumber.js");
var fs = require("fs");

var alphanumRegex = /^[S|s]{1}[0-9a-zA-Z]{33}$/g;

exports.reject = (res, status, msg) => {
    console.log(`Rejected: ${status} - ${msg}`);
    var resp = {
        success: false,
        message: msg
    }
    res.status(status);
    res.send(resp);
}

exports.isAddress = (addr) => {
    //console.log(alphanumRegex.test(addr));
    //console.log(addr.length);
    //console.log(addr.charAt(0));

    return alphanumRegex.test(addr); // && addr.length == 34 && addr.charAt(0) == 'S'
};

exports.log = (msg, async) => {
    console.log(msg);
    if(async)
        fs.appendFile(LOG_FILE, msg);
    else
        fs.appendFileSync(LOG_FILE, msg);
};