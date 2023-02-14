import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/components/Pages/Main";
import IssuePage from "@/components/Pages/IssuePage";
import IssueComments from "@/components/Pages/IssueComments";

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
