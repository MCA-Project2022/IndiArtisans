import getBillboard from "@/actions/get-home-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import { Billboard as BillboardType } from "@/types";
import ProductList from "@/components/product-iist";
import Container from "@/components/ui/container";

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  let homeBillboard: BillboardType = await getBillboard();
  if (!homeBillboard) {
    homeBillboard = {
      id: '', label: `${process.env.DEFAULT_HOME_BILLBOARD_LABEL}`,
      imageUrl: `${process.env.DEFAULT_HOME_BILLBOARD_IMAGE_URL}`
    };
  }
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={homeBillboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}

export default HomePage;