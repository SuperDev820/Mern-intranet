import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import history from './history'

const Wrapper = ({ location, authenticated, children }) => {
  if (location && (location.pathname === '/' || location.pathname === '/login')) {
    if (authenticated) {
      console.log('dashboard redirect')
      history.push('/dashboard')
    } else {
      history.push('/login')
    }
  }
  return (<React.Fragment>
    {children}
  </React.Fragment>)
}

// export function RequireAuth(ComposedComponent) {

//   class Auth extends React.Component {

//     state = {
//       authenticated: false
//     }

//     // Push to login route if not authenticated on mount
//     componentWillMount() {
//       console.log(this.props.authenticated)
//       if(!this.state.authenticated) {
//         // Use your router to redirect them to login page
//       }
//     }

//     // Push to login route if not authenticated on update
//     // componentWillUpdate(nextProps) {
//     //   if(!this.state.authenticated) {
//     //     // Use your router to redirect them to login page
//     //   }
//     // }

//     // Otherwise render the original component
//     render() {
//       return <ComposedComponent {...this.props}/>
//     }

//   }

//   return Auth

// }
const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated
})

export default withRouter(connect(mapStateToProps)(Wrapper))