import { FeatureCard } from 'components'

// const features = [
//   {
//     title: 'Expense Management',
//     description:
//       'Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
//     link: '/',
//     postion: 'top',
//     image: expense_management,
//   },
//   {
//     title: 'Corporate Cards',
//     description:
//       'Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
//     link: '/',
//     postion: 'below',
//     image: corporate_card,
//   },
//   {
//     title: 'Bank Transfer Payment',
//     description:
//       'Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
//     link: '/',
//     postion: 'top',
//     image: transfer,
//   },
//   {
//     title: 'Reimbursements',
//     description:
//       'Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
//     link: '/',
//     postion: 'below',
//     image: reimbursement,
//   },
// ]
const Features = ({ features }) => {
  const { feature_list } = features || {}
  return (
    <section className="py-12 px-0 md:py-37 lg:py-37">
      <div className="grid h-full w-full md:grid-cols-4">
        {feature_list?.map(({ title, description, link, image }, index) => (
          <FeatureCard
            key={index}
            index={index + 1}
            title={title}
            description={description}
            link={link}
            image={image}
          />
        ))}
      </div>
    </section>
  )
}

export default Features
