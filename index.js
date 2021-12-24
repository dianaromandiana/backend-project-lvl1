const express = require('express');
const app = express();
const host = 'localhost'; //'127.0.0.1'
const port = process.env.PORT || 3000;

const path = require('path')

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname,'/public/')));

app.get('/', (req, res) => {
         res.render('login.hbs');
});
app.get('/login', (req, res) => {
       res.render('login.hbs');
});
app.get('/singup', (req, res) => {
  res.render('singup.hbs');
});

app.get('/dashboardChat', (req, res) => {
res.render('dashboardChat.hbs', {chat_list: fakeJsonChatsFromDB(), message_list: fakeJsonChatByUserFromDB()});
});

app.get('/edit', (req, res) => {
       res.render('edit.hbs');
});
app.get('/avataredit', (req, res) => {
         res.render('avataredit.hbs');
});
app.get('/profile', (req, res) => {
       res.render('profile.hbs');
});

app.listen(port, host, function () {
  console.log(` Приложение запущено по http: ${host}:${port}`)
})

fakeJsonChatByUserFromDB = () => {
  return [
         {
           message : "Hello!",
           time : "10:10:01",
           author : "Kate"
         },
         {
           message : "Wow,Hi!",
           time : "10:11:02",
           author : "Anny"
         },
         {
           message : "How are you?",
           time : "10:11:03",
           author : "Kate"
         },
         {
           message : "Fine! What about u?",
           time : "10:11:04",
           author : "Anny"
         }
  ];
}

fakeJsonChatsFromDB = () => {
  return [
         {
           lastMessageByChat : "Cool",
           time : "10:10:01",
           author : "Elena"
         },
         {
           lastMessageByChat : "Okay",
           time : "10:11:02",
           author : "Ivan"
         },
         {
           lastMessageByChat : "Bye,Bye",
           time : "10:11:03",
           author : "Alex"
         },
         {
           lastMessageByChat : "Fine! What about u?",
           time : "10:11:04",
           author : "Anny"
         }
  ];
}
