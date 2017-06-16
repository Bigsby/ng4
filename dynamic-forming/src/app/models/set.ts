import { BaseItem } from "./base";

abstract class Property {
    property: string;
    name: string;
}

export class ListColumn extends Property {
}

export class ListProperties {
    columns: ListColumn[];
}

export class FormField extends Property {
    type: FieldType;
    isReadonly: boolean;
    isRequired: boolean;
    containedListType: string;
    listCollection: string;
    constructor() {
        super();
        this.type = FieldType.text;
    }
}

export class FormProperties {
    fields: FormField[];
}

export class Set extends BaseItem {
    id: string;
    name: string;
    list: ListProperties;
    form: FormProperties;
}

export enum FieldType {
    text,
    textarea,
    password,
    number,
    checkbox,
    file,
    containedList
}
