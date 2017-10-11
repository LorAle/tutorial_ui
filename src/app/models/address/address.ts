export class Address {
    /**
     * TODO add doc
     */
    constructor(
        public fullAddress?: string
    ) { }
}

export interface AddressPresentation {
    id: number;
    fullAddress: string;
}
