import {useEffect, useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMyMatches} from '../../../redux/actions/homeActions';
import {useFocusEffect} from '@react-navigation/native';

const useInboxController = () => {
  const dispatch = useDispatch();
  const [matches, setMatches] = useState([]);

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  const fetchData = async () => {
    dispatch(getMyMatches()).then(res => {
      setMatches(res?.matches);
    });
  };

  return {
    matches,
  };
};

export default useInboxController;
