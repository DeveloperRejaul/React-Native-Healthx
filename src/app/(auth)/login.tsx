/* eslint-disable react-hooks/rules-of-hooks */
import { Button, CheckBox, InputText, Logo } from '@components';
import { Link, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from 'src/constants/colors';
import { useFetch } from 'src/hooks/useFetch';
import { rf, rh, rw } from 'src/utils/size';
import { storage } from 'src/utils/storage';
const OUTLINE_WIDTH = rw(25);
const OUTLINE_RADIUS = OUTLINE_WIDTH / 2;
const LOGO_SIZE = rw(10);
const REMEMBER_TIME = 60 * 24 * 7;
export default function login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);
  const router = useRouter();
  const { handlePost, handleGet, data, isLoading, isSuccess } = useFetch();

  const handleLogin = () => {
    handlePost('/auth/login', {
      username: name,
      password,
      expiresInMins: check ? REMEMBER_TIME : 60,
    });
  };

  useEffect(() => {
    const init = async () => {
      if (isSuccess && data) {
        const token = await storage.getAsyncData({ key: '@authToken' });
        if (!token) await storage.saveAsyncData({ data: data.token, key: '@authToken' });
        router.replace('/(main)/');
      }
    };
    init();
  }, [data, isSuccess]);

  useEffect(() => {
    const init = async () => {
      const token = await storage.getAsyncData({ key: '@authToken' });
      if (token) handleGet('/auth/me', token);
    };
    init();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* header part */}
        <View style={styles.header}>
          <Logo size={LOGO_SIZE} />
          <Button
            text="বাংলা"
            type="outline"
            bodyStyle={{ width: OUTLINE_WIDTH, borderRadius: OUTLINE_RADIUS }}
          />
        </View>

        <View style={styles.login}>
          {/* title part */}
          <View style={styles.titleBody}>
            <Text style={styles.title}>Welcome Back! Demo</Text>
            <Text style={styles.subTitle}>Login to your account</Text>
          </View>

          <InputText value={name} onChangeText={setName} label="Phone or Email" />
          <InputText value={password} onChangeText={setPassword} type="password" label="Password" />

          <View style={styles.checkBoxBody}>
            <View style={styles.checkBox}>
              <CheckBox handleCheck={setCheck} />
              <Text style={styles.checkText}>Remember Me</Text>
            </View>
            <Link style={styles.link} href="/forgot-password">
              Forgot Password
            </Link>
          </View>

          <Button text="Login" onPress={handleLogin} isLoading={isLoading} />

          <View style={styles.regBody}>
            <Text style={styles.regText}>Don't have account? </Text>
            <Link style={styles.link} href="/register">
              Register Now!
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: rw(5),
    paddingVertical: rw(5),
    backgroundColor: colors.textLight0,
    rowGap: rh(2.5),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleBody: {
    rowGap: 2,
    marginTop: rh(2),
  },
  title: {
    fontSize: rf(3),
    fontWeight: '900',
    color: colors.coolGray900,
  },
  subTitle: {
    fontSize: rf(2.1),
    fontWeight: '400',
    color: colors.coolGray500,
  },
  checkBox: {
    flexDirection: 'row',
    columnGap: rw(2),
  },
  checkText: {
    color: colors.coolGray500,
    fontSize: rf(2),
  },
  checkBoxBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    fontWeight: '700',
    color: colors.lightBlue700,
    fontSize: rf(1.8),
  },
  regBody: {
    flexDirection: 'row',
    columnGap: rw(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  regText: {
    fontWeight: '700',
    color: colors.coolGray500,
    fontSize: rf(1.8),
  },
  login: {
    rowGap: rh(3),
  },
});
