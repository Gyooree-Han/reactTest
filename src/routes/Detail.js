import {useEffect, useState} from "react";
import axios from 'axios';
import {useParams} from "react-router-dom"
import styled from "styled-components";
// import Movie from '../components/movie.js';


function Detail(){

    const Section = styled.section`
        max-width: 700px;
        width:calc(100% - 40px);
        margin:0 auto;
        
    `;
    const FlexArea = styled.div`
        display:flex;
        justify-content:space-between;
        padding:150px 0 100px;
        
    `
    const ImgCover = styled.div`
        display:block;
        width:200px;
        height:300px;
        background:#ccc;
        color:#000
    `
    const Ul = styled.ul`
        padding-left: 0;
    `

    const List = styled.li`
        list-style:none;
    `

    const Title = styled.h2`
        font-size:36px;
    `;

    const [loading, setloading] = useState(true);
    const [details, setDetails] = useState([])
    const {id} = useParams()
    console.log(id)
    const getMovie  = async() => {
    const response = await axios.get(`https://api.tvmaze.com/shows/${id}`)
        setDetails(response.data);
        setloading(false);
    }
    useEffect(()=>{
        getMovie()
    },[]);
    console.log()

    return <Section>
        <FlexArea>
            <div className="left">
                <div key={details.id}><Title>{details.name}</Title></div>
                <Ul>
                    <List>개봉일: {details.premiered}</List>
                    <List>언어: {details.language}</List>
                    <List>상영시간: {details.runtime}</List>
                </Ul>
            </div>
            <div className="right">
                <ImgCover>없는 이미지</ImgCover>
                {/* { details.image === null ? <ImgCover>없는 이미지</ImgCover> : <img src={details.image.medium}/>} */}
                {/* <ImgCover></ImgCover> */}
            </div>
        </FlexArea>
        <div className="script">
            {details.summary}
        </div>
    </Section>;
}

export default Detail;