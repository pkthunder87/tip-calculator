function CalcTotals({
  tipAmount,
  tipAmountDisplay,
  totalDisplay,
  setCurChecked,
  reset,
}) {
  return (
    <div className=" -ml-[.3rem] mt-8 grid h-64  w-[104%] grid-cols-2 grid-rows-[25%_25%_50%] rounded-[14px] bg-very-dark-cyan p-[1.4rem]  text-highlight-cyan sm:ml-0 sm:mt-0 sm:h-[100%]  sm:w-[48%] sm:rounded-[12px] sm:p-8 xl2:rounded-[16px] xl2:p-12">
      <div className="mt-[1.2rem] sm:mt-4 xl2:mt-[1.65rem]">
        <p className="font-bold text-white sm:mt-0 sm:text-[1rem] xl:text-[1.25rem] xl2:text-[1.25rem]">
          Tip Amount
        </p>
        <p className="text-[.82rem] font-bold  text-[hsl(174,24%,56%)] sm:text-[.8rem] xl:text-[1.1rem] xl2:text-[1rem]">
          / person
        </p>
      </div>
      <div className="mt-6 justify-self-end text-3xl font-bold sm:mt-4 sm:text-4xl xl:mt-6 xl:text-5xl xl2:mt-[1.65rem] xl2:text-[3.7rem] xl2:leading-[.92em]">
        ${tipAmountDisplay}
      </div>
      <div className="mt-8 sm:mt-6 xl:mt-7 xl2:mt-[2.4rem]">
        <p className="font-bold text-white sm:text-[1rem] xl:text-[1.25rem] xl2:text-[1.25rem]">
          Total
        </p>
        <p className="text-[.82rem] font-bold text-[hsl(174,24%,56%)] sm:text-[.8rem] xl:text-[1.1rem] xl2:text-[1rem]">
          / person
        </p>
      </div>
      <div className="mt-9 justify-self-end text-3xl font-bold sm:mt-6 sm:text-4xl xl:mt-9 xl:text-5xl xl2:mt-[2.2rem] xl2:text-[3.7rem] xl2:leading-[.92em]">
        ${totalDisplay}
      </div>

      <div className=" col-span-full self-end">
        <button
          className=" h-12 w-full rounded-[3px] bg-highlight-cyan text-xl font-bold text-very-dark-cyan hover:bg-selected-cyan disabled:bg-[hsl(183_100%_20%)] disabled:text-[hsl(183_100%_18%)] sm:h-10 sm:text-base xl:h-14 xl:text-2xl xl2:h-[3.75rem] xl2:rounded-md xl2:text-[1.6rem]"
          onClick={() => {
            setCurChecked('0');
            reset();
          }}
          disabled={!tipAmount}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default CalcTotals;
