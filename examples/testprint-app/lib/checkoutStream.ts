import { MMKV } from "react-native-mmkv";
import { resolve } from "./gqty";

export type CheckoutStreamOptions = {
  mmkv: MMKV;
  resetDelta?: boolean;
};

export async function* checkoutStream(
  shopId: string,
  { mmkv, resetDelta = false }: CheckoutStreamOptions,
) {
  const cacheKey = `shop#${shopId}/checkouts/delta`;
  const token = mmkv.getString("id_token")?.trim() || null;
  if (!token) {
    throw new Error(`Token not found`);
  }

  if (resetDelta) {
    mmkv.delete(cacheKey);
  }

  while (true) {
    const delta = mmkv.getNumber(cacheKey);
    const checkouts = await fetchCheckouts(token, shopId, delta);

    // Update last delta
    {
      const newDelta = Math.max(
        ...(checkouts?.flatMap(({ updatedAt, items }) => [
          new Date(updatedAt).getTime(),
          ...items.map(({ updatedAt }) => new Date(updatedAt).getTime()),
        ]) ?? []),
        0,
      );

      if (newDelta > 0) {
        mmkv.set(cacheKey, newDelta);
      }
    }

    if (checkouts?.length) {
      yield* checkouts;
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}

async function fetchCheckouts(token: string, shopId: string, delta?: number) {
  const data = await resolve(
    ({ query }) =>
      query
        .node({ id: shopId })
        ?.$on.CompanyShop?.checkouts(
          delta
            ? {
              query: `updatedAt:[${delta} TO *]`,
              limits: 100,
            }
            : {
              limits: 100,
            },
        )
        .nodes.map(({ __typename, id, updatedAt, items, order }) => ({
          __typename,
          id,
          updatedAt,
          items: items().map((item) => ({
            id: item.id,
            updatedAt: item.updatedAt,
            description: item.description,
            quantity: item.quantity,
            remark: item.remark,
            unitPrice: item.unitPrice,
            productVariation: item.productVariation && {},
            addOnProduct: item.addOnProduct && {},
            bundleProduct: item.bundleProduct && {},
          })),
          order: !order ? undefined : {
            id: order.id,
            deviceId: order.deviceId,
          },
        })),
    { extensions: { token } },
  );

  console.log(data);

  return data;
}
