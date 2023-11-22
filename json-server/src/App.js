import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import CustomButton from "./components/CustomButton/CustomButton";
import CustomInput from "./components/CustomInput/CustomInput";
import "./App.css";
const App = () => {
  //Önce API üzerinden gelecek verilerin tutulacağı state tanımlanır
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  //Inputun içerğini alabilmek için referans oluştruma

  const getTodos = () => {
    // kendi oluşturduğumuz apiye get isteği atma
    axios
      .get("http://localhost:3001/todos")
      //gelen veriyi stateye aktarma
      .then((response) => setTodos(response?.data))
      //eğer api tarafında veya server tarafında bir sorun olursa hatayı yakalama
      .catch((error) => console.log("get hatası", error?.message));
  };

  //Ekran ilk açıldığında çalışacak useEffect(()=>{},[]) içerisinde verilerimizi çağırıyoruz

  useEffect(() => {
    getTodos();
  }, []);

  //Ekle butonuna basıldığı anda çalışır

  const handleSubmit = (e) => {
    //form elemntinin varsayılan özelliklerini sıfırlıyoruz
    e.preventDefault();
    //console.log("onSubmit çalıştı");
    //console.log(todoText)

    //yeni bir todo oluşturma
    const newTodo = {
      id: new Date().getTime(),
      title: todoText,
      date: new Date().toLocaleString(),
      isDone: false,
    };

    //axios yardımı ile kendi api mize post isteği atma
    axios
      //yol olarak todos endpointine newt todyu gönderiyoruz
      .post("http://localhost:3001/todos", newTodo)
      //gönderme işleminden sonra stateyide yeni todo içercek şekilde güncelliyoruz
      .then(() => setTodos([...todos, newTodo]));

    //inputun içerğini temizleme
    setTodoText("");
  };

  const handleDelete = (id) => {
    //console.log('silme fonksiyonu çalıştı',id)

    axios.delete(`http://localhost:3001/todos/${id}`).then(() => {
      const filtered = todos.filter((todo) => todo.id !== id);
      setTodos(filtered);
    });
  };

  //Checkboxa tıklanınca çalışır
  const handleEdit = (todoInfo) => {
    // console.log('checkbox fonksiyonu',todoInfo)

    //gönderilecek onjenin güncl halini hazırlama

    let updatedTodo = { ...todoInfo, isDone: !todoInfo.isDone };

    //güncel hali api ye gönderme

    axios
      .put(`http://localhost:3001/todos/${todoInfo.id}`, updatedTodo)
      .then(() => {
        const cloneTodos = [...todos];

        const updatedIndex = cloneTodos.findIndex(
          (item) => item.id === todoInfo.id
        );
        cloneTodos.splice(updatedIndex, 1, updatedTodo);
        setTodos(cloneTodos);
      });
  };

  return (
    <div className="container">
      <h1>Yapılacaklar</h1>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <CustomInput
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <CustomButton type={"primary"} buttonTitle={"Ekle"} />
      </form>
      <ul className="list-group mt-4">
        {todos?.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              <input
                checked={todo?.isDone}
                onClick={() => handleEdit(todo)}
                type="checkbox"
              />
              {todo?.isDone === true ? "  Tamamlandı" : "   Devam Ediyor"}
            </span>
            <span>{todo?.title}</span>

            <CustomButton
              onClick={() => handleDelete(todo?.id)}
              type={"danger"}
              buttonTitle={"Sil"}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
