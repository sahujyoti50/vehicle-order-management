export interface VehicleFilterProps {
  options: {
    value: string;
    name: string;
  }[];
  selectedOption: string;
  selectOption: (value: string) => void;
}
