import Title from './Title';
import Calculator from './Calculator';

function AppLayout() {
  return (
    <div className="grid h-full  w-[100dvw] grid-rows-[20%_84%] sm:h-[100dvh] sm:grid-rows-[32%_47%_21%] xl:grid-rows-[29%_60%_11%] xl2:grid-rows-[32%_47%_21%]  ">
      <Title />
      <Calculator />
    </div>
  );
}

export default AppLayout;
