"use strict";

exports.getAllLogs = () => {
    return new Promise((resolve, reject) => {
        getConnection().then((con) => {
            con.query("SELECT * FROM faucet.Logs", function(err, rows) {
                con.release();
                if(!err)
                    resolve(rows);
                reject(err);
            });
        });
    });
};

exports.getRecentLogs = (limit) => {
    return new Promise((resolve, reject) => {
        getConnection().then((con) => {
            con.query("SELECT * FROM faucet.Logs ORDER BY rollTime DESC LIMIT ?", limit, function(err, rows) {
                con.release();
                if(!err)
                    resolve(rows);
                reject(err);
            });
        });
    });
};

exports.addLog = (log) => {
    return new Promise((resolve, reject) => {
        getConnection().then((con) => {
            con.query("INSERT INTO faucet.Logs SET ? ", log, function(err, rows) {
                con.release();
                if(!err)
                    resolve(rows);
                reject(err);
            });
        });
    });
};

