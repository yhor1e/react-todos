import Dexie from 'dexie';

const db = new Dexie('react-todos');
db.version(1).stores({
    todos: `++id, text, isDone`
});

export default db;
