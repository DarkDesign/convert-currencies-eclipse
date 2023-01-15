export class Currency {

    public readonly mainCharCode: string = 'RUB';

    public constructor(
        private readonly _id: string,
        private readonly numCode: string,
        public readonly charCode: string,
        public readonly nominal: number,
        public readonly name: string,
        public readonly value: number,
        public readonly previous: number
    ) {}

    public get unitPrice(): number {
        return +(this.value / this.nominal).toFixed(4);
    }
}