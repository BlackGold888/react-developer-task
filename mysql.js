var mysql = require('mysql');
require('dotenv').config()

module.exports =
    {
        handle: null,
        connect: function (call) {
            this.handle = mysql.createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME
            });

            this.handle.connect(function (err) {
                if (err) {
                    switch (err.code) {
                        case "ECONNREFUSED":
                            console.log("\x1b[93m[MySQL] \x1b[97mError: Check your connection details (packages/mysql/mysql.js) or make sure your MySQL server is running. \x1b[39m");
                            break;
                        case "ER_BAD_DB_ERROR":
                            console.log("\x1b[91m[MySQL] \x1b[97mError: The database name you've entered does not exist. \x1b[39m");
                            break;
                        case "ER_ACCESS_DENIED_ERROR":
                            console.log("\x1b[91m[MySQL] \x1b[97mError: Check your MySQL username and password and make sure they're correct. \x1b[39m");
                            break;
                        case "ENOENT":
                            console.log("\x1b[91m[MySQL] \x1b[97mError: There is no internet connection. Check your connection and try again. \x1b[39m");
                            break;
                        default:
                            console.log("\x1b[91m[MySQL] \x1b[97mError: " + err.code + " \x1b[39m");
                            break;
                    }
                } else {
                    console.log("\x1b[92m[MySQL] \x1b[97mConnected Successfully \x1b[39m");
                }
            });
        },
        saveResult: function (data) {
            let queryStr = "INSERT INTO results (user, correct_ans,count_questions, quizType) VALUES (?,?,?,?)"
            this.handle.query(queryStr, [data.userName, data.rightAnswers, data.questionLength, data.quizType], function (err, result) {
                if (err) throw err;
                console.log(`\x1b[92m[MySQL] \x1b[97mUser results has been saved \x1b[39m`);
            });
        }
    };
