//Counter code
var button = document.getElementById(`counter`);
var counter = 0;
button.onclick = function() {
    
   //Create request
     //var request = new XMLHttpRequest();
     
   //request function
     //request.onreadystatechange = function () {
       //  if(request.readystate === XMLHttpRequest.DONE)
         //  {
               //Take  an action
             //if(request.status === 200 )
              // {
                //var counter = request.responseText;
                counter = counter + 1;
                var span = document.getElementById(`count`);
                span.innerHTML = counter.toString();
           //}
          // }
          //no action
         
//     };
   //make request
  //  request.open('GET','http://arvindganesan.imad.hasura-app.io/counter' , true);
    //request.send(null);
    
    
};

