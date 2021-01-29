const resolveRoutes = (route) => {
  if (route.length <= 3) {
    let validRoute = route === "/" ? route : "/:id"; //validar la ruta mejor para otros casos
    return validRoute;
  }
  return `/${route}`;
};

export default resolveRoutes;
