class Github {
  constructor() {
    this.clientId = '34f82169d933c10b5994';
    this.clientSecret = 'd415885c48cbd9e0ebf55f107fb959215f599d27';
  }

  async getUser(user) {
    const profileJson = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
    );
    const profileData = await profileJson.json();

    return {
      profile: profileData
    };
  }
}
