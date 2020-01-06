class Ui {
  constructor() {
    this.profile = document.getElementById('results');
  }

  showProfile(user) {
    this.profile.innerHTML = `
        <div class="card card-body mb-3 bg-dark text-white main-card">
        <div class="row">
        <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a href="${
          user.html_url
        }" target="_blank" class="btn btn-warning btn-block mt-3 mb-4 buzzUp">View Profile</a>
        </div>
        <div class="col-md-9">
        <span class="badge badge-primary buzzUp">Public Repos: ${
          user.public_repos
        }</span>
        <span class="badge badge-secondary buzzUp">Public Gists: ${
          user.public_gists
        }</span>
        <span class="badge badge-success buzzUp">Followers: ${
          user.followers
        }</span>
        <span class="badge badge-info buzzUp">Following: ${
          user.following
        }</span>
        <br><br>
        <ul class="list-group main-list">
        <li class="list-group-item">Company: ${
          user.company === null ? 'none' : user.company
        }</li>
        <li class="list-group-item">Website/Blog: ${user.blog}</li>
        <li class="list-group-item">Location: ${user.location}</li>
        <li class="list-group-item">Member Since: ${user.created_at}</li>
        </ul>
        </div>
        </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos </h3>
        <div id="repos"></div>
    `;
  }
}
