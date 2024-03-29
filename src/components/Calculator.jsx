import { useForm } from 'react-hook-form';

function Calculator() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className="-mt-10 flex h-full w-full items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-full w-[64%] items-center justify-center gap-[4%] rounded-[26px] bg-white p-[2%] drop-shadow-sm"
      >
        <div className="flex h-[100%] w-[48%] flex-col rounded-[26px] p-4 text-very-dark-cyan ">
          <div>
            <label htmlFor="bill">Bill</label>
          </div>
          <label
            htmlFor="bill"
            className="ring-highlight-cyan flex h-8 w-full cursor-pointer   items-center rounded-sm bg-very-light-grayish-cyan px-2 focus-within:ring-2"
          >
            <div className="text-lg text-gray-400 ">$</div>
            <input
              className="caret-highlight-cyan h-8 w-full cursor-pointer bg-very-light-grayish-cyan text-end outline-none"
              placeholder="0"
              type="text"
              id="bill"
              {...register('bill')}
            />
          </label>

          <label htmlFor="bill">Number of People</label>
          <input
            placeholder="0"
            type="text"
            id="people"
            {...register('people')}
          />
          <button type="reset">Submit</button>
        </div>
        <div className="h-[100%] w-[48%] rounded-[26px] bg-very-dark-cyan "></div>
      </form>
    </div>
  );
}

export default Calculator;
