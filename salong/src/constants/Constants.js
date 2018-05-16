export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const login = (data) => ({
    type: LOG_IN,
    data
});

export const logout = () => ({
    type: LOG_OUT
});