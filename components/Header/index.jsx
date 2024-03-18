import Navigation from './navigation';
import MyButtonLink from '@/components/ui/mu-button-link';
import SelectLeng from './select-leng';
import Logo from '@/components/ui/logo';

const Header = () => {
  return (
    <header className="border-b border-black-100">
      <div className="max-w-[1900px] mx-auto px-[210px] py-4 flex justify-between items-center">
        <div className="flex items-center gap-16">
          <Logo type='header' />
          <Navigation />
        </div>
        <div className="flex items-center gap-3">

          <SelectLeng />
          
          <MyButtonLink styleType="secondary" styleWidth="small" href="#">
            Sign In
          </MyButtonLink>
          <MyButtonLink styleType="primary" styleWidth="small" href="#">
            Donate
          </MyButtonLink>
        </div>
      </div>
    </header>
  );
};

export default Header;

/*

 <div className="w-full mx-auto my-4 max-w-screen-2xl px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo.png" width={36} height={47} alt="Balakun logo" className="mr-20" />
          </Link>
          <Navigation />
        </div>
        <div className="flex items-center gap-3">
          <SelectLeng/>
          <ButtonLink styleType="secondary" styleWidth="small" onClick={() => console.log('click Sign In')}>
            Sign In
          </ButtonLink>
          <ButtonLink styleType="primary" styleWidth="small" onClick={() => console.log('click Donate')}>
            Donate
          </ButtonLink>
        </div>
      </div>

*/
