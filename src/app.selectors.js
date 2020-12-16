import { createSelector } from 'reselect';
import { getPathFromProps } from './utils/key-utils';

const getAppState = (state) => {
  return state.appState;
};

const getUIState = createSelector(getAppState, (appState) => appState.uiState);

const getGlobalData = (state) => state.teamData;

const getIsLoading = createSelector(
  getUIState,
  (uiState) => uiState.appLoading
);

const getForcedRouteChange = createSelector(
  getUIState,
  (uiState) => uiState.routeChange
);

const getIsPageLoading = createSelector(
  getUIState,
  getPathFromProps,
  (uiState, pathName) => uiState.pathLoading === pathName
);

const getTeamData = createSelector(getGlobalData, (data) => {
  return data;
});

const getCarouselImages = createSelector(getTeamData, (teamData) => {
  /**
   * its a bit hacky, but this is how the API is structured,
   * Under other circumstances, I'd imagine it would be returned as an array from
   * an endpoint.
   */
  const images = Array(4)
    .fill()
    .map((_, idx) => {
      const imageName = `strTeamFanart${idx + 1}`;
      return teamData[imageName];
    });
  return images;
});

export {
  getCarouselImages,
  getForcedRouteChange,
  getIsLoading,
  getIsPageLoading,
  getTeamData,
};
