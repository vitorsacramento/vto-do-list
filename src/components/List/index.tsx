import { useToDoReducer } from '../../reducers/toDoReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

export const List = () => {
    const [listState, listDispatch] = useToDoReducer();

    return (
        <div className="list-container">
            <div className="insert-task">
                <h2>Nova tarefa:</h2>
                <div className="input-control">
                    <input type="text" className="input-task" id="title" placeholder=" " />
                    <label htmlFor="titulo">Título</label>
                </div>

                <div className="input-control">
                    <input type="text" className="input-task" id="description" placeholder=" " />
                    <label htmlFor="description">Descrição</label>
                </div>

                <div className="input-control">
                    <button className="btn-addTask">Adicionar Tarefa</button>
                </div>
            </div>

            <div className="list">
                <ul className='list-box'>
                    <li className="list-item">
                        <div className="list-item-title">
                            <h2>Teste de título</h2>
                            <p>11/10/2022 - 00:00</p>
                        </div>
                        <div className="list-item-description">
                            <p>DESCRIÇÃO DO CARD PRA TESTE</p>
                        </div>
                        <div className="list-item-buttons">
                            <button>
                                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}