import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/Pages/Main";
import IssuePage from "@/Pages/IssuePage";
import IssueComments from "@/Pages/IssueComments";

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/issue',
    component: IssuePage
  },
  {
    path: '/issue/:id',
    component: IssueComments,
    query: {
      name: ''
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
