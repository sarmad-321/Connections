import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  getMyRequests,
  getMyPromptComments,
} from '../../../redux/actions/homeActions';

const useLikesController = currentUser => {
  const dispatch = useDispatch();
  const [matches, setMatches] = useState([]);
  const [myPromptComment, setMyPromptComment] = useState([]);
  const profile = useSelector(state => state?.profileReducer?.user);
  useEffect(() => {
    dispatch(getMyRequests()).then(res => {
      console.log(res);
      setMatches(res.matchRequests);
      if (currentUser) {
        getPromptComment(currentUser.user);
      }
    });
  }, []);

  const getPromptComment = user => {
    console.log(user, 'user from params');
    dispatch(getMyPromptComments({user: user._id})).then(res => {
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
