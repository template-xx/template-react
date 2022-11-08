import homePage from '../pages/home'
import notFoundPage from '../pages/_404'

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
