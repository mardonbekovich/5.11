import './Header.scss';
import Card from '../Card/Card';

const Header = () => {
  return (
    <>
      <div className="wrap">
        <div className="box">
          <Card name="printer" />
          <Card name="printeroide" image="https://www.infosemantik.uz/uploads/products/1579611068.jpg"/>
          <Card name="pinterest" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0j8IbUE8yjdDBtyhyQcBV04WfEKixwm1q0Q&s"/>
        </div>
      </div>
    </>
  );
};

export default Header;
