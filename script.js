function getData() {
  fetch('data.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
    /// EXAM: COMPLÉTEZ LE CODE ICI !
      console.log(data);
      
    // TODO 1: REMPLIR LE HEADER
    let h1 = document.getElementById("nom-journal");
      console.log(h1);
    let journalNomJournal = data.journal.nomJournal;
      console.log(data.journal.nomJournal);
      h1.textContent = journalNomJournal;

    let p = document.getElementById("phrase-accroche");
      console.log(p);
    let journalPhraseAccroche = data.journal.phraseAccroche;
      console.log(data.journal.phraseAccroche);
      p.textContent = journalPhraseAccroche; 
    
    // TODO 2: REMPLIR LA NAVIGATION
    let navDiv = document.getElementById("themes-nav")
      console.log(navDiv);
    let themeNav = data.journal.themes;
      console.log(themeNav);
   
    themeNav.forEach(theme => {
    let nom = theme.nom;
     console.log(nom);
    
     let nav = 
    `<ul class="nav-theme-btn">
    <li class = "themes-nav">${nom}</li>
    </ul>`
    navDiv.insertAdjacentHTML("beforeend", nav)  
      });
    
    // TODO 3: REMPLIR L'ARTICLE PRINCIPAL
    let articleFirst = document.getElementById("article-principal")
      console.log(articleFirst);
    let articlePreums = data.journal.articlePrincipal
      console.log(articlePreums);
    
    function cardFirst(articleCard) {
    let titre = articleCard.titre;
     console.log(titre);
    let description = articleCard.description;
     console.log(description);
    let date = articleCard.date;
     console.log(date);
    let theme = articleCard.theme;
     console.log(theme);
    let image = articleCard.image;
     console.log(image);
    
    let card = 
     `<img src=${image} alt=${titre}>
        <div class="hero-info">
        <div class = "theme-badge">${theme}</div>
        <div>${description}</div>
        <div class = "date">${date}</div>
        </div>`

    console.log(card);
    articleFirst.insertAdjacentHTML("beforeend", card)  
    };
    cardFirst(articlePreums);
    
    // TODO 4: REMPLIR LA GRILLE D'ARTICLES
    let articleGrid = document.getElementById("articles-grid")
    let articles = data.journal.articles
      console.log(articles);
    
    function cardCreer(article) {
    let titre = article.titre; 
     console.log(titre);
    let date = article.date;
     console.log(date);   
    let theme = article.theme;
     console.log(theme);
    let image = article.image;
     console.log(image);
    let popularite = article.popularite;
     console.log(popularite);
  
    let card =
    `<div class = "article-card">
      <img src= ${image} alt= ${titre}>
      <div class  = "article-content">
       <div class = "theme-badge">${theme}</div>  
       <h3>${titre}</h3>
       <div class = "date">${date}</div>
      </div>
    </div>`
    console.log(card);
    articleGrid.insertAdjacentHTML("beforeend", card)  
    };
    
    articles.forEach(card => {
      cardCreer(card)
    });

    // TODO 5: REMPLIR LES THEMES
    let themesList = document.getElementById("themes-list");
    let themes = data.journal.themes
      console.log(themes);
     
    function themesListe (theme) {
    let nom = theme.nom; 
     console.log(nom);
    let description = theme.description;
     console.log(description);   
  
    let card =
    `<div class = "themes-list">
      <div class  = "theme-item">
       <div><h3>${nom}</h3></div>
       <div><p>${description}</p></div>
      </div>
    </div>`
  
    console.log(card);
    themesList.insertAdjacentHTML("beforeend", card)  
    };
    
    themes.forEach(card => {
      themesListe(card)
    });
    
    // TODO 6: REMPLIR LES AUTEURS
    let auteursListe = document.getElementById("authors-list");
    let auteurs = data.journal.auteurs
      console.log(auteurs);
    
    function authorsList (authors) {
    let prenom = authors.prenom; 
     console.log(prenom);
    let experience = authors.typeExperience;
     console.log(experience);   
    let presentation = authors.presentation;
     console.log(presentation);   
     let photo = authors.photo;
     console.log(photo);   

    let card =
    `<div class = "author-card">
       <img class="author-image" src= ${photo} alt= ${prenom}>
       <h3>${prenom}</h3>
       <p class = "author-role">${experience}</p>
       <p class = "author-bio">${presentation}</p>
    </div>`
    
    console.log(card);
    auteursListe.insertAdjacentHTML("beforeend", card)  
    };

    auteurs.forEach(card => {
      authorsList(card)
    });
   
    // TODO 7: REMPLIR LE CALL TO ACTION
    
    let callToAction = document.getElementById("call-to-action");
    let actionCall = data.journal.texteAppelAction
      console.log(actionCall);
    
      function callTwoAction(call) {

        let callAction = 
        `<p>${actionCall}</p>
        <button id = "#call-to-action" class = "cta-button">
        S'abonner</button>
       `
      callToAction.insertAdjacentHTML("beforeend", callAction) 
    }; 
//${texteAppelAction}
    callTwoAction(actionCall)
    
    /// FIN DU CODE

    // BONUS 1 : Alert sur le bouton CTA
    
    // BONUS 2 : Filtrage par thème
    
    // BONUS 3 : Tri par popularité
    })
    .catch((error) => console.error('Erreur lors de la lecture des données :', error));
}

getData();
