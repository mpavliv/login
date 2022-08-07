const sqlite3 = require('sqlite3').verbose()
const path = require('path')

class DBController{
    constructor(dbName){
        const dbFile = path.resolve(__dirname, dbName);
        this.db = new sqlite3.Database(dbFile, () => console.log(`connected to database ${dbFile}`))
        this._createTableUsers();        
    }

    _createTableUsers(){
        const sql = `CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, username, email, password)`;
        this.db.run(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('table users ok');
            }
        });
    }
    
    getUserByName(username){
        const sql = `SELECT * FROM users WHERE username = ?`
        return new Promise( (res, rej) => {
            this.db.get(sql, [username], (err, data) => {
                if (err) {
                    console.log(err);
                    rej(err.message);
                } else {
                    console.log(data);
                    resolve(data);
                }
            })
        })        
    }

    async getUsers(){}

    async addUser(){}
}

module.exports = DBController