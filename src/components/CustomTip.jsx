function CustomTip({ customTip, setCustomTip, setCurChecked, register }) {
  return (
    <div>
      {customTip ? (
        <input
          onClick={() => setCurChecked(null)}
          className="h-[2.2rem] w-[5.5rem] cursor-pointer rounded-[4px] bg-very-light-grayish-cyan px-2 text-end font-bold text-very-dark-cyan caret-highlight-cyan
        outline-none ring-highlight-cyan placeholder:text-input-cyan focus:ring-2 xl2:h-[3.75rem] xl2:w-[9.15rem] xl2:rounded-[5px] xl2:p-4 xl2:text-3xl"
          name="custom"
          type="text"
          {...register('customTip', {
            required: 'This field is required',
            validate: {
              zero: (v) => parseInt(v) !== 0 || "Can't be zero",
              positive: (v) => parseInt(v) > 0 || "Can't be negative",
            },
          })}
        />
      ) : (
        <label
          onClick={() => setCustomTip(true)}
          className="w-22 flex h-[2.2rem] cursor-pointer items-center justify-center rounded-[4px] bg-very-light-grayish-cyan text-dark-grayish-cyan xl2:h-[3.75rem] xl2:w-[9.15rem] xl2:rounded-[5px] xl2:text-3xl"
          htmlFor="custom"
        >
          Custom
        </label>
      )}
    </div>
  );
}

export default CustomTip;
