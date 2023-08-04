import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPrompt } from '../../../../redux/actions/authActions';


const usePromptController = () => {

    const dispatch = useDispatch();
    const [prompts, setPrompts] = useState()

    const handleContinue = () => {
        dispatch(getPrompt()).then(res => {
            console.log("&&&&&&&&&&&")
            // console.log('&&&&&&&&&&&&&&&:', res)

            setPrompts(res)


        });
    };

    return {
        handleContinue,
        prompts,

    };
};

export default usePromptController;
