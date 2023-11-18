import { useState } from "react";
import Sayac from "./components/ClassComponent";
import Counter from "./components/FunctionComponent";
import CustomButton from "./components/CustomButton/CustomButton";
import ChildrenButton from "./components/ChildreButton/ChildrenButton";
import Column from "./components/Column/Column";

import TodosPage from "./pages/TodosPage";
function App() {
  const [componentType, setComponentType] = useState("TodosPage");
  return (
    <div>
      {/* {componentType === "Class" ? (
        <Sayac />
      ) : componentType === "Function" ? (
        <Counter />
      ) : (
        <div>Seçim Yapılamdı</div>
      )} */}
      <Column style={{ gap: "20px" }}>
        <CustomButton
          buttonTitle={"Class Component"}
          onClick={() => setComponentType("Class")}
        />
        <CustomButton
          buttonTitle={"Fonksiyon Component"}
          onClick={() => setComponentType("Function")}
        />
        <CustomButton buttonTitle={'Todos Sayfasına Geç'} onClick={()=>setComponentType('TodosPage')}/>
      </Column>
      {componentType === "Class" && <Sayac />}
      {componentType === "Function" && <Counter />}
      {componentType==='TodosPage' && <TodosPage/>}
      {componentType === null && <div>Seçim Yapılmadı</div>}
    </div>
  );
}

export default App;
