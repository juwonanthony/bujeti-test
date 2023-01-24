import { faq_svg, question_avatar } from 'assets/icons'
import Image from 'next/image'

const QuestionBar = () => {
  return (
    <section className="bg-textBaseColor py-[115px]">
      <div className="w-full text-center">
        <h1 className="mb-[5px] text-3xl font-bold text-white">Still have questions?</h1>
        <p className="mb-[15px] text-3xl text-grey-divider">
          Our friendly team are always ready to help.
        </p>
        <Image src={question_avatar} alt={question_avatar} className="m-auto mb-8" />
        <button className="inline-flex rounded-lg bg-accent-green py-2 px-6 text-base font-semibold text-black focus:outline-none">
          Start a chat now
        </button>
      </div>
    </section>
  )
}

export default QuestionBar
