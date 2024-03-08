// CSS
import "./Modal.css";

const Modal = ({ children }) => {

    const closeModal = (e) => {
        const modal = document.querySelector("#modal")
        modal.classList.add("hide")
    }

  return (
    <div id="modal" className="hide">
      <div className="fade" onClick={closeModal}></div>
      <div className="modal">
        <h2>Texto modal</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
