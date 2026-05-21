// src/components/DeleteConfirmModal.tsx
import React from 'react';

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  contactName: string;
}

export const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  contactName,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 w-full max-w-sm overflow-hidden p-6 text-center">
        
        {/* Warning Icon Badge */}
        <div className="h-12 w-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mx-auto mb-4 text-red-600">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        {/* Informative Text Layout */}
        <h3 className="text-base font-bold text-slate-900">Confirm Deletion</h3>
        <p className="text-sm text-slate-500 mt-2">
          Are you certain you want to purge <strong className="text-slate-800 font-semibold">{contactName}</strong> from the system directory? This layout modification cannot be undone.
        </p>

        {/* Action Button Pipeline Links */}
        <div className="flex justify-center gap-3 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 border border-slate-200 hover:bg-slate-200 rounded-lg transition-all cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 active:scale-98 rounded-lg shadow-xs transition-all cursor-pointer"
          >
            Confirm Delete
          </button>
        </div>

      </div>
    </div>
  );
};