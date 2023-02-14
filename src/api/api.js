import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.github.com/graphql',
  timeout: 3000,
  headers: {
    'Authorization': `bearer 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`,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});


const TOKEN = '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'

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
}`
      }, null, 2))
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

// const query  {
//   repository(owner:"octocat", name:"Hello-World") {
//     issues(last:20, states:CLOSED) {
//       edges {
//         node {
//           title
//           url
//           labels(first:5) {
//             edges {
//               node {
//                 name
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
