import Featured from 'components/home/featured/Featured';
import NewComers from 'components/home/new-comers/NewComers';

const Home = () => {
  return (
    <div className="page-container">
      <Featured />
      <NewComers />
    </div>
  );
};

export default Home;
