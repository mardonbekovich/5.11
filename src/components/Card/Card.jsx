import './Card.scss';

const Card = ({ name }) => {
  return (
    <>
      <div className="card">
        <img
          src="https://ph.canon/media/image/2020/08/26/e0974bdc54d445039d4e3db2301b0c73_E34xx_AS_FR_cl2_blk_en-362x320.png"
          alt=""
        />
        <h1>{name}</h1>
        <p>5⭐ stars</p>
        <button>buy</button>
      </div>
    </>
  );
};

export default Card;
