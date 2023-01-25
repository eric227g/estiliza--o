import { FirstContainer, SecondContainer, Details, Price, Year } from "./styles";

function Bike() {
    return(
    <>
        <FirstContainer>
            <img src="https://content2.kawasaki.com/ContentStorage/KMC/Products/8523/da7bb87d-38b4-4cbc-a422-fe3d95b92126.png?w=330" 
            alt="ImageBike" />
            <Year>  2022 </Year>
            <Details>NINJA® 1000SX</Details>
            <Price>$12,899</Price>
        </FirstContainer>
        <hr />
        <SecondContainer> 
            <img src="https://content2.kawasaki.com/ContentStorage/KMC/Products/8507/f422b7a7-b967-44a0-9284-b55125ad525c.png?w=330"
            alt="ImageBike"/>
            <Year> 2023 </Year>
            <Details>NINJA® ZX™ -6R</Details>
            <Price>$10,849</Price>
        </SecondContainer>
    </>
    )
}

export default Bike