function BillInput({ register, errors }) {
  return (
    <div>
      <div className="mb-[.4rem] flex justify-between text-base xl:mb-[.93rem] xl:mt-[1px] xl:text-[1.25rem]">
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
        className="flex h-12 w-[83dvw] cursor-pointer items-center rounded-md bg-very-light-grayish-cyan px-2 ring-highlight-cyan  focus-within:ring-2 sm:h-8   sm:w-full  sm:rounded-sm xl:h-[3rem] xl:rounded-md xl:p-5 xl2:h-[3.75rem]"
      >
        <img
          className="scale-100 p-2 sm:scale-[.6] sm:p-0 xl:mt-[1px] xl:scale-100 xl:p-1 "
          src="./icon-dollar.svg"
          alt="dollar symbol"
        />
        <input
          className="h-8 w-full cursor-pointer bg-very-light-grayish-cyan p-2 text-end text-2xl font-bold text-very-dark-cyan caret-highlight-cyan outline-none placeholder:text-input-cyan sm:p-0 sm:text-lg xl:h-[3rem] xl:rounded-md xl:p-[1px]  xl:text-2xl xl2:h-[3.75rem] xl2:text-3xl"
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
