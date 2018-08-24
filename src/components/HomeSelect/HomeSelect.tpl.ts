interface TemplateData {
    name: string;
}

export const template = (html: Function, data: TemplateData) => {
    return html`
        <p>${data.name}</p>
        `;
}