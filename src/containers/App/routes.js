import Events from '../Events/index'

export default [
  {
    path: '/',
    intlId: 'nav.home',
    exact: true,
    component: Events,
    icon: 'quidditch',
    last: true
  },
  {
    path: '/aboutus',
    intlId: 'nav.aboutus',
    exact: true,
    component: Events,
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
    path: '/services',
    intlId: 'nav.services',
    exact: true,
    component: Events,
    icon: 'table-tennis',
    main: true
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
    path: '/contact',
    intlId: 'nav.contact',
    exact: true,
    component: Events,
    icon: 'golf-ball'
  }
]
