import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant, // devuelvo elr estaurant original y le agrego algunas opciones
      address: restaurant.vicinity,
      isCloseTempotarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow:
        restaurant.oppening_hours && restaurant.oppening_hours.open_now,
    };
  });
  return camelize(mappedResults);
};

export const restaurantsRequest = (location) => {
  // Para que el mock imite el consumo de una API tiene que ser asincronico. Por eso se usa Promise
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
restaurantsRequest()
  .then(restaurantsTransform)
  .then()
  .catch((err) => {
    console.log("error");
  });
