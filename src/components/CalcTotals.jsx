function CalcTotals({
  tipAmount,
  tipAmountDisplay,
  totalDisplay,
  setCurChecked,
  reset,
}) {
  return (
    <div className="grid h-[100%] w-[48%] grid-cols-2 grid-rows-[25%_25%_50%]  rounded-[12px] bg-very-dark-cyan p-8 text-highlight-cyan">
      <div className="mt-4">
        <p className="text-[.75rem] font-bold text-white">Tip Amount</p>
        <p className="text-[.6rem] text-light-grayish-cyan">/ person</p>
      </div>
      <div className="mt-2 justify-self-end text-4xl font-bold">
        ${tipAmountDisplay}
      </div>
      <div className="mt-6">
        <p className="text-[.75rem] font-bold text-white">Total</p>
        <p className="text-[.6rem] text-light-grayish-cyan">/ person</p>
      </div>
      <div className="mt-4 justify-self-end text-4xl font-bold">
        ${totalDisplay}
      </div>

      <div className=" col-span-full self-end">
        <button
          className=" h-10 w-full rounded-[3px] bg-highlight-cyan font-bold text-very-dark-cyan hover:bg-selected-cyan disabled:bg-[hsl(183_100%_20%)] disabled:text-[hsl(183_100%_18%)]"
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
