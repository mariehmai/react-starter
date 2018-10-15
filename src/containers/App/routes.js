import Header from '../../components/Header'

export default [
  {
    path: '/aboutus',
    name: 'About us',
    exact: true,
    component: Header,
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
    component: Header
  },
  {
    path: '/events',
    name: 'Incoming events',
    exact: true,
    component: Header,
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
    ]
  }
]
