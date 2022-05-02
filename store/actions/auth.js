export const CURR_USER = 'CURR_USER';

export const loggedUser = (userName) => {
    return{type: CURR_USER, user : userName};
};