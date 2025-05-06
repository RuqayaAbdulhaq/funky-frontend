import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/UI/InputError";
import InputLabel from "@/Components/UI/InputLabel";
import TextInput from "@/Components/UI/TextInput";
import TextArea from "@/Components/UI/TextArea";
import { useEffect } from "react";

export const TagForm = ({ tag, url, options = {}, onClose }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        icon: "",
        id: ""
    });

    useEffect(() => {
        if (tag) {
            setData(tag);
        } else {
            reset("name", "icon");
        }
    }, [tag])

    const submit = (e) => {
        e.preventDefault();
        try {
            post(route(url, options));
            onSucess();
        } catch (error) {
            console.log(error);
        }
    };

    const onSucess = () => {
        reset("name", "icon");
        onClose();
    };

    return (
        <form onSubmit={submit} className="flex flex-col gap-3 ">
            <div>
                <InputLabel htmlFor="tag-name" value="Tag Name" />

                <TextInput
                    id="tag-name"
                    type="text"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData("name", e.target.value)}
                />

                <InputError message={errors.name} className="mt-2" />
            </div>

            <div>
                <InputLabel
                    htmlFor="tag-color"
                    value="Color"
                />

                <TextArea
                    id="tag-color"
                    name="icon"
                    value={data.icon}
                    className="mt-1 block w-full"
                    rows={6}
                    isFocused={false}
                    onChange={(e) => setData("icon", e.target.value)}
                />

                <InputError message={errors.icon} className="mt-2" />
            </div>

            <PrimaryButton className="ms-4 w-fit" disabled={processing}>
                Save
            </PrimaryButton>
        </form>
    );
};
