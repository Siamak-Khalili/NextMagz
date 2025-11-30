export default function setCookiesOnReq(cookieStore) {
  const accessToken = cookieStore.get("accessToken");
  const refreshToken = cookieStore.get("refreshToken");

  const options = {
    headers: {
      Cookie:
        accessToken && refreshToken
          ? `${accessToken.name}=${accessToken.value}; ${refreshToken.name}=${refreshToken.value}`
          : "-",
    },
  };

  return options;
}
