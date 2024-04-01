import { useState } from 'react';
import { useForm } from 'react-hook-form';
import RadioTip from './RadioTip';

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
                className="h-8 w-full cursor-pointer bg-very-light-grayish-cyan text-end font-bold text-very-dark-cyan caret-highlight-cyan outline-none placeholder:text-input-cyan"
                placeholder="0"
                type="text"
                id="bill"
                {...register('bill', {
                  required: 'This field is required',
                  validate: {
                    zero: (v) => parseFloat(v) !== 0 || "Can't be zero",
                    positive: (v) => parseFloat(v) > 0 || "Can't be negative",
                  },
                })}
              />
            </label>
          </div>

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

            <div>
              {customTip ? (
                <input
                  onClick={() => setCurChecked(null)}
                  className="h-[2.2rem] w-[5.5rem] cursor-pointer rounded-[4px] bg-very-light-grayish-cyan px-2 text-end font-bold text-very-dark-cyan caret-highlight-cyan
                  outline-none ring-highlight-cyan placeholder:text-input-cyan focus:ring-2"
                  name="custom"
                  type="text"
                  {...register('customTip', {
                    required: 'This field is required',
                    validate: {
                      zero: (v) => parseInt(v) !== 0 || "Can't be zero",
                      positive: (v) => parseInt(v) > 0 || "Can't be negative",
                    },
                  })}
                />
              ) : (
                <label
                  onClick={() => setCustomTip(true)}
                  className="w-22 flex h-[2.2rem] cursor-pointer items-center justify-center rounded-[4px] bg-very-light-grayish-cyan text-dark-grayish-cyan"
                  htmlFor="custom"
                >
                  Custom
                </label>
              )}
            </div>
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
                className="h-8 w-full cursor-pointer bg-very-light-grayish-cyan text-end font-bold text-very-dark-cyan caret-highlight-cyan outline-none
                placeholder:text-input-cyan"
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
      </form>
    </div>
  );
}

export default Calculator;
