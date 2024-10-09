export default function getListStudentsIds(list) {
  if (Array.isArray(list)) {
    return list.map((object) => object.id);
  }
  return [];
}
