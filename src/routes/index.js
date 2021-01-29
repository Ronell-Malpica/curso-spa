import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404"; // no es necesario .js
// para las rutas
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  "/": Home,
  "/:id": Character, //xq id es dinamico
  "/contact": "Contact",
};
//crear nuestro manejador de rutas
const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404; //si no existe  en ninguna ruta

  content.innerHTML = await render();
};

export default router;
