import Head from "next/head";
import {SearchingCity} from "../ui/SearchingCity";
import {City} from "../ui/City";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Weather</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className='max-w-full lg:max-w-screen-lg mx-auto '>
                <SearchingCity/>
                <City/>
            </div>

        </div>
    )
}


