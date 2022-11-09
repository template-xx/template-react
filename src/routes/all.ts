import homePage from '../pages/home'
import notFoundPage from '../pages/404'

export default [
  {
    path: '/',
    component: homePage
  },
  {
    path: '*',
    component: notFoundPage
  }
]
