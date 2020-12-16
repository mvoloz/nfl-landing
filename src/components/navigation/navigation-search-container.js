import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import NavigationSearch from './navigation-search';
import { searchPlayerStartAction } from '../player/player.actions';
import { getForcedRouteChange } from '../../app.selectors';

const displayName = 'NavigationSearchContainer';

const NavigationSearchContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const routeChange = useSelector((state) => getForcedRouteChange(state));

  useEffect(() => {
    if (routeChange) {
      navigate(routeChange);
    }
  }, [navigate, routeChange]);

  const [inputVal, setInputVal] = useState('');

  const handleInputChange = useCallback((evt) => {
    setInputVal(evt.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      const searchVal = inputVal;
      setInputVal('');
      event.preventDefault();
      dispatch(searchPlayerStartAction({ value: searchVal }));
    },
    [dispatch, inputVal, setInputVal]
  );

  return (
    <NavigationSearch
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
    />
  );
};

NavigationSearchContainer.displayName = displayName;

export default NavigationSearchContainer;
