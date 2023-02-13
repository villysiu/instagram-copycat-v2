import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import UploadAvatar from './UploadAvatar';
import RemoveAvatar from './RemoveAvatar';
const AvatarDoprdown = ({setPreview}) => {
    return (
        <DropdownButton
            as={ButtonGroup} variant="light" size="sm"
            title="Change Avatar"
            className="ms-2"
        >
            <UploadAvatar setPreview={setPreview} />
            <RemoveAvatar setPreview={setPreview} />
            <Dropdown.Divider />
            <Dropdown.Item>Cancel</Dropdown.Item>
        </DropdownButton>

    )
}
export default AvatarDoprdown