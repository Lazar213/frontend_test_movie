export default {
  setItem: (key, data) => {
    if (typeof data === 'object') {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      localStorage.setItem(key, data);
    }
  },

  getItem: (key) => {
    let item = localStorage.getItem(key);
    try {
      item = JSON.parse(item);
    } catch (e) {
      return item;
    }
    return item;
  },

  removeItem: (key) => {
    localStorage.removeItem(key);
  },
};
