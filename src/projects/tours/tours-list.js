import React, { useState, useEffect } from "react";
import "./index.css";

import { useFetch } from "./use-fetch";
import Loading from "./Loading";
import TourCards from "./tour-cards";

const url = "https://course-api.com/react-tours-project";

// const ToursAvailable = () => {
//   document.title = "Tours";
//   const [tours, setTours] = useState([]);
//   let { loading, data: Tours } = useFetch(url);
//   const removeTour = (id) => {
//     Tours = Tours.filter((tour) => tour.id !== id);
//     console.log(Tours);
//     setTours(Tours);
//   };
//   return (
//     <>
//       <main>
//         {loading ? (
//           <Loading />
//         ) : (
//           <TourCards tours={Tours} removeTour={removeTour} />
//         )}
//       </main>
//     </>
//   );
// };

const ToursAvailable = () => {
  document.title = "Tours";
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    console.log(newTours);
    setTours(newTours);
  };
  // return (
  //   <>
  //     <main>
  //       {loading ? (
  //         <Loading />
  //       ) : (
  //         <TourCards tours={tours} removeTour={removeTour} />
  //       )}
  //     </main>
  //   </>
  // );

  if (loading) {
    return (
      <main>
        <loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <TourCards tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default ToursAvailable;
