import EarlyAccessFrom from "./early-access-form";

interface Props {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
}

const EarlyAccessModal: React.FC<Props> = ({ showModal, setShowModal }) => {
  return (
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 z-[9999] modal transition-opacity duration-300 flex flex-col items-center py-24 sm:py-30 modal-bg ${
        showModal ? "opacity-1" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setShowModal(false)}
    >
      <div
        className={`bg-white w-11/12 mx-auto max-w-lg rounded-[10px] py-8 sm:py-10 transform duration-500 delay-200 origin-bottom transition-all px-10 sm:px-15 lg:px-20 ${
          showModal ? "scale-100 opacity-100 translate-y-0" : "scale-90 opacity-0 translate-y-10"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <EarlyAccessFrom closeModal={() => setShowModal(false)} />
      </div>
    </div>
  );
};

export default EarlyAccessModal;
