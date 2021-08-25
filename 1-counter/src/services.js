const state = {
    result: 0,
};

export const getResult = () => {
    return state.result;
};

export const plus = (number) => {
    state.result += number;
};
