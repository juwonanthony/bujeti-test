import ShowMoreButton from '../customers/show-more-button';
import Items from './Items';

const CaseStudies = ({ title, slug, bg, type, data }) => {
  return (
    <section className={`${bg} py-[150px]`}>
      <section className="container mx-auto">
        <header>
          <span class="flex gap-2 items-center text-accent-brown">
            {type === 'case-study' ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.4 3.8H1V13.6C1 14.37 1.63 15 2.4 15H12.2V13.6H2.4V3.8ZM13.6 1H5.2C4.43 1 3.8 1.63 3.8 2.4V10.8C3.8 11.57 4.43 12.2 5.2 12.2H13.6C14.37 12.2 15 11.57 15 10.8V2.4C15 1.63 14.37 1 13.6 1ZM12.9 7.3H5.9V5.9H12.9V7.3ZM10.1 10.1H5.9V8.7H10.1V10.1ZM12.9 4.5H5.9V3.1H12.9V4.5Z"
                  fill="#D28B28"
                />
              </svg>
            ) : (
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_5926_16605)">
                  <path
                    d="M16.3636 2V13.4545H18V2H16.3636ZM13.0909 13.4545H14.7273V2H13.0909V13.4545ZM10.6364 2H0.818182C0.368182 2 0 2.36818 0 2.81818V12.6364C0 13.0864 0.368182 13.4545 0.818182 13.4545H10.6364C11.0864 13.4545 11.4545 13.0864 11.4545 12.6364V2.81818C11.4545 2.36818 11.0864 2 10.6364 2ZM5.72727 4.25C6.74182 4.25 7.56818 5.07636 7.56818 6.09091C7.56818 7.10545 6.74182 7.93182 5.72727 7.93182C4.71273 7.93182 3.88636 7.10545 3.88636 6.09091C3.88636 5.07636 4.71273 4.25 5.72727 4.25ZM9.40909 11.8182H2.04545V11.2045C2.04545 9.97727 4.5 9.36364 5.72727 9.36364C6.95455 9.36364 9.40909 9.97727 9.40909 11.2045V11.8182Z"
                    fill="#D28B28"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5926_16605">
                    <rect width="17.0423" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}{' '}
            {slug}
          </span>
          <h1 className="leading-[100px] text-6xl mt-2">{title}</h1>
        </header>
        <main className="flex justify-between items-center mt-20">
          {data?.map((datum) => {
            return (
              <div className="w-[550px]">
                <Items data={datum} type={type}/>
              </div>
            );
          })}
        </main>
          <div className='bg-grey-stroke h-[1px] w-full mt-20 mb-20'></div>
      </section>
      <ShowMoreButton title={`More ${slug}`} />
    </section>
  );
};

export default CaseStudies;
