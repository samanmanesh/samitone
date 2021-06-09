import {useContext} from 'react';
import { MainContext } from '../MainContext';

const useSong = () => {
    const context = useContext(MainContext)
    console.log(context)
    return context
}
export default useSong;