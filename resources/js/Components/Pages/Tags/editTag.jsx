import Modal from "@/Components/UI/Modal";
import { TagForm } from "./tagForm";

export default function EditTag({ show, onClose, tag }) {

    return (
        <Modal
            show={show}
            onClose={onClose}
            title="Edit Tag"
        >
            <TagForm
                onClose={onClose}
                tag={tag}
                url={"update.tag"}
            />
        </Modal>
    );
}
