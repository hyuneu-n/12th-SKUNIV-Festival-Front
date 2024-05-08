import { ItemImage, ItemContent, ItemName, ItemDate, ItemLocation } from '../styles/components/LostBox.styled';
import complete from '../assets/images/complete.svg';
import def from '../assets/images/footer/logo.svg';

const ItemBox = ({ name, location, date, img }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
        <ItemBox>
        <ItemImage src={img} alt="Lost Item Image" />
        <ItemContent>
          <ItemName>{name}</ItemName>
          <ItemDate>{date}</ItemDate>
          <ItemLocation>{location}</ItemLocation>
        </ItemContent>
        </ItemBox>
      </div>
    );
  };
  
  export default ItemBox;