import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import NewRequestScreen from './screens/NewRequestScreen'
import RequestScreen from './screens/RequestScreen'
import SurveyScreen from './screens/SurveyScreen'

const App = () => {
  return (
    <Router>
      <Header /> 
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/newrequest" component={NewRequestScreen}/>
          <Route path="/request/:id" component={RequestScreen}/>
          <Route path='/survey' component={SurveyScreen}/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
