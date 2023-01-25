import { useCallback } from 'react';
import api from '../../services/api';
import { Container, Title, Button } from './styles';

export interface VehicleModel {
    id: string;
    image: string;
    name: string;
    description: string;
    price: string;
    year: string;
    km: number;
}

export interface Props extends VehicleModel {
    setVehicle: React.Dispatch<React.SetStateAction<VehicleModel[]>>;
    populateInputs: () => void;
    children: React.ReactNode;
}

function Vehicle(props: Props) {
    const handleOnClickVehicle = useCallback(() => {
        api.delete("/deleteVehicle?id=" + props.id)
            .then(() => {
                props.setVehicle(oldVehicles => 
                    [...oldVehicles]
                        .filter(v => v.id !== props.id));
            });
    }, []);

    return (
        <Container>
            <img src={props.image} alt="vehicle image" />
            <Title fontSize={20} underline>{props.name}</Title>
            <p>{props.description}</p>
            <h2>{props.price}</h2>
            <div className='flex'>
                <p>{props.year}</p>
                <p>{props.km} km</p>
            </div>
            <div className='flex'>
                <Button className='danger' onClick={handleOnClickVehicle}>Deletar</Button>
                <Button className='primary' onClick={props.populateInputs}>Alterar</Button>
            </div>
        </Container>
    );
}

export default Vehicle;