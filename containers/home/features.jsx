import { FeatureCard } from 'components'

const Features = ({ features }) => {
  const { feature_list } = features || {}
  return (
    <section className="px-0 pb-12 md:pb-37">
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
