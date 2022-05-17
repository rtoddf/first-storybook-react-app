import PropTypes from 'prop-types';
import './default.scss';

function Card({ image, name, show, social}) {
    console.log('name: ', name)
    return (
        <div className="card">
            <figure>
                <img className="round" src={image} alt={name} />
            </figure>

            <h4>{name}</h4>
            <h5>{show}</h5>

            {social.map((iconInfo, id) => {
                return (
                    <a key={id} href={iconInfo.link} target="_blank">
                        <i className={`${iconInfo.icon} rotate`}></i>
                    </a>
                )
            })}
        </div>
    );
}

Card.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    show: PropTypes.string,
    social: PropTypes.array,
}

export default Card;
