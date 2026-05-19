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
    let themes = data.journal.themes;
      console.log(themes);
      
    themes.forEach(theme => {
    let nom = theme.nom;
     console.log(nom);
    let nav = 
    `<li class="nav-theme-btn"><ul>${nom}</ul></li>`
    navDiv.insertAdjacentHTML("beforeend", nav)  
      });
    
      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL

      // TODO 4: REMPLIR LA GRILLE D'ARTICLES

      // TODO 5: REMPLIR LES THEMES

      // TODO 6: REMPLIR LES AUTEURS

      // TODO 7: REMPLIR LE CALL TO ACTION

      /// FIN DU CODE

      // BONUS 1 : Alert sur le bouton CTA

      // BONUS 2 : Filtrage par thème

      // BONUS 3 : Tri par popularité
    })
    .catch((error) => console.error('Erreur lors de la lecture des données :', error));
}

getData();
