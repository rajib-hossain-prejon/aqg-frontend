import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClients from '../services/api-clients';

export interface Subject {
  userId: number;
  id: number;
  title: string;
}

const useResult = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    apiClients
      .get<Subject[]>('/posts', { signal: controller.signal })
      .then((res) => setSubjects(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { subjects, error };
};

export default useResult;
