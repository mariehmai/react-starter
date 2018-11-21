import Home from '../Home'
import Events from '../Events'
import AboutUs from '../AboutUs'
import Services from '../Services'
import Team from '../Team'
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
    path: '/team',
    intlId: 'nav.team',
    exact: true,
    component: Team,
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
