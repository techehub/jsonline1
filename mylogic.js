 
 var logic1 = (function (){

 a= 10
 b = 20

 function add (a,b){
     return a+b;
 }

 function diff (){
    return a-b;
}

return {

    add: add,
    sub : diff

}

 })();
 