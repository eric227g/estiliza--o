import { VehicleModel } from '../../componentes/Vehicle';
import { useState, useEffect, useRef, useCallback } from 'react';
import api from '../../services/api';

function useLogic() {
  const [vehicles, setVehicle] = useState<Array<VehicleModel>>([]);
  const [isAdding, setIsAdding] = useState(true);
  const [isFormShowing, setIsFormShowing] = useState(true);

  const inputId = useRef<HTMLInputElement>(null);
  const inputImage = useRef<HTMLInputElement>(null);
  const inputName = useRef<HTMLInputElement>(null);
  const inputDescription = useRef<HTMLInputElement>(null);
  const inputPrice = useRef<HTMLInputElement>(null);
  const inputYear = useRef<HTMLInputElement>(null);
  const inputKm = useRef<HTMLInputElement>(null);

  const vehicleInputList = {
    description: inputDescription,
    image: inputImage,
    km: inputKm,
    name: inputName,
    price: inputPrice,
    year: inputYear,
    id: inputId,
  };

  const isAddingInputsNotNull = useCallback(() => 
    inputDescription.current !== null &&
    inputImage.current !== null &&
    inputKm.current !== null &&
    inputName.current !== null &&
    inputPrice.current !== null &&
    inputYear.current !== null, []);

  const isUpdatingInputsNotNull = useCallback(() => 
    inputId.current !== null &&
    isAddingInputsNotNull(), []);

  const populateInputs = useCallback((vehicleModel: VehicleModel) => {
    if (isUpdatingInputsNotNull()) {
      setIsAdding(false);
      inputId.current!.value = vehicleModel.id;
      inputDescription.current!.value = vehicleModel.description;
      inputImage.current!.value = vehicleModel.image;
      inputKm.current!.value = vehicleModel.km.toString();
      inputName.current!.value = vehicleModel.name;
      inputPrice.current!.value = vehicleModel.price;
      inputYear.current!.value = vehicleModel.year;
    }
  }, []);

  const resetForm = useCallback(() => {
    if (isAddingInputsNotNull()) {
      setIsAdding(true);
      inputDescription.current!.value = "";
      inputImage.current!.value = "";
      inputKm.current!.value = "";
      inputName.current!.value = "";
      inputPrice.current!.value = "";
      inputYear.current!.value = "";
    }
  }, []);

  const handleOnSubmitVehicle = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isAddingInputsNotNull()) {
      const newVehicle = {
        description: inputDescription.current!.value,
        image: inputImage.current!.value,
        km: Number(inputKm.current!.value),
        name: inputName.current!.value,
        price: inputPrice.current!.value,
        year: inputYear.current!.value,
      };

      if (isAdding) {
        api.post("/postVehicle", newVehicle)
          .then(({ data: { id } }) => {
            setVehicle(oldVehicle => [...oldVehicle, { ...newVehicle, id }]);
            resetForm();
          })
      } else {
        if (inputId.current !== null){
          const id = inputId.current!.value;
          
          api.put("/putVehicle/"+ id, newVehicle)
          .then(() => {
            setVehicle(oldVehicles => oldVehicles
              .map(v => v.id === id ? {...newVehicle, id} : v)
            );
            resetForm();
          });
        }
      }
    }
  }, [isAdding]);

  useEffect(() => {
    api.get("/getVehicles")
      .then(({ data }: { data: VehicleModel[] }) => {
        setVehicle(data);
      });
  }, []);

  const handleOnChangeSwitch = useCallback(() => setIsFormShowing(oldIsFormShowing => !oldIsFormShowing), []);

  return {
    handleOnSubmitVehicle,
    vehicleInputList,
    isAdding,
    vehicles,
    populateInputs,
    setVehicle,
    isFormShowing,
    handleOnChangeSwitch,
  };
}

export default useLogic;