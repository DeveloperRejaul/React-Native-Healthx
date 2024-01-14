import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from 'src/constants/colors';
import { rh, rw } from 'src/utils/size';

export interface ICardProps {
  uri: string;
  title: string;
  description: string;
  price: string;
  rating: string;
}

export default function Card(props: ICardProps) {
  const { uri, title, description, price, rating } = props;

  return (
    <View style={styles.cardBody}>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          resizeMode="contain"
          style={{ width: '80%', height: '70%', backgroundColor: 'transparent' }}
          source={{ uri }}
        />
      </View>
      <Text numberOfLines={1}>{title}</Text>
      <Text numberOfLines={2}>{description}</Text>
      <Text numberOfLines={1}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardBody: {
    backgroundColor: colors.textLight0,
    width: rw(45),
    height: rh(33),
    borderRadius: 10,
    padding: 7,
    marginBottom: 20,
    overflow: 'hidden',
  },
});
