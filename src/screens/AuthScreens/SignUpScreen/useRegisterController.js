import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';


const useRegisterController = () => {
    const dispatch = useDispatch();
    const [firstname, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [preference, setPreference] = useState('')
    const [promptList, setPromptList] = useState()
    const [finalData, setFinalData] = useState()
    const [date, setDate] = useState('')
    const handleDateSelection = (newDate) => {
        console.log(newDate)
        setDate(moment(newDate).format('MM-DD-YYYY'))
    }
    const setPrompt = (value) => {
        setPromptList(value)
    }
    const handleItem = (item) => {
        setPreference(item)
    }
    useEffect(() => {
        // console.log(firstname, lastName, preference, date, promptList)
        setFinalData({
            firstname: firstname,
            lastName: lastName,
            dateOfBirth: date,
            genderPreference: preference,
            promptAnswers: promptList
        })
        console.log(finalData)
    }, [firstname, lastName, preference, date, promptList])

    return {
        setFirstName,
        setLastName,
        setPreference,
        handleDateSelection,
        handleItem,
        setPrompt
    };
};

export default useRegisterController;
