



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////firebase



var allCocktails =[s1,s2,s3,s4,s5,s6];


//////////////////////////////////////////////////////////////////////////////////////////////////////

var allContainer = document.getElementById("all_items");




function addAllElem(item){


  
  var totalDiv = document.createElement("div");
 totalDiv.setAttribute("class","col-xs-4 ml-auto");


   var itemDiv = document.createElement("div");
   itemDiv.setAttribute("class", "item col-xs-12");

     var img = document.createElement("img")
     img.setAttribute("class", "img-responsive interested_img");
     img.setAttribute("src", "./Images/"+item.pic);
     itemDiv.appendChild(img)

     itemDiv.innerHTML += ("<br> <div class='central'>" + item.name+"</div> <br>");
     itemDiv.addEventListener( "click", function(){
       location.href='./index_detail_'+ item.name.replace(/ /g, '')  +'_example.html'; // item name 따라 specify할것
     });


 totalDiv.appendChild(itemDiv);

 allContainer.appendChild(totalDiv);
 
}



function addAllElems(){
  allContainer.innerHTML='';

  for (var i=0; i<allCocktails.length; i++ ){
  
    addAllElem(allCocktails[i]);
  }
}


  









