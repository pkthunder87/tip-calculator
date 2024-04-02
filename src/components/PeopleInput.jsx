function PeopleInput({ register, errors }) {
  return (
    <div>
      <div className="flex justify-between text-xs">
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
        className="flex h-8 w-full cursor-pointer items-center   rounded-sm bg-very-light-grayish-cyan px-2 ring-highlight-cyan focus-within:ring-2"
      >
        <img
          className="scale-[.6]"
          src="./icon-person.svg"
          alt="dollar symbol"
        />
        <input
          className="h-8 w-full cursor-pointer bg-very-light-grayish-cyan text-end font-bold text-very-dark-cyan caret-highlight-cyan outline-none
        placeholder:text-input-cyan"
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
