export const convertToSlug = (inputString) => {
    // Convert to lowercase and replace spaces with underscores
    const slug = inputString.toLowerCase().replace(/\s+/g, '_');
    return slug;
};


export const removeUnderscores = (inputString) => {
    // Remove underscores from the input string
    const resultString = inputString.replace(/_/g, ' ');
    return resultString;
};