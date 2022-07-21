//2. Use the rest countries API url -> https://restcountries.com/v2/all and display all the country flags in console
//setting up http request
var xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v2/all");
xhr.send();

//Setting up a listner where server listens to our request 
xhr.onload=function(){
    //processes the request and server will return the data in response
    if(xhr.status>=200 && xhr.status<300){
       //converts raw into js notation format 
         var data=JSON.parse(xhr.response);
            // console.log(data);
            for(var i=0; i<data.length; i++){
                console.log(data[i].name + " : "+ data[i].flag);
            }
    }else{
        //printing the error 
        console.log("Data is not available");
    }
}
