const express = require("express");
const app = express();
const cors = require('cors');
const mysql = require("mysql");
const bodyParser = require('body-parser')



const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'registeringformdb',
});


app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))


app.post('/register/insert', (req, res) => { 

    const Name = req.body.Name
    const Email = req.body.Email
    const Password = req.body.Password
    const ConfirmationPassword = req.body.ConfirmationPassword



    const sqlInsert = "INSERT INTO register_form (Name, Email, Password, ConfirmationPassword) VALUES (?, ?, ?, ? ) "
    db.query(sqlInsert, [Name, Email, Password, ConfirmationPassword], (err, result) => {
        console.log(err);
    });

})


app.post('/login', (req, res) => { 

    const Username = req.body.Name
    const password = req.body.Password


    db.query(
        "SELECT * FROM register_form Where Name = ? AND password = >", 
        (Name, Password),
        (err, result) => {

            if(err) {
        console.log(err);
            } else {
                if (result) {
                    res.send(result)
                } else {
                    res.send( {message: "Wrong username/password combination!"} );
                }
            }
    });

})

app.listen(3001, () => {
    console.log('running on port 3001')
})