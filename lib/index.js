// This is a little hack to ensure we have the mocked
//   document from our specs...
// In the future we will use JSDOM in our specs to accommodate
this._init = function(document){
  let aboutButton = document.querySelector('[data-js="dropdown-about"]');
  let aboutMenu = document.querySelector('[data-js="about-menu"]');
}

this.onAboutButtonClick = function(e){
  //
}
