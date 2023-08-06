import {useNavigation} from '@react-navigation/native';
import {useEffect, useState, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {getPrompt} from '../../../../redux/actions/authActions';

const usePromptController = onDataReceived => {
  const [promptList, setPromptList] = useState([
    {id: 1, question: 'Select a prompt', answer: 'and write your answer'},
    {id: 2, question: 'Select a prompt', answer: 'and write your answer'},
    {id: 3, question: 'Select a prompt', answer: 'and write your answer'},
  ]);
  const navigation = useNavigation();
  const [promptsReceived, setPromptsReceived] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState();
  const [selectedId, setSelectedId] = useState();
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

  const handleClick = id => {
    setSelectedId(id);
    dropDownRef.current.show();

    // navigation.navigate('Prompt2');
  };
  const onPromptSelection = value => {
    setSelectedPrompt(value);
    setTimeout(() => {
      answerRef.current.show();
    }, 400);
  };
  const handleAnswer = value => {
    let data = {
      selectedPrompt: selectedPrompt._id,
      answer: value,
    };
    let deepCopy = JSON.parse(JSON.stringify(promptList));
    let result = deepCopy.find(item => item.id == selectedId);
    console.log(result);
    result.selectedPrompt = selectedPrompt._id;
    result.answer = value;
    result.question = selectedPrompt.question;
    console.log('^&&&&RESULT&&&&^::', result);
    setPromptList(deepCopy);
    console.log('^&&&&LIST&&&&^::', promptList);

    // setPromptList(
    //   promptList.filter(item => item.selectedPrompt !== selectedPrompt._id),
    // );
    // setPromptList(prev => [
    //   ...prev,
    //   {
    //     selectedPrompt: selectedPrompt._id,
    //     answer: value,
    //     question: selectedPrompt.question,
    //   },
    // ]);
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
