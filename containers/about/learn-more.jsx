import Link from 'next/link'

const data = [
  {
    title: 'Our Blog',
    body: 'Managing expenses can sometimes be insurmountable, whether you’re a small- or large business owner. ',
    link: '/blog',
    linkTitle: 'Learn more',
  },
  {
    title: 'Our Customers',
    body: 'Managing expenses can sometimes be insurmountable, whether you’re a small- or large business owner. ',
    link: '/customers',
    linkTitle: 'Learn more',
  },
  {
    title: 'What’s new?',
    body: 'Managing expenses can sometimes be insurmountable, whether you’re a small- or large business owner. ',
    link: '/blog',
    linkTitle: 'Learn more',
  },
]

const LearnMore = () => {
  return (
    <section className="py-[150px]">
      <div className="container mx-auto">
        <h1 className="pb-20 text-6xl">
          <b>Learn more</b> about Us
        </h1>
        <div className="flex items-center justify-between gap-32">
          {data?.map((datum, i) => {
            return (
              <div key={i}>
                <h1 className="text-2xl font-semibold">{datum.title}</h1>
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

export default LearnMore