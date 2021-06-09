import {useContext} from 'react';
import { PlayContext } from '../contexts/PlayContext';

const usePlay = () => {
    const context = useContext(PlayContext)
    return context
}
export default usePlay;