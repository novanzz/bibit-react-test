import Head from 'next/head';

const BasePage = props => {
    const { children } = props;

    return (
        <>
            <Head>
                <title>Movie DB</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" key="description" />
                <meta name="title" key="Movie DB" content="Movie DB" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            </Head>
            <>
                {children}
            </>
        </>
    )
}

export default BasePage;