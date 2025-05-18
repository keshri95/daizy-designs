
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

export interface Lead {
  id: string;
  clientName: string;
  status: string;
  phone: string;
  followUp: string;
  created: string;
  assignedTo: string;
  project: string;
  budget: number;
  lastCreated: string;
}

export interface Status {
    label: string,
    bgColor:string,
    textColor: string
}


export interface ButtonProps {
  children?: React.ReactNode;
  icon?: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
  badge?: number;
  className?: string;
  iconClassName?: string;
  badgeClassName?: string;
  onClick?: () => void;
}
