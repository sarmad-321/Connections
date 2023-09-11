import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  getMyMatches,
  getMyPromptComments,
} from '../../../redux/actions/homeActions';

const useLikesController = currentUser => {
  const dispatch = useDispatch();
  const [matches, setMatches] = useState([]);
  const [myPromptComment, setMyPromptComment] = useState([]);
  const profile = useSelector(state => state?.profileReducer?.user);

  useEffect(() => {
    dispatch(getMyMatches()).then(res => {
      console.log(res);
      setMatches(res.matchRequests);
      getPromptComment(currentUser.user);
    });
  }, []);

  const getPromptComment = user => {
    dispatch(getMyPromptComments({user: user._id})).then(res => {
      console.log(res, 'response of get comments');
      setMyPromptComment(res.comments);
    });
  };

  const handleReject = () => {
    let matchesCopy = JSON.parse(JSON.stringify(matches));
    matchesCopy.shift();
    setMatches(matchesCopy);
  };

  return {
    matches,
    myPromptComment,
    handleReject,
  };
};

export default useLikesController;
