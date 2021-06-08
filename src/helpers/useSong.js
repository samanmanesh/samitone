import {useContext} from 'react';
import { MainContext } from '../MainContext';

const useSong = () => {
    const context = useContext(MainContext)
    return context
}
export default useSong;