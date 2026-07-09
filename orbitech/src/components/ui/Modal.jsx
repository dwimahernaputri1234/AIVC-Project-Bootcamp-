export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div className="neubrutal-border bg-white neubrutal-shadow p-lg max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-md">
          <h3 className="font-headline-md text-headline-md">{title}</h3>
          <button onClick={onClose} className="neubrutal-border w-10 h-10 flex items-center justify-center bg-white neubrutal-active cursor-pointer">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
