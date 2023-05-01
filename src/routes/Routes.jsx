import { Route, Routes as ReactDomRoutes } from "react-router";
import Layout from "../Components/layout/Layout";
import Home from "../pages/home/Home";
import PokeApiTest from "../pages/PokeApi/PokeApiTest";
import Error404 from "../pages/Error404/Error404";
import { Provider as ReduxToolkit } from "react-redux";
import store from "../pages/CreateCONTEXT/Store/Store";
import TodoList from "../pages/CreateCONTEXT/TodoLIST/TodoList";

function Routes() {
  return (
    <>
      <ReduxToolkit store={store}>
        <Layout>
          <ReactDomRoutes>
            <Route path="/" element={<Home />} />
            <Route path="PokeApi" element={<PokeApiTest />} />

            <Route path="TodoList" element={<TodoList />} />

            <Route path="*" element={<Error404 />}></Route>
          </ReactDomRoutes>
        </Layout>
      </ReduxToolkit>
    </>
  );
}
export default Routes;
