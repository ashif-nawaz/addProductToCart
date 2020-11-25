let cartIcon = document.querySelector(".bag");
let cartContainer = document.querySelector(".cartItem");
let toCartButtons = document.querySelectorAll(".toCart");
let images = document.querySelectorAll(".item .colLeft img");


for(let i = 0; i<toCartButtons.length; i++){
     toCartButtons[i].addEventListener("click", function(e){
               let itemInCart = document.createElement("div");
                   itemInCart.setAttribute("class", "itemInCart");
                   cartContainer.appendChild(itemInCart);

               let colLeft = document.createElement("div");
                   colLeft.setAttribute("class", "left colLeft");
                   itemInCart.appendChild(colLeft);

               let imge = document.createElement("img");
                   imge.src = images[i].src;
                   colLeft.appendChild(imge);
               
               let colRight = document.createElement("div");
                   colRight.setAttribute("class", "right");
                   itemInCart.appendChild(colRight);

               let para = document.createElement("p");
               let txt = document.createTextNode("This is an image");
                   para.appendChild(txt);
                   colRight.appendChild(para);

               let buttonOne = document.createElement("button");
                   buttonOne.appendChild(document.createTextNode("-"));
                   colRight.appendChild(buttonOne);
                
               let input = document.createElement("input");
                   input.setAttribute("type", "number");
                   colRight.appendChild(input);

               let buttonTwo = document.createElement("button");
                   buttonTwo.appendChild(document.createTextNode("+"));
                   colRight.appendChild(buttonTwo);
     });
}



cartIcon.addEventListener("click", function(e){
      cartContainer.classList.toggle("cartContainerActive");
})