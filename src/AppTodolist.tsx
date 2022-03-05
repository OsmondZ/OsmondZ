import React, { useState, useEffect } from "react";

// 1. 自己定义的变量类型
// 2. 宿主环境（浏览器，node）的类型
// 3. 第三方框架的类型，可能要跟1和2组合
// 4. 泛型等推导的类型，熟练使用Omit，Pick，Partial等工具函数

interface Todo {
  title: string;
  done: boolean;
}
type inputEvent = React.ChangeEvent<HTMLInputElement>;
const App: React.FC = function () {
  const [num, setNum] = useState<number>(2);
  function handleAdd() {
    // setNum(num + 1)
    // setNum(num + 1)
    // setNum(num + 1)
    setNum((num) => num + 1);
    setNum((num) => num + 1);
    setNum((num) => num + 1);
  }

  const [val, setVal] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([
    { title: "学习 React", done: true },
    { title: "睡觉", done: false },
    { title: "玩游戏", done: false },
  ]);
  function addTodo() {
    if (!val) {
      alert("小老弟你啥都没输入");
      return;
    }
    setTodos([...todos, { title: val, done: false }]);
    setVal("");
  }
  function clearTodo() {
    setTodos(todos.filter((todo) => !todo.done));
  }
  function handleRemoveTodo(i: number) {
    const nextTodos = [...todos];
    nextTodos.splice(i, 1);
    setTodos(nextTodos);
  }
  function handleSetTodo(e: inputEvent, i: number) {
    const nextTodos = [...todos];
    nextTodos[i].done = e.target.checked;
    setTodos(nextTodos);
  }

  const active = todos.filter((todo) => todo.done).length; // @next
  const [allDone, setAllDone] = useState(false);
  function toggleAll(e: inputEvent) {
    const nextTodos = [...todos];
    nextTodos.forEach((todo) => (todo.done = e.target.checked));
    setTodos(nextTodos);
    setAllDone(e.target.checked);
  }

  useEffect(() => {
    setAllDone(active == todos.length);
  }, [todos]);

  return (
    <div>
      <h1 onClick={handleAdd}>react {num}</h1>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={addTodo}>添加</button>
      <button onClick={clearTodo}>清理</button>
      <ul>
        {todos.map((todo, i) => {
          return (
            <li key={todo.title}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={(e) => {
                  handleSetTodo(e, i);
                }}
              />
              <span>{todo.title}</span>
              <span className="remove-btn" onClick={() => handleRemoveTodo(i)}>
                ❌
              </span>
            </li>
          );
        })}
      </ul>

      <div>
        全选
        <input
          type="checkbox"
          checked={allDone}
          onChange={(e) => {
            toggleAll(e);
          }}
        />
        <span>
          {active} / {todos.length}
        </span>
      </div>
    </div>
  );
};
// function App (){
//   const [num,setNum] = useState(1)
//   function handleAdd(){
//     setNum(num+1)
//   }
//   return <div>
//     <h1 onClick={handleAdd}>{num}</h1>
//   </div>
// }
// @next: 下一步咋整呢
// useMemo,useCallback 等
export default App;
