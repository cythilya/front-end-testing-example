import filterList from './filterList';

const getStatusById = (list, id) => {
  const { status } = filterList(list, id);
  return status;
};

export default getStatusById;
