import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, type FunctionComponent } from "react";
import { useMMKVString } from "react-native-mmkv";

const Logout: FunctionComponent = () => {
  const [, setToken] = useMMKVString("id_token");
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      setToken(undefined);
      router.dismissAll();
      router.dismissTo("/login");
    }, [router, setToken]),
  );

  return null;
};

export default Logout;
