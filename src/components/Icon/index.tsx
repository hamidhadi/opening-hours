import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

interface IconProps {
  name: string,
  size: number,
  color: string
}

export const Icon: React.FC<IconProps> = ({ name, size, color }) => (
  <MaterialIcon name={name} size={size} color={color} />
);
