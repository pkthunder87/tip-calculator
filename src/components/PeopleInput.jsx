function PeopleInput({ register, errors }) {
  return (
    <div>
      <div className="flex justify-between text-xs xl2:mb-[.93rem] xl2:mt-[.5rem] xl2:text-[1.25rem]">
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
        className="flex h-8 w-full cursor-pointer items-center   rounded-sm bg-very-light-grayish-cyan px-2 ring-highlight-cyan focus-within:ring-2 xl2:h-[3.75rem] xl2:rounded-md xl2:p-5"
      >
        <img
          className="scale-[.6] xl2:ml-[1px] xl2:scale-100"
          src="./icon-person.svg"
          alt="dollar symbol"
        />
        <input
          className="h-8 w-full cursor-pointer bg-very-light-grayish-cyan text-end font-bold text-very-dark-cyan caret-highlight-cyan outline-none placeholder:text-input-cyan 
        xl2:mr-[1px] xl2:text-3xl"
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
