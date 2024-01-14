export interface IInputProps {
  type?: 'text' | 'password';
  value: string;
  onChangeText: (value: string) => void;
  label?: string;
  keyboardType?: string;
}
