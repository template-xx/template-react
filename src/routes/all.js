import notFoundPage from '../pages/_404'
import homePage from '../pages/home'

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
