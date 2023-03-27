import Link from 'next/link'

const data = [
  {
    title: 'FAQs',
    body: 'Managing expenses can sometimes be insurmountable, whether you’re a small- or large business owner. ',
    link: '/faq',
    linkTitle: 'Learn more',
  },
  {
    title: 'Our Pricing',
    body: 'Managing expenses can sometimes be insurmountable, whether you’re a small- or large business owner. ',
    link: '/pricing',
    linkTitle: 'Learn more',
  },
  {
    title: 'Chat with us?',
    body: 'Managing expenses can sometimes be insurmountable, whether you’re a small- or large business owner. ',
    link: '/blog',
    linkTitle: 'Learn more',
  },
]

const DiscoverMore = () => {
  return (
    <section className="py-20 px-4 md:px-0 md:py-37">
      <div className="container mx-auto">
        <h1 className="pb-4 text-xl md:pb-20 md:text-6xl lg:pb-20 lg:text-6xl">
          <b>Discover More</b>
        </h1>
        <div className="justify-betwee flex flex-col items-center gap-6 md:flex-row md:gap-32 lg:flex-row lg:gap-32">
          {data?.map((datum, i) => {
            return (
              <div key={i}>
                <h1 className="text-xl font-semibold md:text-2xl lg:text-2xl">{datum.title}</h1>
                <p className="pt-[10px] pb-5 text-[18px] text-grey-deep">{datum.body}</p>
                <Link
                  href={datum.link}
                  className="flex items-center gap-2 text-xl font-semibold text-accent-brown"
                >
                  {datum.linkTitle}{' '}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12H20M20 12L14 6M20 12L14 18"
                      stroke="#AF7421"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default DiscoverMore
