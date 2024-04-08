export default function Modal({ open, onClose, children, styles, closeText }) {
  return (
    <div className={`${open ? "visible" : "invisible"}`}>
      {/* backdrop */}
      <div
        className={`fixed w-full h-full top-0 left-0 bg-black/50`}
        onClick={onClose}
      />

      {/* content */}
      <div
        className={`${styles} fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-[5px_5px_40px] shadow-black/25`}
      >
        {children}
      </div>
    </div>
  );
}
