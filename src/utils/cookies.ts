export const CookieManager = {
  set(name: string, value: string, days = 365) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/; samesite=Lax`;
  },

  get(name: string) {
    const prefix = `${name}=`;
    return document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith(prefix))
      ?.slice(prefix.length) ?? null;
  },

  remove(name: string) {
    document.cookie = `${name}=; max-age=0; path=/; samesite=Lax`;
  }
};

export const ConsentCookie = {
  name: "mti_consent",
  isAccepted() {
    return CookieManager.get(this.name) !== null;
  },
  accept() {
    CookieManager.set(this.name, "accepted", 365);
  }
};

export const CartCookie = {
  name: "mti_cart",
  save(cart: unknown) {
    CookieManager.set(this.name, JSON.stringify(cart), 30);
  },
  clear() {
    CookieManager.remove(this.name);
  }
};
