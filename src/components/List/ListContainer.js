import { connect } from 'react-redux';
import List from './List'; // <List id="list-2" image="" description="" />
import { getColumnsForList } from '../../redux/columnsRedux.js';
import { createActionAddColumn } from '../../redux/columnsRedux.js';

export const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});
const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});
export default connect(mapStateToProps, mapDispatchToProps)(List); // <List id="" image="" description="" columns=[]/>