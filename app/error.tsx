'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Oops! Something went wrong.</h2>
      <p>{error.message || 'An unexpected error occurred.'}</p>
      <button
        style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
