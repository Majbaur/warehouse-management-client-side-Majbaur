import React from 'react';

const PhotoGallary = () => {
    return (
        <section>
            <div className="row g-0">
                <div className="col-md-4 col-12">
                    <img src="https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="img-fluid h-100" />
                </div>
                <div className="col-md-8 col-12">
                    <img src="https://cdn.pixabay.com/photo/2017/11/04/19/05/christmas-2918569_960_720.jpg" alt="" className="img-fluid h-100" />
                </div>
                <div className="col-md-8 col-12">
                    <img src="https://cdn.pixabay.com/photo/2016/01/02/01/59/oranges-1117628_960_720.jpg" alt="" className="img-fluid h-100" />
                </div>
                <div className="col-md-4 col-12">
                    <img src="https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="img-fluid h-100" />
                </div>
            </div>
        </section>
    );
};

export default PhotoGallary;