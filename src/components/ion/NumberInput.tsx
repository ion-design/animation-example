// Generated with Ion on 10/10/2024, 7:45:40 AM
// Figma Link: https://www.figma.com/design/GzGS1XBtO8fnXGsjKDPiIf?node-id=430:1834
// ion/NumberInput: Generated with Ion on 10/10/2024, 7:45:39 AM
import { Minus } from "@phosphor-icons/react/dist/ssr";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";
import React, {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { type OnValueChange, NumericFormat } from "react-number-format";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

import Hint from "@/components/ion/Hint";
import { inputClassNames, InputContainer } from "@/components/ion/Input";
import Label from "@/components/ion/Label";

// ... (all other code remains unchanged)

const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      label,
      hint,
      helper,
      required,
      showHintIcon,
      iconLeading,
      iconTrailing,
      error,
      min,
      max,
      value,
      defaultValue,
      startValue = 0,
      step = 1,
      onValueChange,
      onBlur,
      onKeyDown,
      allowLeadingZeros = false,
      showControls = true,
      className,
      inputClassName,
      controlsRef,
      ...props
    },
    passedRef
  ) => {
    const generatedId = React.useId();
    const id = props.id ?? generatedId;
    const ariaInvalid = props["aria-invalid"] ?? !!error;

    const [_value, _setValue] = useState<string | number | undefined>(
      value ?? defaultValue ?? undefined
    );
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(passedRef, () => inputRef.current as HTMLInputElement);

    const increment = useRef<() => void>();
    increment.current = () =>
      incrementOrDecrement({
        action: "increment",
        inputRef,
        value: _value,
        setValue: _setValue,
        startValue,
        step,
        min,
        max,
        onValueChange,
      });

    const decrement = useRef<() => void>();
    decrement.current = () =>
      incrementOrDecrement({
        action: "decrement",
        inputRef,
        value: _value,
        setValue: _setValue,
        startValue,
        step,
        min,
        max,
        onValueChange: onValueChange,
      });

    useImperativeHandle(controlsRef, () => ({
      increment: increment.current!,
      decrement: decrement.current!,
    }));

    const onIncrement = useCallback(() => {
      inputRef.current?.focus();
      increment.current!();
    }, []);
    const onDecrement = useCallback(() => {
      inputRef.current?.focus();
      decrement.current!();
    }, []);

    const handleValueChange: OnValueChange = (payload, event) => {
      if (event.source === "event") {
        _setValue(
          isValidNumber(payload.floatValue) &&
            !partialNegativeNumberPattern.test(payload.value) &&
            !(allowLeadingZeros
              ? leadingZerosPattern.test(payload.value)
              : false)
            ? payload.floatValue
            : payload.value
        );
      }
      onValueChange?.(payload, event);
    };

    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {label && (
          <Label
            id={`${id}__label`}
            htmlFor={id}
            required={required}
            helper={helper}
            disabled={props.disabled}
            className="mb-1"
          >
            {label}
          </Label>
        )}
        <InputContainer
          className="pr-0"
          error={error}
          disabled={props.disabled}
        >
          {iconLeading && (
            <span
              className={clsx("text-subtle", {
                "text-on-disabled": props.disabled,
              })}
            >
              {iconLeading}
            </span>
          )}
          <NumericFormat
            id={id}
            aria-required={required}
            aria-invalid={ariaInvalid}
            aria-describedby={hint ? `${id}__hint` : undefined}
            value={_value}
            onValueChange={handleValueChange}
            getInputRef={inputRef}
            className={twMerge(clsx(inputClassNames, inputClassName))}
            min={min}
            max={max}
            allowLeadingZeros={allowLeadingZeros}
            onKeyDown={(e) => {
              onKeyDown?.(e);
              if (e.key === "ArrowDown") {
                onDecrement();
              }
              if (e.key === "ArrowUp") {
                onIncrement();
              }
            }}
            onBlur={(e) => {
              onBlur?.(e);
              if (typeof _value === "number") {
                const clampedValue = clamp(_value, min, max);
                if (clampedValue !== _value) {
                  _setValue(clampedValue);
                }
              }
            }}
            {...props}
          />
          {iconTrailing && (
            <span
              className={clsx("text-subtle", {
                "text-on-disabled": props.disabled,
              })}
            >
              {iconTrailing}
            </span>
          )}
          {showControls && (
            <div className="flex gap-1 items-center px-2">
              <button
                tabIndex={-1}
                onClick={(e) => {
                  e.preventDefault();
                  onDecrement();
                }}
                onTouchStart={(e) => {
                  if (e.cancelable) {
                    e.preventDefault();
                  }
                }}
                className="h-5 w-5 outline-none flex items-center justify-center text-secondary hover:text-foreground transition-all bg-neutral-accent active:bg-neutral-container hover:bg-neutral-accent active:text-foreground rounded-full aria-disabled:pointer-events-none aria-disabled:text-on-disabled"
                aria-label="Decrement"
              >
                <Minus weight="bold" className="w-[10px] h-[10px]" />
              </button>

              <button
                tabIndex={-1}
                onClick={(e) => {
                  e.preventDefault();
                  onIncrement();
                }}
                onTouchStart={(e) => {
                  if (e.cancelable) {
                    e.preventDefault();
                  }
                }}
                className="h-5 w-5 flex outline-none items-center justify-center text-secondary hover:text-foreground transition-all bg-neutral-accent active:bg-neutral-container hover:bg-neutral-accent active:text-foreground rounded-full aria-disabled:pointer-events-none aria-disabled:text-on-disabled"
                aria-label="Increment"
              >
                <Plus weight="bold" className="w-[10px] h-[10px]" />
              </button>
            </div>
          )}
        </InputContainer>
        {hint && (
          <Hint
            id={`${id}__hint`}
            error={error}
            className="mt-1"
            showIcon={showHintIcon}
            disabled={props.disabled}
          >
            {hint}
          </Hint>
        )}
      </motion.div>
    );
  }
);
NumberInput.displayName = "NumberInput";

export default NumberInput;