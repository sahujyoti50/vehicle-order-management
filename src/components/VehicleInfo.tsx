import React, { useState, useEffect } from "react";
import { Spacer, View } from "vcc-ui";
import carList from "../../public/api/cars.json";
import { VehicleProps } from "../../model/VehicleProps";
import { VehicleFilter } from "./VehicleFilter";
import { Carousel } from "./carousel/Carousel";
import { Vehicle } from "./vehicle";

export const VehicleInfo: React.FC = () => {
  const [selectedBodyType, setSelectedBodyType] = useState<string>("all");
  const [filteredCars, setFilteredCars] = useState<VehicleProps[]>(carList);

  const uniqueBodyType = (value: string, index: number, self: string[]) => {
    return self.indexOf(value) === index;
  };

  const bodyTypes = carList
    .map((car) => car.bodyType)
    .filter(uniqueBodyType)
    .map((bodyType) => ({ value: bodyType, name: bodyType.toUpperCase() }));

  useEffect(() => {
    const filterCarList = carList.filter(
      (car) => selectedBodyType === "all" || car.bodyType === selectedBodyType
    );
    setFilteredCars(filterCarList);
  }, [selectedBodyType]);

  return (
    <View>
      <VehicleFilter
        options={bodyTypes}
        selectedOption={selectedBodyType}
        selectOption={setSelectedBodyType}
      />
      <Spacer />
      <Carousel>
        {filteredCars.map((car) => (
          <Vehicle
            key={car.id}
            id={car.id}
            bodyType={car.bodyType}
            modelName={car.modelName}
            modelType={car.modelType}
            imageUrl={car.imageUrl}
          />
        ))}
      </Carousel>
    </View>
  );
};
