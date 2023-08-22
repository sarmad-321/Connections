import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useHomeController = () => {
  const dispatch = useDispatch();
  const [matches, setMatches] = useState();
  const profile = useSelector(state => state?.profileReducer?.user);

  useEffect(() => {
    dispatch();
  }, []);

  return {};
};

export default useHomeController;
