import axios from "axios";

const TOKEN = 'add your token'

const instance = axios.create({
  baseURL: 'https://api.github.com/graphql',
  timeout: 3000,
  headers: {
    'Authorization': `bearer ${TOKEN}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});



export const Api = {
  getRepositories: async () => {
    try {
      const res = await instance.post(``, JSON.stringify({
        'query': `query {
  user(login: "octocat") {
    login
    repositories(first: 30, ownerAffiliations: OWNER) {
      nodes {
        name
      }
    }
  }
}` }, null, 2))

      const data = res.data
      return data.data.user.repositories.nodes
    } catch (e) {
      console.log('ERROR: ', e)
    }
  },

  getIssue: async (name) => {
    try {
      const res = await instance.post(``, JSON.stringify({
        'query': `query {
  repository(owner:"octocat", name:"${name}") {
    issues(last:20 ) {
      edges {
        node {
          title
          state
          id
          url
          bodyText
          comments(last: 20) {
            edges {
              node {
                id
                bodyText
                createdAt
              }
            }
          }
        }
      }
    }
  }
}
`
      }, null, 2))
      const data = res.data.data.repository.issues.edges;
      return data
    } catch (error) {
      console.log(error)
      throw error
    }

  }
}
