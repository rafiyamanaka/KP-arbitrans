"use client";
import React from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  text?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const buttonType: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-netral-100 border-primary hover:bg-primary/90 hover:border-netral-100",
  secondary: "bg-white text-primary hover:bg-netral-100",
};

function Button({
  disabled,
  onClick,
  leftIcon,
  rightIcon,
  text,
  variant = "primary",
  type = "button",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg duration-200 border-2 px-4 py-2 ${
        buttonType[variant] || buttonType["primary"]
      } ${className}`}
      {...props}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}
      {text && <span>{text}</span>} 
      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  );
}

export default Button;
