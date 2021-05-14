import React from "react";

const Modal = (props) => {
  const { visible, onClickCancel, message, onClickOk, variety } = props;

  let classStyle = "modal fade";
  if (visible) {
    classStyle += "show d-block";
  }

  return (
    <div
      className={classStyle}
      style={{ backgroundColor: "#000000b0" }}
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Delete App
            </h5>
          </div>
          <div className="modal-body">
            {message} {variety} will be deleted ?
            (If you delete the {variety}, it will be deleted in linked
            transactions.)
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={onClickCancel}
              className="btn btn-secondary"
            >
              Close
            </button>
            <button
              type="button"
              onClick={onClickOk}
              className="btn btn-danger"
            >
              Delete App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
