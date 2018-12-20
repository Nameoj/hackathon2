

export class Phone {
     id:number;
     brand: string;
     model: string;
     phoneNote:string;
     phoneScore: number;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getBrand(): string {
        return this.brand;
    }

    public setBrand(brand: string): void {
        this.brand = brand;
    }

    public getModel(): string {
        return this.model;
    }

    public setModel(model: string): void {
        this.model = model;
    }

    public getPhoneNote(): string {
        return this.phoneNote;
    }

    public setPhoneNote(phoneNote: string): void {
        this.phoneNote = phoneNote;
    }

    public getPhoneScore(): number {
        return this.phoneScore;
    }

    public setPhoneScore(phoneScore: number): void {
        this.phoneScore = phoneScore;
    }


    constructor(
        id?:number, 
        brand?:string,
        model?:string,
        phoneNote?:string, 
        phoneScore?:number
        ) 
        {
            this.id = id;
            this.brand = brand;
            this.model = model;
            this.phoneNote = phoneNote;
            this.phoneScore = phoneScore;
        }



}