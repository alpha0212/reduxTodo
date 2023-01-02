import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../../actions";
import "./todo.css";
import { useSelector } from "react-redux";
import { todoReducers, initialData } from "../../reducers/todoReducers";

export const Todo: React.FC = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const addTodoOnClick = () => {
    dispatch(addTodo(inputData));
  };
  const deleteTodoOnClick = (data: any) => {
    dispatch(deleteTodo(data.id));
  };
  const removeTodoOnClick = () => {
    dispatch(removeTodo());
  };

  const setDataOnClick = () => {
    setInputData("");
  };

  const list = useSelector((state: any) => state.todoReducers.list);
  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <figcaption>Add Your List ✌</figcaption>
        </figure>
        <div className="addItems">
          <input
            type="text"
            placeholder="Add Items"
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
          />
          <i
            className="fa fa-plus add-btn"
            onClick={() => {
              addTodoOnClick();
              setDataOnClick();
            }}
          ></i>
        </div>
        <div className="showItems">
          {list.map((elem: any, key: number) => {
            return (
              <div className="eachItem" key={key}>
                <h3>{elem.data}</h3>
                <i
                  className="far fa-trash-alt add-btn"
                  title="Delete Item"
                  onClick={() => {
                    deleteTodoOnClick(elem);
                    setDataOnClick();
                  }}
                ></i>
              </div>
            );
          })}
        </div>
        <div className="showItems">
          <button
            className="btn effect04"
            data-sm-link-text="remove All"
            onClick={removeTodoOnClick}
          >
            <span>Check List</span>
          </button>
        </div>
      </div>
    </div>
  );
};
