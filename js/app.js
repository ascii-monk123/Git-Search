//instantiate github
const github = new Github();
//instantiate the ui class
const ui = new Ui();
//the input dom element
const searchBox = document.getElementById('searchBox');

//the event listener that fires as soons as key is pressed in the input box
searchBox.addEventListener('keyup', e => {
  //get the input text that is typed
  const text = e.target.value;

  if (text !== '') {
    //make the http call
    github.getUser(text).then(data => {
      if (data.profile.message === 'Not Found') {
        //Show an error message in the ui
      } else {
        //show the profile in the ui class
        ui.showProfile(data.profile);
      }
    });
  } else {
    //clear the profile
  }
});
