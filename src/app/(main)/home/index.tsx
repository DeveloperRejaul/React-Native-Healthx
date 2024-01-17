/* eslint-disable react-hooks/rules-of-hooks */
import { Card, Loading } from '@components';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { FlatList, Pressable } from 'react-native';
import { useFetch } from 'src/hooks/useFetch';
import { rh, rw } from 'src/utils/size';

export default function index() {
  const { data, handleGet, isLoading, isSuccess } = useFetch();
  const router = useRouter();
  useEffect(() => {
    handleGet('/products?limit=6');
  }, []);

  if (isLoading) return <Loading />;
  if (isSuccess)
    return (
      <FlatList
        contentContainerStyle={{ paddingHorizontal: rw(3), paddingTop: rh(2) }}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        data={data?.products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/(main)/home/${item.id}`)}>
            <Card
              rating={item.rating}
              price={item.price}
              uri={item.thumbnail}
              title={item.title}
              description={item.description}
            />
          </Pressable>
        )}
      />
    );
}
