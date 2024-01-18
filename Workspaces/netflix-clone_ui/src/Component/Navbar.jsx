import React from 'react';

const Navbar = (x) => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='mynav col-lg-12 col-md-12 col-sm-12'>
                        <h1> {x.name1}  </h1>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Navbar