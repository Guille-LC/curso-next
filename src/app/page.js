import { Carousel } from "../components/Carousel";
import './styles/title.css'

export default function Home() {
  return (
    <>
      <h1 className="title text-5xl text-center font-extrabold dark:text-black">Catalina Posdeley</h1>
      <Carousel />
      <p>
        <strong className="block w-1/2 mx-auto text-center">
          Quisque ac malesuada lacus. Mauris vel imperdiet elit, et semper velit. Nam aliquet ac mi quis laoree Quisque cursus semper dignissim. Maecenas nec accumsan nisl, a suscipit libero. Sed vel felis molli  egestas tellus vel, viverra est. Donec euismod lectus ac purus sagittis, sed faucibus felis facilisi  Suspendisse potenti. Nunc eget massa neque.
        </strong>
        <strong className="block w-1/2 mx-auto mt-4 text-center">
          Donec id erat vel justo congue interdum. Donec interdum non sapien ac finibus. Suspendisse potenti. Don laoreet varius faucibus. Quisque efficitur felis sit amet euismod vehicula. Ut faucibus porttitor enim, s  scelerisque neque. Etiam iaculis, risus ac malesuada hendrerit, eros arcu pulvinar magna, pharet  venenatis tellus orci eget odio. Integer sed rhoncus dui. Donec ornare ex felis, non convallis dui sodal  id. Vestibulum interdum ex justo, consectetur vehicula felis facilisis sed.
        </strong>
      </p>
    </>
  );
}