import { useEffect, useState } from "react";
import { api } from "../lib/api";

interface Item {
  id: string;
  type: string;
  comment: string;
  screenshot?: string;
}

export const CardsFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState<Item[] | null>([]);

  useEffect(() => {
    const getData = async () => {
      await api
        .get(`/feedbacks`)
        .then((res) => {
          setFeedbacks(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  return (
    <>
      {feedbacks?.map((res) => {
        return (
          <div
            className="inline-block flex-col justify-self-auto top-5 m-2"
            key={res.id}
          >
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              {res.screenshot ? (
                <img
                  className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                  src={res.screenshot}
                  alt=""
                />
              ) : null}
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  {res.type}
                </h5>
                <p className="text-gray-700 text-base mb-4">{res.comment}</p>
                <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
