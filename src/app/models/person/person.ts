export class Person {
    constructor(
        public firstName?: string,
        public lastName?: string,
        public dateOfBirth?: Date
    ) {
        this.dateOfBirth = new Date();
    }
}

export interface PersonPresentation {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
}

export interface PersonDetails extends PersonPresentation {
    totalAddresses: number;
}
