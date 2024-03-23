

function description_horror(){
var kandy="<b><u>Kandy </u><br><p> Horror movies are a genre of film that aims to elicit fear, terror, or anxiety from the audience. They often feature supernatural or paranormal elements, graphic violence, and psychological terror.Common themes include monsters, ghosts, serial killers, and haunted locations. Horror movies have been a popular and enduring form of entertainment since the early 20th century.</p>";
document.getElementById("description").innerHTML=horror;
}


function description_romantic(){
var Ella="<b><u> Ella</u><br><p>Romance movies are films that typically explore the themes of love, attraction, and relationships between characters.These movies often feature a central romantic storyline, which may be presented in a variety of genres, including drama, comedy, and musicals.They are often popular among audiences for their emotional appeal and ability to inspire feelings of hope and passion.</p>
document.getElementById("description").innerHTML=romantic;
}

function description_action(){
var Sigiriya="<b><u>Sigiriya</u><p><br>Action movies are a genre of film that typically involve a lot of physical activity, stunts, and violence.They often feature heroes who engage in high-intensity fights, chases, and explosions to defeat their enemies and save the day. Popular action movie franchises include James Bond, Die Hard, and the Marvel Cinematic Universe..</p>";
document.getElementById("description").innerHTML=action;
}

function description_triller(){
var Yala="<b><u>Yala National Park </u> <p><br>Thriller movies are a genre of film that typically involve suspenseful and intense storylines, often featuring crime, mystery, and danger.They aim to keep the audience on the edge of their seats, with unexpected twists and turns, and often involve psychological elements.Examples include "Psycho", "The Silence of the Lambs", and "Inception".</p>";
document.getElementById("description").innerHTML=trill;
}

function description_drama(){
var galle="<b><u>Galle</u></b><p>gious population.<br>Drama movies are a genre of film that focuses on realistic characters dealing with emotional themes such as love, loss, and conflict. They often contain intense and serious storylines, exploring complex human relationships and issues. Drama movies can be based on real-life events or entirely fictional, but they always aim to evoke strong emotions from the viewer.</p>";
document.getElementById("description").innerHTML=drama;
}


    var thumbnails = document.getElementById("thumbnails")
var imgs = thumbnails.getElementsByTagName("img")
var main = document.getElementById("main")
var counter=0;



function pagecolor(color){
  document.body.style.background=color;
  }
  function textcolor(color){
  document.getElementById("description").style.color=color;
  document.body.style.color=color;
  document.getElementById("quatoes").style.color=color;
  }
  


for(let i=0;i<imgs.length;i++){
  let img=imgs[i]
 img.addEventListener("mouseover",function(){
  main.src=this.src
})
  
}

