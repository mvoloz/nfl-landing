import { API_KEY, BASE_URL, LEAGUE_ID, TEAM_NAME_SLUG } from '../constants';

const routes = {
  getEventDetails: `lookupevent.php?id=`,
  getEventStats: `/lookupeventstats.php?id=`,
  getTeams: '/searchteams.php?t=',
  getPlayers: '/searchplayers.php?t=',
  getPlayerContract: '/lookupcontracts.php?id=',
  getPlayerDetails: '/lookupplayer.php?id=',
  getPlayerFormerTeams: '/lookupformerteams.php?id=',
  nextEvents: '/eventsnext.php?id=',
  seasonEvents: '/eventsseason.php?id=',
};

class Api {
  getBaseURL() {
    return `${BASE_URL}/${API_KEY}`;
  }

  getURL(route, property) {
    return this.getBaseURL() + route + property;
  }

  async fetchData(url) {
    const response = await (await fetch(url)).json();
    return response;
  }

  getSeasonEvents() {
    const eventsUrl = this.getURL(routes.seasonEvents, LEAGUE_ID);
    const url = `${eventsUrl}&s=2020`;
    return this.fetchData(url);
  }

  getEventDetails(id) {
    const url = this.getURL(routes.getEventDetails, id);
    return this.fetchData(url);
  }

  getEventStatistics(id) {
    const url = this.getURL(routes.getEventStats, id);
    return this.fetchData(url);
  }

  getPlayers() {
    const url = this.getURL(routes.getPlayers, TEAM_NAME_SLUG);
    return this.fetchData(url);
  }

  getPlayerDetails(id) {
    const url = this.getURL(routes.getPlayerDetails, id);
    return this.fetchData(url);
  }

  getPlayerContracts(id) {
    const url = this.getURL(routes.getPlayerContract, id);
    return this.fetchData(url);
  }

  getPlayerFormerTeams(id) {
    const url = this.getURL(routes.getPlayerFormerTeams, id);
    return this.fetchData(url);
  }
  getTeamData() {
    const url = this.getURL(routes.getTeams, TEAM_NAME_SLUG);
    return this.fetchData(url);
  }
}

export default new Api();
