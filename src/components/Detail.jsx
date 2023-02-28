import React from 'react'
import DetailStores from '../stores/DetailStores'
import { useParams } from 'react-router-dom'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Center, Container, Stack, Space } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Avatar, Heading, Box, Text } from '@chakra-ui/react'
import DetailStyles from '../Styles/DetailStyles.css'
import { Divider } from '@chakra-ui/react'

    const data = [
{
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
},
{
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    ];

export default function Detail() {
    const store = DetailStores()
    const params = useParams()
    React.useEffect(()=>{
        store.fetchData(params.id)

    },[]);
    if(!store.data) return <></>;
    return (
    <div>
        <Container>
        <Card maxW='md'>
        <CardHeader>
        <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name={store.data.name} src={store.data.image.large} />
        <Box>
          <Heading size='sm'>{store.data.symbol}</Heading>
          <Text>{store.data.name}</Text>
        </Box>
        </Flex>
        </Flex>
        </CardHeader>
        </Card>
        </Container>
        <Container width={'100%'} height={'100%'}>
        <div className='chart'>
        <AreaChart
        width={500}
        height={400}
        data={store.graphData}
        margin={{
        top: 10,
        right: 50,
        left: 0,
        bottom: 0,
        }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
   </div> 
   </Container>
            
    <Container mt={8} boxShadow='md'
px={6} py={4} borderRadius={'lg'} bg={"#fcfcfc"} color={"#555263"}>
    <Stack direction="column" justify={'space-between'} >

            <div>
            <Flex align="center" width={'25%'} margin={'auto'}>
                <div className='title'>
            <h4> Market Cap Rank</h4>
            </div>
            <span>{store.data.market_cap_rank}</span>
            </Flex>
            </div>
            <Divider orientation='horizontal' />
       <div>
       <Flex align="center" width={'25%'} margin={'auto'}>
        <div className='title'>
        <h4>24h High</h4>
        </div>
        <div>
        <span>{store.data.market_data.high_24h.usd}($)</span>
        </div>
        </Flex>
        </div> 
        <Divider orientation='horizontal' />
        <div>
        <Flex align="center" width={'25%'} margin={'auto'}>
            <div className='title'>
            <h4>24h Low</h4>
            </div>
            <div>
            <span>{store.data.market_data.low_24h.usd}($)</span>
            </div>
            </Flex>
        </div>
        <Divider orientation='horizontal' />
        <div>
        <Flex align="center" width={'25%'} margin={'auto'}>
            <div className='title'>
            <h4>Circulating Supply</h4>
            </div>
            <span>{store.data.market_data.circulating_supply}($)</span>
            </Flex>
        </div>
        <Divider orientation='horizontal' />
        <div>
        <Flex align="center" width={'25%'} margin={'auto'}>
            <div className='title'>
            <h4>Current Price</h4>
            </div>
            <span>{store.data.market_data.current_price.usd}($)</span>
            </Flex>
        </div>
        </Stack>
        </Container>
    </div>

    )
}
