import store from './store.js';

import { getRoot, getDirectory } from '../apis/apis.js';

export function initailizeStore(update, state) {
  store.updateView = update;
  store.state = state;
}

export function getState() {
  return store.state;
}

export function setNodes(nodes) {
  const state = store.state;

  store.state = { ...state, 'nodes': nodes };
}

export function setCaches(key, value) {
  const state = store.state;
  
  state.caches.set(key,value);

  store.state = { ...state, 'caches': state.caches };
}

export function setHistory(id) {
  const state = store.state;

  const index = state.history.findIndex((path) => path.id === id);
  const newHistory = state.history.slice(0, index + 1);

  store.state = { ...state, 'history': newHistory };
}

export function goToDirectory(id, name) {  
  const { caches, history } = store.state;
  const nodes = caches.get(id);
  const newHistory = [...history, { id, pathName: name }];
  
  if(nodes) {
    store.state = {
      ...store.state,
      'nodes': nodes,
      'history': newHistory
    };
    return;
  } 


  store.state = { ...store.state, 'history': newHistory };
  fetchDirectory(id);
}

export function goToPath(id) {
  setHistory(id);

  const { caches } = store.state;
  const nodes = caches.get(id);
  
  if(nodes) {
    setNodes(nodes);
    return;
  } 

  fetchDirectory(id);
}

export function historyBack() {
  const state = store.state;
  
  const newHistory = [...state.history].slice(0, history.length - 2);
  const id = newHistory[newHistory.length - 1].id;
  
  store.state = { ...state, 'history': newHistory };

  const nodes = state.caches.get(id);
  
  if(nodes) {
    setNodes(nodes);
    return;
  } 
  
  fetchDirectory(id);
}

export function openFile(filePath) {
  const state = store.state;

  store.state = { ...state, filePath };
}

export function closeFile() {
  const state = store.state;

  store.state = { ...state, filePath: null };
}

export function startProcessing() {
  const state = store.state;

  store.state = { ...state, processing: true };
}

export function stopProcessing() {
  const state = store.state;
  
  store.state = { ...state, processing: false };
}

export async function fetchRoot() {
  startProcessing();

  const root = await getRoot();

  store.state = {
    ...store.state,
    caches: store.state.caches.set(null, root),
    nodes: root,
  };

  // setCaches(null, root);
  // setNodes(root);

  stopProcessing();
}

export async function fetchDirectory(id) {
  startProcessing();
  
  const directory = await getDirectory(id);

  store.state = {
    ...store.state,
    caches: store.state.caches.set(id, directory),
    nodes: directory,
  };

  // setCaches(id, directory);
  // setNodes(directory);

  stopProcessing();
}
