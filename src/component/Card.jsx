import React from 'react';


export function Card(props) {
    return (
        <div>
            <div className='card'>
                <img src={props.item.imageUrl} alt='Japan Mounten' />
                <div className='card--info'>
                    <span className='location'><i className='fa fa-map-marker'></i>{props.item.location}</span>
                    <span className='google-map'><a href="https://goo.gl/maps/24Kg82bvmycQEDPC7">View on Google Maps</a></span>
                    <h1>Mountent Fuji</h1>
                    <span className='data-start-end'>{props.item.startDate} - {props.item.endDate}</span>
                    <p>{props.item.description}</p>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}


/*
<section className='more-info'>
            <div className='feature'>
                <img src={props.item.imageUrl} alt="Japan Mounten" />
                <div className='content'>
                    <p className='title'>Lightweight</p>
                    <p className='desc'>Mollit mollit consequat sint occaecat ad nostrud adipisicing veniam minim adipisicing velit laborum commodo dolore.</p>
                </div>
            </div>
        </section>
*/