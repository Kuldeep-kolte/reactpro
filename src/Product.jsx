import React from 'react';

const Product = (props) => {
    const data = props.data;
    return (
        <div className="products container">
            {
                data.map((val) => {
                    return (
                        <div className='product container'>
                            <img src={val.img} alt="" />
                            <h2>{val.name}</h2>
                        </div>
                    )
                })
            }

        </div>

    );
}

export default Product;
