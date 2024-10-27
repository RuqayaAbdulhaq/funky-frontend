import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/UI/Modal";
import { useEffect } from "react";
import { useForm } from "@inertiajs/react";
import FileInput from "@/Components/UI/FileInput";
 
const ThumbnailForm = (props) => {
    console.log(props);
    const { data, setData, post, processing, errors, reset } = useForm({
        file: null
    });

    useEffect(()=>{
        if(props.id){
            setData("blog_header_id",props.id)
        }else{
            setData("blog_header_id","")
        }
    },[props.id])

    const submit = (e) => {
        e.preventDefault();
        try {
            post(route("attach.thumbnail"));
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
            title="Edit Thumbnail"
        >
            <ThumbnailForm
                id={props.id}
                onClose={() => {
                    props.setShow(false);
                }}
            />
        </Modal>
    );
}
