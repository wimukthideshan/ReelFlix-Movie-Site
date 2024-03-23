// new code
document.addEventListener("DOMContentLoaded", function () {
  // Array to hold the products data
  let products = [
    {
      title: "The Godfather",
      image: "../src/images/GalleryImages/TheGodfather.jpg",
      IMDB: "9.2",
      RottenTomatoes: "95%",
      Desription:
        "The Godfather Don Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding. Michael, Vito's youngest son and a decorated WW II Marine is also present at the wedding. Michael seems to be uninterested in being a part of the family business. Vito is a powerful man, and is kind to all those who give him respect but is ruthless against those who do not. But when a powerful and treacherous rival wants to sell drugs and needs the Don's influence for the same, Vito refuses to do it. What follows is a clash between Vito's fading old values and the new ways which may cause Michael to do the thing he was most reluctant in doing and wage a mob war against all the other mafia families which could tear the Corleone family apart.",
    },
    {
      title: "The Dark Knight",
      image: "../src/images/GalleryImages/TDK.jpg",
      IMDB: "9",
      RottenTomatoes: "94%",
      Desription:
        "Set within a year after the events of Batman Begins (2005), Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City, until a mysterious and sadistic criminal mastermind known only as The Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against The Joker becomes deeply personal, forcing him to confront everything he believes and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent, and Rachel Dawes.",
    },
    {
      title: "The Godfather Part 2",
      image: "../src/images/GalleryImages/Godfathertwo.jpg",
      IMDB: "9",
      RottenTomatoes: "96%",
      Desription:
        "The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
    },
    {
      title: "12 Angry Men",
      image: "../src/images/GalleryImages/angrymen.jpg",
      IMDB: "7.8",
      RottenTomatoes: "93%",
      Desription:
        "The defense and the prosecution have rested, and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, AND each other. Based on the play, all of the action takes place on the stage of the jury room.",
    },
    {
      title: "Schindler's List",
      image: "../src/images/GalleryImages/shindlerslist.jpg",
      IMDB: "9",
      RottenTomatoes: "98%",
      Desription:
        "Oskar Schindler is a vain and greedy German businessman who becomes an unlikely humanitarian amid the barbaric German Nazi reign when he feels compelled to turn his factory into a refuge for Jews. Based on the true story of Oskar Schindler who managed to save about 1100 Jews from being gassed at the Auschwitz concentration camp, it is a testament to the good in all of us.",
    },
    {
      title: "The Lord of the Rings 3",
      image: "../src/images/GalleryImages/lotr.jpg",
      IMDB: "9",
      RottenTomatoes: "93%",
      Desription:
        "The final confrontation between the forces of good and evil fighting for control of the future of Middle-earth. Frodo and Sam reach Mordor in their quest to destroy the One Ring, while Aragorn leads the forces of good against Sauron's evil army at the stone city of Minas Tirith.",
    },
    {
      title: "Pulp Fiction",
      image: "../src/images/GalleryImages/pulpfiction.jpg",
      IMDB: "8.9",
      RottenTomatoes: "92%",
      Desription:
        "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.",
    },
    {
      title: "The Lord of the Rings 1",
      image: "../src/images/GalleryImages/lotr2.jpg",
      IMDB: "8.8",
      RottenTomatoes: "91%",
      Desription:
        "An ancient Ring thought lost for centuries has been found, and through a strange twist of fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it. However, he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir, and his three Hobbit friends Merry, Pippin, and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign.",
    },
    {
      title: "Forrest Gump",
      image: "../src/images/GalleryImages/forrestgump.jpg",
      IMDB: "8.8",
      RottenTomatoes: "71%",
      Desription:
        "Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people and meets the president several times. However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran, who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone.",
    },
    {
      title: "Fight Club",
      image: "../src/images/GalleryImages/fightclub.jpg",
      IMDB: "8.8",
      RottenTomatoes: "79%",
      Desription:
        "A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power.",
    },
    {
      title: "The Lord of the Rings 2",
      image: "../src/images/GalleryImages/lotr3.jpg",
      IMDB: "8.8",
      RottenTomatoes: "95%",
      Desription:
        "The continuing quest of Frodo and the Fellowship to destroy the One Ring. Frodo and Sam discover they are being followed by the mysterious Gollum. Aragorn, the Elf archer Legolas, and Gimli the Dwarf encounter the besieged Rohan kingdom, whose once great King Theoden has fallen under Saruman's deadly spell.",
    },
    {
      title: "Across the Spider-Verse",
      image: "../src/images/GalleryImages/spiderman.jpg",
      IMDB: "8.9",
      RottenTomatoes: "95%",
      Desription:
        "Miles Morales returns for the next chapter of the Oscar-winning Spider-Verse saga, an epic adventure that will transport Brooklyn's full-time, friendly neighborhood Spider-Man across the Multiverse to join forces with Gwen Stacy and a new team of Spider-People to face off with a villain more powerful than anything they have ever encountered.",
    },
    {
      title: "Inception",
      image: "../src/images/GalleryImages/inception.jpg",
      IMDB: "8.8",
      RottenTomatoes: "87%",
      Desription:
        "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.",
    },
    {
      title: "Star Wars: Episode V",
      image: "../src/images/GalleryImages/starwars.jpg",
      IMDB: "8.7",
      RottenTomatoes: "97%",
      Desription:
        "Luke Skywalker, Han Solo, Princess Leia and Chewbacca face attack by the Imperial forces and its AT-AT walkers on the ice planet Hoth. While Han and Leia escape in the Millennium Falcon, Luke travels to Dagobah in search of Yoda. Only with the Jedi Master's help will Luke survive when the Dark Side of the Force beckons him into the ultimate duel with Darth Vader.",
    },
    {
      title: "The Matrix",
      image: "../src/images/GalleryImages/matrix.jpg",
      IMDB: "8.7",
      RottenTomatoes: "8.3",
      Desription:
        "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. As a rebel against the machines, Neo must confront the agents: super-powerful computer programs devoted to stopping Neo and the entire human rebellion.",
    },
    {
      title: "Goodfellas",
      image: "../src/images/GalleryImages/goodfellas.jpg",
      IMDB: "8.7",
      RottenTomatoes: "96%",
      Desription:
        "Henry Hill might be a small time gangster, who may have taken part in a robbery with Jimmy Conway and Tommy De Vito, two other gangsters who might have set their sights a bit higher. His two partners could kill off everyone else involved in the robbery, and slowly start to think about climbing up through the hierarchy of the Mob. Henry, however, might be badly affected by his partners' success, but will he consider stooping low enough to bring about the downfall of Jimmy and Tommy?",
    },
    {
      title: "Se7en",
      image: "../src/images/GalleryImages/seven.jpg",
      IMDB: "8.6",
      RottenTomatoes: "82%",
      Desription:
        "A film about two homicide detectives' (Morgan Freeman and Brad Pitt) desperate hunt for a serial killer who justifies his crimes as absolution for the world's ignorance of the Seven Deadly Sins. The movie takes us from the tortured remains of one victim to the next as the sociopathic John Doe (Kevin Spacey) sermonizes to Detectives Somerset and Mills -- one sin at a time. The sin of Gluttony comes first and the murderer's terrible capacity is graphically demonstrated in the dark and subdued tones characteristic of film noir. The seasoned and cultured but jaded Somerset researches the Seven Deadly Sins in an effort to understand the killer's modus operandi while the bright but green and impulsive Detective Mills (Pitt) scoffs at his efforts to get inside the mind of a killer.",
    },
  ];

  // Create and populate HTML elements for each product in the JSON
  // Create and populate HTML elements for each product in the JSON
  products.forEach((product) => {
    // Create product element
    const productContainer = document.createElement("div");
    productContainer.classList.add("product");

    // Populate the product element with data from the JSON
    const { title, image, IMDB, RottenTomatoes } = product;
    productContainer.innerHTML = `
    <div class="imagePart">
      <img src="${image}" alt="${title}" class="image" />
      <div class="imgBottom">
        <div class="imgTagLeft">
        </div>
        <div class="imgTagRight">
        <p class="IMDB">IMDB<br> ${IMDB}</p>
        <p class="RottenTomatoes">Rotten Tomatoes <br>${RottenTomatoes}</p>
        </div>
      </div>
    </div>
  `;

    // Create and populate the title element
    const titleElement = document.createElement("h2");
    titleElement.classList.add("title");
    titleElement.textContent = title;

    // Append the title and description elements to the product container
    const imgTagLeft = productContainer.querySelector(".imgTagLeft");
    imgTagLeft.appendChild(titleElement);
    // Append the product element to the page
    document.querySelector(".movies").appendChild(productContainer);
  });

  // functions to change color and font size
  const backgroundColor = document.querySelector("main");
  const paragraph = document.querySelector("p");
  const header1 = document.querySelector("h1");
  const header2 = document.querySelector(".title");

  const largeFont = document.querySelector("#largeFont");
  const medFont = document.querySelector("#medFont");
  const smallFont = document.querySelector("#smallFont");
  const greyBtn = document.querySelector("#greyBtn");
  const whiteBtn = document.querySelector("#whiteBtn");
  const greenBtn = document.querySelector("#greenBtn");
  const redBtn = document.querySelector("#redBtn");

  /*Changes background colour when the relevant button is clicked*/
  greyBtn.addEventListener("click", function onclick(event) {
    backgroundColor.style.backgroundColor = "#808080";
    backgroundColor.style.color = "black";
  });

  whiteBtn.addEventListener("click", function onclick(event) {
    backgroundColor.style.backgroundColor = "white";
    backgroundColor.style.color = "black";
  });

  greenBtn.addEventListener("click", function onclick(event) {
    backgroundColor.style.backgroundColor = "#3e7e00";
    backgroundColor.style.color = "black";
  });

  redBtn.addEventListener("click", function onclick(event) {
    backgroundColor.style.color = "black";
    backgroundColor.style.backgroundColor = "#e0474c";
  });

  largeFont.addEventListener("click", function onclick(event) {
    backgroundColor.style.fontSize = "20px"
  });
  
  medFont.addEventListener("click", function onclick(event) {
    backgroundColor.style.fontSize = "15px"
  });
  
  smallFont.addEventListener("click", function onclick(event) {    
    backgroundColor.style.fontSize = "10px"
  });
});
