const Home = () => {
 
  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

export async function getStaticProps() {
  const { responseData, totalPages } = await getNewPosts();
  return {
    props: {
      data: responseData,
      maxPages: totalPages,
    }, // will be passed to the page component as props
    revalidate: 28800,
  };
}

export default Home;
