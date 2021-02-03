var url = "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

for (var i = 100 ; i < 116; i ++){
  url+=i;
  
  fetch(url).then(res => res.json()).then(data =>{
    var img = data.primaryImage;
    var title;
    if (data.artistDisplayName){
        var title = data.artistDisplayName;

    }else {
      var title="unknown author"
    }
    var html = `<div class="artwork">
            <h3 class="title">${title}</h3>
            <p class="txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<p>
            <img class="each-photo" src="${img}">   
       </div>`
    $("#addHere").append(html);
  });
  url = url.substring(0, url.length - 3);
}