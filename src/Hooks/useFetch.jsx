import { useEffect, useState } from "react";

const useFetch = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:7000/api/v1/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false)
      });
  }, []);

  return [menu, loading]
};

export default useFetch;
