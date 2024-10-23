import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../redux/todoslice";
import "./Todo.css";
// const Todo = () => {
//   const todo = useSelector((state) => state.todo);
//   const dispatch = useDispatch();
//   const [task, setTask] = useState("");
//   const [isEdit, setIsEdit] = useState(false);
//   const [edit, setEdit] = useState("");
//   const [todoId, setTodoId] = useState(null);

//   const handlesave = (todoid) => {
//     if (edit !== "") {
//       dispatch(editTodo({ id: todoid, title: edit }));
//       setIsEdit(false);
//     }
//   };
//   const handleaddbtn = () => {
//     dispatch(addTodo(task));
//     setTask("");
//   };
//   const handleEditbtn = (todoid) => {
//     setTodoId(todoid);
//     setIsEdit(true);
//   };
//   return (
//     <div className="main-div">
//       <div className="h1-txt">
//         <h1 className="h1-txt1">To</h1>
//         <h1 h1-txt2>Do</h1>
//       </div>
//       <div className="inpt-btn-div">
//         <input
//           type="text"
//           name="todoinpt"
//           className="task-inpt"
//           placeholder="enter task"
//           id="task"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//         />
//         <button id="add" onClick={handleaddbtn}>
//           add
//         </button>
//       </div>
//       {todo.map((todos) => {
//         return (
//           <div key={todos.id}>
//             <div>
//               <li>{todos.title}</li>
//               <button onClick={() => handleEditbtn(todos.id)}>Edit</button>
//               <button onClick={() => dispatch(deleteTodo(todos.id))}>
//                 Delete
//               </button>
//             </div>
//             {isEdit && todoId == todos.id && (
//               <div>
//                 <input
//                   type="text"
//                   defaultValue={todos.title}
//                   onChange={(e) => setEdit(e.target.value)}
//                   className="editinpt"
//                 />
//                 <button onClick={() => handlesave(todos.id)}>Save</button>
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

const Todo = () => {
  const todo = useSelector((state) => state.todo);
  // console.log(todo);
  const [isEdit, setIsEdit] = useState(false);
  const [edit, setEdit] = useState("");
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const editref = useRef(null);

  const handledlt = (dltid) => {
    dispatch(deleteTodo(dltid));
  };
  useEffect(() => {
    if (isEdit) {
      editref.current.focus();
    }
  }, [isEdit]);
  const handleEditbtn = (editid, text) => {
    setIsEdit(true);
    setEdit(text);
    setId(editid);
  };

  const handleSave = (saveid) => {
    if (edit !== "") {
      dispatch(editTodo({ id: saveid, text: edit }));
      setIsEdit(false);
    }
  };
  const handlecancel = (cancelid) => {
    setIsEdit(false);
  };
  const handleEditinpt = (e) => {
    setEdit(e.target.value);
    // console.log(edit);
  };
  return (
    <div className="li-div">
      {todo.map((todos) => {
        return (
          <div key={todos.id}>
            {!isEdit ? (
              <div className="li-m-div">
                <div className="li">
                  <li className="lis">{todos.text}</li>
                </div>
                <div className="btn-div">
                  <button onClick={() => handleEditbtn(todos.id, todos.text)}>
                    Edit
                  </button>
                  <button onClick={() => handledlt(todos.id)}>Delete</button>
                </div>
              </div>
            ) : (
              <>
                {todos.id === id ? (
                  <div className="li-e-div">
                    <li className="li-e">
                      <div className="li-i-e">
                        <input
                          type="text"
                          className="editinptm"
                          defaultValue={todos.text}
                          ref={editref}
                          onChange={(e) => setEdit(e.target.value)}
                        />
                      </div>
                      <div className="btn-div">
                        <button className="save" onClick={() => handleSave(todos.id)}>
                          Save
                        </button>
                        <button onClick={() => handlecancel(todos.id)}>
                          cancel
                        </button>
                      </div>
                    </li>
                  </div>
                ) : (
                  <div className="li-m-div">
                    <div className="li">
                      <li className="lis">{todos.text}</li>
                    </div>
                    <div className="btn-div">
                      <button
                        onClick={() => handleEditbtn(todos.id, todos.text)}
                      >
                        Edit
                      </button>
                      <button onClick={() => handledlt(todos.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Todo;
