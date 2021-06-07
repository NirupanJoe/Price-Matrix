import context from '../core/context';
import AddButton from './addButton';
import EditButton from './editButton';

const ActionButton = () => (context.state.edit === null
	? AddButton()
	: EditButton());

export default ActionButton;
