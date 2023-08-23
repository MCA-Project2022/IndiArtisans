import { Billboard as BillboardType } from "@/types";

const getHomeBillboard = async (): Promise<BillboardType> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/homeBillboard`,
    { next: { revalidate: 0 } }
  );
  return res.json();
}

export default getHomeBillboard;