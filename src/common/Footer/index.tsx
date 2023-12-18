

const Footer = () => {

  return (
    <>
      <footer className="bg-pink">
        <div className="max-w-[484px] mx-auto  px-4 py-8">
          <h6 className="font-bold text-t5 mb-7 text-base sm:text-lg">
            Questions? Email hello@keiok.com
          </h6>
          <div className="flex justify-between gap-3 leading-normal">
            <ul className="flex flex-col gap-3 flex-1 max-w-[159px]">
              <li>
                <a className="text-t5 text-sm" href="#">
                  Shipping Info
                </a>
              </li>
              <li>
                <a className="text-t5 text-sm" href="#">
                  Return Policy
                </a>
              </li>
              <li>
                <a className="text-t5 text-sm" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-3 flex-1 max-w-[159px]">
              <li>
                <a className="text-t5 text-sm" href="#">
                  Cancelation Policy
                </a>
              </li>
              <li>
                <a className="text-t5 text-sm" href="#">
                  Do not sell my personal information
                </a>
              </li>
              <li>
                <a className="text-t5 text-sm" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <p className="text-t5 text-xs mt-12  text-center">
            ⓒ 2023 Powered by keiok
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
