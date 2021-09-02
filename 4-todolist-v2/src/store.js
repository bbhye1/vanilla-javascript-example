const store = {
    state: {},
    updateView: null,
    getState() {
        return this.state;
    },
    setState(key, value) {
        this.state[key] = value;

        this.updateView();
    }
};

export default store;
