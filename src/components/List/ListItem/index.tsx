import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../../Models/Task';
import './styles.css';
import { formatDate } from '../../../Utils/utils';

type ListItemProps = {
    task: Task;
}

export const ListItem = ({ task }: ListItemProps) => {

    return (
        <>
            <div className="list-item-title">
                <h2>{task.title}</h2>
                <p>{formatDate(task.data)}</p>
            </div>
            <div className="list-item-description">
                <p>{task.description}</p>
            </div>
            <div className="list-item-buttons">
                <button className="btn">
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                </button>
                <button className="btn">
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
            </div>
        </>
    );
}
