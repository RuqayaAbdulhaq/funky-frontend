import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import TextArea from "@/Components/UI/TextArea";

const AddForm = (props) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        description: "",
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
        reset("title", "description");
        props.onClose();
    };

    return (
        <form onSubmit={submit} className="flex flex-col gap-3 ">
            <div>
                <InputLabel htmlFor="blog-header-title" value="Blog Title" />

                <TextInput
                    id="blog-header-title"
                    type="text"
                    name="title"
                    value={data.title}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData("title", e.target.value)}
                />

                <InputError message={errors.title} className="mt-2" />
            </div>

            <div>
                <InputLabel
                    htmlFor="blog-header-description"
                    value="Blog Description"
                />

                <TextArea
                    id="blog-header-description"
                    name="description"
                    value={data.description}
                    className="mt-1 block w-full"
                    rows={6}
                    isFocused={true}
                    onChange={(e) => setData("description", e.target.value)}
                />

                <InputError message={errors.description} className="mt-2" />
            </div>

            <PrimaryButton className="ms-4 w-fit" disabled={processing}>
                Save
            </PrimaryButton>
        </form>
    );
};

export default function AddBlog(props) {
    const [show, setShow] = useState(false);

    return (
        <>
            <Modal
                show={show}
                onClose={() => {
                    setShow(false);
                }}
            >
                <div className="p-4 flex flex-col gap-4">
                    <h2 class="text-3xl dark:text-white">Add Blog</h2>
                    <AddForm
                        onClose={() => {
                            setShow(false);
                        }}
                    />
                </div>
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
