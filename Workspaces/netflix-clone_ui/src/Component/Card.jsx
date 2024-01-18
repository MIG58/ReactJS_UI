import React from 'react';

const Card = () => {
    return (
        <>
            <div className='row'>
                <div className='mycard col-lg-3 col-md-3 col-sm-12 mt-2 p-5'>
                    <div class="card">
                        <img class="card-img-top" src="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card image cap" height={"300px"} />
                        <div class="card-body">
                            <h5 class="card-title">Card 1</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Click Here</a>
                        </div>
                    </div>
                </div>
                <div className='mycard col-lg-3 col-md-3 col-sm-12 mt-2 p-5'>
                    <div class="card">
                        <img class="card-img-top" src="https://images.pexels.com/photos/57043/pexels-photo-57043.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap" height={"300px"} />
                        <div class="card-body">
                            <h5 class="card-title">Card 2</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Click Here</a>
                        </div>
                    </div>
                </div>
                <div className='mycard col-lg-3 col-md-3 col-sm-12 mt-2 p-5'>
                    <div class="card">
                        <img class="card-img-top" src="https://images.pexels.com/photos/320617/pexels-photo-320617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card image cap" height={"300px"} />
                        <div class="card-body">
                            <h5 class="card-title">Card 3</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Click Here</a>
                        </div>
                    </div>
                </div>

                <div className='mycard col-lg-3 col-md-3 col-sm-12 mt-2 p-5'>
                    <div class="card">
                        <img class="card-img-top" src="https://images.pexels.com/photos/2752777/pexels-photo-2752777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card image cap" height={"300px"} />
                        <div class="card-body">
                            <h5 class="card-title">Card 3</h5>
                            <p class="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Click Here</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Card