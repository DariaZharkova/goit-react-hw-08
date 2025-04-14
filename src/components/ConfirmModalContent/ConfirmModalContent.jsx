import css from './ConfirmModalContent.module.css';

export default function ConfirmModalContent({
  text,
  handleConfirm,
  handleCancel,
  isLoading = false,
}) {
  return (
    <>
      <p className={css.text}>{text}</p>
      <div className={css.buttons}>
        <button
          className={`${css.btn} ${css.confirm}`}
          type="button"
          onClick={handleConfirm}
          disabled={isLoading}
        >
          Confirm
        </button>
        <button
          className={`${css.btn} ${css.cancel}`}
          type="button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </>
  );
}
