// Remember one thing, we don't have any database for this project. So we will use localstorage as a Database;

interface Idb {
  create?: (addItem: object) => boolean;
  read?: () => [];
  update?: () => void;
  delete?: () => void;
}

interface ItemforAdding {
  id: number;
  title?: string;
  desc?: string;
  isDone: boolean;
}

interface IaddItem {
  title?: string;
  desc?: string;
}

const DB = () => {
  const database = localStorage;
  const db: Idb = {};

  db.create = (addItem: IaddItem) => {
    const id: number = db.read().length;
    const ItemToBeAdded: ItemforAdding = {
      ...addItem,
      id: id + 1,
      isDone: false,
    };
    database.setItem(`${id + 1}`, JSON.stringify(ItemToBeAdded));
    return true;
  };

  db.read = () => {
    const values = [];
    const keys = Object.keys(database);
    let i = keys.length;

    while (i--) {
      values.push(database.getItem(`${keys[i]}`));
    }
    return JSON.parse(`[${values}]`);
  };
  return db;
};

export default DB;
