
class User {
    // username;
    // password;
    // roles;

    constructor(username, password){
        this.username = username;
        this.password = password;
    }
    // username = {type: 'String', unique: true, required: true};
    // password = {type: 'String', required: true};
    // roles = [{type: 'String', ref: 'Role'}]
    // constructor(){
    //     this.username = {type: 'String'}
    // }
    

}

module.exports = User