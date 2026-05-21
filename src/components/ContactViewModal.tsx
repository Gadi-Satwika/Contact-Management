// src/components/ContactViewModal.tsx
import React from 'react';
import type { Contact } from '../types/contact';

interface ContactViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  contact: Contact | null;
}

export const ContactViewModal: React.FC<ContactViewModalProps> = ({ isOpen, onClose, contact }) => {
  if (!isOpen || !contact) return null;

  // Format Date Helper
  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 w-full max-w-md overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h3 className="text-base font-bold text-slate-900">Contact Specifications</h3>
          <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body / Information Sheet */}
        <div className="p-6 space-y-6">
          
          {/* Profile Header Avatar */}
          <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
            <div className="h-14 w-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-xl uppercase shadow-xs">
              {contact.firstName[0]}{contact.lastName[0]}
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">{contact.firstName} {contact.lastName}</h4>
              <p className="text-sm font-medium text-slate-500">{contact.companyName}</p>
            </div>
          </div>

          {/* Details Metadata List */}
          <div className="space-y-4 text-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-50 pb-2">
              <span className="font-semibold text-slate-400 text-xs uppercase tracking-wider">Email Address</span>
              <span className="text-slate-900 font-medium mt-0.5 sm:mt-0 break-all">{contact.email}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-50 pb-2">
              <span className="font-semibold text-slate-400 text-xs uppercase tracking-wider">Phone Number</span>
              <span className="text-slate-900 font-medium mt-0.5 sm:mt-0">{contact.phoneNumber}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-50 pb-2">
              <span className="font-semibold text-slate-400 text-xs uppercase tracking-wider">Account Status</span>
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold mt-1 sm:mt-0 w-fit ${
                contact.status === 'Active' 
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' 
                  : 'bg-slate-100 text-slate-600 border border-slate-200'
              }`}>
                {contact.status}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between pb-1">
              <span className="font-semibold text-slate-400 text-xs uppercase tracking-wider">Registration Date</span>
              <span className="text-slate-500 font-medium mt-0.5 sm:mt-0 text-xs">{formatDate(contact.createdDate)}</span>
            </div>
          </div>

          {/* Close Action Button */}
          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 border border-slate-200 hover:bg-slate-200 rounded-lg transition-all cursor-pointer"
            >
              Close Window
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};