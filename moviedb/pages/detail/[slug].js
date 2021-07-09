import React from 'react';
import { useRouter } from 'next/router';

import BaseLayout from '../../components/BaseLayout';
import BasePage from '../../components/BasePage';
import BaseApi from '../../libs/api/BaseApi';
import { CardDetail } from '../../components/shared/DataDisplay';

const Detail = (props) => {
    const router = useRouter();
    const { errorStaticProps, detailmovie } = props
    return (
        <BaseLayout
            error={errorStaticProps}>
            <BasePage>
            { !errorStaticProps &&
                <CardDetail
                    img={`${detailmovie.Poster}`}
                    title={`${detailmovie.Title}`}
                >
                    <h1><b>{`${detailmovie.Title}`}</b></h1>
                    <h4>Director : {`${detailmovie.Director}`}</h4>
                    <h4>Actors : {`${detailmovie.Actors}`}</h4>
                    <h4>Country : {`${detailmovie.Country}`}</h4>
                    <h4>Language : {`${detailmovie.Language}`}</h4>
                    <h4>Description : </h4><p>{`${detailmovie.Plot}`}</p>
                    <button onClick={() => router.push('/')}>Back</button>
                </CardDetail>
            }
                
            </BasePage>
        </BaseLayout>
    )
}

export async function getServerSideProps(query) {
    try {
        const { data } = await new BaseApi().getDetail(query.params.slug);
        return {
            props: { detailmovie: data }
        }
    } catch (e) {
        console.error(e)
        return { props: { errorStaticProps: 500 } }
    }
}

export default Detail;