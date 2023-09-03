
export default function Button({ value, event, style, operatorValue }) {
  return (
    <button className={style} onClick={() => event(value)}>
      {operatorValue ? value : value}
    </button>
  );
}
