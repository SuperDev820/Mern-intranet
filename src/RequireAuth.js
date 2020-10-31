import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'


const Wrapper = ({ location, auth, children }) => {
    console.log(auth)
    if (!auth.authenticated) {
        if(location.pathname != '/login' && location.pathname != '/register')
            return <Redirect to="/login" />
    } else {
        if (location && (location.pathname === '/') || location.pathname === '/login') {
            return <Redirect to="/dashboard" />
        }
    }
    
    return (<React.Fragment>
        {children}
    </React.Fragment>)
}
const mapStateToProps = (state) => ({
    auth: state.auth
})

export default withRouter(connect( mapStateToProps)(Wrapper))