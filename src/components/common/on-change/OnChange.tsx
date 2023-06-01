import { useEffect } from 'react';
import useFieldValue from 'hooks/useFieldValue';

export default ({
  name,
  onChange,
}: {
  name: string;
  onChange: (val1: string, val2?: string) => void;
}) => {
  const [value, prevValue] = useFieldValue(name);

  useEffect(() => {
    if (value !== prevValue) {
      onChange(value, prevValue);
    }
  }, [onChange, value, prevValue]);

  return null;
};
