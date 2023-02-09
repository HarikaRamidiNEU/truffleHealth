/**
 * Bill Entity.
 */
 export interface IBill {
    id: number,
    patientName: string,
    address: string,
    hospitalName: string,
    dateOfService: Date,
    amount: BigInt,
    createdDate: Date
}
