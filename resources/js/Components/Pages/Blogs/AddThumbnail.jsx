import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import FileInput from "@/Components/UI/FileInput";
 
const ThumbnailForm = (props) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        file: null
    });

    const submit = (e) => {
        e.preventDefault();
        try {
            post(route("create.blog"));
            onSucess();
        } catch (error) {
            console.log(error);
        }
    };

    const onSucess = () => {
        reset("file");
        props.onClose();
    };

    return (
        <form onSubmit={submit} className="flex flex-col gap-3 ">
            <FileInput
                label="Click to upload Thumbnail"
                name="file"
                onChange={(file)=>{setData("file", file)}}
            />

            <PrimaryButton className="ms-4 w-fit" disabled={processing}>
                Save
            </PrimaryButton>
        </form>
    );
};

export default function AddThumbnail(props) {
    return (
        <Modal
            show={props.show}
            onClose={() => {
                props.setShow(false);
            }}
        >
            <div className="p-4 flex flex-col gap-4">
                <h2 className="text-3xl dark:text-white">Edit Thumbnail</h2>
                <ThumbnailForm
                    onClose={() => {
                        props.setShow(false);
                    }}
                />
            </div>
        </Modal>
    );
}
