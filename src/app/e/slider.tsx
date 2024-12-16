import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Box, useTheme } from '@mui/material';
import Image from 'next/image';

import slide1 from "../../assets/background_patterns/sliderimage-1.webp";

interface ImageItem {
    label: string;
    imgPath: string;
}

const MyCollection: ImageItem[] = [
    {
        label: "First Picture",
        imgPath: `https://img.freepik.com/free-photo/low-angle-woman-mixing-club-mock-up_23-2148325408.jpg?t=st=1734078028~exp=1734081628~hmac=164f1705da255bd42c902ed3d25180ebe8c8c061544486ff9167e2aec7a09de6&w=826`,
    },
    {
        label: "Second Picture",
        imgPath: "https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://posh-images-originals-production.s3.amazonaws.com/673c9fe9f8e3e1316da0ae88",
    },
    {
        label: "Third Picture",
        imgPath: "https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://posh-images-originals-production.s3.amazonaws.com/674bc59c78497c4b4afa98db",
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
            <Image src={item.imgPath} alt={item.label} style={{ width: '100%', height: 'inherit' ,objectFit:'cover',objectPosition:'center'}} />
            
        </Box>
    );
};

export default ImageSlider;