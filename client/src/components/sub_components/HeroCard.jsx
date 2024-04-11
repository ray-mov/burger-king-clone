import PropTypes from 'prop-types';

const HeroCard = ({img}) => {
  return (
    <div className='shadow-xl hover:scale-105 duration-75 ease-in'>

      <img src={img} alt="" className=' max-w-80  rounded-lg'/>
    </div>
  )
}

HeroCard.propTypes = {
  img: PropTypes.string.isRequired,
};

export default HeroCard