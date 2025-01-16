export const LocalStorageUtils = {
  getItem(key: string) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error reading key "${key}" from localStorage:`, error);
      return null;
    }
  },

  setItem(key: string, value: unknown): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing key "${key}" to localStorage:`, error);
    }
  },
};

