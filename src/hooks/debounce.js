function useDebounce(func,delay) {
  if(typeof func != 'function' || typeof delay != 'number') {
      return;
  }

  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func,delay,...args);
  }
}

export { useDebounce };