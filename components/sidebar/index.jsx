import Link from 'next/link'
import { useRouter } from 'next/router'

const SideBar = () => {
  const router = useRouter()
  return (
    <section className="sticky top-40 w-[370px] self-start">
      <div className="flex flex-col gap-5 text-lg text-grey-warm-400">
        <Link
          href="/faq"
          className={router.pathname == '/faq' ? 'font-semibold text-accent-orange' : ''}
        >
          FAQs
        </Link>
        <Link
          href="/terms-of-use"
          className={router.pathname == '/terms-of-use' ? 'font-semibold text-accent-orange' : ''}
        >
          Terms of Use
        </Link>
        <Link
          href="/privacy-policy"
          className={router.pathname == '/privacy-policy' ? 'font-semibold text-accent-orange' : ''}
        >
          Privacy Policy
        </Link>
        <Link
          href="/disclaimer"
          className={router.pathname == '/disclaimer' ? 'font-semibold text-accent-orange' : ''}
        >
          Disclaimer
        </Link>
        <Link
          href="/cookies"
          className={router.pathname == '/cookies' ? 'font-semibold text-accent-orange' : ''}
        >
          Cookies
        </Link>
        <Link
          href="/security"
          className={router.pathname == '/security' ? 'font-semibold text-accent-orange' : ''}
        >
          Security
        </Link>
      </div>
    </section>
  )
}

export default SideBar
