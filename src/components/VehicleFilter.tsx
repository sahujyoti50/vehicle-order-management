import React from "react";
import { SelectInput } from "vcc-ui";
import { VehicleFilterProps } from "../../model/VehicleFilterProps";

export const VehicleFilter: React.FC<VehicleFilterProps> = ({
  options,
  selectOption,
  selectedOption,
}) => {
  return (
    <SelectInput
      label="Filter body"
      value={selectedOption}
      onChange={(e) => selectOption(e.target.value)}
    >
      <option value="all">All</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </SelectInput>
  );
};
