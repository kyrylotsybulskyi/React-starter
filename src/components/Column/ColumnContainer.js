import { connect } from 'react-redux';
import Column from './Column'; // <List id="list-2" image="" description="" />
import { getCardsForColumn } from '../../redux/cardsRedux.js';
import { createActionAddCard } from '../../redux/cardsRedux.js';

export const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});
const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});
export default connect(mapStateToProps)(Column); // <List id="" image="" description="" columns=[]/>