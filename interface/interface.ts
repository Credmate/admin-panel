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