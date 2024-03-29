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
  return (
    <div className="-mt-10 flex h-full w-full items-center justify-center">
      <form
        onChange={handleSubmit(whenChange)}
        className="flex h-full w-[64%] items-center justify-center gap-[4%] rounded-[16px] bg-white p-[2%] drop-shadow-sm"
      >
        <div className="flex h-[100%] w-[48%] flex-col  gap-12 rounded-[26px]  p-4 text-very-dark-cyan">
          <div>
            <label className="text-sm" htmlFor="bill">
              Bill
            </label>
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
                className="placeholder:text-input-cyan h-8 w-full cursor-pointer bg-very-light-grayish-cyan text-end font-bold caret-highlight-cyan outline-none"
                placeholder="0"
                type="text"
                id="bill"
                {...register('bill')}
              />
            </label>
          </div>

          <fieldset className="grid grid-cols-3 gap-3 text-lg font-bold text-white">
            <legend className="text-sm font-normal text-very-dark-cyan">
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
            <label className="text-sm" htmlFor="people">
              Number of People
            </label>

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
                className="placeholder:text-input-cyan h-8 w-full cursor-pointer bg-very-light-grayish-cyan text-end font-bold caret-highlight-cyan outline-none"
                placeholder="0"
                type="text"
                id="people"
                {...register('people')}
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
