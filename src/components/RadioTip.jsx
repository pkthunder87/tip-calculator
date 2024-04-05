function RadioTip({
  setCustomTip,
  setCurChecked,
  curChecked,
  register,
  tipValue,
}) {
  return (
    <div
      onClick={() => {
        setCustomTip(false);
        setCurChecked(tipValue);
      }}
    >
      <label
        className={`w-22 flex h-[2.2rem] cursor-pointer items-center justify-center rounded-[4px] xl2:h-[3.75rem] xl2:w-[9.15rem] xl2:rounded-[5px] xl2:text-3xl ${curChecked === tipValue ? 'bg-highlight-cyan text-very-dark-cyan' : 'bg-very-dark-cyan'}`}
        htmlFor={tipValue}
      >
        {tipValue}%
        <input
          className="appearance-none"
          type="radio"
          id={tipValue}
          value={tipValue}
          {...register('tipPercent')}
        />
      </label>
    </div>
  );
}

export default RadioTip;
