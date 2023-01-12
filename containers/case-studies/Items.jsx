import Image from 'next/image';
import Link from 'next/link';

const Items = ({ data, type }) => {
  return (
    <section className="w-full">
      <Image src={data.logo} className="w-14" alt="logo" />
      <section className="mt-10 cursor-pointer">
        {type === 'case-study' ? (
          <Image src={data.image} className="w-full rounded-xl" />
        ) : (
          <div className="relative w-full">
            <Image src={data.image} className="w-full rounded-xl" />
            <div className="absolute rounded-xl top-0 w-full h-full bg-black opacity-30"></div>
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0 right-0 mx-auto mt-[50%]"
            >
              <path
                opacity="0.5"
                d="M40 6C21.232 6 6 21.232 6 40C6 58.768 21.232 74 40 74C58.768 74 74 58.768 74 40C74 21.232 58.768 6 40 6Z"
                fill="black"
              />
              <path d="M34 26L53 40L34 54V26Z" fill="white" />
            </svg>
          </div>
        )}

        <div className="mt-15">
          <h4 className="text-textBaseColor text-3xl">{data.title}</h4>
          <p className="text-grey-deep font-normal text-2xl leading-8 pt-2 pb-8">{data.description}</p>
        </div>
        <Link href={data.link} className="text-accent-brown text-2xl flex items-center gap-2">
          {data.link_tag}{' '}
          <span>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 15H25M25 15L17.5 7.5M25 15L17.5 22.5"
                stroke="#AF7421"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </Link>
      </section>
    </section>
  );
};

export default Items;
