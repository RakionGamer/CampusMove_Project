import Navbar from '../components/Navbar';
import Map from '../components/Map';
import LocationSelector from '../components/LocationSelector';
import Confirm from '../components/Confirm';


const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-screen flex-1 z-10`,
  mapContainer: `flex-1 w-full h-full`,
  rideRequestContainer: `h-full w-[400px] ml-[2rem] py-[5rem] absolute top-[50px] left-0 flex flex-col justify-end z-20`,
  rideRequest: `h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll`,
};

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Navbar />
      <div className={style.main}>
        <div className={style.mapContainer}>
          <Map />
        </div>
      </div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
          <LocationSelector />
          <Confirm />
        </div>
      </div>
    </div>
  );
}
