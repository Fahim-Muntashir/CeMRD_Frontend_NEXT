import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../../../components/shared/Container";

const SingleResearch = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/research/singleResearch/${id}`
        );
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="">
      <Container>
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
          <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
            <img
              src={data.researchImg}
              alt=""
              className="w-full h-60 sm:h-96 dark:bg-gray-500"
            />
            <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
              <div className="space-y-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="inline-block text-2xl font-semibold sm:text-3xl"
                >
                  {data.challangeTitle}
                </a>
                <p className="text-xs dark:text-gray-400">
                  By
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline"
                  >
                    Leroy Jenkins
                  </a>
                </p>
              </div>
              <div className="dark:text-gray-100">
                <p>{data.challangeDescription}</p>
              </div>
              <div className="space-y-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="inline-block text-2xl font-semibold sm:text-3xl"
                >
                  {data.responseTitle}
                </a>
              </div>
              <div className="dark:text-gray-100">
                <p>{data.responseDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleResearch;
