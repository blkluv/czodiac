import React from 'react';
import DigitalDance from "../../components/DigitalDance";
import { Box, Text, Link, Heading, Icon, Button, Image } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import './index.scss';
import { Parallax } from 'react-scroll-parallax';

function Nfts() {
    return(<>
      <Box
        as="section" id="nfts" className="section-nfts">
        <Heading>NFTs are very hot right now in cryptospace! Let's add some spice by having NFTs for your Chinese Zodiac Sign!</Heading>
        <Text>
        Before swapping to the next Zodiac Sign, we will be minting 16 Limited edition NFTs for the current Zodiac Sign that will be funded using the development fund from taxes.
        </Text>
        <br/>
        <Heading>The Chinese Zodiacs</Heading>
        <div className="dividing-bar" />
      </Box>
    </>)
}

export default Nfts
