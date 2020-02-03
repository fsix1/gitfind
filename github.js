class Github {
    constructor() {
        this.client_id = 'c908719fa0aa88d400bc';
        this.client_secret = '91e2de6cdde45c2e75d20e16f489c5ecf0cd0296';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoeResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const repo = await repoeResponse.json();
        const profile = await profileResponse.json();

        return {
            profile,
            repo
        }
    }
}