import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  const mock = mocks[location];
  return new Promise((resolve, reject) => {
    if (!mock) {
      reject("Not Found");
    }
    resolve(mock);
  });
};

const restaurantTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporary: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  const newResult = camelize(mappedResults);
  return newResult;
};
// restaurantsRequest()
//   .then(restaurantTransform)
//   .then((transformedResult) => {
//     console.log(transformedResult);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
