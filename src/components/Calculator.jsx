import BillInputs from './BillInputs';
import DisplayTotals from './DisplayTotals';

function Calculator() {
  return (
    <div className="-mt-10 flex h-full w-full items-center justify-center">
      <div className="flex h-full w-[64%] items-center justify-center gap-[4%] rounded-[26px] bg-white p-[2%] drop-shadow-sm">
        <BillInputs />
        <DisplayTotals />
      </div>
    </div>
  );
}

export default Calculator;
