export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in)$/i;
    return emailRegex.test(email);
};
