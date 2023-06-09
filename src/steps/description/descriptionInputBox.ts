import createInputBox from "../../createInputBox";

export default async function descriptionInputBox(existing_description: string): Promise<string> {
    return await createInputBox({
        title: 'Description',
        placeholder: 'Enter a short description of this commit.',
        prompt: 'Enter a short description of this commit.',
        step: 5,
        value: existing_description
    });
}