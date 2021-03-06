import { connect } from 'react-redux';
import List from './List'; // <List id="list-2" image="" description="" />

export const getColumnForList = ({columns}, listId) => columns.filter(column => column.listId == listId);
const mapStateToProps = (state, props) => ({
  columns: getColumnForList(state, props.id),
});

export default connect(mapStateToProps)(List); // <List id="" image="" description="" columns=[]/>