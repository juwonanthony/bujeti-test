import Image from 'next/image'
import Link from 'next/link'

const ListCard = ({ data }) => {
  const {
    description,
    image: { filename },
    component,
    link: { url: mainLink },
    main_link_label,
    sub_link: { url: subLink },
    sub_link_label,
    title,
  } = data

  return (
    <section className="flex flex-col items-center gap-5 px-4 md:flex-row md:justify-between md:gap-30 md:px-0 lg:flex-row lg:justify-between lg:gap-30 lg:px-0">
      <section className="w-full md:w-1/2 lg:w-1/2">
        <h1 className="text-2xl font-semibold leading-10 text-textBaseColor md:text-3xl lg:text-3xl">
          {title}
        </h1>
        <p className="pb-4 pt-2 text-base text-grey-deep md:pb-7 md:text-2xl lg:pb-7 lg:text-2xl">
          {description}
        </p>
        <div className="flex md:gap-[30px] lg:gap-[30px]">
          {main_link_label ? (
            <Link
              href={mainLink}
              className="flex items-center gap-[10px] text-lg text-accent-brown md:text-2xl lg:text-2xl"
            >
              {main_link_label}
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
          ) : sub_link_label ? (
            <Link
              href={subLink}
              className="flex items-center gap-[10px]  text-lg text-grey-deep md:text-2xl lg:text-2xl"
            >
              {sub_link_label}
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
                    stroke="#586068"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          ) : null}
        </div>
      </section>
      <section className="w-full md:w-1/2 lg:w-1/2">
        <div className="relative aspect-square h-full w-full shrink-0">
          <Image fill objectFit="contain" src={filename} alt={filename} className="w-full" />
        </div>
        {/* <Image
          src={filename}
          alt=""
          fill
          objectFit="cover"
          className="static h-fit w-full max-w-xl rounded-t-3xl object-cover md:rounded-none md:rounded-l-3xl"
        /> */}
        {/* <Image src={data.image} alt={data.image} /> */}
      </section>
    </section>
  )
}

export default ListCard
