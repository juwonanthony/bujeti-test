import Image from 'next/image'

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
    <section className={`mx-auto flex items-center ${color}`}>
      <div className="mb:mt-20 mb:pb-[100px] mb:text-left mt-10 flex-1 px-4 pb-10 text-center md:pl-28 md:pr-30 lg:mt-20 lg:pb-[100px] lg:pl-28 lg:pr-30 lg:text-left">
        <span className="font-semibold uppercase text-accent-orange">{slug}</span>
        {title}
        <p className="pb-6 text-center text-base md:pb-10 md:pr-20 md:text-left md:text-xl lg:pb-10 lg:pr-20 lg:text-left lg:text-xl">
          {body}
        </p>
        <button className="inline-flex rounded-lg border-0 bg-accent-orange py-3 px-6 text-base font-semibold text-white hover:bg-black focus:outline-none">
          {primaryBtnLabel}
        </button>
        {secondaryBtnLabel && (
          <button className="ml-4 inline-flex items-center rounded-lg border-2 border-gray-200 bg-white py-3 px-6 text-base font-semibold text-gray-700 hover:bg-gray-200 focus:outline-none">
            {secondaryBtnLabel}
          </button>
        )}
      </div>
      <div className="hidden md:flex md:flex-1 lg:flex lg:flex-1">
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
