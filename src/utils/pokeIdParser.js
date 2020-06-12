export const pokeIdParser = (id) => {
  return id < 10 ? `#00${id}` : id > 10 && id < 100 ? `#0${id}` : `#${id}`
}