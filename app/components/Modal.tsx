import React, { ReactNode } from 'react'

type ModalType = {
  open: boolean;
  onClose: () => void;
  children: ReactNode
}

const Modal = ({ open, onClose, children }: ModalType) => {
  return (
<div id="default-modal" tabIndex={-1} aria-hidden="true" className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] transition-colors max-h-full ${open ? "visible bg-black/20" : "invisible"}`} onClick={onClose}>
    <div className="relative p-2 md:p-4 md:w-full md:max-w-5xl max-h-full">
        <div className={`relative bg-white rounded-lg shadow transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`} onClick={(e)=>e.stopPropagation()}>
            <div className="absolute flex items-center justify-between p-4 md:p-3 rounded-t z-10">
                <button type="button" className="float-right text-white border bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-md text-xs w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="default-modal" onClick={onClose}>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            {children}
        </div>
    </div>
</div>
  )
}

export default Modal