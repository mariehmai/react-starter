import Header from '../../components/Header'

export default [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: Header,
    icon: 'quidditch',
    last: true
  },
  {
    path: '/aboutus',
    name: 'About us',
    exact: true,
    component: Header,
    icon: 'ghost',
    main: true,
    submenu: [
      {
        path: '/team',
        name: 'The team',
        exact: true
      }
    ]
  },
  {
    path: '/services',
    name: 'Services',
    exact: true,
    component: Header,
    icon: 'table-tennis',
    main: true
  },
  {
    path: '/events',
    name: 'Incoming events',
    exact: true,
    component: Header,
    icon: 'volleyball-ball',
    main: true,
    submenu: [
      {
        path: '/worldcup',
        name: 'Word Cup',
        exact: true
      },
      {
        path: '/tournaments',
        name: 'Tournaments',
        exact: true
      },
      {
        path: '/games',
        name: 'Games',
        exact: true
      }
    ],
    last: true
  },
  {
    path: '/contact',
    name: 'Contact',
    exact: true,
    component: Header,
    icon: 'golf-ball'
  }
]
