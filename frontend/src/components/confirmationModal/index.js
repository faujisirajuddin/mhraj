import { createPortal } from "react-dom";

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  primaryBtnName = "Yes",
  secondaryBtnName = "No",
  modalInnerContent,
}) => {
  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 w-full h-full">
      <div
        className="bg-white p-6 rounded-xl shadow-xl w-full"
        style={{ maxWidth: "35rem" }}
      >
        <p className="text-lg font-medium mb-4 break-words break-all whitespace-pre-wrap leading-tight">
          {modalInnerContent}
        </p>
        <div className="flex justify-end ">
          <button
            className="bg-gray-300 px-10 mr-1 rounded-md hover:bg-gray-400 h-10 flex items-center justify-center"
            onClick={onClose}
          >
            {secondaryBtnName}
          </button>
          <button
            className={`px-10 rounded-md text-white bg-red-600 hover:bg-red-700 h-10 flex items-center justify-center`}
            onClick={onConfirm}
          >
            {primaryBtnName}
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ConfirmationModal;
