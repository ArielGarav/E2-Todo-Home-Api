import { Route, Routes as ReactDomRoutes } from "react-router";
import Layout from "../Components/layout/Layout";
import Home from "../pages/home/Home";
import PokeApiTest from "../pages/PokeApi/PokeApiTest";
import TodoContextProvider from "../pages/CreateCONTEXT/TodoContext";
import TodoList from "../pages/CreateCONTEXT/TodoList";
import Error404 from "../pages/Error404/Error404";

function Routes() {
  return (
    <>
      <TodoContextProvider>
        <Layout>
          <ReactDomRoutes>
            <Route path="/" element={<Home />} />
            <Route path="PokeApi" element={<PokeApiTest />} />
            <Route path="TodoList" element={<TodoList />} />
            <Route path="*" element={<Error404 />}></Route>
          </ReactDomRoutes>
        </Layout>
      </TodoContextProvider>
    </>
  );
}
export default Routes;
