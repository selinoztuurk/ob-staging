interface OptionsProps {
  options: any[];
  name: string;
}

export const Options = ({ options, name }: OptionsProps) => {
  return (
    <select name={name}>
      {options.map((x) => {
        return (
          <option key={x.key} value={x.value}>
            {x.text}
          </option>
        );
      })}
    </select>
  );
};
