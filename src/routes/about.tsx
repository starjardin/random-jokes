// MyComponent.jsx
import { createEffect, createSignal, onCleanup } from "solid-js";

const MyComponent = () => {
  // State to store the fetched data
  const [data, setData] = createSignal(null);
  // State to store loading status
  const [loading, setLoading] = createSignal(true);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      // Set loading to false once the request is complete
      setLoading(false);
    }
  };

  // Fetch data when the component mounts
  createEffect(fetchData);

  // Cleanup effect to cancel the request if the component unmounts
  createEffect(() => () => {
    console.log("Component unmounted, cleaning up...");
  });

  return (
    <div>
      {loading() ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Data from API:</h2>
          <pre>{JSON.stringify(data(), null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
