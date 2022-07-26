axios.get('https://picsum.photos/v2/list?page=2&limit=100').then(resp => {

    let images = eval(resp.data);
    let indicator_div=document.getElementsByClassName('carousel-indicators');
    let main_div=document.getElementsByClassName('carousel-inner');
    console.log(main_div[0])

    for (image in images) {
      if (image == 0) {
        let carosol = document.getElementsByClassName('carousel-item');
        let image = (carosol[0].children[0]);
        image.src = images[0].download_url;
      }
      else{
        
        let button=document.createElement('button');
        button.setAttribute('type', 'button');
        button.setAttribute('data-bs-target', '_#carouselExampleIndicators');
        button.setAttribute('data-bs-slide-to',image);
        indicator_div[0].appendChild(button);
        let div=document.createElement('div');
        let img=document.createElement('img');
        div.setAttribute('class', 'carousel-item');
        img.setAttribute('class', 'd-block');
        img.setAttribute('class', 'w-100');
        img.src=images[image].download_url;
        div.appendChild(img);
         main_div[0].appendChild(div);
        
       
      }
    }


  });



