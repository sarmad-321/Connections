import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMyMatches} from '../../../redux/actions/homeActions';

const useChatController = () => {
  const dispatch = useDispatch();
  const [matches, setMatches] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    dispatch(getMyMatches()).then(res => {
      setMatches(res?.matchRequests);
    });
  };

  return {
    matches,
  };
};

export default useChatController;
