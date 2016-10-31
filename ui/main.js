//Counter code
var button = getElementById(`counter`);
button.onclick = function() {
    
   //Create request
     var request = new XMLHttpRequest();
     
   //request function
     request.onreadystatechange = functon () {
         if(request.readystate === XMLHttpRequest.DONE)
           {
               //Take  an action
             if(request.readystatus === 200 )
               {
                var counter = request.responsetext;
                var span = document.getElementById(`count`);
                span.innerHTML = counter.toString();
           }
          //no action
         
     };
   //make request
    request.open(`GET`,)
    
    
};

