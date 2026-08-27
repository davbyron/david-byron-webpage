"use client"

import type { PopupImageProps } from "@/types/props";
import { useState } from "react";
import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  useId,
  FloatingOverlay,
  FloatingFocusManager
} from "@floating-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose, faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";

export function PopupImage(props: PopupImageProps) {
  const { image, imageUrlBase } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const {refs, context} = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context, {
    outsidePress: false
  });
  const role = useRole(context);

  const {getReferenceProps, getFloatingProps} = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const labelId = useId();

  return (
    <>
      <button
        type="button"
        ref={refs.setReference}
        {...getReferenceProps()}
        className="absolute top-5 right-5 flex items-center justify-center p-4 size-10 rounded-full
                  cursor-pointer opacity-0 pointer-events-none
                  transition-all duration-300
                  group-hover:opacity-100 group-hover:pointer-events-auto
                  focus-visible:opacity-100 focus-visible:pointer-events-auto
                  bg-black/50 text-white backdrop-blur-sm
                  hover:bg-black/70 active:bg-black/80"
      >
        <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} size="sm" />
      </button>
      {isOpen && (
        <FloatingOverlay
          lockScroll
          className="bg-black/80 z-50"
        >
          <FloatingFocusManager context={context}>
            <figure
              ref={refs.setFloating}
              aria-labelledby={labelId}
              {...getFloatingProps()}
              className="relative p-16 h-dvh w-dvw flex flex-col items-center justify-center gap-5"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative h-full w-fit">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="absolute top-5 right-5 group flex items-center justify-center p-4 size-10 rounded-full
                            cursor-pointer bg-black/50 text-white backdrop-blur-sm
                            hover:bg-black/70 active:bg-black/80"
                >
                  <FontAwesomeIcon icon={faClose} size="sm" />
                </button>
                <img
                  key={image.id}
                  src={`${imageUrlBase}${image.filename}`}
                  alt={image.title}
                  onLoad={() => setIsLoading(false)}
                  onClick={(e) => e.stopPropagation()}
                  className={`h-full w-full object-contain transition-opacity duration-300 ${
                    isLoading ? "opacity-0" : "opacity-100"
                  }`}
                />
              </div>
              <figcaption
                id={labelId}
                className="bg-tan rounded-full px-5 py-2"
                onClick={(e) => e.stopPropagation()}
              >
                {image.title}, {image.year}
              </figcaption>
            </figure>
          </FloatingFocusManager>
        </FloatingOverlay>
      )}
    </>
  );
}
