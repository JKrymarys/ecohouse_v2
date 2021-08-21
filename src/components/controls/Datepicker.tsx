interface DatepickerProps {
  value: string;
  onChange: (newDate: string) => void;
  min: string;
  max: string;
}

function Datepicker({ onChange, value, min, max }: DatepickerProps) {
  function onChangeHandler(e: any) {
    e.target.value && onChange(e.target.value);
  }

  return (
    <input
      type="datetime-local"
      className="bg-white hover:bg-gray-300 border border-gray-500 hover:border-transparent text-black text-sm py-2 px-4 rounded"
      value={value}
      onChange={onChangeHandler}
      min={min}
      max={max}
    />
  );
}

export default Datepicker;
