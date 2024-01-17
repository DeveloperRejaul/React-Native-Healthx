import { Loading } from '@components';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { colors } from 'src/constants/colors';
import { useFetch } from 'src/hooks/useFetch';
import { rf } from 'src/utils/size';

export default function Details() {
  const { data, handleGet, isLoading, isSuccess } = useFetch();
  const { id } = useLocalSearchParams();

  useEffect(() => {
    handleGet(`/products/${id}`);
  }, []);

  if (isLoading) return <Loading />;
  if (isSuccess) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: rf(3), fontWeight: '700', color: colors.coolGray900 }}>
          Details {id}
        </Text>
      </View>
    );
  }
}
