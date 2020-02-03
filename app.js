//init github
const github = new Github;

//init ui
const ui = new UI;

//get search input
const search = document.querySelector('#search');

//Add keyup event listener to search
search.addEventListener('keyup', fetchProfile);

//define the fetchProfile function
function fetchProfile(e) {
    const userInput = e.target.value;
    if (userInput !== '') {
        github.getUser(userInput)
        .then(data => {
            if (data.profile.message == 'Not Found') {
                //clear profile
                ui.clearProfile();
                //display not found error
                ui.showAlert('User not Found', 'alert alert-danger mt-2');
            } else {
                //display user profile
                ui.showProfile(data.profile);
                ui.showRepo(data.repo);
            }
        })
    } else {
        ui.clearProfile();
    }
}