function PeopleInput({ register, errors }) {
  return (
    <div>
      <div className="mb-[.4rem] flex justify-between text-base sm:text-xs xl2:mb-[.93rem] xl2:mt-[.5rem] xl2:text-[1.25rem]">
        <label className="" htmlFor="people">
          Number of People
        </label>
        {errors?.people ? (
          <p className="text-red-400">{errors?.people.message}</p>
        ) : (
          ''
        )}
      </div>

      <label
        htmlFor="people"
        className="flex h-12 w-[83dvw] cursor-pointer items-center rounded-md bg-very-light-grayish-cyan px-2 ring-highlight-cyan  focus-within:ring-2 sm:h-8   sm:w-full  sm:rounded-sm xl2:h-[3.75rem] xl2:rounded-md xl2:p-5"
      >
        <img
          className="scale-100 p-2 sm:scale-[.6] sm:p-0 xl2:mt-[1px] xl2:scale-100 xl2:p-1 "
          src="./icon-person.svg"
          alt="icon person"
        />
        <input
          className="h-8 w-full cursor-pointer bg-very-light-grayish-cyan p-2 text-end text-2xl font-bold text-very-dark-cyan caret-highlight-cyan outline-none placeholder:text-input-cyan sm:p-0 sm:text-lg xl2:h-[3.75rem] xl2:rounded-md  xl2:p-[1px] xl2:text-3xl"
          placeholder="0"
          type="text"
          id="people"
          {...register('people', {
            required: 'This field is required',
            validate: {
              zero: (v) => parseInt(v) !== 0 || "Can't be zero",
              positive: (v) => parseInt(v) > 0 || "Can't be negative",
            },
          })}
        />
      </label>
    </div>
  );
}

export default PeopleInput;
