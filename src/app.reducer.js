import { handleActions } from 'redux-actions';
import {
  globalDataSuccessAction,
  initialLoadCompleteAction,
  forceRouteChangeAction,
  forceRouteChangeCompleteAction,
  pageLoadStartAction,
  pageLoadCompleteAction,
} from './app.actions';

const handleGlobalData = (state, { globalData }) => {
  const teamData = globalData?.teams?.[0] || {};
  return { ...state, ...teamData };
};

const handleInitialLoadComplete = (state, action) => {
  return {
    ...state,
    uiState: {
      appLoading: false,
    },
  };
};

const handlePageLoadIndicator = (state, { payload }) => {
  return {
    ...state,
    uiState: {
      ...state.uiState,
      pathLoading: payload,
    },
  };
};

const handleForceRouteChange = (state, { payload }) => {
  const { id, start } = payload;

  const route = start ? id : null;

  return {
    ...state,
    uiState: { ...state.uiState, routeChange: route },
  };
};

export const appUIReducer = handleActions(
  {
    [initialLoadCompleteAction]: handleInitialLoadComplete,
    [forceRouteChangeAction]: handleForceRouteChange,
    [forceRouteChangeCompleteAction]: handleForceRouteChange,
    [pageLoadStartAction]: handlePageLoadIndicator,
    [pageLoadCompleteAction]: handlePageLoadIndicator,
  },
  {
    uiState: {
      appLoading: true,
    },
  }
);

export const teamDataReducer = handleActions(
  {
    [globalDataSuccessAction]: handleGlobalData,
  },
  {}
);
