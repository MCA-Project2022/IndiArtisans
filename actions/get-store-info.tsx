import { Store } from "@/types";

const getStoreInfo = async (): Promise<Store> => {
  let baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;
  const storeId = baseUrl.substring(baseUrl.lastIndexOf('/') + 1);
  const noStoreIdUrl = baseUrl.substring(0, baseUrl.lastIndexOf('/'));
  const res = await fetch(`${noStoreIdUrl}/stores/${storeId}`,
    { next: { revalidate: 0 } }
  );
  console.log(`${noStoreIdUrl}/stores/${storeId}`)
  return res.json();
}

export default getStoreInfo;