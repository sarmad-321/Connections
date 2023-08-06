import {useNavigation} from '@react-navigation/native';
import {useEffect, useState, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {getPrompt} from '../../../../redux/actions/authActions';

const usePromptController = onDataReceived => {
  const navigation = useNavigation();
  const [promptsReceived, setPromptsReceived] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState();
  const [promptList, setPromptList] = useState([]);
  const [prompts, setPrompts] = useState();
  const dropDownRef = useRef();
  const answerRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(promptList);
    onDataReceived(promptList);
  }, [promptList]);
  useEffect(() => {
    dispatch(getPrompt()).then(res => {
      setPrompts(res);
    });
  }, []);

  const handleClick = () => {
    if (promptList.length !== 2) {
      dropDownRef.current.show();
    }

    // navigation.navigate('Prompt2');
  };
  const onPromptSelection = value => {
    setSelectedPrompt(value);
    setTimeout(() => {
      answerRef.current.show();
    }, 400);
  };
  const handleAnswer = value => {
    setPromptList(
      promptList.filter(item => item.selectedPrompt !== selectedPrompt._id),
    );
    setPromptList(prev => [
      ...prev,
      {
        selectedPrompt: selectedPrompt._id,
        answer: value,
        question: selectedPrompt.question,
      },
    ]);
  };

  return {
    promptsReceived,
    prompts,
    dropDownRef,
    answerRef,
    selectedPrompt,
    promptList,
    handleClick,
    onPromptSelection,
    handleAnswer,
  };
};

export default usePromptController;
