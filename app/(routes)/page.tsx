import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

const HomePage = async () => {
  const billboard = await getBillboard("43cccd06-9621-43d5-8730-637f1df2702d");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
}

export default HomePage;