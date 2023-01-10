import PropTypes from "prop-types";
import {Link}from "react-router-dom";
import styled from "styled-components";

function Movie({id,name,summary,images}) {

    const ImgCover = styled.div`
        display:block;
        width:210px;
        height:295px;
        background:#ccc;
        color:#000
    `
    const FlexArea = styled.div`
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%;
        max-width:700px;
        margin:0 auto;
        margin-top:20px;
        padding:20px;
        border:1px solid #ddd;
    `
    const TextArea = styled.div`
        width:calc(100% - 280px)
    `
    return <div>
            <FlexArea>
                { images === null ? <ImgCover>없는 이미지</ImgCover> : <img src={images.medium}/>}
                <TextArea>
                    <h2><Link to={`/movie/${id}`}>{name}</Link></h2> 
                    <p>{summary}</p>
                </TextArea>
            </FlexArea>
    </div>;
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    // images:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired
}

export default Movie;