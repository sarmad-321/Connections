import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPrompt } from '../../../../redux/actions/authActions';


const usePromptController = () => {
    const [promptsReceived, setPromptsReceived] = useState(false)
    useEffect(() => {


        dispatch(getPrompt()).then(res => {
            console.log("&&&&&&&&&&&")
            console.log('&&&&&&&&&&&&&&&:', res.message)
            setPrompts(res)
        });

    }, [])
    const dispatch = useDispatch();
    const [prompts, setPrompts] = useState()


    return {
        promptsReceived,
        prompts,

    };
};

export default usePromptController;
