import { useState } from 'react';
import { useForm } from 'react-hook-form';

import BillInput from './BillInput';
import PeopleInput from './PeopleInput';
import RadioTip from './RadioTip';
import CustomTip from './CustomTip';
import CalcTotals from './CalcTotals';

function Calculator() {
  const [curChecked, setCurChecked] = useState('0');
  const [customTip, setCustomTip] = useState(false);

  const {
    register,
    reset,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    shouldFocusError: false,
  });

  function whenChange(data) {
    console.log(data);
    // console.log(curChecked);
  }

  function onError(errors) {
    console.log(errors);
  }

  const currentTip = curChecked / 100 || getValues().customTip / 100;

  const tipAmount =
    (parseFloat(getValues().bill) * currentTip) /
    parseFloat(getValues().people);

  const tipAmountDisplay =
    tipAmount === Infinity
      ? '0.00'
      : tipAmount
        ? Math.floor(tipAmount * 100) / 100
        : '0.00';

  const billAmount = (getValues().bill * (currentTip + 1)) / getValues().people;

  console.log(billAmount);

  const totalDisplay =
    billAmount === Infinity
      ? '0.00'
      : billAmount
        ? billAmount.toFixed(2)
        : '0.00';

  return (
    <div className="-mt-10 flex h-full w-full items-center justify-center">
      <form
        onChange={handleSubmit(whenChange, onError)}
        onBlur={handleSubmit(whenChange, onError)}
        className="flex h-full w-[64%] items-center justify-center gap-[4%] rounded-[16px] bg-white p-[2%] drop-shadow-sm"
      >
        <div className="flex h-[100%] w-[48%] flex-col  gap-12 rounded-[26px]  p-4 font-bold text-dark-grayish-cyan">
          <BillInput register={register} errors={errors} />

          <fieldset className="grid grid-cols-3 gap-3 text-lg font-bold text-white">
            <legend className="text-xs  text-dark-grayish-cyan">
              Select Tip %
            </legend>

            <RadioTip
              curChecked={curChecked}
              setCurChecked={setCurChecked}
              setCustomTip={setCustomTip}
              register={register}
              tipValue={'5'}
            />

            <RadioTip
              curChecked={curChecked}
              setCurChecked={setCurChecked}
              setCustomTip={setCustomTip}
              register={register}
              tipValue={'10'}
            />

            <RadioTip
              curChecked={curChecked}
              setCurChecked={setCurChecked}
              setCustomTip={setCustomTip}
              register={register}
              tipValue={'15'}
            />

            <RadioTip
              curChecked={curChecked}
              setCurChecked={setCurChecked}
              setCustomTip={setCustomTip}
              register={register}
              tipValue={'25'}
            />

            <RadioTip
              curChecked={curChecked}
              setCurChecked={setCurChecked}
              setCustomTip={setCustomTip}
              register={register}
              tipValue={'50'}
            />

            <CustomTip
              customTip={customTip}
              setCustomTip={setCustomTip}
              setCurChecked={setCurChecked}
              register={register}
            />
          </fieldset>

          <PeopleInput register={register} errors={errors} />
        </div>

        <CalcTotals
          tipAmount={tipAmount}
          tipAmountDisplay={tipAmountDisplay}
          totalDisplay={totalDisplay}
          setCurChecked={setCurChecked}
          reset={reset}
        />
      </form>
    </div>
  );
}

export default Calculator;
