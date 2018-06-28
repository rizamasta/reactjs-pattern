import React from 'react';
import DetailContent from '../contents/DetailContent';
const Detail = ({ match }) => (
    <div className='main'>
        <DetailContent idArticle={match.params.idArticle} />
    </div>
);
export default Detail;

