export function login_model ()
{
    let htmlContent; // déclare la variable à l'extérieur de la fonction de rappel
  
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        htmlContent = this.responseText; // stocke le contenu HTML dans la variable globale
        }
    };
    xhttp.open("GET", "./template/login/index.html", true);
    xhttp.send();

    // where to put it
    let login_view_element = document.querySelector(".login-view")

    // utilise la variable htmlContent en dehors de la fonction de rappel
    setTimeout(function() {
        console.log(htmlContent); // affiche le contenu HTML dans la console
        login_view_element.innerHTML = htmlContent
    }, 1000);

    
}