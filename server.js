var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
  
  article1: {
      title:`Article1` ,
      date:`25th oct,2016` ,
      heading:`Article One` ,
      content:
          ` <p>Hi I am Arvind G . I want to become a great software developer. Hi I am Arvind G . I want to become a great software developer.Hi I am Arvind G . I want to become a great software developer.</p>
           
           <p>Hi I am Arvind G . I want to become a great software developer. Hi I am Arvind G . I want to become a great software developer.Hi I am Arvind G . I want to become a great software developer.</p>
           
           <p>Hi I am Arvind G . I want to become a great software developer. Hi I am Arvind G . I want to become a great software developer.Hi I am Arvind G . I want to become a great software developer.</p> ` 
               } ,
    
  article2: {
      title:`Articl2` ,
      date:`27th oct,2016` ,
      heading:`Article Two` ,
      content:
          ` <p>Hi I am Arvind G . this my second article</p> ` 
               } ,
    
  article3: {
      title:`Article3` ,
      date:`28th oct,2016` ,
      heading:`Article Three` ,
      content:
          ` <p>Hi I am Arvind G . This is my third article</p> ` 
               }           
 
};


function createTemplate(data)
{
    var title = data.title;
    var date= data.date;
    var heading= data.heading;
    var content= data.content;
    
    var htmlTemplate = `
       <html>
      <head>
             <title>
              ${title}
              </title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link href="/ui/style.css" rel="stylesheet"/>
    </head>
   <body>
     <div class="container">
      
        <div>
            <a href="/">HOME</a>
        </div>
        <h3>
         ${heading}
         </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
      
      </div>
     </body>
</html> ` ; 
return htmlTemplate;
    
}





app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/:articleName',function(req,res)
{
    var articleName = req.params.articleName;
     res.send(createTemplate(articles[articleName]));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
