import SEO from "@components/SEO";

const Home: React.FC = () => {
  return (
    <div>
      <SEO
        image="teste.png"
        description="Descrição total"
        title="Titulo da página"
      />
      Hello World
    </div>
  );
};

export default Home;
