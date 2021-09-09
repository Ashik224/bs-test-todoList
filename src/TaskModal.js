import React from "react";
import Modal from "react-modal";
import CustomInputField from "./CustomInputField";
import CustomRadioField from "./CustomRadioField";
import CustomTextareaField from "./CustomTextareaField";
import { customStyles } from "./ModalStyle";

const statusArray = [
  { label: "Active", id: "active", value: "Active" },
  { label: "Done", id: "done", value: "Done" },
];

const TaskModal = ({
  openModal,
  closeModal,
  modalState,
  handleChange,
  handleSubmit,
  setError,
  buttonLabel
}) => {
  return (
    <div>
      <Modal
        isOpen={openModal}
        style={customStyles}
        contentLabel="Create Task"
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <h4>Create Task</h4>
        <hr /> <br /> <br />
        <form onSubmit={handleSubmit}>
          <CustomInputField
            type="text"
            label="Title"
            id="title"
            classLabel="labelMarginTitle"
            value={modalState.title}
            handleChange={handleChange}
            name="title"
            error={setError}
          />

          <CustomTextareaField
            label="Description"
            id="description"
            classLabel="labelMarginDescription"
            value={modalState.description}
            handleChange={handleChange}
            name="description"
            error={setError}
          />
          <label className="labelMarginStatus">Status</label>
          <CustomRadioField
            options={statusArray}
            classLabel="labelMarginRadioLabel"
            handleChange={handleChange}
            value={modalState.status}
            name="status"
            error={setError}
          />
          <button type="submit" className="submitButton">{buttonLabel}</button>
          <button onClick={closeModal} className="cancelButton">Cancel</button>
        </form>
      </Modal>
    </div>
  );
};

export default TaskModal;
