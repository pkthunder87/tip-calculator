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
        <div className="h-[100%] w-[48%] rounded-[26px] bg-blue-400 ">
          <label htmlFor="bill">Bill</label>
          <input placeholder="0" type="text" id="bill" {...register('bill')} />
          <label htmlFor="bill">Number of People</label>
          <input
            placeholder="0"
            type="text"
            id="people"
            {...register('people')}
          />
          <button type="reset">Submit</button>
        </div>
        <div className="h-[100%] w-[48%] rounded-[26px] bg-red-400 ">
          <label htmlFor="bill">Bill</label>
          <input placeholder="0" type="text" id="bill" {...register('bill')} />
          <label htmlFor="bill">Number of People</label>
          <input
            placeholder="0"
            type="text"
            id="people"
            {...register('people')}
          />
          <button type="reset">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Calculator;
