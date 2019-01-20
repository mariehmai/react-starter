import { connect } from 'react-redux'

import { switchCategory } from '../../store/actions'
import HomeComponent from './Home'

const mapDispatchToProps = dispatch => ({
  switchCategory: category => dispatch(switchCategory(category))
})

const Home = connect(
  state => ({
    category: state.category
  }),
  mapDispatchToProps
)(HomeComponent)

export default Home
