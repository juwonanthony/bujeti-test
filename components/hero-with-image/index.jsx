import Image from "next/image";

const HeroWithImages = ({ slug, title, body, image, bg }) => {
  const color = bg === "white" ? "text-black bg-white" : `text-white bg-${bg}`;
  return (
    <section className={`mx-auto items-center flex ${color}`}>
      <div className="pb-[100px] pt-20 pl-28 pr-30 flex-1">
        <span className="uppercase text-accent-orange font-semibold">{slug}</span>
        {title}
        <p className="text-xl pr-20 pb-10">{body}</p>
        <button className="inline-flex text-white bg-accent-orange border-0 py-3 px-6 focus:outline-none hover:bg-black rounded-lg font-semibold text-base">
          Start Now
        </button>
        <button className="ml-4 inline-flex text-gray-700 items-center bg-white border-2 border-gray-200 py-3 px-6 focus:outline-none hover:bg-gray-200 rounded-lg font-semibold text-base">
          Contact Sales
        </button>
      </div>
      <div className="flex-1" >
        <Image src={image} className="w-full h-full" alt="Bujeti dashboard" />
      </div>
    </section>
  );
};

export default HeroWithImages;
