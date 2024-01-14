/* eslint-disable react-hooks/rules-of-hooks */
import { Card, Loading } from '@components';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useFetch } from 'src/hooks/useFetch';
import { rh, rw } from 'src/utils/size';

export default function index() {
  const { data, handleGet, isLoading, isSuccess } = useFetch();

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
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            rating={item.rating.rate}
            price={item.price}
            uri={item.image}
            title={item.title}
            description={item.description}
          />
        )}
      />
    );
}
