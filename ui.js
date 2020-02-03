class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
    }

    showProfile(user) {
        const template = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid rounded mb-2" src="${user.avatar_url}">
                            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                     </div>
                    <div class="col-md-9">
                            <span class="badge badge-pill badge-primary">Public Repos: ${user.public_repos}</span>
                            <span class="badge badge-pill badge-secondary">Public Gists: ${user.public_gists}</span>
                            <span class="badge badge-pill badge-success">Followers: ${user.followers}</span>
                            <span class="badge badge-pill badge-warning">Following: ${user.following}</span>
                            <br><br>
                                <ul class="list-group">
                                    <li class="list-group-item">Name: ${user.name}</li>
                                    <li class="list-group-item">Company: ${user.company}</li>
                                    <li class="list-group-item">Website/Blog: ${user.blog}</li>
                                    <li class="list-group-item">Location: ${user.location}</li>
                                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                                </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
        this.profile.innerHTML = template
    }

    showAlert(msg, className) {
        this.clearAlert();
        //create new div
        const div = document.createElement('div');
        //add class to list
        div.className = className;
        //insert message into div
        div.appendChild(document.createTextNode(msg))
        //get a parent element
        const container = document.querySelector('.searchContainer');
        //get the search body
        const searchBody = document.querySelector('.search');
        //insert the alert into document
        container.insertBefore(div, searchBody);
        setTimeout(() => {
            div.remove()
        }, 2500);
    }

    clearAlert() {
        //get the current alert div
        const currentAlert = document.querySelector('.alert-danger')
        // chech for existing alert
        if (currentAlert) {
            currentAlert.remove();
        }
        
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    showRepo(repos) {
        let output = '';
        repos.forEach(repo => {
            output += `
                <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Created at: ${repo.created_at}</span>
            </div>
          </div>
        </div>
            `;
        })
        document.querySelector('#repos').innerHTML = output;
    }
}