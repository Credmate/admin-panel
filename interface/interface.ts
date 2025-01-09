export interface MenuItem {
  icon: string;
  label: string;
  path: string;
  active?: boolean;
}

export interface CredButtonProps {
  text: string;
  onClick: () => void;
}

export interface CredInputProps {
  type: string;
  placeholder: string;
  icon: string;
  value: string | undefined;
  onChange: (value: string) => void;
}

export interface BorrowerData {
  key: string;
  borrower: string;
  dateReported: string;
  group: string;
  warningStatus: string;
  reportStatus: string;
}

export interface BackButtonProps {
  onClick: () => void;
}