import Home from '../Home'
import Services from '../Services'
import Equipe from '../Equipe'
import Gallery from '../Gallery'
import Contact from '../Contact'

export default [
  /*{
    path: '/',
    intlId: 'nav.home',
    exact: true,
    component: Home,
    icon: 'quidditch',
    last: true
  },
  {
    path: '/aboutus',
    intlId: 'nav.aboutus',
    exact: true,
    component: AboutUs
    ,
    icon: 'ghost',
    main: true,
    submenu: [
      {
        path: '/team',
        intlId: 'The team',
        exact: true
      }
    ]
  },
  {
    path: '/events',
    intlId: 'nav.events',
    exact: true,
    component: Events,
    icon: 'volleyball-ball',
    main: true,
    submenu: [
      {
        path: '/worldcup',
        intlId: 'Word Cup',
        exact: true
      },
      {
        path: '/tourintlIdnts',
        intlId: 'TourintlIdnts',
        exact: true
      },
      {
        path: '/games',
        intlId: 'Games',
        exact: true
      }
    ],
    last: true
  },*/
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
    path: '/gallery',
    intlId: 'nav.gallery',
    exact: true,
    component: Gallery,
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
