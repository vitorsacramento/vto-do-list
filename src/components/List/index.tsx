import { ChangeEvent, useState } from 'react';
import { useToDoReducer } from '../../reducers/toDoReducer';
import { ListItem } from './ListItem';
import './styles.css';

export const List = () => {
    const [listState, listDispatch] = useToDoReducer();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleGetTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const handleGetDescription = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    }

    const handleAddTask = () => {
        listDispatch({
            type: 'ADD',
            payload: {
                title: title,
                description: description
            }
        });
    }

    return (
        <div className="list-container">
            <div className="insert-task">
                <h2>Nova tarefa:</h2>
                <div className="input-control">
                    <input
                        type="text"
                        className="input-task"
                        id="title"
                        placeholder=" "
                        maxLength={15}
                        onChange={handleGetTitle}
                    />
                    <label htmlFor="titulo">Título</label>
                </div>

                <div className="input-control">
                    <input
                        type="text"
                        className="input-task"
                        id="description"
                        placeholder=" "
                        onChange={handleGetDescription}
                    />
                    <label htmlFor="description">Descrição</label>
                </div>

                <div className="input-control">
                    <button className="btn-addTask" onClick={handleAddTask}>Adicionar Tarefa</button>
                </div>
            </div>

            <div className="list">
                <ul>
                    {listState.map((item, index) => (
                        <li className="list-item" key={index}>
                            <ListItem task={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
