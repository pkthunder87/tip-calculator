import { useState } from 'react';
import { useForm } from 'react-hook-form';

import BillInput from './BillInput';
import PeopleInput from './PeopleInput';
import RadioTip from './RadioTip';
import CustomTip from './CustomTip';
import CalcTotals from './CalcTotals';

const tipOptions = ['5', '10', '15', '25', '50'];

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

  function whenChange() {}

  function onError() {}

  const currentTip = curChecked / 100 || getValues().customTip / 100;

  const tipAmount =
    (parseFloat(getValues().bill) * currentTip) /
    parseFloat(getValues().people);

  const tipAmountDisplay =
    tipAmount === Infinity
      ? '0.00'
      : tipAmount < 0
        ? '0.00'
        : tipAmount
          ? Math.floor(tipAmount * 100) / 100
          : '0.00';

  const billAmount = (getValues().bill * (currentTip + 1)) / getValues().people;

  const totalDisplay =
    billAmount === Infinity
      ? '0.00'
      : billAmount < 0
        ? '0.00'
        : billAmount
          ? billAmount.toFixed(2)
          : '0.00';

  return (
    <div className="-mt-10 flex h-full w-full items-center justify-center">
      <form
        onChange={handleSubmit(whenChange, onError)}
        onBlur={handleSubmit(whenChange, onError)}
        className="grid h-[102%] w-full items-center justify-center rounded-t-[22px] bg-white py-8 shadow-[0_15px_30px_20px_rgb(0,73,77,.09)]  sm:flex sm:h-[101%] sm:w-[64%] sm:gap-[4%] sm:rounded-[16px] sm:p-[2%] xl2:w-[63.8%] xl2:rounded-[24px] xl2:p-[2.1%]"
      >
        <div className="-mb-3 ml-0 flex h-full w-[82dvw] flex-col gap-8 rounded-[26px] pl-0  pr-0 font-bold text-dark-grayish-cyan sm:mb-0 sm:ml-0  sm:h-[100%] sm:w-[48%] sm:p-4 xl2:gap-12 xl2:py-[1.6rem] xl2:pl-[1.33rem] xl2:pr-5">
          <BillInput register={register} errors={errors} />

          <fieldset className="grid grid-cols-2 gap-4 text-lg font-bold text-white sm:grid-cols-3 sm:gap-3 xl2:gap-5 ">
            <legend className=" mb-4 mt-0 text-base text-dark-grayish-cyan sm:mb-[1.3rem] xl2:mb-[1.75rem] xl2:mt-[.52rem] xl2:text-[1.25rem]">
              Select Tip %
            </legend>

            {tipOptions.map((tip) => {
              return (
                <RadioTip
                  key={tip}
                  tipValue={tip}
                  curChecked={curChecked}
                  setCurChecked={setCurChecked}
                  setCustomTip={setCustomTip}
                  register={register}
                />
              );
            })}

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
