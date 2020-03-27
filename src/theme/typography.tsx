import React from 'react';
import {Text as RNText, TextProperties, TextStyle} from 'react-native';

const RegularText: React.FC<TextProperties> = props => (
  <RNText {...props} style={[props.style, {fontFamily: 'Roboto-Regular'}]}>
    {props.children}
  </RNText>
);

const MediumText: React.FC<TextProperties> = props => (
  <RNText {...props} style={[props.style, {fontFamily: 'Roboto-Medium'}]}>
    {props.children}
  </RNText>
);

const BoldText: React.FC<TextProperties> = props => (
  <RNText {...props} style={[props.style, {fontFamily: 'Roboto-Bold'}]}>
    {props.children}
  </RNText>
);

interface TextProps extends TextProperties {
  weight?: 'regular' | 'medium' | 'bold';
  style?: TextStyle | TextStyle[];
}

export const Text: React.FC<TextProps> = ({
  weight,
  children,
  style,
  ...props
}) => {
  if (weight === 'medium') {
    return (
      <MediumText {...props} style={style}>
        {children}
      </MediumText>
    );
  }

  if (weight === 'bold') {
    return (
      <BoldText {...props} style={style}>
        {children}
      </BoldText>
    );
  }

  return (
    <RegularText {...props} style={style}>
      {children}
    </RegularText>
  );
};
