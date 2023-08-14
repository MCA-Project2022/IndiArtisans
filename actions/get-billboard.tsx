import { Billboard as BillboardType } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<BillboardType> => {
  const res = await fetch(`${URL}/${id}`, { next: { revalidate: 0 } });
  return res.json();
}

export default getBillboard;