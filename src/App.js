import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { initializeApp } from './Redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './Redux/redux-store';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))


class App extends React.Component {
  componentDidMount(){
   this.props.initializeApp()
  }

  render(){
    if(!this.props.initialized){
      return (<Preloader/>)
    }
    
     return (
    <div className="app-wrapper">
      <HeaderContainer/>
      <Navbar/>
      <div className="app-wrapper-content">
      <Route path="/dialogs" 
      render={withSuspense(DialogsContainer)} />
      <Route path="/profile/:userId?" 
      render={withSuspense(ProfileContainer)}/>
      <Route path="/users" 
      render={() => <UsersContainer/> }/>
      <Route path="/login" 
      render={() => <LoginPage/> }/>
      </div>
    </div>
  );
  }
  
 
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})) (App);

 const SamuraiJSApp = (props) => {
   return <BrowserRouter basename={process.env.PUBLIC_URL}>
  <Provider store={store}>
   <AppContainer/>
  </Provider>
  </BrowserRouter>
  };

  export default SamuraiJSApp;
