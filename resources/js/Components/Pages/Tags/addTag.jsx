import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/UI/Modal";
import { useState } from "react";
import { TagForm } from "./tagForm";


export default function AddTag(props) {
    const [show, setShow] = useState(false);

    return (
        <>
            <Modal
                show={show}
                onClose={() => {
                    setShow(false);
                }}
                title="Add Tag"
            >
                <TagForm
                    onClose={() => {
                        setShow(false);
                    }}
                    url={"create.tag"}
                />
            </Modal>
            <PrimaryButton
                onClick={() => {
                    setShow(true);
                }}
                className="w-fit"
                children={"Add"}
            />
        </>
    );
}
