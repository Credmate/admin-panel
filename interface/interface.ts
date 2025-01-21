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

export interface UserData {
  key: string;
  name: string;
  id: string;
  aadhar_number: string;
  pan_number: string;
  plan: string;
  status: string;
}


export interface PaymentsData {
  key: string;
  name: string;
  id: string;
  payment_id: string;
  date: string;
  payment: string;
  status: string;
}

export interface BackButtonProps {
  onClick: () => void;
}
