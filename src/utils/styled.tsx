import React, { ReactNode } from 'react';
import { type TextProps, TextStyle, ViewProps, ViewStyle } from 'react-native';

interface ComponentProps {
  style?: TextStyle | ViewStyle;
  children?: ReactNode;
}

/**
 * @description this is Higher-order component for creating style components
 * @param Component
 * @param style
 * @returns {React.JSX}
 */

export const styled = (
  Component: React.ComponentType<ViewProps | TextProps>,
  style?: TextStyle
) => {
  return ({ style: componentStyle, children, ...props }: ComponentProps): React.ReactElement => {
    const mergedStyle = [style, componentStyle];
    return (
      <Component style={mergedStyle} {...props}>
        {children}
      </Component>
    );
  };
};
