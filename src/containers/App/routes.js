import Header from '../../components/Header'

export default [
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
    component: Header
  }
]
