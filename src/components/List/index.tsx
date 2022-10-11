import { useToDoReducer } from '../../reducers/toDoReducer';
import './styles.css';

export const List = () => {
    const [list, listDispatch] = useToDoReducer();

    return (
        <div>
           
        </div>
    );
}