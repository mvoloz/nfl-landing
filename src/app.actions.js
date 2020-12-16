import { createAction } from 'redux-actions';

const ACTIONS = {
  globalDataSuccessAction: 'GLOBAL_DATA_SUCCESS',
  initialLoadComplete: 'INITIAL_LOAD_COMPLETE',
  fourceRouteChange: 'FORCE_ROUTE_CHANGE',
  forceRouteChangeComplete: 'FORCE_ROUTE_CHANGE_COMPLETE',
  pageLoadStart: 'PAGE_LOAD_START',
  pageLoadComplete: 'PAGE_LOAD_COMPLETE',
};

export const initialLoadCompleteAction = createAction(
  ACTIONS.initialLoadComplete
);
export const globalDataSuccessAction = createAction(
  ACTIONS.globalDataSuccessAction
);

export const forceRouteChangeAction = createAction(ACTIONS.fourceRouteChange);

export const forceRouteChangeCompleteAction = createAction(
  ACTIONS.forceRouteChangeComplete
);

export const pageLoadStartAction = createAction(ACTIONS.pageLoadStart);
export const pageLoadCompleteAction = createAction(ACTIONS.pageLoadComplete);
