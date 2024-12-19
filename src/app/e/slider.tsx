import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Box, useTheme } from '@mui/material';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

// import slide1 from "../../assets/background_patterns/sliderimage-1.webp";
import party1 from '../../assets/background_patterns/party1.jpg';
import party2 from '../../assets/background_patterns/party2.jpg';
import party3 from '../../assets/background_patterns/party3.jpg';

interface ImageItem {
    label: string;
    imgPath: StaticImageData;
}

const MyCollection: ImageItem[] = [
    {
        label: "First Picture",
        imgPath: party1,
    },
    {
        label: "Second Picture",
        imgPath: party2,
    },
    {
        label: "Third Picture",
        imgPath: party3,
    },
];

const ImageSlider: React.FC = () => {
    const theme = useTheme();
    return (
        <Carousel indicators={false}>
            {MyCollection.map((item, i) => (
                <Item key={i} item={item} />
            ))}
        </Carousel>
    );
};

const Item: React.FC<{ item: ImageItem }> = ({ item }) => {
    return (
        <Box sx={{ width: "70%", height: "80vh",margin:'0% auto' }}>
            <Image src={item.imgPath} alt={item.label} height={100} width={100} style={{ width: '100%', height: 'inherit' ,objectFit:'cover',objectPosition:'center'}} />
            
        </Box>
    );
};

export default ImageSlider;