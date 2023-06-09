const ShowMoreButton = ({ title }) => {
  return (
    <section className="container mx-auto">
      <div className="flex items-center">
        <span className="text-2xl font-medium">{title}</span>
        <span className="ml-[10px] cursor-pointer">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 6.25V23.75M6.25 15H23.75"
              stroke="#242628"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </section>
  )
}

export default ShowMoreButton
