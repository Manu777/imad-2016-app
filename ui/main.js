//counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {
    
    //crreate a request object
    var request = new XMLHttpRequest();
    
    
    //capture the response and store it in a variable
    request.onreadystatehange = function(){
        if(request.readyState == XMLHttpRequest.DONE){
            //Take some action
          if(request.State == 200){
             var counter = request.responseText;
             var span = document.getElementById('count');
             span.innerHTML = counter.toString();
    
          }
            
        }
        
           //Not done
    };
    
    //make request
    request.open('GET', 'http://coco98.imad.hasura-app.io/counter',true);
    request.send(null);
    
   
   
    
};