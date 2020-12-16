import React from 'react';
import { useSelector } from 'react-redux';
import { Router } from '@reach/router';

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import HomePage from './pages/home-page';
import PlayerListRoute from './pages/players-list-page';
import Stadium from './pages/stadium';

import NavigationBar from './components/navigation/navigation-bar';
import { PlayerDetails } from './components/player/player-details';

import { getIsLoading, getTeamData } from './app.selectors';

import './App.css';

function App() {
  const isAppLoading = useSelector((state) => getIsLoading(state));
  const teamData = useSelector((state) => getTeamData(state));

  if (isAppLoading) {
    return (
      <Container fluid className="app-is-loading">
        <Spinner animation="border" />
      </Container>
    );
  }

  return (
    <Container fluid className="App no-gutters no-padding">
      <NavigationBar logo={teamData.strTeamLogo} />
      <Router>
        <HomePage path="/" />
        <PlayerListRoute path="/players" />
        <PlayerDetails path="/players/:id" />
        <Stadium path="/stadium" />
      </Router>
    </Container>
  );
}
export default App;
