import Navigation from './navigation';
import SelectLeng from './select-leng';
import Logo from '@/components/ui/logo';
import ButtonsBlock from './buttons-block';

const Header = ({ lng }) => {
  return (
    <header className="fixed z-50 top-0 left-0 w-full border-b border-black-100 bg-white">
      <div className="min-w-[328px] mx-auto px-4 py-4 flex justify-between items-center 2xl:px-[18px] lg:px-16  xl:max-w-[1628px]">
        <div className="flex items-center gap-16">
          <Logo className={'w-[60px] h-[60px]'} />
          <Navigation lng={lng} />
        </div>
        <div className="flex items-center gap-3">
          <SelectLeng />
          <ButtonsBlock lng={lng} />
        </div>
      </div>
    </header>
  );
};

export default Header;
