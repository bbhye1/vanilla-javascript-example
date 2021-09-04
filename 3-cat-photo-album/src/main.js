import App from './App.js';

import { fetchRoot, getState, initailizeStore } from './services/services.js';

function update() {
  const state = getState();
  
  document.body.innerHTML = '<h1>고양이 사진첩</h1>';

  document.body.appendChild(App(state));
}

(async () => {
  initailizeStore(update, {
    history: [{id: null, pathName: 'root'}],
    nodes: [],
    filePath: null,
    caches: new Map(), 
    processing: false,
  });

  await fetchRoot();
})();
