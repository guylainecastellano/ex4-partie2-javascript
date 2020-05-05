//déclaration fonction pageload qui fait disparaitre les 3 blocs au chargemnt
window.onload = function pageload() {
document.getElementById('blockLine').style.visibility = 'hidden';
}
//déclaration fonction onscroll qui fait disparaitre les blocs de la fenetre
window.onscroll = function onScroll() {
//recupération de la valeur du scroll vertical en nbre de px
  var scrollTopValue = window.scrollY;
//condition permettant de faire réapparaitre les blocs qd on scroll à 300
  consol.log (scrollTopValue);
  if (scrollTopValue > 300) {
    document.getElementById('blockline').style.visibility = 'visible';
  }
}
// et faire apparatire nos blocs
