const FixedAssets = () => {
  return (
    <>
      <figure className="card">
        <img src="../images/card.png" alt="" />
      </figure>

      <figure className="phone-screen flex flex-col items-center justify-center">
        <img src="/images/app-main.png" alt="App home screen" className="w-full" />
        <img src="/images/card-modal.png" alt="App home screen" className="w-full card-modal-screen" />
        <img src="/images/transactions.png" alt="App home screen" className="w-full transactions-screen" />
        {/* <img src="/images/transactions.png" alt="App home screen" className="w-full" /> */}
      </figure>
    </>
  );
};

export default FixedAssets;
