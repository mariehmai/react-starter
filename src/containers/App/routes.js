import Home from '../Home'
import Services from '../Services'
import Equipe from '../Equipe'
import Galerie from '../Galerie'
import Contact from '../Contact'

export default [
  {
    path: '/',
    intlId: 'nav.home',
    exact: true,
    component: Home,
    icon: 'quidditch',
    last: true
  },
  {
    path: '/home',
    intlId: 'nav.home',
    exact: true,
    component: Home,
    icon: 'table-tennis',
    main: true
  },
  {
    path: '/services',
    intlId: 'nav.services',
    exact: true,
    component: Services,
    icon: 'table-tennis',
    main: true
  },
  {
    path: '/equipe',
    intlId: 'nav.equipe',
    exact: true,
    component: Equipe,
    main: true,
    icon: 'golf-ball'
  },
  {
    path: '/galerie',
    intlId: 'nav.galerie',
    exact: true,
    component: Galerie,
    main: true,
    icon: 'golf-ball'
  },
  {
    path: '/contact',
    intlId: 'nav.contact',
    exact: true,
    component: Contact,
    main:true,
    icon: 'golf-ball'
  }
]
