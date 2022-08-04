import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../../App.css";
import TodoList from "./TodoList";

const Task = () => {
	// タスクの状態管理
	const [todos, setTodos] = useState([
		{ id: 1, name: "掃除", completed: false },
		{ id: 2, name: "洗濯", completed: false },
	]);

	const todoNameRef = useRef();

	// ハンドラ
	const addHandler = () => {
		// タスクを追加する
		const name = todoNameRef.current.value;

		// もしnameが空の場合リターン
		if (name === "") {
			return;
		}

		setTodos((prevTodos) => {
			return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
		});
	};

	// checkboxのトグルの状態を変える関数
	const toggleTodo = (id) => {
		const newTodos = [...todos];
		const todo = newTodos.find((todo) => todo.id === id);
		todo.completed = !todo.completed;
		setTodos(newTodos);
	};

	// タスクの削除を行う関数
	const handleClear = () => {
		const newTodos = todos.filter((todo) => !todo.completed);
		setTodos(newTodos);
	};

	return (
		<>
			<TodoList todos={todos} toggleTodo={toggleTodo} />
			<input ref={todoNameRef} type="text" />
			<button type="" onClick={addHandler}>
				タスクを追加
			</button>
			<button onClick={handleClear}>完了したタスクを削除</button>
			<div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
		</>
	);
};

export default Task;
