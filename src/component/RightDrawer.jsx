import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export default function RightDrawer({ open, onOpenChange, children, width = "w-full lg:w-1/3" }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange} modal={true}>
      <Dialog.Portal>

        {/* BACKDROP */}
        <Dialog.Overlay className="fixed inset-0 blur-2xl bg-black/50" />

        {/* RIGHT DRAWER PANEL */}
        <Dialog.Content
          className={`
            fixed top-0 right-0 h-full bg-white shadow-xl outline-0

            ${width}
            animate-in slide-in-from-right duration-300
            data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right
          `}
        >
          <Dialog.Title className="sr-only">Account Drawer</Dialog.Title>
          <Dialog.Description className="sr-only">
            This drawer contains account information.
          </Dialog.Description>

          {/* Close Button */}
          <div className="flex flex-row justify-between items-center border-b border-gray-200 p-4 mb-4">

            <div className="text-lg font-semibold">Account</div>
            <button
              className="text-gray-700"
              onClick={() => onOpenChange(false)}
            >
              <X size={24} />
            </button>
          </div>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
