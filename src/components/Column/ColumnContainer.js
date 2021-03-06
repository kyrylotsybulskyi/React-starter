import { connect } from 'react-redux';
import Column from './Column'; // <List id="list-2" image="" description="" />

export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);
const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

export default connect(mapStateToProps)(Column); // <List id="" image="" description="" columns=[]/>