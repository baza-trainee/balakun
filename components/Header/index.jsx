import Navigation from './navigation';
import SelectLeng from './select-leng';
import Logo from '@/components/ui/logo';
import ButtonsBlock from './buttons-block';

const Header = () => {
  return (
    <header className="border-b border-black-100">
      <div className="max-w-[1900px] mx-auto px-[210px] py-4 flex justify-between items-center">
        <div className="flex items-center gap-16">
          <Logo type="header" />
          <Navigation />
        </div>
        <div className="flex items-center gap-3">
          <SelectLeng />
          <ButtonsBlock />
        </div>
      </div>
    </header>
  );
};

export default Header;
