import React from 'react'
import HomeStores from '../stores/HomeStores'
import { Link } from 'react-router-dom'
import { Image, Stack } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'
import HomeStyle from '../Styles/HomeStyle.css'
export default function Home() {

    const store = HomeStores()

    React.useEffect(()=> {
        store.fetchCoins()
    }, [])
    
    return (
    <div>
            <Stack direction='row'>
    <Image
        boxSize='100px'
        objectFit='cover'
        src='https://static.coingecko.com/s/thumbnail-d5a7c1de76b4bc1332e48227dc1d1582c2c92721b5552aae76664eecb68345c9.png'
        alt='coin'
    />
    <Image
        boxSize='150px'
        objectFit='cover'
        src='https://static.coingecko.com/s/thumbnail-d5a7c1de76b4bc1332e48227dc1d1582c2c92721b5552aae76664eecb68345c9.png'
        alt='coin'
    />
    <Image boxSize='200px' src='https://static.coingecko.com/s/thumbnail-d5a7c1de76b4bc1332e48227dc1d1582c2c92721b5552aae76664eecb68345c9.png' alt='coin' />
    <Image boxSize='250px' src='https://static.coingecko.com/s/coingecko-mascot-coin-60e86e2c09ee426b9533b4b4ec221c823ee0a80d132335b9216751763bf1dd15.png' alt='coin2' />
    </Stack>

    <Container mt={16} px={6} py={4} borderRadius={'lg'} bg={"#fcfcfc"} boxShadow='xl'>
        <Input placeholder='Search crypto' type='text' value={store.query} onChange={store.setQuery} />
        {store.coins.map(coin => {
            return(
                <Container mt={8} boxShadow='md' px={3} py={2} borderRadius={'lg'} bg={"#fcfcfc"} color={"#555263"}>
                    <Stack direction="row" justify={'space-between'} >
                    <Flex align="center" width={'25%'} margin={'5%'}>
                        <img src={coin.image} alt='mon' style={{width: '20%'}}/>
                        <div key={coin.id}>
                            <Link to={`/Detail/${coin.id}`}>
                            <Flex align="center" width={'25%'} margin={'10%'}>
                           <span className='coin-name'>{coin.name}</span> 
                           </Flex>
                            </Link>
                            </div>
                            <div key={coin.price}></div>
                            <span className='prices'>
                            <Flex align="center" width={'25%'} margin={'auto'}>
                                <span className='btc'>{coin.priceBtc} BTC</span>
                                </Flex> 
                                <Flex align="center" width={'25%'} margin={'auto'}>
                                <span className='usd'>{coin.priceUsd} USD</span>
                              </Flex>  
                            </span> 
                           
              
                </Flex>
                </Stack>
                </Container> 


            )
        })}
</Container>

    </div>
    )
}
