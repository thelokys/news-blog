import { GetServerSideProps } from "next";

const Blog = ({ slug }) => {
  return <h1>{slug}</h1>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      slug,
    },
  };
};

export default Blog;
