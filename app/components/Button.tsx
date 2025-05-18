"use client";

import { ButtonProps } from "@/types/leads";



const Button: React.FC<ButtonProps> = ({
  children,
  icon: Icon,
  badge,
  className = "",
  iconClassName = "",
  badgeClassName = "",
  onClick,
}) => {
  return (
    <button
      className={`flex items-center space-x-1 rounded-full cursor-pointer transition ${className}`}
      onClick={onClick}
    >
      {Icon && (
        <div className="relative">
          <Icon className={`h-5 w-5 ${iconClassName}`} />
          {badge !== undefined && (
            <span
              className={`absolute -top-3 -right-3 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-semibold text-white bg-red-400 rounded-full shadow-sm ${badgeClassName}`}
            >
              {badge}
            </span>
          )}
        </div>
      )}
      {children && <span>{children}</span>}
    </button>
  );
};

export default Button;