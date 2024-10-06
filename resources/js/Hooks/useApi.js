import { useState, useCallback } from 'react';

const useApi = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fire = useCallback(async (body) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {...options, body: JSON.stringify(body)});
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  return { data, loading, error, fire };
};

export default useApi;
