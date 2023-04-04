import Image from 'next/image'
import Link from 'next/link'

const Items = ({ data, type }) => {
  return (
    <section className="w-full">
      <Image src={data.logo} className="w-14" alt="logo" />
      <section className="mt-10 cursor-pointer">
        {type === 'case-study' ? (
          <Image
            src={data.image}
            alt={data.image}
            className="h-[550px] w-full rounded-xl object-cover"
          />
        ) : (
          <div className="relative w-full">
            <Image
              src={data.image}
              className="h-[550px] w-full rounded-xl object-cover"
              alt={data.image}
            />
            <div className="absolute top-0 h-full w-full rounded-xl bg-black opacity-30"></div>
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 right-0 top-0 mx-auto mt-[35%]"
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

        <div className="mt-4 md:mt-15 lg:mt-15">
          <h4 className="text-lg font-semibold  text-textBaseColor md:text-3xl lg:text-3xl">
            {data.title}
          </h4>
          <p className="pb-8 pt-2 text-sm font-normal text-grey-deep md:text-2xl md:leading-8 lg:text-2xl lg:leading-8">
            {data.description}
          </p>
        </div>
        <Link
          href={data.link}
          className="flex items-center gap-2  text-accent-brown md:text-2xl lg:text-2xl"
        >
          {data.link_tag}{' '}
          <span>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 15H25M25 15L17.5 7.5M25 15L17.5 22.5"
                stroke="#AF7421"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </section>
    </section>
  )
}

export default Items
