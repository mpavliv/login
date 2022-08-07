const DBController = require('./models/DBController');
const dbUser = new DBController('users.db');

class AuthController{
    
    async registration(req, res){
        try{
            console.log(req.body);
            const {username, password} = req.body;
            res.status(200).json({message: "registred"})
            //const candidate = await 
        } catch(err){
            console.log(err);
            res.status(400).json({message: 'Registration error'})
        }
    }

    async login(req, res){
        try{

        } catch(err){
            console.log(err);
            res.status(400).json({message: 'Login error'})
        }
    }

    async getUsers(req, res){
        try{
            res.json("server is working")
        } catch(err){
            console.log(err);
        }
    }

}

module.exports = new AuthController()