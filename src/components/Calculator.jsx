import { useForm } from 'react-hook-form';

function Calculator() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function whenChange(data) {
    console.log(data);
  }

  function onError(errors) {
    console.log(errors);
  }
  return (
    <div className="-mt-10 flex h-full w-full items-center justify-center">
      <form
        onChange={handleSubmit(whenChange, onError)}
        className="flex h-full w-[64%] items-center justify-center gap-[4%] rounded-[16px] bg-white p-[2%] drop-shadow-sm"
      >
        <div className="flex h-[100%] w-[48%] flex-col  gap-12 rounded-[26px]  p-4 font-bold text-dark-grayish-cyan">
          <div>
            <div className="flex justify-between text-xs">
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
              className="flex h-8 w-full cursor-pointer items-center   rounded-sm bg-very-light-grayish-cyan px-2 ring-highlight-cyan focus-within:ring-2"
            >
              <img
                className="scale-[.6]"
                src="./icon-dollar.svg"
                alt="dollar symbol"
              />
              <input
                className="placeholder:text-input-cyan h-8 w-full cursor-pointer bg-very-light-grayish-cyan text-end font-bold text-very-dark-cyan caret-highlight-cyan outline-none"
                placeholder="0"
                type="text"
                id="bill"
                {...register('bill', {
                  required: 'This field is required',
                  validate: {
                    zero: (v) => parseInt(v) !== 0 || "Can't be zero",
                    positive: (v) => parseInt(v) > 0 || "Can't be negative",
                  },
                })}
              />
            </label>
          </div>

          <fieldset className="grid grid-cols-3 gap-3 text-lg font-bold text-white">
            <legend className="text-xs  text-dark-grayish-cyan">
              Select Tip %
            </legend>

            <label
              className="w-22 flex h-[2.2rem] items-center justify-center rounded-[4px] bg-very-dark-cyan"
              htmlFor="5"
            >
              <input
                className="appearance-none"
                type="radio"
                id="5"
                name="drone"
                value="5"
                checked
                {...register('drone')}
              />
              <label htmlFor="5">5%</label>
            </label>

            <label
              className="w-22 flex h-[2.2rem] items-center justify-center rounded-[4px] bg-very-dark-cyan"
              htmlFor="10"
            >
              <input
                className="appearance-none"
                type="radio"
                id="10"
                name="drone"
                value="10"
                {...register('drone')}
              />
              <label htmlFor="10">10%</label>
            </label>

            <label
              className="w-22 flex h-[2.2rem] items-center justify-center rounded-[4px] bg-very-dark-cyan"
              htmlFor="15"
            >
              <input
                className="appearance-none"
                type="radio"
                id="15"
                name="drone"
                value="15"
                {...register('drone')}
              />
              <label htmlFor="15">15%</label>
            </label>

            <label
              className="w-22 flex h-[2.2rem] items-center justify-center rounded-[4px] bg-very-dark-cyan"
              htmlFor="25"
            >
              <input
                className="appearance-none"
                type="radio"
                id="25"
                name="drone"
                value="25"
                {...register('drone')}
              />
              <label htmlFor="25">25%</label>
            </label>

            <label
              className="w-22 flex h-[2.2rem] items-center justify-center rounded-[4px] bg-very-dark-cyan"
              htmlFor="50"
            >
              <input
                className="appearance-none"
                type="radio"
                id="50"
                name="drone"
                value="50"
                {...register('drone')}
              />
              <label htmlFor="50">50%</label>
            </label>

            <label
              className="w-22 flex h-[2.2rem] items-center justify-center rounded-[4px] bg-very-light-grayish-cyan text-dark-grayish-cyan"
              htmlFor="custom"
            >
              <input
                className="appearance-none"
                type="radio"
                id="custom"
                name="drone"
                value="custom"
                {...register('drone')}
              />
              <label htmlFor="Custom">Custom</label>
            </label>
          </fieldset>

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
                className="placeholder:text-input-cyan h-8 w-full cursor-pointer bg-very-light-grayish-cyan text-end font-bold text-very-dark-cyan caret-highlight-cyan
                outline-none"
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
        </div>
        <div className="h-[100%] w-[48%] rounded-[12px] bg-very-dark-cyan "></div>
      </form>
    </div>
  );
}

export default Calculator;
