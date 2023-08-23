import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMyMatches} from '../../../redux/actions/homeActions';

const useLikesController = () => {
  const dispatch = useDispatch();
  const [matches, setMatches] = useState([]);
  const profile = useSelector(state => state?.profileReducer?.user);

  useEffect(() => {
    dispatch(getMyMatches()).then(res => {
      console.log(res);
      setMatches(res.matchRequests);
    });
  }, []);

  return {
    matches,
  };
};

export default useLikesController;
