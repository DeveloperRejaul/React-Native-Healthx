import { type GestureResponderEvent, ViewStyle, TextStyle } from 'react-native';

export interface IButtonTypes {
  text: string;
  type?: 'outline' | 'normal';
  onPress?: (event: GestureResponderEvent) => void;
  bodyStyle?: ViewStyle;
  textStyle?: TextStyle;
  isLoading?: boolean;
}
