import Image from "next/image";
import Link from "next/link";

const ListCard = ({ data }) => {
  return (
    <section className="flex justify-space-between items-center gap-30">
      <section className="w-1/2">
        <h1 className="text-3xl">{data.title}</h1>
        <p className="text-2xl pb-7 pt-2">{data.body}</p>
        <div className="flex">
          {data.links.map((link, i) => {
            return (
              <Link href={link.to} key={link.name} className={`flex gap-3 align-center text-2xl ${i === 0 ? "text-accent-brown" : "text-grey-deep"}`}>
                {link.name}
                <span>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 15H25M25 15L17.5 7.5M25 15L17.5 22.5"
                      stroke="#AF7421"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="w-1/2">
        <Image src={data.image} alt={data.image} />
      </section>
    </section>
  );
};

export default ListCard;



