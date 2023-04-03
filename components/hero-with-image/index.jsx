import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const HeroWithImages = ({
  slug,
  title,
  body,
  image,
  bg,
  primaryBtnLabel,
  primaryBtnLink,
  secondaryBtnLabel,
  secondaryBtnLink,
}) => {
  const color = bg === 'white' ? 'text-black bg-white' : `text-white bg-${bg}`

  return (
    <section className={`mx-auto flex flex-col xl:flex-row xl:items-center ${color}`}>
      <div className="mb:mt-20 mb:pb-[100px] mt-10 px-4 pb-10 text-center md:pl-28 md:pr-30 md:text-left lg:mt-20 lg:pb-[100px] lg:pl-28 lg:pr-30 xl:flex-1">
        <span className="font-semibold uppercase text-accent-orange">{slug}</span>
        {title}
        <p className="pb-6 text-center text-base md:pb-10 md:pr-20 md:text-left md:text-lg lg:pb-10 lg:pr-20 lg:text-left lg:text-xl">
          {body}
        </p>
        <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-start md:gap-0 lg:flex-row lg:justify-start lg:gap-0">
          <Link
            target="_blank"
            href={primaryBtnLink}
            className="rounded-lg border-0 bg-accent-orange py-3 px-6 text-center text-base font-semibold text-white hover:bg-black focus:outline-none md:inline-flex lg:inline-flex"
            rel="noreferrer"
          >
            {primaryBtnLabel}
          </Link>
          {secondaryBtnLabel && (
            <Link
              href={secondaryBtnLink}
              className="ml-0 items-center rounded-lg border-2 border-gray-200 bg-white py-3 px-6 text-center text-base font-semibold text-gray-700 hover:bg-gray-200 focus:outline-none md:ml-4 md:inline-flex lg:ml-4 lg:inline-flex"
            >
              {secondaryBtnLabel}
            </Link>
          )}
        </div>
      </div>
      <div className="flex xl:flex-1 ">
        <div className="relative aspect-square h-full w-full shrink-0">
          <Image
            fill
            objectFit="cover"
            src={image}
            alt="Bujeti dashboard"
            className="h-full w-full"
          />
        </div>
        {/* <Image src={image} className="h-full w-full"  /> */}
      </div>
    </section>
  )
}

export default HeroWithImages
