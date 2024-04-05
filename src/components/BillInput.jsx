function BillInput({ register, errors }) {
  return (
    <div>
      <div className="flex justify-between text-xs xl2:mb-[.93rem] xl2:mt-[1px] xl2:text-[1.25rem]">
        <label className="" htmlFor="bill">
          Bill
        </label>
        {errors?.bill ? (
          <p className="text-red-400">{errors?.bill.message}</p>
        ) : (
          ''
        )}
      </div>
      <label
        htmlFor="bill"
        className="flex h-8 w-full cursor-pointer items-center rounded-sm  bg-very-light-grayish-cyan px-2   ring-highlight-cyan  focus-within:ring-2 xl2:h-[3.75rem] xl2:rounded-md xl2:p-5"
      >
        <img
          className="scale-[.6] xl2:mt-[1px] xl2:scale-100 xl2:p-1 "
          src="./icon-dollar.svg"
          alt="dollar symbol"
        />
        <input
          className="h-8 w-full cursor-pointer bg-very-light-grayish-cyan text-end font-bold text-very-dark-cyan caret-highlight-cyan outline-none placeholder:text-input-cyan xl2:h-[3.75rem] xl2:rounded-md  xl2:p-[1px] xl2:text-3xl"
          placeholder="0"
          type="text"
          id="bill"
          {...register('bill', {
            required: 'This field is required',
            validate: {
              zero: (v) => parseFloat(v) !== 0 || "Can't be zero",
              positive: (v) => parseFloat(v) > 0 || "Can't be negative",
            },
          })}
        />
      </label>
    </div>
  );
}

export default BillInput;
