let items = document.getElementsByClassName('form-check-input');
for (let i=0;i<items.length;i++) {
    let titile = document.getElementById('titile');
    let text = document.getElementById('text');
    let button = document.getElementById('button');
    let image = document.getElementById('image');
    let header = document.getElementById('header');
    let footer = document.getElementById('footer');
    let center = document.getElementById('center');
    let border = document.getElementById('border');
    let whiteText = document.getElementById('white-text');
      

    items[i].addEventListener('change', function () {
          var card = document.getElementsByClassName("card-body");
         if(items[0].checked) {
           
              var element = document.createElement("h5");
              element.setAttribute("class", "card-title");
              element.innerHTML = "Card Title"
              card[0].appendChild(element);
              execute[0]=true;
            
         }
         else  {
            card[0].removeChild(document.getElementsByClassName("card-title")[0]);

        }
        if(items[1].checked) {
            var p=document.createElement("p");
            p.setAttribute("class", "card-text");
            p.innerHTML="Some quick example text to build on the card title and make up the bulk of the card's content."
            card[0].appendChild(p);
        }
    })
        
}