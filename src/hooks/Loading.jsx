import { useState } from 'react';

export const Loading = () => {
  const [loading, setLoading] = useState(true);

  return { loading, setLoading };
};
