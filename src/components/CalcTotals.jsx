function CalcTotals({
  tipAmount,
  tipAmountDisplay,
  totalDisplay,
  setCurChecked,
  reset,
}) {
  return (
    <div className="grid h-[100%] grid-cols-2 grid-rows-[25%_25%_50%] rounded-[12px] bg-very-dark-cyan  p-8 text-highlight-cyan sm:w-[48%] xl2:rounded-[16px] xl2:p-12">
      <div className="mt-4 xl2:mt-[1.65rem]">
        <p className="text-[.75rem] font-bold text-white xl2:text-[1.25rem]">
          Tip Amount
        </p>
        <p className="text-[.6rem] font-bold  text-[hsl(174,24%,56%)] xl2:text-[1rem]">
          / person
        </p>
      </div>
      <div className="mt-2 justify-self-end text-4xl font-bold xl2:mt-[1.65rem] xl2:text-[3.7rem] xl2:leading-[.92em]">
        ${tipAmountDisplay}
      </div>
      <div className="mt-6 xl2:mt-[2.4rem] ">
        <p className="text-[.75rem] font-bold text-white xl2:text-[1.25rem]">
          Total
        </p>
        <p className="text-[.6rem] font-bold text-[hsl(174,24%,56%)] xl2:text-[1rem]">
          / person
        </p>
      </div>
      <div className="mt-4 justify-self-end text-4xl font-bold xl2:mt-[2.2rem] xl2:text-[3.7rem] xl2:leading-[.92em]">
        ${totalDisplay}
      </div>

      <div className=" col-span-full self-end">
        <button
          className=" h-10 w-full rounded-[3px] bg-highlight-cyan font-bold text-very-dark-cyan hover:bg-selected-cyan disabled:bg-[hsl(183_100%_20%)] disabled:text-[hsl(183_100%_18%)] xl2:h-[3.75rem] xl2:rounded-md xl2:text-[1.6rem]"
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
