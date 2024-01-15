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
        data={data?.products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            rating={item.rating}
            price={item.price}
            uri={item.thumbnail}
            title={item.category}
            description={item.description}
          />
        )}
      />
    );
}
