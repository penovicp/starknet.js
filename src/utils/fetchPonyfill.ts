export default (typeof window !== 'undefined' && window.fetch) ||
  // use built-in fetch in node, react-native and service worker if available
  (typeof global !== 'undefined' && global.fetch) ||
  // throw with instructions when no fetch is detected
  ((() => {
    throw new Error("'fetch()' not detected, use the 'baseFetch' constructor parameter to set it");
  }) as WindowOrWorkerGlobalScope['fetch']);
