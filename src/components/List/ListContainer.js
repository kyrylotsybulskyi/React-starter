import { connect } from 'react-redux';
import List from './List'; // <List id="list-2" image="" description="" />
import { getColumnsForList } from '../../redux/columnsRedux.js';
import { createActionAddColumn } from '../../redux/columnsRedux.js';

export const mapStateToProps = (state, props) => {
const id = props.match.params.id;
const filteredLists = state.lists.filter(list => list.id ==id);
const listParams = filteredLists[0] || {};

  return {
    ...listParams,
    columns: getColumnsForList(state, id),
  };
};
const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.match.params.id,
    title,
  })),
});
export default connect(mapStateToProps, mapDispatchToProps)(List); // <List id="" image="" description="" columns=[]/>