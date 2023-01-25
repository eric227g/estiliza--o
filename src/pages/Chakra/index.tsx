import { Box, Text, Img, Heading} from "@chakra-ui/react";

function ShowPage() {
    const FirstBack = 'https://content2.kawasaki.com/ContentStorage/KMC/Products/8523/fcc32975-c73d-49d9-93a0-553c4dfafd5b.jpg?w=1920';
    const SecondBack = "https://content2.kawasaki.com/ContentStorage/KMC/Products/8507/34772d3c-ecd5-492e-a373-3ad7d6c3a030.jpg?w=1920";
    const BasicDetails = {
        fontWeight: 'bold',
        color: '#463c3c',
    }

    return(
        <>
            <Box
            backgroundImage={FirstBack}
            border='2px solid black'
            backgroundPosition='center'>
                <Img 
                src='https://content2.kawasaki.com/ContentStorage/KMC/Products/8523/da7bb87d-38b4-4cbc-a422-fe3d95b92126.png?w=330'
                objectFit="cover"/>
                <Heading as="h4" sx={BasicDetails} paddingLeft='100px' >2022</Heading>
                <Heading as="h1" sx={BasicDetails} fontSize="30px">NINJA® 1000SX</Heading>
                <Text color="#aaa5a5" paddingLeft="100px">$12,899</Text>
            </Box>
            <hr />
            <Box
            backgroundImage={SecondBack}
            border='2px solid black'
            backgroundPosition="center">
                <Img src="https://content2.kawasaki.com/ContentStorage/KMC/Products/8507/f422b7a7-b967-44a0-9284-b55125ad525c.png?w=330"
                objectFit="cover"/>
                <Heading as="h4" sx={BasicDetails} paddingLeft="100px">2023</Heading>
                <Heading as="h1" sx={BasicDetails} fontSize="30">NINJA® ZX™ -6R</Heading>
                <Text color="#aaa5a5" paddingLeft="70px" >$10,699 - $10,999</Text>
            </Box>
        </>
    )
}

export default ShowPage