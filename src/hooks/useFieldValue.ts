import { useEffect, useRef } from 'react';
import { useField } from 'react-final-form';

const usePrevious = (val: string) => {
  const ref = useRef(val);

  useEffect(() => {
    ref.current = val;
  }, [val]);

  return ref.current;
};

const useFieldValue = (name: string) => {
  const {
    input: { value },
  } = useField(name, { subscription: { value: true } });
  const prevValue = usePrevious(value);

  return [value, prevValue];
};

export default useFieldValue;
