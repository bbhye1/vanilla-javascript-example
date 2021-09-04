const store = {
  get state() {
    return this._state;
  },
  
  set updateView(update) {
    this._updateView = update;
  },
  
  set state(state) {
    this._state = state;
    this._updateView();
  },

};

export default store;
