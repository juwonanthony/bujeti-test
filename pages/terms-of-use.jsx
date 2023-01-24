import { LayoutWrapper } from 'components/index'
import SideBar from 'components/sidebar'
import { useComponent } from 'lib/hooks/utils'
import { Link } from 'next/link'
import { terms } from 'utils'

import QuestionBar from 'containers/terms/question-bar'

const Terms = () => {
  return (
    <LayoutWrapper navbar={useComponent([], 'navbar')} footer={useComponent([], 'footer')}>
      <section className="pt-40">
        <div className="container mx-auto">
          <div className="flex">
            <SideBar />
            <main className="w-[840px] pb-[150px]">
              <h1 className="mb-10 text-5xl font-semibold text-textBaseColor">Terms of Use</h1>
              {terms.map((term, i) => {
                return (
                  <div className="mb-10" key={i}>
                    <h2 className="mb-[15px] text-xl font-semibold text-textBaseColor">
                      <span>{i + 1}</span>. {term.title}
                    </h2>
                    <p className="leading-6 text-textBaseColor">{term.body}</p>
                  </div>
                )
              })}
            </main>
          </div>
        </div>
        <QuestionBar />
      </section>
    </LayoutWrapper>
  )
}

export default Terms
