import React, { useEffect } from 'react';

function withHover(Element) {
    return (props) => {
        let [hover, setHover] = React.useState(false);

        return (
            <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <Element {...props} hover={hover} />
            </div>
        );
    }
}

function withLoader(Element, url) {
    return (props) => {
        let [data, setData] = React.useState();

        useEffect(() => {
            fetch(url)
                .then((response) => response.json())
                .then((data) => setData(data));
        }, []);
    
        if(!data) {
            return <div>Loading...</div>
        }
        return <Element {...props} data={data} />
    }
}

function DogImage(props) {
    return (
        <div>
            {props.hover && <div>Hovering...</div>}
            <img src={props.data.message} {...props} />
        </div>
    );
}

export default withHover(withLoader(DogImage, "https://dog.ceo/api/breeds/image/random"));
