import {STATES} from '../../constants';
import lavaLampNFTs from '../../images/LavaLampNFTs.png';
import timeIsLife from '../../images/TimeIsLife.png';
import superDorvilSite from '../../images/SuperDorvilSite.jpg';

const Data = [
    {
      title: 'Lava Lamp NFTs',
      about: '7979 Lavalamps ERC-721 tokens, where 80% of the funds are reinvested into purchasing metaheros. Token holders vote to buy and sell the heros.',
      skills: ['Solidity, React, Styled-Components, Truffle, Ganache, IPFS, SVG Animations, Figma'],
      image: lavaLampNFTs,
      github: 'https://github.com/superdorvil/lava-lamp-nft',
    }, // lava nft
    {
      title: 'Time is Life',
      about: 'Time Management that allows to track hours worked on your projects. Track task and subtask and utilize the chart feature to see data.',
      skills: ['React-Native, Realm / MongoDB, Figma'],
      image: timeIsLife,
      github: 'https://github.com/superdorvil/TimeIsLife',
    }, // time is life
    {
      title: 'SuperDorvil',
      about: 'This is the website your currently on, 100% designed and programmed by me, hope you enjoy it.',
      skills: ['React, Styled-Components, SVG Animations, Figma'],
      image: superDorvilSite,
      github: 'https://github.com/superdorvil/superdorvil-site',
    },
    [], // lava dao
    [], // eth dao
  ];

export default Data;
