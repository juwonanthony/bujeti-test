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
    <section className="justify-space-between flex items-center gap-30">
      <section className="w-1/2">
        <h1 className="text-3xl font-semibold leading-10 text-textBaseColor">{title}</h1>
        <p className="pb-7 pt-2 text-2xl text-grey-deep">{description}</p>
        <div className="flex gap-[30px]">
          {main_link_label ? (
            <Link
              href={mainLink}
              className="flex items-center gap-[10px] text-2xl text-accent-brown"
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
            <Link href={subLink} className="flex items-center gap-[10px] text-2xl text-grey-deep">
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
      <section className="w-1/2">
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
