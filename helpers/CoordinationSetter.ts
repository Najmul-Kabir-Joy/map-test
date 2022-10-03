export const getCoordination = (stateName: string) => {
  if (stateName === "New York") {
    return {
      latitude: 40.6643,
      longitude: -73.9385,
    };
  }
  if (stateName === "California") {
    return {
      latitude: 34.0194,
      longitude: -118.4108,
    };
  }
  if (stateName === "Illinois") {
    return {
      latitude: 41.8376,
      longitude: -87.6818,
    };
  }
  if (stateName === "Texas") {
    return {
      latitude: 29.7805,
      longitude: -95.3863,
    };
  }
  if (stateName === "Arizona") {
    return {
      latitude: 33.5722,
      longitude: -112.088,
    };
  } else {
    return {
      latitude: 34.0194,
      longitude: -118.4108,
    };
  }
};
