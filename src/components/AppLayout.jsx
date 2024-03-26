import Bottom from './Bottom';
import Calculator from './Calculator';
import Title from './Title';

function AppLayout() {
  return (
    <div className="grid h-[100dvh] w-[100dvw] grid-rows-[32%_47%_21%]">
      <Title />
      <Calculator />
      <Bottom />
    </div>
  );
}

export default AppLayout;
