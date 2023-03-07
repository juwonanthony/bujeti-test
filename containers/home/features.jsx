import { FeatureCard } from 'components'

const Features = ({ features }) => {
  const { feature_list } = features || {}
  return (
    <section className="py-12 px-0 md:py-37 lg:py-37">
      <div className="grid h-full w-full md:grid-cols-2 xl:grid-cols-4">
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
