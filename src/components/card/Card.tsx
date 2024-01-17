import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from 'src/constants/colors';
import { rf, rh, rw } from 'src/utils/size';
const BTN_HEIGHT = 25;
const BTN_WIDTH = 40;
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
      {/* Header Part  */}
      <LinearGradient style={styles.rating} colors={[colors.lightBlue500, colors.lightBlue900]}>
        <Text style={styles.ratingText}>{rating}</Text>
      </LinearGradient>

      <Pressable style={styles.heart}>
        <AntDesign name="hearto" size={rf(3)} color={colors.coolGray400} />
      </Pressable>

      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          resizeMode="contain"
          style={{ width: '90%', height: '55%', backgroundColor: 'transparent' }}
          source={{ uri }}
        />
      </View>

      <View style={styles.infoBody}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
        {/* bottom part */}
        <View style={styles.bottom}>
          <Text style={styles.price} numberOfLines={1}>
            ${price}
          </Text>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Add</Text>
          </Pressable>
        </View>
      </View>
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
    justifyContent: 'space-between',
  },
  rating: {
    position: 'absolute',
    left: 10,
    height: 35,
    width: 30,
    paddingHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 11,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 7,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
  },
  ratingText: {
    color: colors.textLight0,
    fontSize: rf(1.4),
    fontWeight: '800',
  },
  heart: {
    alignSelf: 'flex-end',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    height: BTN_HEIGHT,
    width: BTN_WIDTH,
    backgroundColor: colors.lightBlue300,
    padding: 2,
    paddingHorizontal: 7,
    borderRadius: BTN_WIDTH * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontWeight: 'bold',
    color: colors.coolGray900,
  },
  price: {
    color: colors.lightBlue700,
    fontSize: rf(2.3),
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    fontSize: rf(2.3),
  },
  description: {
    color: colors.coolGray600,
    fontWeight: '600',
    fontSize: rf(1.5),
  },
  infoBody: {
    rowGap: 10,
  },
});
