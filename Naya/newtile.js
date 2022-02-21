var array= [];


function addnew(){
    //made the array empty everytime finction is called
    array=[];
    document.getElementById("tile")
    var i;
   
    //stored value from input into new variable text
   var text=document.getElementById("new-text").value;
    //pushed text into previously declared array
    array.push(text);
    
    
    //iterate for loop through array
    for(i=0;i<array.length;i++){
   //create new element having classname  'elements'
    var div = document.createElement('div');
    div.className='elements';
        
    //make inner html if the newly created div to store the text pushed into array
        
    div.innerHTML=array[i];
        //removed this as it did not work
//document.getElementById("tile").appendChild(div);
        
        
        //this works as we are adding children to the body of the html doc
    document.body.appendChild(div);
    
    
    }
//    console.log(div);
    
}