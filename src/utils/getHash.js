const getHash = () => {
  //location.hash  devuleve todo lo que estas despues  del #
  return location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";
};
export default getHash;
