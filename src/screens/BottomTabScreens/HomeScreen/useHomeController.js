import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProfileDetails} from '../../../redux/actions/profileActions';
import {getDates} from '../../../redux/actions/homeActions';
import {logout} from '../../../redux/actions/authActions';

const useHomeController = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const profile = useSelector(state => state?.profileReducer?.user);

  useEffect(() => {
    // dispatch(logout());
    dispatch(getDates()).then(res => {
      console.log('&&&&&&&&&&&');
      console.log(res, 'MyDates');
      setData(res.matches);
      // setPrompts(res)
    });
    dispatch(getProfileDetails());
  }, []);

  return {
    data,
    profile,
  };
};

export default useHomeController;
