export const convertToSlug = (inputString) => {
    // Convert to lowercase and replace spaces with underscores
    const slug = inputString.toLowerCase().replace(/\s+/g, '_');
    return slug;
};


export const removeUnderscores = (inputString) => {
    try{
    const resultString = inputString.replace(/_/g, ' ');
    return resultString;
    }catch{
      return inputString
    }
};


export const addUnderscores = (inputString) => {
  try {
      const resultString = inputString.replace(/ /g, '_');
      return resultString;
  } catch {
      return inputString;
  }
};
