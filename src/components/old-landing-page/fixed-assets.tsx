import Image from "next/image";

const FixedAssets = () => {
  return (
    <>
      <figure className="card">
        <Image src="../images/card.png" alt="" />
      </figure>

      <figure className="phone-screen flex flex-col items-center justify-center">
        <Image src="/images/app-main.png" alt="App home screen" className="w-full" />
        <Image src="/images/card-modal.png" alt="App home screen" className="w-full card-modal-screen" />
        <Image src="/images/transactions.png" alt="App home screen" className="w-full transactions-screen" />
        {/* <img src="/images/transactions.png" alt="App home screen" className="w-full" /> */}
      </figure>
    </>
  );
};

export default FixedAssets;
