import  useSWR from 'swr'

export default function App(props){
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data } = useSWR("/api", fetcher, {initialData: props, refreshInterval: 30000})
    return <div>As of {data.updatedAt}, there are {data.taxis} taxis available in Singapore!</div>
}

export async function getStaticProps(){
	const { getTaxiData } = require("../lib/helpers")
	return { props: (await getTaxiData()), revalidate: 1 }
}
