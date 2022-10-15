import { ChangeEvent, useEffect, useState } from 'react';
import { useToDoReducer } from '../../reducers/toDoReducer';
import { ListItem } from './ListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { setLocalStorage } from '../../localStorage/localStorage';
import './styles.css';

export const List = () => {
    const [listState, listDispatch] = useToDoReducer();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setLocalStorage(listState);
    }, [listState]);

    const handleGetTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const handleGetDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    }

    const handleAddTask = () => {
        if(title && description) {
            setTitle('');
            setDescription('');
        }

        listDispatch({
            type: 'ADD',
            payload: {
                title: title,
                description: description,
            }
        });
    }

    const handleDeleteTask = (id: string) => {
        listDispatch({
            type: 'DEL',
            payload: { id }
        });
    }

    return (
        <div className="list-container">
            <div className="insert-task">
                <h2>Nova tarefa:</h2>
                <div className="input-control">
                    <input type="text" className="input-task" id="title" value={title} placeholder=" " onChange={handleGetTitle} />
                    <label htmlFor="titulo">Título</label>
                </div>

                <div className="input-control">
                    <textarea id="description" value={description} placeholder=" " onChange={handleGetDescription}></textarea>
                    <label htmlFor="description">Descrição</label>
                </div>

                <div className="input-control">
                    <button className="btn-addTask" onClick={handleAddTask}>Adicionar Tarefa
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>

            <div className="list">
                {listState.length == 0 &&
                    <div className="no-tasks">Nenhuma tarefa ainda!</div>
                }
                <ul>
                    {listState.map((item, index) => (
                        <li className="list-item" key={index}>
                            <ListItem task={item} onDelete={() => handleDeleteTask(item.id)} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
