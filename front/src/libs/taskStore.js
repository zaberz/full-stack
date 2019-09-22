import localforage from 'localforage'

const store = localforage.createInstance({
  name: "tasks"
});

store.config({
  driver: localforage.INDEXEDDB,
})

export default store;
