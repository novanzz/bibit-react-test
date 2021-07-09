import React, { useState, useRef, useCallback, useEffect } from "react";
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { debounce } from "debounce";

import BaseLayout from '../components/BaseLayout';
import BasePage from '../components/BasePage';
import { Card, Row, Col, Loading, Nodata } from '../components/shared/DataDisplay';
import { Input } from '../components/shared/InputDisplay';
import Modal from '../components/shared/Modal'
import Error from '../pages/_error';

import { useFetch } from "../actions/search";
import * as actionCreators from "../store/actions/index";

const Home = (props) => {
   const router = useRouter();
   const [query, setQuery] = useState("");
   const [page, setPage] = useState(0);
   const { loading, error, list } = useFetch(query, page);
   const observer = useRef(null);

   const onSearch = debounce((event) => {
      const val = event.target.value
      setQuery(val)
      setPage(1)
   }, 1000)

   const handleObserver = useCallback(node => {
         if (loading) return
         if (observer.current) {
            observer.current.disconnect() 
         }
         observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
               setPage(prev => prev + 1)
            }
         })
         if (node){
            observer.current.observe(node)
         } 
   }, [loading])

   const refDetail = (item) => {
      router.push('/detail/[slug]', `/detail/${item.imdbID}`)
   }

   const listMovies = (data) => {
      return data.map((item, i) =>
         <Col span={6} key={i}>
            <Card
               src={item.Poster == "N/A" ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png" : item.Poster}
               title={item.Title}
               description={`Realease date : ${item.Year}`}
               click={() => refDetail(item)}
               modal={() => props.onActionModal({ isOpen: "block", value: item })}
            />
         </Col>
      )
   }

   return (
      <BaseLayout>
         <BasePage>
            <div className="card-input card-input-container">
               <h2> Movie DB </h2>
               <Input change={(e) => onSearch(e)} />
            </div>

            <Row>
               {listMovies(list)}
            </Row>


            {loading && !error && <Loading />}
            {query !== "" && !loading && <Nodata />}
            {error && <Error error={500} />}
            <div ref={handleObserver} />

            {/* redux implementation */}
            <Modal />

         </BasePage>
      </BaseLayout>

   );
}

export const mapStateToProps = state => {
   return {
      modalAction: state.modalAction.result
   }
};

export const mapDispatchToProps = dispatch => {
   return {
      onActionModal: (result) => dispatch(actionCreators.modalAction(result))
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
