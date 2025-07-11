export function RadioGroup({ children, onValueChange, className  }) {
  const handleChange = (e) => onValueChange(e.target.value);
  return <div onChange={handleChange} className={className}>{children}</div>;
}

export function RadioGroupItem({ value, id  }) {
  return <input type="radio" name={id.split("-")[0]} value={value} id={id} className="mr-2" />;
}

export function Label({ htmlFor, children, className }) {
  return (
    <label htmlFor={htmlFor} className={className || "block mb-1 font-medium"}>
      {children}
    </label>
  );
}